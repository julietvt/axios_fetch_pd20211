import './App.css';

const options = {
  results: 10,
  page: 1,
  seed: 'PD2021-1',
};

function loadUsers({ results, seed, page }) {
  fetch(
    `https://randomuser.me/api/?results=${results}&seed=${seed}&page=${page}`
  )
    .then((response) => response.json())
    .then(({ results }) => console.dir(results))
    .catch((error) => console.log(error));
}

function App() {
  loadUsers(options);
  return <p>Load data from randomuser</p>;
}

export default App;
