const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Watch = require('./models/Watch');
const User = require('./models/User');
const watches = require('./data/watches');

// Load env vars
dotenv.config();

// Connect to DB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/watchshop');

// Import data
const importData = async () => {
  try {
    // Clear existing data
    await Watch.deleteMany();
    
    // Import watches
    await Watch.insertMany(watches);
    
    // Create admin user
    await User.create({
      name: 'Admin User',
      email: 'admin@watchshop.com',
      password: 'password123',
      isAdmin: true
    });
    
    console.log('Data imported successfully!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

// Delete data
const destroyData = async () => {
  try {
    await Watch.deleteMany();
    await User.deleteMany();
    
    console.log('Data destroyed successfully!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

// Run command
if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}