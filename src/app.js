import { 
  createPost, 
  insertPost, 
  removePostById, 
  selectAllPosts, 
  selectPostById, 
  updatePostById 
} from './repositories/Post.js';
import Fastify from 'fastify'
import 'dotenv/config'

const env = process.env

const app = Fastify()
app.addHook('preHandler', async (request, reply) => {
  console.log(`[${request.method}] ${request.url}`)
})

createPost();

app.post('/post', async function create(request, reply) {
  try {
    const { title, description } = request.body

    if(!title || !description) {
      reply.status(400).send({
        message: 'There must be a title and description in the body of the request'
      })
      return
    }

    const post = {
      title,
      description
    }

    await insertPost(post)

    reply.status(200).send({
      message: 'Post created successfully.'
    })
  } catch (error) {
    throw new Error('Unable to create post.')
  }

})

app.patch('/post/:id', async function update(request, reply) {
  try {
    const { id } = request.params
    const { title, description } = request.query

    if(!id && (!title || !description)) {
      reply.status(400).send({
        message: 'There must be a id in the params and title or description in query params of the request'
      })
      return
    }

    const post = {
      id,
      title,
      description
    }
    
    await updatePostById(post)
    
    reply.status(204).send({
      message: 'Post changed successfully.'
    })

  } catch (error) {
    console.log(error)
    throw new Error('Unable to update post.')
  }
})

app.delete('/post/:id', async function remove(request, reply) {
  try {
    const { id } = request.params
  
    if(!id) {
      reply.status(400).send({
        message: 'There must be a id in the params of the request'
      })
      return
    }
  
    await removePostById(id)
  
    reply.status(200).send({
      message: 'Post removed successfully.'
    }) 
  } catch (error) {
    throw new Error('Unable to rremoved post.')
  }
})

app.get('/post/list-all', async function listAll(_request, reply) {
  try {
    const posts = await selectAllPosts()
  
    reply.status(200).send({
      posts
    })
  } catch (error) {
    throw new Error('Unable to search all posts.')
  }
})

app.get('/post/:id', async function getById(request, reply) {
  try {
    const { id } = request.params

    if(!id) {
      reply.status(400).send({
        message: 'There must be a id in the params of the request'
      })
      return
    }

    const post = await selectPostById(id)
  
    reply.status(200).send({
      post
    })
  } catch (error) {
    throw new Error('Unable to search post.')
  }
})

app
  .listen({
    host: '0.0.0.0',
    port: env.PORT || 3000,
  })
  .then(() => {
    console.log(`🚀 HTTP Server Running in the PORT ${env.PORT}!`)
  })
