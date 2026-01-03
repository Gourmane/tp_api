import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import ListUser from './components/ListUser.jsx'

function App() {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let isMounted = true

    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/users',
        )
        if (isMounted) {
          setUsers(response.data)
          setIsLoading(false)
        }
      } catch (err) {
        if (isMounted) {
          setError('Erreur lors du chargement des utilisateurs.')
          setIsLoading(false)
        }
      }
    }

    fetchUsers()

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <div className="App">
      <h1>Liste des utilisateurs</h1>
      {isLoading && <p>Chargement...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && <ListUser users={users} />}
    </div>
  )
}

export default App
