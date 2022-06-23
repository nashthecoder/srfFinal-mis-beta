const express = require('express');
// const cors = require('cors')
const mongoose = require('mongoose');

// require('dotenv').config();
const { MONGO_URI } = require('./config');

// Routes
const clinicsessionRoutes = require('./routes/api/clinicsession');
const counselingRoutes = require('./routes/api/counseling');
const registerRoutes = require('./routes/api/register');
const signupRoutes = require('./routes/api/signup');
const schoolsessionRoutes = require('./routes/api/schoolsession');
const class8Routes = require('./routes/api/class8');
const casemanagementRoutes = require('./routes/api/casemanagement');
const usersRoutes = require('./routes/api/users')
const authRoutes = require('./routes/api/auth')
const profileRoutes = require('./routes/api/profile')



const app = express();


//BodyParser Middleware
// app.use(cors());
app.use(express.json({ extended: false }));

//Connect to MongoDB
mongoose.connect(MONGO_URI)
    .then(() =>  console.log('MongoDB is connected!'))
    .catch(err => console.log(err));

//User routes
app.use('/api/clinicsession', clinicsessionRoutes);
app.use('/api/counseling', counselingRoutes);
app.use('/api/register', registerRoutes);
app.use('/api/signup', signupRoutes);
app.use('/api/schoolsession', schoolsessionRoutes);
app.use('/api/class8', class8Routes);
app.use('/api/casemanagement', casemanagementRoutes);
app.use('/api/users', usersRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/profile', profileRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))