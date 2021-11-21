const { admin } = require('../models');
const Joi = require('joi');
const jwt = require('../middlewares/jwt')
const bcrypt = require('../middlewares/bcrypt')

module.exports = {
    register: async (req, res) => {
        const body = req.body;
        try {
            const schema = Joi.object({
                username: Joi.string().required(),
                email: Joi.string().required(),
                password: Joi.string().min(6).max(12).required(),
            })
            const check = schema.validate({
                username : body.username,
                email : body.email,
                password : body.password
            }, { abortEarly : false });

            if (check.error) {
                return res.status(400).json({
                    status : "failed",
                    message : "Bad Request",
                    errors : check.error["details"].map(({ message }) => message )
                })
            }
            const checkemail = await admin.findOne({
                where: {
                    email: body.email
                }
            })

            if(checkemail) {
                return res.status(400).json({
                    status: "failed",
                    message: "email already used, please use another email, or login",
                });
            }
            const hashedPassword = bcrypt.encrypt(body.password)

            const user = await admin.create({
                username : body.username,
                email : body.email,
                password : hashedPassword
            })

            const payload = {
                role : user.dataValues.role,
                email : user.dataValues.email,
                id : user.dataValues.id
            }

            const token = jwt.generateToken(payload)

            return res.status(200).json({
                status: "success",
                message: "Registered successfully",
                token: token,
            });
        } catch (error) {
            return res.status(500).json({
                status: 'failed',
                message: error.message || 'Internal Server Error',
            });
        }
    },
    login: async (req, res) =>{
        const body = req.body;
        try {
            const schema = Joi.object({
                email : Joi.string().required(),
                password : Joi.string().min(6).max(12).required()
            })

            const check = schema.validate({ ...body }, { abortEarly : false });

            if (check.error) {
                return res.status(400).json({
                    status : "failed",
                    message : "Bad Request"
                })
            }

            const checkemail = await admin.findOne({
                where: {
                    email: body.email
                }
            })

            if(!checkemail) {
                return res.status(400).json({
                    status: "failed",
                    message: "Invalid email",
                });
            }

            const checkPassword = bcrypt.comparePass(body.password, checkemail.dataValues.password)

            if (!checkPassword) {
                return res.status(401).json({
                    status: "failed",
                    message: "Invalid Password"
                })
            }

            const payload = {
                role : checkemail.dataValues.role,
                email : checkemail.dataValues.email,
                id : checkemail.dataValues.id
            }

            const token = jwt.generateToken(payload)

            return res.status(200).json({
                        status: "success",
                        message: "Login successfully",
                        token: token,
                    });

        } catch (error) {
            return res.status(500).json({
                status: 'failed',
                message: error.message || 'Internal Server Error',
            });
        }
    }
}