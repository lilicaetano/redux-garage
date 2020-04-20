const BASE_URL = 'https://api-garage-lili.herokuapp.com/garage';

export function fetchCars(garageId) {
  const url = `${BASE_URL}/${garageId}`;
  const promise = fetch(url)
    .then(r => r.json())
    .then((garage) => {
      return garage.cars || [];
    })
    .catch((err) => {
      console.log(err);
      return [];
    });

  return {
    type: 'FETCH_CARS',
    payload: promise // Will be resolved by redux-promise
  };
}

export function removeCar(history, garageId, carId) {
  const url = `${BASE_URL}/${garageId}/car/${carId}`;
  fetch(url, { method: 'DELETE' })
    .then(r => r.json())
    .then(() => history.push(`/garage/${garageId}/cars`));

  return {
    type: 'REMOVE_CAR',
    payload: carId
  };
}

export function addCar(history, garageId, car) {
  const url = `${BASE_URL}/${garageId}/car`;
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(car)
  })
    .then(r => r.json())
    .then(() => history.push(`/garage/${garageId}/cars`));

  return {
    type: 'ADD_CAR',
    payload: promise // Will be resolved by redux-promise
  };
}


export function fetchGarages() {
  const url = `${BASE_URL}`;
  const promise = fetch(url)
    .then(r => r.json());

  return {
    type: 'FETCH_GARAGES',
    payload: promise // Will be resolved by redux-promise
  };
}

export function removeGarage(history, garageId) {
  const url = `${BASE_URL}/${garageId}`;
  fetch(url, { method: 'DELETE' })
    .then(r => r.json())
    .then(() => history.push(""));

  return {
    type: 'REMOVE_GARAGE',
    payload: garageId
  };
}

export function addGarage(history, garage) {
  const url = `${BASE_URL}`;
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(garage)
  })
    .then(r => r.json())
    .then((json) => {
      history.push("");
      return json;
    });

  return {
    type: 'ADD_GARAGE',
    payload: promise // Will be resolved by redux-promise
  };
}
