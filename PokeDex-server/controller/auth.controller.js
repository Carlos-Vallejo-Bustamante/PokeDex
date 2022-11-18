const UserModel = require('../models/User.model');

const SignupController = (req, res, next) => {
    const {
        email,
        password,
        name,
        avatar
    } = req.body;
    UserModel.findOne({ email })
        .then((user) => {
            if (user) {
                throw new Error('Email ya en uso');
            }
            return UserModel.create({
                email, password, name, avatar
            });
        })
        .then((user) => {
            res.status(201).json({
                email: user.email,
                password: user.password,
                name: user.name,
                avatar: user.avatar,
                errorMessage: 'Usuario creado'
            });
        })
        .catch((err) => {
            if (err.message === 'Email ya en uso') {
                res.status(400).json({ errorMessage: err.message });
                return;
            }
            next(err);
        });
};

const LoginController = (req, res, next) => {
    const { email, password } = req.body;
    console.log(email);

    UserModel.findOne({ email })
        .then((user) => {
            console.log(user);
            if (user && user.password == password) {
                res.status(200).json({
                    email: user.email,
                    password: user.password,
                    name: user.name,
                    avatar: user.avatar
                });
            } else {
                res.status(400).json({ errorMessage: 'Email o contraseña no valida.' });
            }
        })
        .catch(next);
};

module.exports = {
    SignupController,
    LoginController
}