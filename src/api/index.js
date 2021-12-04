import config from '../config';
import queryString from 'query-string';

export function loadUsers(options = {}) {
  const defaultOptions = {
    page: 1,
    results: 5,
    seed: config.API_KEY,
    inc: config.INC_PROPERTIES,
  };

  const totalOptions = {
    ...defaultOptions,
    ...options,
  };

  const params = queryString.stringify(totalOptions, { arrayFormat: 'comma' });

  return fetch(`${config.BASE_URL}?${params}`).then((response) =>
    response.json()
  );
}
