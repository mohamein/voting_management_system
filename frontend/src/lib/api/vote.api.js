import ApiManager from '../ApiManage';

export const getAllVotes = async () => {
  try {
    const resp = await ApiManager.get('/parties');
    const result = await resp.data;

    return result;
  } catch (err) {
    console.log('Error occurred while getting votes', err.message);
  }
};
