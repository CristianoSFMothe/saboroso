var conn = require('./../inc/dabase');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  // Configuração de conexão com o Banco de Dados
  conn.query('SELECT * FROM tb_users ORDER BY name', (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  })
});

module.exports = router;
