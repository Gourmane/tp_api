import { useState } from 'react'
import axios from 'axios'

function User({ user, activeId, handleChangeActiveId }) {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleShowPosts = async () => {
    handleChangeActiveId(user.id)

    if (posts.length > 0 || isLoading) {
      return
    }

    try {
      setIsLoading(true)
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
      )
      const userPosts = response.data.filter(
        (post) => post.userId === user.id,
      )
      setPosts(userPosts)
    } catch (err) {
      setError('Erreur lors du chargement des posts.')
    } finally {
      setIsLoading(false)
    }
  }

  const isActive = activeId === user.id

  return (
    <div className="child">
      <h3>{user.name}</h3>
      <p>Username : {user.username}</p>
      <p>Email : {user.email}</p>
      <p>
        Adresse : {user.address.city}, {user.address.street}
      </p>
      <button type="button" onClick={handleShowPosts}>
        details posts
      </button>

      {isActive && (
        <div>
          {isLoading && <p>Chargement des posts...</p>}
          {error && <p>{error}</p>}
          {!isLoading && !error && (
            <div>
              <p>Nombre de posts : {posts.length}</p>
              {posts.map((post) => (
                <div key={post.id} className="post">
                  <h4>{post.title}</h4>
                  <p>{post.body}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default User
