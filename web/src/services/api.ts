import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.nal.usda.gov/fdc/v1/foods/list?api_key=pQLfoKnOXgl5ni4aGNpSQiq4SjOHPn6faTcs59jT&query',
});

export default api;