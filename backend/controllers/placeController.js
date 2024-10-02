import Places from '../models/Places.js';

const createStation = async (req, res) => {
  const {
    gobolka,
    degmada,
    magacGoobta,
    LrGoobta,
    LrGoobtaCodbixinta,
    muraaqibka,
  } = req.body;
  try {
    const resp = await Places.create({
      gobolka,
      degmada,
      magacGoobta,
      LrGoobta,
      LrGoobtaCodbixinta,
      muraaqibka,
    });

    if (!resp) {
      res.status(400).json({ message: 'Lama Sameyn Xaruntaasi' });
    }

    return res
      .status(201)
      .json({ message: 'Waa la Sameeyey Xaruntaasi', xarun: resp });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
    console.log('Error occurred at server:', err);
  }
};

const getStations = async (req, res) => {
  try {
    const stations = await Places.find();
    if (!stations) {
      return res.status(404).json({ message: 'No stations have found' });
    }

    return res
      .status(200)
      .json({ message: 'Successfully Fetched data', stations });
  } catch (err) {
    res.statue(500).json({ message: 'Server error occurred' });
    console.log('Error occurred while fetching data:', err);
  }
};

export { createStation, getStations };
