import ApiManager from '../ApiManage';

export const createStation = async (form) => {
  try {
    const resp = await ApiManager.post('/places/create', form, {
      withCredentials: true,
    });

    const result = await resp.data;
    console.log(result);
    return result;
  } catch (err) {
    console.log('Error occurred while creating a new station');
  }
};

export const getAllStations = async () => {
  try {
    const resp = await ApiManager.get('/places', {
      withCredentials: true,
    });
    const result = await resp.data;

    console.log(result);
    return result;
  } catch (err) {
    console.log('Error occurred while getting a stations');
  }
};
