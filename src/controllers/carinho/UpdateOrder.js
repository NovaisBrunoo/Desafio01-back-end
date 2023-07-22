const knex = require("../../services/connectionSQL");

const UpdateOrder = async (req, res) => {
    const { descricao, valor, nome_produto, imagem, quantidade } = req.body;
    const { id_pedido } = req.params;

    try {

        const findBilling = await knex("pedidos")
            .where({ id: id_pedido })
            .select("usuario_id", "produto_id", "nome_produto", "descricao", "imagem", "quantidade", "valor")
            .returning("*");


        const billing = {
            usuario_id: findBilling[0].usuario_id,
            produto_id: findBilling[0].id_produto,
            nome_produto: !nome_produto ? findBilling[0].nome_produto : nome_produto,
            descricao: !descricao ? findBilling[0].descricao : descricao,
            imagem: !imagem ? findBilling[0].imagem : imagem,
            quantidade: !quantidade ? findBilling[0].quantidade : quantidade,
            valor: !valor ? findBilling[0].valor : valor,
        };

        const update = await knex("pedidos")
            .where({ id: id_pedido })
            .update(billing);

        return res.status(200).json(billing);

    } catch (error) {
        return res.status(400).json(error.message);
    }


};

module.exports = UpdateOrder;