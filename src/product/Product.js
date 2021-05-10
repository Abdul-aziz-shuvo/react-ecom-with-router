import {Link, useParams} from 'react-router-dom'
import {useEffect,useState,useContext} from 'react'
import axios from 'axios'
import {ProductContext} from '../context/ProductContext'
export default function Product(){
    let { id } = useParams();
    const [product,setProduct] = useState([])
    const {cart,addToCart} = useContext(ProductContext)
  
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
            setProduct(res.data)
           
        })
    },[id])

    const  cartProduct = (id) => {
        addToCart(id);
} 
    
 return (
     <div>
        <div className='container'>
            <button>
              <Link to="/cart">
              Cart item : {cart.length}
              </Link>
            </button>
           <div className="row">
             <div className="col-12 mt-5">
                 <img src={product.image} alt=""  className='img-fluid h-25 w-25'/>
                 <h2>{product.title}</h2> <span>{product.price}</span>
                <span><button type="button" className='btn btn-primary' onClick={() => cartProduct(product)}>Add to Cart</button></span> 
             </div>
           </div>
        </div>
     </div>
 )    
}