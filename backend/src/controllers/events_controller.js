// controllers/events_controller.js

import events from '../models/events.js';

// Create Event
export const postEvent = async (req, res, next) => {
    try {
        const { name, email, address, contact, userId } = req.body;

        if (!name || !email || !address || !contact || !userId) {
            return res.status(400).json({ msg: "Insufficient Details" });
        }

        const existingEvent = await events.findOne({
            $or: [{ name }, { email }, { address }, { contact }]
        });

        if (existingEvent) {
            return res.status(400).json({ msg: "Event with one of the details already exists" });
        }

        const newEvent = await events.create({
            title: name,
            address,
            email,
            contact,
            createdBy: userId
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
