import axios from 'axios';
import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
export default function Products({addToCart}){


    const [products,setProducts] = useState([]);
  
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/').then(res => {
            setProducts(res.data)
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
                    <div key={product.id} className="col-4 " >
                        <div className='p-3 shadow mb-3 mr-auto' style={{height: "300px"}} >
                            
                            <div className="text-center"> 
                                <img src={product.image} alt=""  className='img-fluid w-25 mt-2'/>
                                <h4 className="mt-2"> 
                                    <Link to={`product/${product.id}`}>
                                    {product.title.substring(0,20)}
                                    </Link>
                                </h4>
                                <button type="button"className='btn btn-info d-block mx-auto mt-2' onClick={() => cartProduct(product)}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    )
}