const conn = require("./dabase");

module.exports = {
  render(req, res, error, success) {
    res.render("reservations", {
      title: "Restaurante Saboroso!",
      background: "images/img_bg_2.jpg",
      h1: "Reserver uma mesa",
      body: req.body,
      error,
      success
    });
  },
  save(fields) {
    return new Promise((resolve, reject) => {
      // let date = data.split('/').reverse().join('-');
      fields.date = fields.date.split('/').reverse().join('-');

      conn.query(
        `
        INSERT INTO tb_reservations (name, email, people, date, time)
        VALUES (?, ?, ?, ?, ?)
      `,
        [fields.name, fields.email, fields.people, fields.date, fields.time],
        (err, results) => {
          if (err) {
            reject(err);
          }
          resolve(results);
        }
      );
    });
  },
};
