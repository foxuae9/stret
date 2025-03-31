import mongoose from 'mongoose';

export interface IMatchup {
  _id?: mongoose.Types.ObjectId;
  round: number;
  opponent: mongoose.Types.ObjectId;
  winner: mongoose.Types.ObjectId | null;
}

const matchSchema = new mongoose.Schema({
  player1: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player',
    required: true,
  },
  player2: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player',
    required: true,
  },
  round: {
    type: Number,
    required: true,
  },
  winner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player',
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Match = mongoose.models.Match || mongoose.model('Match', matchSchema);
