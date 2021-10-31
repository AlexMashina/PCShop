const initialState = {
  catItems: [],
  isLoaded: false
}

const catalog = ( state = initialState, action ) => {
  switch (action.type) {
    case "SET_ITEMS" : 
      return {
        ...state,
        catItems: action.payload,
        isLoaded: true
      }
    default:
      return state  
  }
}

export default catalog;