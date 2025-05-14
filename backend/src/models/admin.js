// models/admin.js
import mongoose from "mongoose";
import bcrypt from "bcrypt";

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  permissions: {
    type: [String],
    default: ['manage_events', 'manage_users', 'view_reports']
  }
}, { timestamps: true });

// Hash password before saving
adminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Password verification
adminSchema.methods.isValidPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

export default mongoose.model('Admin', adminSchema);
