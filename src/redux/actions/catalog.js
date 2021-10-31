import axios from "axios";

export const fetchItems = (labelName) => (dispatch) => {
  axios.get(`/catItems?${labelName !== null ? `labelName=${labelName}` : ""}`).then(({ data }) => {
    dispatch(setItems(data))
  });
}

export const setItems = (items) => ({
  type: "SET_ITEMS",
  payload: items
});

