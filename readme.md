# Projeto Fazenda de Maconha - CRUD API

Este projeto implementa uma API CRUD (Create, Read, Update, Delete) utilizando Node.js, Express e MySQL para gerenciar o banco de dados de uma fazenda de maconha. A API permite a criação, leitura, atualização e exclusão de registros nas tabelas `Estufa`, `Lote`, `Colheita` e `Planta`.

## Requisitos

- Node.js instalado
- MySQL instalado
- Ferramenta para testar APIs (Postman, Insomnia, etc.)

## Instalação

1. Clone este repositório.
2. No diretório do projeto, instale as dependências:
   ```bash
   npm install
   Configure o banco de dados MySQL com as credenciais corretas no arquivo server.js.
   Crie as tabelas no MySQL usando o script SQL fornecido.
   Inicie o servidor Node.js:
   bash
   ```

node server.js
Endpoints da API
Estufa
Criar uma Estufa:

POST /estufa
Body (JSON):
json

{
"localizacao": "Local 1",
"temperatura": 25.5,
"umidade": 60.0,
"tamanho": 100
}
Ler todas as Estufas:

GET /estufa
Atualizar uma Estufa:

PUT /estufa/:id
Body (JSON):
json

{
"localizacao": "Local 2",
"temperatura": 26.0,
"umidade": 65.0,
"tamanho": 120
}
Deletar uma Estufa:

DELETE /estufa/:id
Lote
Criar um Lote:

POST /lote
Body (JSON):
json

{
"data_criacao": "2024-08-01",
"numero_plantas": 100,
"id_colheita": null // Use null se ainda não há colheita associada
}
Ler todos os Lotes:

GET /lote
Atualizar um Lote:

PUT /lote/:id
Body (JSON):
json

{
"data_criacao": "2024-09-01",
"numero_plantas": 120,
"id_colheita": 1
}
Deletar um Lote:

DELETE /lote/:id
Colheita
Criar uma Colheita:

POST /colheita
Body (JSON):
json

{
"data_colheita": "2024-08-10",
"quantidade_colhida": 500,
"qualidade": "Alta",
"id_planta": null // Use null se a planta ainda não existir
}
Ler todas as Colheitas:

GET /colheita
Atualizar uma Colheita:

PUT /colheita/:id
Body (JSON):
json

{
"data_colheita": "2024-09-10",
"quantidade_colhida": 550,
"qualidade": "Média",
"id_planta": 1
}
Deletar uma Colheita:

DELETE /colheita/:id
Planta
Criar uma Planta:

POST /planta
Body (JSON):
json

{
"variedade": "Indica SuperHaze",
"data_plantio": "2024-08-15",
"estagio_crescimento": "Vegetativo",
"id_lote": 1, // Certifique-se de que o ID do lote existe
"id_estufa": 1 // Certifique-se de que o ID da estufa existe
}
Ler todas as Plantas:

GET /planta
Atualizar uma Planta:

PUT /planta/:id
Body (JSON):
json

{
"variedade": "Sativa Dream",
"data_plantio": "2024-08-20",
"estagio_crescimento": "Florindo",
"id_lote": 1,
"id_estufa": 1
}
Deletar uma Planta:

DELETE /planta/:id
Ordem para Inserção de Dados
Para evitar conflitos de integridade referencial ao adicionar dados, siga esta ordem:

Inserir dados na tabela Estufa.

Endpoint: POST /estufa
Inserir a localização, temperatura, umidade e tamanho da estufa.
Inserir dados na tabela Colheita (opcional).

Endpoint: POST /colheita
Inserir a data da colheita, quantidade colhida, qualidade e ID da planta (se existir).
Inserir dados na tabela Lote.

Endpoint: POST /lote
Inserir a data de criação, número de plantas, e ID da colheita (se existir).
Inserir dados na tabela Planta.

Endpoint: POST /planta
Inserir a variedade, data de plantio, estágio de crescimento, ID do lote e ID da estufa.
Seguindo essa ordem, você garante que todos os registros referenciados estejam presentes, evitando erros de chave estrangeira.

Como Usar
Utilize ferramentas como Postman para testar os endpoints, enviando requisições conforme os exemplos fornecidos.
Certifique-se de seguir a ordem de inserção de dados para evitar erros de integridade referencial.
Após testar as operações CRUD, você pode expandir ou modificar a API conforme necessário.
