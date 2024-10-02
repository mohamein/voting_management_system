import ApiManager from '../ApiManage';

export const createVote = async (vote) => {
  try {
    const resp = await ApiManager.post('/parties/createParty', vote, {
      withCredentials: true,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    const result = await resp.data;

    return result;
  } catch (err) {
    console.log('Error occurred while creating a new vote', err.message);
  }
};

export const getAllVotes = async () => {
  try {
    const resp = await ApiManager.get('/parties');
    const result = await resp.data;

    return result;
  } catch (err) {
    console.log('Error occurred while getting votes', err.message);
  }
};
