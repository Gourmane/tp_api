import { useState } from 'react'
import User from './User.jsx'

function ListUser({ users }) {
  const [activeId, setActiveId] = useState(null)

  const handleChangeActiveId = (id) => {
    setActiveId(id)
  }

  return (
    <div>
      <p>Nombre total d'utilisateurs : {users.length}</p>
      {users.map((user) => (
        <User
          key={user.id}
          user={user}
          activeId={activeId}
          handleChangeActiveId={handleChangeActiveId}
        />
      ))}
    </div>
  )
}

export default ListUser
