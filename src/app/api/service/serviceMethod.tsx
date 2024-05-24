import axios from "axios";
import { useRouter } from 'next/navigation'


const postDataLogin = async (body) => {
  try {
    const res = await axios.post('http://localhost:4000/users/login', body,  {
      headers: {
        'api-key': '05f0b227-d216-4ba9-8c98-8be9b5e5c48b',
        'Content-Type': 'application/json'
      }
    });
    localStorage.setItem("tokenAuth", res.data.data.token);
  } catch (error) {
    console.error('Error posting data:', error);
  }
};

const serviceMethod = {
  postDataLogin,
};

export default serviceMethod;