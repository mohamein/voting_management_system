import axios from 'axios';
export const createUser = async (data) => {
  try {
    const resp = await axios.post(
      'https://voting-management-system-kxjt.onrender.com/api/v1/users/create',
      data
    );
    if (!resp) {
      console.log('User have not been created');
    }
    return resp;
  } catch (err) {
    console.log(err.message);
  }
};

export const getAllUsers = async () => {
  const resp = await axios.get(
    'https://voting-management-system-kxjt.onrender.com/api/v1/users/'
  );
  if (!resp) {
    console.log('User have not found');
  }
  return resp;
};
