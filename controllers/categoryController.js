const { categories } = require('../models');
const Joi = require('joi');

module.exports = {
    createCategory: async (req, res) => {
        const body = req.body

        try{
            const schema = Joi.object({
                name: Joi.string().required()
            });

            const check = schema.validate({
                name: body.name
            });

            if (check.error) {
                return res.status(400).json({
                    status: 'failed',
                    message: 'Bad Request',
                    errors: check.error['details'].map(
                        ({ message }) => message
                    ), 
                })
            };

            const createCategory = await categories.create({
                name: body.name
            })

            if (!createCategory) {
                return res.status(400).json({
                    status: 'failed',
                    message: 'failed to create category data'
                })
            }
            return res.status(200).json({
                status: 'success',
                message: 'success create category',
                data: createCategory,
            })
        } catch (error) {
            return res.status(500).json({
                status: 'failed',
                message: error.message || "Internal Server Error"
            })
        }
    },
    getAllCategory: async (req, res) => {
        try {
            const findData = await categories.findAll({
                
            })
            if (!findData) {
                return res.status(400).json({
                    status: 'failed',
                    message: "failed to retrieve category"
                })
            }
            return res.status(200).json({
                status: 'success',
                message: "successfully to retrieve category",
                data: findData
            })
        } catch (error) {
            return res.status(500).json({
                status: 'failed',
                message: error.message || "Internal Server Error"
            })
        }
    },
    getCategoryById: async (req, res) => {
        const id = req.params.id
        try {
            const findData = await categories.findOne({
                where: {
                    id: id
                }
            })
            if (!findData) {
                return res.status(400).json({
                    status: 'failed',
                    message: "failed to retrieve category"
                })
            }
            return res.status(200).json({
                status: 'success',
                message: "successfully to retrieve category",
                data: findData
            })
        } catch (error) {
            return res.status(500).json({
                status: 'failed',
                message: error.message || "Internal Server Error"
            })
        }
    },
}