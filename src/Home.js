import Products from './product/Products'
import Cart from './product/Cart'
import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
export default function Home({match}){
    const [cart,setCart] = useState([]);


    const addToCart = (data) => {
        let newData = cart.findIndex((product) => {
                return product.id === data.id
        });
        if(newData === -1){
            setCart((cartData) => (
                [...cartData, {
                    id: data.id,
                    title : data.title,
                    price : data.price,
                    quantity: 1
                }]
            ))
        }else{
           let existingProduct =  cart.findIndex((product) => (
               product.id === data.id
           ))
           cart[existingProduct].quantity += 1;
           setCart(cart)
        }
    }


    useEffect(() => {
        console.log(match.path);
    },[cart,match])


 return  (
     <div>
         <div className='container'>

             <button type="">
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