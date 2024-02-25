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
  res.render("contacts", {
    title: "Restaurante Saboroso!",
    background: "images/img_bg_3.jpg",
    h1: "Diga um oi!",
  });
});

router.get("/menus", (req, res, next) => {
  res.render("menus", {
    title: "Restaurante Saboroso!",
    background: "images/img_bg_1.jpg",
    h1: "Saborei o nosso menu!",
  });
});

router.get("/reservations", (req, res, next) => {
  res.render("reservations", {
    title: "Restaurante Saboroso!",
    background: "images/img_bg_2.jpg",
    h1: "Reserver uma mesa",
  });
});

router.get("/services", (req, res, next) => {
  res.render("services", {
    title: "Restaurante Saboroso!",
    background: "images/img_bg_1.jpg",
    h1: "É um prazer pode servir",
  });
});

module.exports = router;
