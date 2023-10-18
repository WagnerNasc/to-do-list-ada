import { openDb } from '../database.js';
import { randomUUID } from 'node:crypto'

export async function createPost() {
  openDb().then(db => {
    db.exec(`
      CREATE TABLE IF NOT EXISTS post (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )`
    )
  })
}

export async function insertPost(post) {
  const id = randomUUID()
  openDb().then(db => {
    db.run(`
      INSERT INTO post (id, title, description) 
      VALUES ('${id}', '${post.title}', '${post.description}');`
    )
  })
}

export async function updatePostById(post) {
  return openDb().then(db => {
    return db.run(`
      UPDATE post 
      SET title=?, description=?
      WHERE id = '${post.id}'`, 
      [post?.title, post?.description] 
    )
  })
}

export async function removePostById(id) {
  openDb().then(db => {
    db.run(`
      DELETE 
      FROM post 
      WHERE id = '${id}';`,
    )
  })
}

export async function selectAllPosts() {
  return openDb().then(db => {
    return db.all(`
      SELECT id, title, description
      FROM post;`
    )
  })
}

export async function selectPostById(id) {
  return openDb().then(db => {
    return db.all(`
      SELECT id, title, description
      FROM post
      WHERE id=?`, [id]
    )
  })
}
