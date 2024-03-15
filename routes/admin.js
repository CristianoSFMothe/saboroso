const express = require("express");
const users = require("./../inc/user");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("admin/index");
});

router.get("/login", (req, res, next) => {
  users.render(req, res, null)
});

router.post("/login", (req, res, next) => {

  console.log("Dados do usuário", req.body)
  if (!req.body.email) {
    users.render(req, res, "Preencha o campo e-mail.")
  } else if (!req.body.password) {
    users.render(req, res, "Preencha o campo senha.")
  } else {
    users.login(req.body.email, req.body.password).then(user => {
      req.session.user = user;

      res.redirect("/admin");
    }).catch(err => {
      users.render(req, res, err.message || err);
    })
  }
});

router.get("/contacts", (req, res, next) => {
  users.render(req, res, null);
});

router.get("/emails", (req, res, next) => {
  res.render("admin/emails");
});

router.get("/menus", (req, res, next) => {
  res.render("admin/menus");
});

router.get("/reservations", (req, res, next) => {
  res.render("admin/reservations", {
    date: {},
  });
});

router.get("/users", (req, res, next) => {
  res.render("admin/users");
});

module.exports = router;
