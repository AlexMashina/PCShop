import axios from "axios";

const setLoading = (value) => ({
  type: "SET_LOADING",
  payload: value
})

export const fetchItems = (labelName) => (dispatch) => {
  dispatch(setLoading(false));
  axios.get(`/catItems?${labelName !== null ? `labelName=${labelName}` : ""}`).then(({ data }) => {
    dispatch(setItems(data))
  });
}

export const setItems = (items) => ({
  type: "SET_ITEMS",
  payload: items
});

