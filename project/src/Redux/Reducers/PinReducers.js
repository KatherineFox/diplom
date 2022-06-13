import { PIN_ITEM, UNPIN_ITEM } from "../Constants/PinConstants";

export const pinReducer = (state = { pinnedItems: [] }, action) => {
  switch (action.type) {
    case PIN_ITEM:
      const item = action.payload;
      const existItem = state.pinnedItems.find(
        (x) => x.product === item.product
      );

      if (existItem) {
        return {
          ...state,
          pinnedItems: state.pinnedItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          pinnedItems: [...state.pinnedItems, item],
        };
      }
    case UNPIN_ITEM:
      return {
        ...state,
        pinnedItems: state.pinnedItems.filter(
          (x) => x.product !== action.payload
        ),
      };
    default:
      return state;
  }
};
