const knex = require("../../services/connectionSQL");

const list = async (req, res) => {
  const usuario_id = req.user.id;

  try {
    var allList = await knex("pedidos")
      .where({ usuario_id })
      .select("*")
      .orderBy("id", "asc")
      .returning("*");

    if (allList.length === 0) {
      return res.status(401).json({
        message: "Você não tem nenhum pedido cadastrado",
      });
    }

    return res.status(200).json(allList);
  } catch (error) {
    return res.status(500).json({ menssage: "Erro interno do servidor" });
  }
};

module.exports = list;
