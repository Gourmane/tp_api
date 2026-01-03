

export default function UserList({ id , name , email , ville , getPost }) {
    return(
    <div >
      <h3 className="font-bold text-xl">Nom : {name} </h3> 
      <p>Email : {email} </p>
      <p>ville : {ville} </p>
       <button
       className="bg-gray-500 text-white px-4 py-1 my-4  rounded"
       onClick={()=> {getPost(id)}}>posts</button> 
      

       
       
    </div>
    )
}