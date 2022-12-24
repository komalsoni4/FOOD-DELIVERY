const express=require("express");
const { getAllProducts,createProduct,updateProduct,deleteProduct,getProductDetails, createProductReview, getProductReviews, deleteReview } = require("../controllers/productController");
const {isAuthenticatedUser,authorizeRoles}=require("../middleware/auth");
const router=express.Router();

router.route("/menu").get(getAllProducts);
router.route("/admin/menu/new").post(isAuthenticatedUser,authorizeRoles("admin"),createProduct);
router.route("/admin/menu/:id").put(isAuthenticatedUser,authorizeRoles("admin"),updateProduct).delete(isAuthenticatedUser,authorizeRoles("admin"),deleteProduct);
router.route("/menu/:id").get(getProductDetails);
router.route("/review").put(isAuthenticatedUser,createProductReview);
router.route("/reviews").get(getProductReviews).delete(isAuthenticatedUser,deleteReview)
module.exports=router;