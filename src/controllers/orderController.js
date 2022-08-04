const productModel = require("../models/productModel");
const cartModel = require("../models/cartModel")
const userModel = require("../models/userModel")
const orderModel = require("../models/orderModel")
const jwt = require('jsonwebtoken')
const { keyValue, isValidObjectId } = require("../middleware/validator");  // IMPORTING VALIDATORS


//----------------------------------------------------  [FOURTHEENTH API]  ------------------------------------------------------------\\


const createOrder = async function (req, res) {
 
    try {
        const userId = req.params.userId;
        if (!isValidObjectId(userId)) return res.status(400).send({ status: false, message: "Please provide valid User Id!" });

        let bearerToken = req.headers.authorization;
        let token = bearerToken.split(" ")[1]
        let decodedToken = jwt.verify(token, "group73-project5")            // Authorization
        if (userId != decodedToken.userId) { return res.status(403).send({ status: false, message: "not authorized!" }) }



} catch (error) {
    res.status(500).send({ status: false, data: error.message });
  }
};


const updateOrder = async function (req, res) {
 
    try {
        const userId = req.params.userId;
        if (!isValidObjectId(userId)) return res.status(400).send({ status: false, message: "Please provide valid User Id!" });

        let bearerToken = req.headers.authorization;
        let token = bearerToken.split(" ")[1]
        let decodedToken = jwt.verify(token, "group73-project5")            // Authorization
        if (userId != decodedToken.userId) { return res.status(403).send({ status: false, message: "not authorized!" }) }



} catch (error) {
    res.status(500).send({ status: false, data: error.message });
  }
};





module.exports = { createOrder, updateOrder }  // Destructuring & Exporting


















// const updateCart = async function (req, res) {
//     try {
//         let data = req.body

//         //empty body validation
//         if (!Object.keys(data).length) { return res.status(400).send({ status: false, message: "Data can't be empty" }) }

//         const { cartId, productId, removeProduct } = data

//         // CartId Validation
//         if (!cartId) return res.status(400).send({ status: false, message: "please mention cartID" })
//         let cart = await cartModel.findById({ _id: cartId })

//         if (!cart) { return res.status(400).send({ status: false, message: "No such cart found" }) }

//         //productId validation
//         if (!productId) return res.status(400).send({ status: false, message: "please mention productID" })
//         let product = await productModel.findById({ _id: productId, isDeleted: false })
//         if (!product) { return res.status(400).send({ status: false, message: "No such product found in cart " }) }


//         if (!removeProduct) return res.status(400).send({ status: false, message: "please mention what to update " })

//         // key-value pair validation

//         if (removeProduct !== 1 || 0) return res.status(400).send({ status: false, message: "please mention 1 or 0 only in remove product" })



//         //*********** if remove product : 1  *******************/

//         if (removeProduct == 1) {
//             var pro = cart.item
//             for (let i = 0; i < pro.length; i++) {
//                 if (pro[i].productId == productId) {
//                     let dec = pro[i].quantity - 1
//                     pro[i].quantity = dec
//                     var cTotalPrice = cart.totalPrice - product.price;
//                     var cTotalItems = cart.totalItems - 1  //(only if item quantity will become zero; )
//                     break;
                   
//                 }
//                 return pro
//             }
//             let updated = await cartModel.findOneAndUpdate({ _id: cartId }, { item: pro, totalPrice: cTotalPrice, totalItems: cTotalItems }, { new: true })
//             res.status(200).send({ status: true, message: "update successfull", data: updated })

//         }

//         //*********** if remove product : 0  *******************/

//         if (removeProduct == 0) {

//             var pro = cart.item
//             for (let i = 0; i < pro.length; i++) {
//                 if (pro[i].productId == productId)
//                     var cTotalPrice = cart.totalPrice - (product.price * pro.quantity)
//                 var cTotalItems = cart.totalItems - 1
//                 pro.splice(i, 1)

//                 break;
//                 return pro
//             }
//         }
//         let updated = await cartModel.findOneAndUpdate({ _id: cartId }, { item: pro, totalPrice: cTotalPrice, totalItems: cTotalItems }, { new: true })
//         res.status(200).send({ status: true, message: "update successfull", data: updated })
//     }

//     catch (err) {
//         console.log(err)
//         return res.status(500).send({ status: false, msg: "Error", error: err.message })

//     }
// }