const knex = require('../../services/connectionSQL');

const createorder = async (req, res) => {
    const { valor, produto_id } = req.body;
    const usuario_id = req.user.id;

    try {
        const billingRegistration = {
            usuario_id,
            produto_id,
            valor,
        }

        const billing = await knex('pedidos').insert(billingRegistration).returning('*');

        if (billing.rowCount === 0) {
            return res.status(400).json({ mensagem: "pedido não cadastrada" });
        }

        return res.status(200).json(billing[0]);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = createorder;