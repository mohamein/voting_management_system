import axios from 'axios';

export const getAllVotes = async () => {
  try {
    const resp = await axios.get('http://localhost:5000/api/v1/votes/');
    console.log(resp);
    return resp;
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
};
