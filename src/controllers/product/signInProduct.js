const knex = require("../../services/connectionSQL");

const signInProduct = async (req, res) => {
  const {
    nome,
    descricao,
    valor,
    imagem
  } = req.body;
  try {
    const product = await knex("produtos").insert({
      nome,
      descricao,
      valor,
      imagem
    });

    if (product.rowCount === 0) {
      return res.status(400).json({ mensagem: "Produto não foi cadastrado" });
    }

    return res.status(200).json({ mensagem: "Produto realizado com sucesso" });
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

module.exports = signInProduct;
