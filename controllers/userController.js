// const { ObjectId } = require("mongodb");
// const client = require("../config/db");

// const database = client.db("E_bay");
// const ProductsCollection = database.collection("products");

// const getProducts = async (req, res) => {
//   const products = await ProductsCollection.find().toArray();
//   res.send(products);
// };

// const getProduct = async (req, res) => {
//   const { id } = req.params;
//   console.log("id form server ", id);

//   if (!ObjectId.isValid(id)) {
//     return res.status(400).json({ message: "Invalid ID" });
//   }

//   const product = await ProductsCollection().findOne({
//     _id: id,
//   });
//   if (!product) return res.status(404).json({ message: "Product not found" });

//   res.json(product);
// };

// // const getProduct = async (req, res) => {
// //   const { id } = req.params;
// //   //   const quary = { _id: id };
// //   const quary = { _id: new ObjectId(id) };
// //   const data = await ProductsCollection.findOne({ _id: new ObjectId(id) });
// //   res.send(data);
// // };
// module.exports = { getProducts, getProduct };
