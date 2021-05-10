import React,{useState,useEffect} from 'react'

export const ProductContext = React.createContext();


export const ProductProvider = ({children,match}) => {
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
           cart[existingProduct].quantity += 1;
           cart[existingProduct].total_price = cart[existingProduct].quantity * cart[existingProduct].price;
           localStorage.setItem('carts',JSON.stringify(cart))
           setCart(cart)
        }
    }


   


    useEffect(() => {
        localStorage.setItem('carts',JSON.stringify(cart))
        console.log('render');
    },[cart,match])

  return (
   
    <ProductContext.Provider value={{cart,setCart,addToCart}}>
    {children}
    </ProductContext.Provider>
  )
}

