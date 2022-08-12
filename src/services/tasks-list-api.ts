import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-tasks-list.herokuapp.com',
});

async function login(user: string, password: string): Promise<any> {
  try {
    const response = await api.post('/user/login', { name: user, pass: password });
    const { data } = response.data; // data.data

    console.log(data.token);

    if (response.data.ok) {
      localStorage.setItem('jwt_access_token', data.token);
    }
    return response.data;
  } catch (error) {
    const { response }: any = error;
    const { data } = response;

    return data;
  }
}

async function getTasks(token: string): Promise<any> {
  const response = await axios.get(`/task/readTasksByUserId?token=${token}`);
  console.log(response);
  const { data } = response;

  if (data.ok === false) {
    console.log('AXIOS ERROR: ', data.error);
    console.log(data.error);
    throw new Error('Deu ruim em alguma parte');
  }

  return data.data;
}

export { login, getTasks };
export default api;
