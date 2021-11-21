const {products} = require('../models');
const Joi = require('joi');
const { Op } = require('sequelize/dist');
module.exports = {
    getAllProduct: async (req, res) => {
        try {
            const search = req.query.search ? req.query.search : '';
            const GetProduct = await products.findAll({
                attributes: { exclude: ['createdAt', 'updatedAt'] },
                limit: limit,
                offset: offset,
                where: {
                        [Op.or]: [{
                            name: {
                               [ Op.iLike]: '%' +search+'%'
                            }
                        },
                        {
                            category: {
                                [ Op.iLike]: '%' +search+'%'
                             }
                        }],
                },
            })
            if (!GetProduct) {
                return res.status(400).json({
                    status: "failed",
                    message: "failed to get products data"
                })
            }
            
            return res.status(200).json({
                status: "success",
                message: "successfully get products data",
                data: GetProduct
            })
        } catch (error) {
            return res.status(500).json({
                status: "failed",
                message: error.message || "Internal Server Error"
            })
        }
    },
    getOneProduct: async (req, res) => {
        const id = req.params.id;
        try {
            const getProduct = await products.findOne({
                where: { id },
            });
            if (!getProduct) {
                return res.status(400).json({
                    status: 'failed',
                    message: 'Data not found',
                });
            }
            return res.status(200).json({
                status: 'success',
                message: 'Success get one products data',
                data: getProduct,
            });
        } catch (error) {
            return res.status(500).json({
                status: 'failed',
                message: error.message || 'Internal Server Error',
            });
        }

    },
    createProduct: async (req, res) => {
        const body = req.body;
        try {
            const schema = Joi.object({
                name: Joi.string().required(),
                stock: Joi.number().required(),
                price: Joi.number().required(),
                category: Joi.string().required()
            })
            const check = schema.validate({
                name: body.name,
                stock: body.stock,
                price: body.price,
                category: body.category
            })
            if (check.error) {
                return res.status(400).json({
                    status: "failed",
                    message: "Bad Request"
                })
            }
            const PostProduct = await products.create({
                name: body.name,
                stock: body.stock,
                price: body.price,
                category: body.category
            })
            if (!PostProduct) {
                return res.status(400).json({
                    status: "failed",
                    message: "failed to create products data"
                })
            }
            return res.status(200).json({
                status: "success",
                message: "successfully create products data",
                data: PostProduct
            })
        } catch (error) {
            return res.status(500).json({
                status: "failed",
                message: error.message || "Internal Server Error"
            })
        }
    },
    updateProduct: async (req, res) => {
        const body = req.body;
        const id = req.params.id
        try {
            const schema = Joi.object({
                name: Joi.string().required(),
                stock: Joi.number().required(),
                price: Joi.number().required(),
                category: Joi.string().required()
            })
            const check = schema.validate({
                name: body.name,
                stock: body.stock,
                price: body.price,
                category: body.category
            })
            if (check.error) {
                return res.status(400).json({
                    status: "failed",
                    message: "Bad Request"
                })
            }
            await products.update({
                name: body.name,
                stock: body.stock,
                price: body.price,
                category: body.category
            },{
                where: {
                    id: id
                }
            })
            const editedProduct = await products.findByPk(id);
            if (!editedProduct) {
                return res.status(400).json({
                    status: 'failed',
                    message: 'Data not Found',
                });
            }
            return res.status(200).json({
                status: "success",
                message: "successfully update products data",
                data: editedProduct
            })
        } catch (error) {
            return res.status(500).json({
                status: "failed",
                message: error.message || "Internal Server Error"
            })
        }
    },
    deleteProduct: async (req, res) => {
        const id = req.params.id
        try {
            const removeProduct = await products.destroy({
                where: { 
                    id : id,
                }
            })
            if (!removeProduct) {
                return res.status(400).json({
                    status: "failed",
                    message: "failed to delete products data"
                })
            }
            return res.status(200).json({
                status: "success",
                message: "successfully delete products data"
            })
        } catch (error) {
            return res.status(500).json({
                status: "failed",
                message: error.message || "Internal Server Error"
            })
        }
    }
}