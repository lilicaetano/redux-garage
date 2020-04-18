/* eslint-disable no-case-declarations */
export default function(state = [], action) {
  switch (action.type) {
    case 'FETCH_CARS':
      return action.payload;
    case 'REMOVE_CAR':
      const newState = [...state];
      newState.splice(action.payload, 1);
      return newState;
    default:
      return state;
  }
}
