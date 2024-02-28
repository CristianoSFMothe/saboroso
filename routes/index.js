const menus = require("./../inc/menus");
const reservations = require("./../inc/reservations");
const contacts = require("./../inc/contacts");
const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  menus.getMenus().then((results) => {
    res.render("index", {
      title: "Restaurante Saboroso!",
      menus: results,
      isHome: true,
    });
  });
});

router.get("/contacts", (req, res, next) => {
  contacts.render(req, res);
});

router.post("/contacts", (req, res, next) => {
  if (!req.body.name) {
    contacts.render(req, res, "Digite o nome");
  } else if (!req.body.email) {
    contacts.render(req, res, "Informe o e-mail");
  } else if (!req.body.message) {
    contacts.render(req, res, "Digite a mensagem");
  } else {
    contacts
      .save(req.body)
      .then((results) => {
        req.body = {};

        contacts.render(req, res, null, "Contanto enviando com sucesso!");
      })
      .catch((err) => {
        contacts.render(req, res, err.message);
      });
  }
});

router.get("/menus", (req, res, next) => {
  menus.getMenus().then((results) => {
    res.render("menus", {
      title: "Restaurante Saboroso!",
      background: "images/img_bg_1.jpg",
      h1: "Saborei o nosso menu!",
      menus: results,
    });
  });
});

router.post("/reservations", (req, res, next) => {
  if (!req.body.name) {
    reservations.render(req, res, "Informe o nome");
  } else if (!req.body.people) {
    reservations.render(req, res, "Informe o e-mail de contado");
  } else if (!req.body.date) {
    reservations.render(req, res, "Selecione uma data");
  } else if (!req.body.time) {
    reservations.render(req, res, "Selecione a hora");
  } else {
    reservations
      .save(req.body)
      .then((results) => {
        req.body = {};

        reservations.render(req, res, null, "Reservar realizada com sucesso");

        res.redirect("/");
      })
      .catch((err) => {
        reservations.render(req, res, err.message);
      });
  }
});

router.get("/reservations", (req, res, next) => {
  reservations.render(req, res);
});

router.get("/services", (req, res, next) => {
  res.render("services", {
    title: "Restaurante Saboroso!",
    background: "images/img_bg_1.jpg",
    h1: "É um prazer pode servir",
  });
});

module.exports = router;
