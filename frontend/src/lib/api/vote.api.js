import ApiManager from '../ApiManage';

export const getAllVotes = async () => {
  try {
    const resp = await ApiManager.get('/parties/', {
      withCredentials: true,
    });
    const result = await resp.data;
    console.log(result);
    return result;
  } catch (err) {
    console.log('Error occurred while getting votes', err.message);
  }
};
