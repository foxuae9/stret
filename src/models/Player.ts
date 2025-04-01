import mongoose from 'mongoose';

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  position: {
    type: Number,
    required: true,
    index: true, // نستخدم index هنا بدلاً من unique لأننا نريد فهرس فقط
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// تصدير النموذج
export const Player = mongoose.models.Player || mongoose.model('Player', playerSchema);
