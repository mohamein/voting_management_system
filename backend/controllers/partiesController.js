import Parties from '../models/ParteisVote.js';
const createParties = async (req, res) => {
  try {
    const party = await Parties.create(req.body);
    if (!party) {
      res.status(404).json({ message: 'Error creating party' });
    }

    return res.status(201).json({ party: party, message: 'Created party' });
  } catch (err) {
    console.log(`Error at Creating Parties: ${err.message}`);
  }
};

const getParties = async () => {
  try {
    const party = await Parties.find();
    if (!party) {
      res.status(404).json({ message: 'No Party Found' });
    }

    return res.status(200).json({ party: party, message: 'Found party' });
  } catch (err) {
    console.log(`Error at Getting Parties: ${err.message}`);
  }
};
// const viewKulmiye = async (req, res) => {
//   try {
//     const kulmiye = await Parties.find(
//       {},
//       { magalada: 1, goobtaCodka: 1, kulmiye: 1 }
//     );
//     console.log(kulmiye);
//   } catch (err) {
//     console.log(`Error: ${err.message}`);
//   }
// };

// viewKulmiye();
export { createParties, getParties };
