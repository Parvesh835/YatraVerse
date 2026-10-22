const jwt = require('jsonwebtoken');
const User = require('../models/UserSchema');
const bcrypt = require('bcrypt');

const signup = async (req, res) => {
    try {
        const { name, age, email, password, role } = req.body;

        // Check if all fields are fiilled or not
        if (!name || !age || !email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Please enter all fields'
            })
        }

            // check if user already exist 
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({
                success: false,
                message: 'User is already registed with this email, Please enter a new email or login'
                })
            }

            // hash the password
            const hashedPassword = await bcrypt.hash(password, 10);

            // create a new user

            const newUser = new User({
                name, 
                age,
                password: hashedPassword,
                email,
                role
            })

            // save the user to database
        await newUser.save();
        
        return res.status(201).json({
                success: true,
                message: 'user sigup successfully',
                newUser: {
                  name,
                  age,
                    email,
                  password: hashedPassword
                }
            })

        
    } catch (error) {
        console.error('Signup failed:', error);
        return res.status(500).json({
                success: false,
                message: 'Internal Server error'
            })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Please enter all fields'
            });
        }

        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(400).json({
                success: false,
                message: 'User is not registed, Please signup first'
            });
        }

        const equalPass = await bcrypt.compare(password, existingUser.password);

        if (!equalPass) {
            return res.status(400).json({
                success: false,
                message: 'Inccorect password '
            });
        }

        const payload = {
            email: existingUser.email,
            name: existingUser.name,
            age: existingUser.age,
            role: existingUser.role,
            id: existingUser._id
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '2d' });

        const options = {
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
            httpOnly: true
        };


        return res.cookie('Cookie', token, options).status(200).json({
            success: true,
            message: 'User loggedIn Successfully',
            token,
            user: existingUser
        });

    } catch (error) {
        console.error('Login failed:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal Server error'
        });
    }
};

module.exports = { signup, login }