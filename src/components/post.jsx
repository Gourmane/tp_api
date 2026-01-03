
export default function Post({title,body}){
   return(
    <div className="bg-orange-300 border-2 m-4 h-30">
        <h5 className="font-bold py-2 px-2">{title}</h5>
        <p className=" py-2 px-2">{body} </p>
    </div>
   )
}