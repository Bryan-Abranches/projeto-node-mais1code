const express = require('express')

const router = express.Router()



router.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

router.get("/", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  return res.json({ hello: "pagina inicial logo será implementada" });
});


router.get("/transacao", (req, res) => {
  return res.status(201).json({
    msg: "Retornou o get",
  });
});

router.get("/transacao/:id", (req, res) => {
  const { id } = req.params;
  return res.status(200).json({
    id,
    msg: "Ok",
  });
});


router.get("/ejs", (req, res) => {
  res.render("index");
});


router.post("/transacao", (req, res) => {
  const { titulo, valor, tipo, categoria } = req.body;
  var transacao = {
    id: 1,
    title: titulo,
    transaction_value: valor,
    transaction_type: tipo,
    product_owner: categoria,
  };

  return res.status(200).json(transacao);
});

router.put("/transacao/:id", (req, res) => {
  const { id } = req.params;
  return res.status(200).json({
    msg: "Ok",
  });
});

router.delete("/transacao/:id", (req, res) => {
  const { id } = req.params;
  // return res.status(200).json({ msg: `o registro ${id} foi apagado com sucesso.` })
  return res
    .status(200)
    .json({ msg: 'o registro "' + id + '" foi apagado com sucesso.' });
});

module.exports = router;
