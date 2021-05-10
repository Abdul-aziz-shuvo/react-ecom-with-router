import Products from './product/Products'
// import Cart from './product/Cart'
import {useContext} from 'react'
import {Link} from 'react-router-dom'
import {ProductContext} from './context/ProductContext'
export default function Home({match}){
   const {cart} = useContext(ProductContext)
   

  

 return  (
     <div>
         <div className='container'>

             <button type="button" className='my-3'>
                 <Link to='/cart'>
                 Cart item {cart.length}
                 </Link>
             </button>
        
             
          {match.path === '/' &&    <Products /> }
          {/* {match.path === '/cart'   &&  <Cart /> } */}
                 
         </div>
     </div>
 )
}