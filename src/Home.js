import Products from './product/Products'
import Cart from './product/Cart'
import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
export default function Home({match}){
    const [cart,setCart] = useState(localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts') ) : []);
    
    const addToCart = (data) => {
        let existingProduct = cart.findIndex((product) => {
                return product.id === data.id
        });
        if(existingProduct === -1){
            setCart((cartData) => (
                [...cartData, {
                    id: data.id,
                    title : data.title,
                    price : data.price,
                    total_price : data.price,
                    quantity: 1
                }]
            ))
        }else{
        //    let existingProduct =  cart.findIndex((product) => (
        //        product.id === data.id
        //    ))
           cart[existingProduct].quantity += 1;
           cart[existingProduct].total_price = cart[existingProduct].quantity * cart[existingProduct].price;
           localStorage.setItem('carts',JSON.stringify(cart))
           setCart(cart)
        }
    }


    useEffect(() => {
        localStorage.setItem('carts',JSON.stringify(cart))
    },[cart,match])


 return  (
     <div>
         <div className='container'>

             <button type="" className='my-3'>
                 <Link to='cart'>
                 Cart item {cart.length}
                 </Link>
             </button>
        
             
          {match.path === '/' &&    <Products addToCart={addToCart}/> }
                
            
           {match.path === '/cart'   &&  <Cart cart={cart}/> }
              
            
           
         </div>
     </div>
 )
}