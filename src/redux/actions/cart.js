export const addItem = (item) => ({
  type: "ADD_ITEM",
  payload: item
})

export const clearCart = () => ({
  type: "CLEAR_CART"
})

export const deleteCartItem = (index) => ({
  type: "DELETE_CART_ITEM",
  payload: index
})