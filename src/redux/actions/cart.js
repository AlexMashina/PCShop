export const addItem = (item) => ({
  type: "ADD_ITEM",
  payload: item
})

export const clearCart = () => ({
  type: "CLEAR_CART"
})

export const deleteCartItem = (id) => ({
  type: "DELETE_CART_ITEM",
  payload: id
})