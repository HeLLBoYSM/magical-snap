import React from "react";

const initialState ={
    products:[{
        name:'Picture',
        price:50+'E',
        description:'Importalizes memories into a painting',
        image:'../images/tablou.magical.snap.png',
        category:'Paints'
    },{
        name:'T-Shirt',
        price:40 + "E",
        description:'Take the memories with you',
        image:'../images/tricou.magical.snap.png',
        category:"clothes"
    } , {
        name:'Lamp',
        price:100 + "E",
        description:'Personalizează-ți lampa și alege din diferite baze de lumină pentru a crea atmosfera perfectă pentru casa ta.',
        image:'../images/lamp.magical-snap.png',
        category:"lamps"

    }]
    // , cart:[]
};

const reducer = (state, action) => {

    // switch (action.code) {
    //     case 'ADD-PRODUCT-TO-CART':
    //         return ({ ...state, cart: [...state.cart, action.payload] })
    //     case 'REMOVE-PRODUCT-FROM-CART': // we should remove the product
    //         return ({
    //             ...state, cart: state.cart.filter((product, index) => {
    //                 if (action.payload !== index) {
    //                     return true
    //                 }
    //                 else {
    //                     return false
    //                 }
    //         })})
            
    //     default:
    //         return state
    // }
}

const Context = React.createContext()
const Provider = (props) => {
    const [state, dispatch] = React.useReducer(reducer, initialState)
    return(
     <Context.Provider value={{state, dispatch}}> 
    {props.children}
    </Context.Provider>
    );
};
export{Provider, Context, reducer}