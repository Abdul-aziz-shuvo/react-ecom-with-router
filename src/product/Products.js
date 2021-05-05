import axios from 'axios';
import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
export default function Products({addToCart}){


    const [products,setProducts] = useState([]);
  
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
            setProducts(res.data)
            console.log(res.data);
        })
    },[])

  const  cartProduct = (id) => {
        addToCart(id);
  } 
    
    return (
        <div>

                    <div className='row'>
                        {
                            products.map((product) => (
                                <div key={product.id} className="col-4" >
                                <div className='p-3 border mb-3' style={{height: "200px"}}>
                                        <h4> 
                                            <Link to={`product/${product.id}`}>
                                            {product.title}
                                            </Link>
                                        </h4>
                                        <button type="button"className='btn btn-info' onClick={() => cartProduct(product)}>Add to Cart</button>
                                </div>
                                </div>
                            ))
                        }
                    </div>
           
        </div>
    )
}