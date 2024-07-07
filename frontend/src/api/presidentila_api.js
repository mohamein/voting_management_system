import axios from 'axios';

export const getAllVotes = async () => {
  try {
    const resp = await axios.get(
      'https://voting-management-system-kxjt.onrender.com/api/v1/votes/'
    );
    console.log(resp);
    return resp;
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
};

export const getKulmiye = async () => {
  try {
    const resp = await axios.get(
      'https://voting-management-system-kxjt.onrender.com/api/v1/votes/kulmiye'
    );
    return resp;
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
};
export const getWaddani = async () => {
  try {
    const resp = await axios.get(
      'https://voting-management-system-kxjt.onrender.com/api/v1/votes/waddani'
    );
    return resp;
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
};
export const getUcid = async () => {
  try {
    const resp = await axios.get(
      'https://voting-management-system-kxjt.onrender.com/api/v1/votes/ucid'
    );
    return resp;
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
};
