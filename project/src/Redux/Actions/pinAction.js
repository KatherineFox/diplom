import axios from "axios";
import { PIN_ITEM, UNPIN_ITEM } from "../Constants/PinConstants";

export const pinItem = (id) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);

  dispatch({
    type: PIN_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      description: data.description,
      rating: data.rating,
      price: data.price,
    },
  });

  localStorage.setItem(
    "pinnedItems",
    JSON.stringify(getState().pinningItem.pinnedItems)
  );
};
export const removePin = (id) => (dispatch, getState) => {
  dispatch({
    type: UNPIN_ITEM,
    payload: id,
  });

  localStorage.setItem(
    "pinnedItems",
    JSON.stringify(getState().pinningItem.pinnedItems)
  );
};
