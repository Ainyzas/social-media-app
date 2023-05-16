import axios from 'axios';

const HOST = 'https://social-media-api-ainyzas.vercel.app/api/auth';

export async function signUpRequest(body) {
  try {
    const res = await axios.post(HOST + '/signup', body);
    if (res.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}

export async function signInRequest(body) {
  try {
    const { email, password } = body;

    const res = await axios.post(HOST + '/signin', { email, password });
    return res.data._id;
  } catch (error) {
    return false;
  }
}
