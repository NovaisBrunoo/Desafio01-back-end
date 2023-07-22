# Desafio BACKEND
Desafio Back-End
Este é o repositório do projeto Back-End do "Desafio Back-End". O projeto foi desenvolvido como parte de um desafio e oferece uma API com diversos endpoints para manipulação de usuários, produtos e pedidos. O Back-End é construído utilizando Node.js com Express e se comunica com um banco de dados para armazenar as informações necessárias.
---

## Pré-requisitos
Antes de executar o projeto, certifique-se de ter instalado os seguintes itens:

- Node.js (versão X.X.X ou superior)
- Npm (geralmente vem com o Node.js)

---

## Como executar o projeto
1.Faça o clone deste repositório para sua máquina local.
2.Navegue até o diretório raiz do projeto.
3.Instale as dependências do projeto usando o seguinte comando:

`npm install`

1.Após a instalação das dependências, inicie o servidor local com o seguinte comando:

`npm start`

1.O servidor agora estará em execução na porta especificada (por padrão, é a porta 3003). A API estará pronta para receber requisições e responder aos endpoints disponíveis.

## Endpoints disponíveis
Autenticação de Usuários:
POST /cadastro: Endpoint para cadastrar um novo usuário. Os dados devem ser enviados no corpo da requisição. É feita uma verificação das informações de acordo com o esquema (schemaUsuarios) antes de cadastrar o usuário.

POST /login: Endpoint para realizar o login de um usuário existente. Os dados devem ser enviados no corpo da requisição.

Produtos:
GET /produtos: Endpoint para obter a lista de todos os produtos cadastrados.

GET /produtos/:product_id: Endpoint para obter os detalhes de um produto específico com base no product_id.

Autenticação Requerida:
Os endpoints abaixo requerem autenticação via token. O usuário deve estar logado para acessá-los. O token deve ser enviado no cabeçalho da requisição com a chave Authorization.

POST /cadastroproduto: Endpoint para cadastrar um novo produto. Os dados devem ser enviados no corpo da requisição. É feita uma verificação das informações de acordo com o esquema (schemaProduto) antes de cadastrar o produto.

POST /criarpedido: Endpoint para criar um novo pedido. Os dados devem ser enviados no corpo da requisição.

GET /lista: Endpoint para obter a lista de pedidos do usuário logado.

DELETE /lista/:id_pedido: Endpoint para excluir um pedido específico com base no id_pedido.

PUT /lista/:id_pedido: Endpoint para atualizar as informações de um pedido específico com base no id_pedido.

Contribuindo
Se você deseja contribuir para o projeto, sinta-se à vontade para abrir issues, enviar pull requests ou sugerir melhorias.

Licença
Este projeto está licenciado sob a Licença MIT - consulte o arquivo LICENSE.md para obter mais detalhes.

Contato
Se você tiver alguma dúvida ou precisar entrar em contato, pode me encontrar através do meu e-mail: seuemail@example.com

---
