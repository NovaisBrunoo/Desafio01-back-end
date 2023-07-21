const knex = require("../../services/connectionSQL");

const product = async (req, res) => {
  try {
    var allProduct = await knex("produtos")
      .select("*")
      .orderBy("id")
      .returning("*");


    if (allProduct.length === 0) {
      return res.status(401).json({
        message: "Você não tem produtos cadastrados",
      });
    }
    return res.status(200).json(allProduct);
  } catch (error) {
    return res.status(500).json({ menssage: "Erro interno do servidor" });
  }
};

module.exports = product;
