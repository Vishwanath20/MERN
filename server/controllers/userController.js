import User from "../models/User.js";

// @desc    Get all users
// @route   GET /api/users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
};

// @desc    Create a user
// @route   POST /api/users
export const createUser = async (req, res) => {
  console.log('req.body:', req.body); // Log the request body for debugging
  try {
    const { name, email, role } = req.body;
    const user = new User({ name, email, role });
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (error) {
    // Check for duplicate email error (code 11000)
    if (error.code === 11000) {
      return res.status(400).json({ message: 'Email already exists.' });
    }
    // General validation error
    res.status(400).json({ message: 'Error creating user. Please check your input.', error });
  }
};

// @desc    Update a user
// @route   PUT /api/users/:id
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, role } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, email, role },
      { new: true, runValidators: true } // {new: true} returns the updated document
    );
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(updatedUser);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: 'Email already exists.' });
    }
    res.status(400).json({ message: 'Error updating user. Please check your input.', error });
  }
};

// @desc    Delete a user
// @route   DELETE /api/users/:id
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error });
  }
};