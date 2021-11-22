const { items, categories } = require('../models');
const Joi = require('joi')
const { Op } = require('sequelize');

module.exports = {
    getAllItem: async (req, res) => {
        const { price, stock } = req.query
        try{
            if (price=="low") {
                const dataItem = await items.findAll({
                    attributes: { exclude: ['createdAt', 'updatedAt'] },
                    include: [
                        { model: categories,
                            as: 'category',
                            attributes: { exclude: ['createdAt', 'updatedAt']},
                        },
                    ],
                    order: [['price','ASC']]
                    
                })
                return res.status(200).json({
                    status: 'success',
                    message: 'successfully retrieve all items data',
                    data: dataItem
                })
                
            }
            if (price=="high") {
                const dataItem = await items.findAll({
                    attributes: { exclude: ['createdAt', 'updatedAt'] },
                    include: [
                        { model: categories,
                            as: 'category',
                            attributes: { exclude: ['createdAt', 'updatedAt']},
                        },
                    ],
                    order: [['price', 'DESC']]
                })
                return res.status(200).json({
                    status: 'success',
                    message: 'successfully retrieve all items data',
                    data: dataItem
                })
            }
            if (stock=="low") {
                const dataItem = await items.findAll({
                    attributes: { exclude: ['createdAt', 'updatedAt'] },
                    include: [
                        { model: categories,
                            as: 'category',
                            attributes: { exclude: ['createdAt', 'updatedAt']},
                        },
                    ],
                    order: [['stock', 'ASC']]
                })
                return res.status(200).json({
                    status: 'success',
                    message: 'successfully retrieve all items data',
                    data: dataItem
                })
            }
            if (stock=="high") {
                const dataItem = await items.findAll({
                    attributes: { exclude: ['createdAt', 'updatedAt'] },
                    include: [
                        { model: categories,
                            as: 'category',
                            attributes: { exclude: ['createdAt', 'updatedAt']},
                        },
                    ],
                    order: [['stock', 'DESC']],
                })
                return res.status(200).json({
                    status: 'success',
                    message: 'successfully retrieve all items data',
                    data: dataItem
                })
            }
            
                const dataItem = await items.findAll({
                    attributes: { exclude: ['createdAt', 'updatedAt'] },
                    include: [
                        { model: categories,
                            as: 'category',
                            attributes: { exclude: ['createdAt', 'updatedAt']},
                        },
                    ],
                    
                })
                if (!dataItem) {
                    return res.status(400).json({
                        status: 'failed',
                        message: 'failed to retrieve all items data'
                    })
                }
                return res.status(200).json({
                    status: 'success',
                    message: 'successfully retrieve all items data',
                    data: dataItem
                })
            
        } catch (error) {
            return res.status(500).json({
                status: 'failed',
                message: error.message || "Internal Server Error"
            })
        }
    },
    getItemById: async (req, res) => {
        const id = req.params.id
        try {
            const dataItem = await items.findOne({
                where: { id: id}
            })
            if (!dataItem) {
                return res.status(400).json({
                    status: 'failed',
                    message: 'failed to retrieve items data by id'
                })
            }
            return res.status(200).json({
                status: 'success',
                message: 'successfully retrieve items data by id',
                data: dataItem
            })
        } catch (error) {
            return res.status(500).json({
                status: 'failed',
                message: error.message || "Internal Server Error"
            })
        }
    },
    createItem: async (req, res) => {
        const body = req.body
        try {
            const schema = Joi.object({
                name: Joi.string().required(),
                stock: Joi.number(),
                price: Joi.number().required(),
                categoryId: Joi.number().required()
            })
            const check = schema.validate({
                name: body.name,
                stock: body.stock,
                price: body.price,
                categoryId: body.categoryId
            })
            const createItem = await items.create({
                name: body.name,
                stock: body.stock,
                price: body.price,
                categoryId: body.categoryId
            })
            return res.status(200).json({
                status: 'success',
                message: 'successfully created item data',
                data: createItem
            })
        } catch (error) {
            return res.status(500).json({
                status: 'failed',
                message: error.message || "Internal Server Error"
            })
        }
    },
    updateItem: async (req, res) => {
        const id = req.params.id
        const body = req.body
        try {
            const findItem = await items.findOne({
                where: { id: id }
            })
            if (!findItem) {
                return res.status(400).json({
                    status: 'failed',
                    message: 'cannot find item'
                })
            }
            await items.update({
                name: body.name,
                price: body.price,
                stock: body.stock,
                categoryId: body.categoryId,
            },{
                where: { id: id }
            })
            const updatedItem = await items.findOne({
                where: { id: id }
            })
            return res.status(200).json({
                status: 'success',
                message: 'success update data',
                data: updatedItem,
            })
        } catch (error) {
            return res.status(500).json({
                status: 'failed',
                message: error.message || "Internal Server Error"
            })
        }
    },
    deleteItem: async (req, res) => {
        const id = req.params.id
        try {
            const removeItem = await items.destroy({
                where: { id: id }
            })
            if (!removeItem) {
                return res.status(400).json({
                    status: 'failed',
                    message: 'failed to delete item data'
                })
            }
            return res.status(200).json({
                status: 'success',
                message: 'successfully deleted item data',
            })
        } catch (error) {
            return res.status(500).json({
                status: 'failed',
                message: error.message || "Internal Server Error"
            })
        }
    },

}