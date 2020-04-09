export default function(state = null, action) {
  switch (action.type) {
    case 'FETCH_CARS':
      return action.payload;
    case 'REMOVE_CAR':
      return state.filter((car) => car !== action.payload);
    case 'ADD_CAR':
      const cars = state.slice(0);
      cars.push(action.payload);
      return cars;
    default:
      return state;
  }
}
