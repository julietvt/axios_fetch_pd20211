import axios from 'axios';
import './App.css';

const options = {
  results: 10,
  page: 1,
  seed: 'PD2021-1',
};

const configAxios = {
  onUploadProgress: (event) => console.log(event.loaded),
  onDownloadProgress: (event) => console.log(event.loaded),
  timeout: 2000,
};

function loadUsersAxios({ results, seed, page }) {
  axios
    .get(
      `https://randomuser.me/api/?results=${results}&seed=${seed}&page=${page}`,
      configAxios
    )
    .then((response) => console.log(response.data.results))
    .catch((error) => console.log(error.message));
}

function loadUsers({ results, seed, page }) {
  fetch(
    `https://randomuser.me/api/?results=${results}&seed=${seed}&page=${page}`
  )
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .then(({ results }) => console.dir(results))
    .catch((error) => console.log(error));
}

function App() {
  //loadUsers(options);
  loadUsersAxios(options);
  return <p>Load data from randomuser</p>;
}

export default App;
