export const initialState = {
  canCollection: [],
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "set_user":
      return {
        ...state,
        user: action.user,
      };
    case "add_to_map":
      return {
        ...state,
        canCollection: [...state.canCollection, action.item],
      };
    case "remove_from_map":
      let newCanCollection = [...state.canCollection];

      const index = state.canCollection.findIndex(
        (mapItem) => mapItem.trashCanId === action.trashCanId
      );
      if (index >= 0) {
        newCanCollection.splice(index, 1);
      } else {
        console.log(index);
      }

      return { ...state, canCollection: newCanCollection };
    default:
      return state;
  }
};

export default reducer;
