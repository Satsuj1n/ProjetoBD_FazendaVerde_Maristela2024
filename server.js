const express = require("express");
const mysql = require("mysql2");
const app = express();

app.use(express.json());

// Configuração da conexão com o banco de dados MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root", //  usuário MySQL
  password: "admin", // senha MySQL
  database: "fazenda", // nome do banco de dados
});

db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao MySQL:", err);
  } else {
    console.log("Conectado ao MySQL");
  }
});

// CRUD para a tabela Planta

// CREATE (Inserir uma nova planta)
app.post("/planta", (req, res) => {
  const { variedade, data_plantio, estagio_crescimento, id_lote, id_estufa } =
    req.body;
  const sql =
    "INSERT INTO Planta (Variedade, Data_Plantio, Estagio_Crescimento, ID_Lote, ID_Estufa) VALUES (?, ?, ?, ?, ?)";
  db.query(
    sql,
    [variedade, data_plantio, estagio_crescimento, id_lote, id_estufa],
    (err, result) => {
      if (err) throw err;
      res.send("Planta inserida com sucesso!");
    }
  );
});

// READ (Obter todas as plantas)
app.get("/planta", (req, res) => {
  const sql = "SELECT * FROM Planta";
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// UPDATE (Atualizar uma planta)
app.put("/planta/:id", (req, res) => {
  const { id } = req.params;
  const { variedade, data_plantio, estagio_crescimento, id_lote, id_estufa } =
    req.body;
  const sql =
    "UPDATE Planta SET Variedade = ?, Data_Plantio = ?, Estagio_Crescimento = ?, ID_Lote = ?, ID_Estufa = ? WHERE ID_Planta = ?";
  db.query(
    sql,
    [variedade, data_plantio, estagio_crescimento, id_lote, id_estufa, id],
    (err, result) => {
      if (err) throw err;
      res.send("Planta atualizada com sucesso!");
    }
  );
});

// DELETE (Excluir uma planta)
app.delete("/planta/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM Planta WHERE ID_Planta = ?";
  db.query(sql, [id], (err, result) => {
    if (err) throw err;
    res.send("Planta excluída com sucesso!");
  });
});

// CRUD para a tabela Lote

// CREATE (Inserir um novo lote)
app.post("/lote", (req, res) => {
  const { data_criacao, numero_plantas, id_colheita } = req.body;
  const sql =
    "INSERT INTO Lote (Data_Criacao, Numero_Plantas, ID_Colheita) VALUES (?, ?, ?)";
  db.query(sql, [data_criacao, numero_plantas, id_colheita], (err, result) => {
    if (err) throw err;
    res.send("Lote inserido com sucesso!");
  });
});

// READ (Obter todos os lotes)
app.get("/lote", (req, res) => {
  const sql = "SELECT * FROM Lote";
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// UPDATE (Atualizar um lote)
app.put("/lote/:id", (req, res) => {
  const { id } = req.params;
  const { data_criacao, numero_plantas, id_colheita } = req.body;
  const sql =
    "UPDATE Lote SET Data_Criacao = ?, Numero_Plantas = ?, ID_Colheita = ? WHERE ID_Lote = ?";
  db.query(
    sql,
    [data_criacao, numero_plantas, id_colheita, id],
    (err, result) => {
      if (err) throw err;
      res.send("Lote atualizado com sucesso!");
    }
  );
});

// DELETE (Excluir um lote)
app.delete("/lote/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM Lote WHERE ID_Lote = ?";
  db.query(sql, [id], (err, result) => {
    if (err) throw err;
    res.send("Lote excluído com sucesso!");
  });
});

// CRUD para a tabela Estufa

// CREATE (Inserir uma nova estufa)
app.post("/estufa", (req, res) => {
  const { localizacao, temperatura, umidade, tamanho } = req.body;
  const sql =
    "INSERT INTO Estufa (Localizacao, Temperatura, Umidade, Tamanho) VALUES (?, ?, ?, ?)";
  db.query(sql, [localizacao, temperatura, umidade, tamanho], (err, result) => {
    if (err) throw err;
    res.send("Estufa inserida com sucesso!");
  });
});

// READ (Obter todas as estufas)
app.get("/estufa", (req, res) => {
  const sql = "SELECT * FROM Estufa";
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// UPDATE (Atualizar uma estufa)
app.put("/estufa/:id", (req, res) => {
  const { id } = req.params;
  const { localizacao, temperatura, umidade, tamanho } = req.body;
  const sql =
    "UPDATE Estufa SET Localizacao = ?, Temperatura = ?, Umidade = ?, Tamanho = ? WHERE ID_Estufa = ?";
  db.query(
    sql,
    [localizacao, temperatura, umidade, tamanho, id],
    (err, result) => {
      if (err) throw err;
      res.send("Estufa atualizada com sucesso!");
    }
  );
});

// DELETE (Excluir uma estufa)
app.delete("/estufa/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM Estufa WHERE ID_Estufa = ?";
  db.query(sql, [id], (err, result) => {
    if (err) throw err;
    res.send("Estufa excluída com sucesso!");
  });
});

// Iniciar o servidor
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
