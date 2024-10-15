import Parties from '../models/ParteisVote.js';
import NotificationModel from '../models/Notification.js';
const createParties = async (req, res) => {
  const {
    magalada,
    goobtaCodka,
    kulmiye,
    waddani,
    kaah,
    ucid,
    horseed,
    hilaac,
    barwaaqo,
    rajo,
    taloWadaag,
    shacabka,
    aanAnSixin,
    Ansaxay,
    description,
  } = req.body;

  const file = req.file.fileName;

  console.log(file);
  if (!file) {
    return res.status(400).json({ message: 'Please upload a file!' });
  }
  const imageUrl = `${req.protocol}://${req.get('host')}/images/${file}`;
  try {
    const party = await Parties.create({
      user: req.user.id,
      magalada,
      goobtaCodka,
      lrGoobta,
      kulmiye,
      waddani,
      ucid,
      kaah,
      hilaac,
      horseed,
      barwaaqo,
      rajo,
      shacabka,
      taloWadaag,
      aanAnSixin,
      Ansaxay,
      description,
      imageUri: imageUrl,
    });
    if (!party) {
      res.status(404).json({ message: 'Error creating party' });
    }

    const newNotification = await NotificationModel.create({
      message: `${req.user.username} has added a new vote`,
    });

    req.io.emit('new-notification', newNotification);

    return res.status(201).json({ party: party, message: 'Created party' });
  } catch (err) {
    console.log(`Error at Creating Parties: ${err.message}`);
  }
};

const getParties = async (req, res) => {
  try {
    const party = await Parties.find().populate('user');
    if (!party) {
      res.status(404).json({ message: 'No Party Found' });
    }

    return res.status(200).json({ party: party, message: 'Found party' });
  } catch (err) {
    console.log(`Error at Getting Parties: ${err.message}`);
  }
};

export { createParties, getParties };
