var conn = require("./../inc/dabase");
var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  conn.query(
    `
    SELECT * FROM tb_menus ORDER BY title
  `,
    (err, results) => {
      if (err) {
        console.log(err);
      }
      res.render("index", { title: "Restaurante Saboroso!", menus: results });
    }
  );
});

router.get("/contacts", (req, res, next) => {
  res.render("contacts", { title: "Restaurante Saboroso!"});
});

router.get("/menus", (req, res, next) => {
  res.render("menus", { title: "Restaurante Saboroso!"});
});

router.get("/reservations", (req, res, next) => {
  res.render("reservations", { title: "Restaurante Saboroso!"});
});

router.get("/services", (req, res, next) => {
  res.render("services", { title: "Restaurante Saboroso!"});
});

module.exports = router;
