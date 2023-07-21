import { useParams, useSearchParams } from "react-router-dom"

export default function Detail(){
   const {id,title,content} = useParams() 
   const [urlSearchParams] = useSearchParams()
   console.log(urlSearchParams.get('name'));
    return (
       <>
         <div>ID: {id}</div>
         <div>标题: {title}</div>
         <div>内容: {content}</div>
       </>
    )
}

