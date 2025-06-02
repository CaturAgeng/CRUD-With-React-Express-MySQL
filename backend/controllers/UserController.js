import User from '../models/UserModel.js';

export const getUsers = async (req, res) => {
    try {
        const response = await User.findAll();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error.message);
    }
}