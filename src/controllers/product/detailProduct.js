const knex = require("../../services/connectionSQL");

const detailProduct = async (req, res) => {
  try {
    const product_id = req.params.product_id;

    const oneProduct = await knex("produtos")
      .where({
        id: product_id,

      })
      .select("*")
      .returning("*");
    if (oneProduct.length === 0) {
      return res.status(401).json({
        message: "Produto não encontrado",
      });
    }

    return res.status(200).json(oneProduct[0]);
  } catch (error) {
    return res.status(500).json({ menssage: "Erro interno do servidor" });
  }
};

module.exports = detailProduct;
