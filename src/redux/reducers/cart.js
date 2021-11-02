const initialState = {
  cartItems: [],
  totalCount: 0,
  totalPrice: 0
}

const cart = (state=initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM" : 
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        totalCount: state.totalCount + 1
      }

    default :
      return state
  }
}

export default cart;