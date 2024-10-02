import { Schema, model } from 'mongoose';

const partiesSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    magalada: {
      type: String,
      required: true,
    },
    goobtaCodka: {
      type: String,
      required: true,
    },
    kulmiye: {
      type: String,
      required: true,
    },
    waddani: {
      type: String,
      required: true,
    },
    ucid: {
      type: String,
      required: true,
    },
    kaah: {
      type: String,
      required: true,
    },
    hilaac: {
      type: String,
      required: true,
    },
    horseed: {
      type: String,
      required: true,
    },
    rajo: {
      type: String,
      required: true,
    },
    barwaaqo: {
      type: String,
      required: true,
    },
    taloWadaag: {
      type: String,
      required: true,
    },
    shacabka: {
      type: String,
      required: true,
    },
    Ansaxay: {
      type: String,
      required: true,
    },
    aanAnSixin: {
      type: String,
      required: true,
    },
    imageUri: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Parties = model('Parties', partiesSchema);

export default Parties;
