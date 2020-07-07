import axios from 'axios';

//Define a URL base da origem para consumo do servico
export default axios.create({
  baseURL: 'https://fathomless-chamber-80317.herokuapp.com/',//'http://localhost:8080/',
  headers: {
    'Content-type': 'application/json',
  },
});
