import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import UserList from './components/userList.jsx'
import Post from './components/post.jsx'
import './index.css'

function App() {

  const [users , setUsers ] = useState([])
  const [posts , setPosts] = useState([])
  //const [show , setShow] = useState(false)
  const [ident , setIdent] = useState('')

useEffect( ()=> {
  const getUsers = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    setUsers(response.data);
  }
  getUsers();
},[])

const getPost = (id)=>{
  const postsApi = async ()=>{
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    setPosts(response.data)
  }
  postsApi()
  //setShow(true)
  setIdent(id)
}


const postList = posts.map(p=> <Post key={p.id} title={p.title} body={p.body} nb={posts.length} />)

const usersList = users.map(u=>{
  return(
  <div className=' w-200 bg-green-200 border-2 mb-2 p-4'>
    <UserList key={u.id} id={u.id} name={u.name} email={u.email} ville={u.address.city} getPost={getPost} />
    {u.id == ident ? <div>
                      <h1 className='text-lime-600 font-bold'>nombre de post {posts.length} </h1>
                      <div>{postList} </div>
                       </div> 
                    : null}
    </div>
  )
  }
)

  return (
    < div className='bg-green-500 '>
    <h1 className='font-bold text-2xl py-4 pl-2'>Nombre de utilisateur {users.length}</h1>
    <div className='min-h-scren flex items-center justify-center flex-col mt-4'>
      {usersList}
    </div>
    
    </div>
  )

}

export default App
