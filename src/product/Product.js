import {useParams} from 'react-router-dom'
import {useEffect,useState} from 'react'
import axios from 'axios'
export default function Product(){
    let { id } = useParams();
    const [product,setProduct] = useState([])
  
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
            setProduct(res.data)
            console.log(res.data);
        })
    },[id])
    
 return (
     <div>
        <div className='container'>
           <div className="row">
             <div className="col-12 mt-5">
                 <img src={product.image} alt=""  className='img-fluid h-25 w-25'/>
                 <h2>{product.title}</h2> <span>{product.price}</span>
                <span><button type="button" className='btn btn-primary'>Add to Cart</button></span> 
             </div>
           </div>
        </div>
     </div>
 )    
}