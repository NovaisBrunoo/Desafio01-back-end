const express = require("express");
const router = express();
const checkInformations = require("../middlewares/checkInformations");
const verifylogin = require("../middlewares/verifylogin");

const signUser = require("../controllers/users/signUser");
const loginUser = require("../controllers/users/loginUser");

const schemaUsuarios = require("../schemas/schemasUsuario");
const product = require("../controllers/product/allProduct");
const signInProduct = require("../controllers/product/signInProduct");
const detailProduct = require("../controllers/product/detailProduct");
const list = require("../controllers/carinho/allList");
const createorder = require("../controllers/carinho/createorder");
const schemaProduto = require("../schemas/schemaProduto");
const DeleteOrder = require("../controllers/carinho/DeleteOrder");
const UpdateOrder = require("../controllers/carinho/UpdateOrder");


router.get("/", (req, res) => {
    res.send("Hello World!");
});

router.post("/cadastro", checkInformations(schemaUsuarios), signUser);
router.post("/login", loginUser);
router.get("/produtos", product)
router.get("/produtos/:product_id", detailProduct);

router.use(verifylogin);
router.post("/cadastroproduto", checkInformations(schemaProduto), signInProduct);
router.post("/criarpedido", createorder);
router.get("/lista", list);
router.delete("/lista/:id_pedido", DeleteOrder);
router.put("/lista/:id_pedido", UpdateOrder);

module.exports = router;