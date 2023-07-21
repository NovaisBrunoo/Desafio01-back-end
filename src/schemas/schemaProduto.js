const joi = require("joi");

const schemaProduto = joi.object({
  nome: joi.string().required().messages({
    "any.required": "O campo nome é obrigatório",
    "string.empty": "O campo nome é obrigatório",
  }),
  descricao: joi.string().required().messages({
    "string.email": "O campo descricao é obrigatório",
    "any.required": "O campo descricao é obrigatório",
  }),
  valor: joi.number().integer().required().messages({
    "any.required": "O campo valor é obrigatório",
    "string.empty": "O campo valor é obrigatório",
  }),
  imagem: joi.string().required().messages({
    "any.required": "Imagem do produto não foi enviada",
    "string.empty": "Imagem do produto não foi enviada",
  }),
});

module.exports = schemaProduto;
