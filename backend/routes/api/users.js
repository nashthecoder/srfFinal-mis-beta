const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator')

//Bring in User model 

const User = '../../models/User.js'

//@route    POST api/users
//@desc     Resgister user
//@access   Public

router.post('/', 
[
    check('name', 'Name is required')
    .not()
    .isEmpty(),
    check('email','Please include a valid email').isEmail(),
    check(
        'password',
        'Please enter a password with 8 or more characters').isLength({ min: 8})
],
async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

        const { name, email, password } = req.body;

        try{
            //See if user exists
            let user = await User.findOne({ email});

            if(user) {
                res.status(400).json({ errors: [{ msg: 'User already exists' }]});
            }

            //Encrypt the password


            //Return jsonwebtoken
            res.send('User route');
        }catch(err){
            console.error(err.message);
            res.status(500).send('Server error');

        }

    
});

module.exports = router;