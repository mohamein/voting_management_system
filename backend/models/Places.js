import { Schema, model } from 'mongoose';
const placeSchema = new Schema(
  {
    gobolka: {
      type: String,
      required: true,
    },
    degmada: {
      type: String,
      require: true,
    },
    magacGoobta: {
      type: String,
      required: true,
    },
    LrGoobta: {
      type: String,
      required: true,
    },
    LrGoobtaCodbixinta: {
      type: String,
      required: true,
    },
    muraaqibka: {
      type: String,
      required: true,
    },
  },
  {
    timestamp: true,
  }
);

const Places = model('Places', placeSchema);

export default Places;
