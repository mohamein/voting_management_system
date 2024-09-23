import { Schema, model } from 'mongoose';

const presidentialSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
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
    imageUri: {
      type: String,
    },
    Ansaxay: {
      type: String,
      required: true,
    },
    aanAnSixin: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Presidential = model('Presidential', presidentialSchema);

export default Presidential;
