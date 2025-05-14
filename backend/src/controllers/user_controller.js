// controllers/user_controller.js

import User from "../models/user.js";
import bcrypt from 'bcrypt';

export const postSignUp = async (req, res, next) => {
    try {
        const { username, email, password, contact, address } = req.body;

        if (!username || !email || !password || !contact || !address) {
            return res.status(400).json({ msg: "User details missing" });
        }

        const existingUser = await User.findOne({ $or: [{ username }, { email }] });

        if (existingUser) {
            return res.status(409).json({ msg: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
            contact,
            address
        });

        res.status(201).json({ message: "User created successfully", data: newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
};
