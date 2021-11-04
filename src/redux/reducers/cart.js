const initialState = {
  cartItems: [],
  totalCount: 0,
  totalPrice: 0
}


const cart = (state=initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM" : {
      const oldItems = {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      }


      return {
        ...state,
        cartItems: [...oldItems.cartItems],
        totalCount: oldItems.cartItems.length,
        totalPrice: oldItems.cartItems.reduce((sum, item) => sum + item.price,0)
      }
    }

    case "CLEAR_CART" : 
      return {
        ...state,
        cartItems: [],
        totalCount: 0,
        totalPrice: 0
      }

    case "DELETE_CART_ITEM" :
      const oldItems = {
        ...state,
        cartItems: [...state.cartItems].filter((item) => item.id !== action.payload)
      }

      return {
        ...state,
        cartItems: oldItems.cartItems,
        totalCount: oldItems.cartItems.length,
        totalPrice: oldItems.cartItems.reduce((sum, item) => sum + item.price, 0)
      }  

    default :
      return state
  }
}

export default cart;