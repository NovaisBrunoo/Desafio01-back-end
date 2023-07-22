
create database DesafioEcommerce;

CREATE TABLE "usuarios"
(
  "id" serial primary key,
  "nome" text not null,
  "email" text not null unique,
  "senha" text not null,
);


CREATE TABLE "produtos"
(
  "id" serial primary key,
  "nome" text not null,
  "descricao" text,
  "valor" integer,
  "imagem" text
);


CREATE TABLE "pedidos"
(
  "id" serial primary key,
  "usuario_id" integer not null,
  "produto_id" integer not null,
  "nome_produto" text,
  "descricao" text,
  "valor" integer not null,
  "quantidade" integer not null , 
  foreign key (usuario_id) references usuarios(id),
  foreign key (produto_id) references produtos(id)
);



DROP TABLE pedidos

