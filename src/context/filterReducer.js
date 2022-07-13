const filterReducer = (state, action) => {
  switch (action.type) {
    case "RATING":
      return {
        ...state,
        rating: action.payload,
      };
    case "CATEGORY":
      return {
        ...state,
        categories: state.categories.includes(action.payload)
          ? state.categories.filter((item) => item !== action.payload)
          : [...state.categories, action.payload],
      };
    case "CLEAR":
      return {
        ...state,
        rating: "",
        categories: [],
      };
    default:
      return state;
  }
};

function ratingSortedList(rating, cardData) {
  const updatedList = [...cardData].filter(
    (item) => Number(item.rating.rate) >= rating
  );
  return updatedList;
}

function categorySortedList(category, cardData) {
  const updatedList = [...cardData].filter((item) =>
    category.includes(item.category)
  );
  return updatedList;
}
export { filterReducer, ratingSortedList, categorySortedList };
