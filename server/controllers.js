const Gym = require("./db");
module.exports.getAll = (req, res) => {
  Glossary.find()
    .then((data) => res.send(data))
    .catch(() => res.sendStatus(404));
};

module.exports = {
  addWorkout: async (req, res) => {
    try {
      const { review_id } = req.params;
      const qString = `UPDATE reviews SET helpfulness = helpfulness + 1 WHERE id=${review_id};`;
      await pool.query(qString);
      console.log("Helpful +1 for Review id", review_id);
      res.sendStatus(200);
    } catch (err) {
      console.error(err);
    }
  },
  markHelpful: async (req, res) => {
    try {
      const { review_id } = req.params;
      const qString = `UPDATE reviews SET helpfulness = helpfulness + 1 WHERE id=${review_id};`;
      await pool.query(qString);
      console.log("Helpful +1 for Review id", review_id);
      res.sendStatus(200);
    } catch (err) {
      console.error(err);
    }
  },
};
