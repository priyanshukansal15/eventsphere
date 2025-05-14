// controllers/admin_controller.js

import Admin from '../models/admin.js';
import User from '../models/user.js';

// Create Event
export const postEvent = async (req, res, next) => {
    try {
        const { name, email, address, contact, userId } = req.body;

        if (!name || !email || !address || !contact || !userId) {
            return res.status(400).json({ msg: "Insufficient Details" });
        }

        const existingEvent = await Admin.findOne({
            $or: [{ name }, { email }, { address }, { contact }]
        });

        if (existingEvent) {
            return res.status(400).json({ msg: "Event with one of the details already exists" });
        }

        const newEvent = await Admin.create({
            ownerId: userId,
            name,
            email,
            address,
            contact
        });

        res.status(201).json({
            message: "Event successfully added",
            data: newEvent
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
};

// Delete Event
export const deleteEvent = async (req, res, next) => {
    try {
        const { eventId } = req.params;

        if (!eventId) {
            return res.status(400).json({ msg: "Event ID is required" });
        }

        const deletedEvent = await Admin.findByIdAndDelete(eventId);

        if (!deletedEvent) {
            return res.status(404).json({ msg: "Event not found" });
        }

        res.status(200).json({
            message: "Event deleted successfully",
            data: deletedEvent
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
};

// Update Event
export const editEvent = async (req, res, next) => {
    try {
        const { eventId } = req.params;
        const { name, email, address, contact } = req.body;

        if (!eventId) {
            return res.status(400).json({ msg: "Event ID is required" });
        }

        if (!name && !email && !address && !contact) {
            return res.status(400).json({ msg: "No update fields provided" });
        }

        const updatedEvent = await Admin.findByIdAndUpdate(
            eventId,
            { $set: { name, email, address, contact } },
            { new: true, runValidators: true }
        );

        if (!updatedEvent) {
            return res.status(404).json({ msg: "Event not found" });
        }

        res.status(200).json({
            message: "Event updated successfully",
            data: updatedEvent
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
};

// Add User
export const addUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ msg: "Incomplete user details" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ msg: "User already exists" });
        }

        const newUser = await User.create({ name, email, password });

        res.status(201).json({
            message: "User added successfully",
            data: newUser
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
};

// Delete User
export const deleteUser = async (req, res, next) => {
    try {
        const { userId } = req.params;

        if (!userId) {
            return res.status(400).json({ msg: "User ID is required" });
        }

        const deletedUser = await User.findByIdAndDelete(userId);

        if (!deletedUser) {
            return res.status(404).json({ msg: "User not found" });
        }

        res.status(200).json({
            message: "User deleted successfully",
            data: deletedUser
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
};
