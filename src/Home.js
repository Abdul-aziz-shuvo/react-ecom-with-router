import Products from './product/Products'
import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
export default function Home(){
    const [cart,setCart] = useState([]);


    const addToCart = (data) => {
        let newData = cart.findIndex((product) => {
                return product.id == data.id
        });
        if(newData == -1){
            setCart((cartData) => (
                [...cartData, {
                    id: data.id,
                    title : data.title,
                    quantity: 1
                }]
            ))
        }else{
           let existingProduct =  cart.findIndex((product) => (
               product.id == data.id
           ))
           cart[existingProduct].quantity += 1;
           setCart(cart)
        }
    }


    useEffect(() => {
        console.log(cart);
    },[cart])


 return  (
     <div>
         <div className='container'>

             <button type="">
                 <Link to='cart'>
                 Cart item {cart.length}
                 </Link>
             </button>
            <Products addToCart={addToCart}/>
         </div>
     </div>
 )
}