const knex = require("../../services/connectionSQL");

const DeleteOrder = async (req, res) => {
    try {
        const id_usuario = req.user.id;
        const { id_pedido } = req.params;

        const deleteBilling = await knex('pedidos')
            .where({ usuario_id: id_usuario, id: id_pedido })
            .del();

        if (deleteBilling === 0) {
            return res.status(400).json({ mensage: "Cobrança não encontrada" });
        }


        return res.status(200).json({ mensage: "Cobrança excluida com sucesso" });

    } catch (error) {

        return res.status(500).json({ menssage: "Erro interno do servidor" });
    }
};

module.exports = DeleteOrder;
