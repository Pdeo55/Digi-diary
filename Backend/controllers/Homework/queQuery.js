const Homework = require("../../models/homework");
const queQuery = async (req, res) => {
  const { queId, queQuery, studentId, teacherid } = req.body;
  try {
    const feedback = await Homework.create({
      queId,
      queQuery,
      studentId,
      teacherid,
    });

    res.status(200).json(feedback);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getQuery = async (req, res) => {
  try {
    const teacherid = req.params.id;

    const homework = await Homework.aggregate([
      {
        $match: {
          teacherid: teacherid,
          queQuery: { $exists: true },
        },
      },
    ]);
    res.status(200).json(homework);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { queQuery, getQuery };
