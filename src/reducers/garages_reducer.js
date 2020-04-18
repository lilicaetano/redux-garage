/* eslint-disable no-underscore-dangle */
export default function(state = [], action) {
  switch (action.type) {
    case 'FETCH_GARAGES':
      return action.payload;
    case 'REMOVE_GARAGE':
      return state.filter(garage => garage._id !== action.payload);
    case 'ADD_GARAGE':
      return [...state, action.payload];
    default:
      return state;
  }
}
