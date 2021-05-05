import {useParams} from 'react-router-dom'
import {useEffect,useState} from 'react'
import axios from 'axios'
export default function Product(){
    let { id } = useParams();
    const [product,setProduct] = useState([])
  
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => {
            setProduct(res.data)
            console.log(res.data);
        })
    },[id])
    
 return (
     <div>
        <div className='container'>
        <h2>{product.title}</h2>
         <p>{product.body}</p>
        </div>
     </div>
 )    
}