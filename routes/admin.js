const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("admin/index");
});

router.get("/login", (req, res, next) => {
  if (!req.session.views) req.session.views = 0;

  console.log("incrementando a chave", req.session.views++);
  
  res.render("admin/login");
});

router.get("/contacts", (req, res, next) => {
  res.render("admin/contacts");
});

router.get("/emails", (req, res, next) => {
  res.render("admin/emails");
});

router.get("/menus", (req, res, next) => {
  res.render("admin/menus");
});

router.get("/reservations", (req, res, next) => {
  res.render("admin/reservations", {
    date: {}
  });
});

router.get("/users", (req, res, next) => {
  res.render("admin/users");
});

module.exports = router;
