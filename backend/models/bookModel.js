import mongoose from 'mongoose';

const todoSchema = mongoose.Schema(
  {
    todo: {
      type: String,
      required: true,
    },
    assigned: {
      type: String,
      required: true,
    },
    publishYear: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Book = mongoose.model('Book', todoSchema);
