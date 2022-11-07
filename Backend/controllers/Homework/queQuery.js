const Homework = require("../../models/homework");
const queQuery = async (req, res) => {
  const { queId, queQuery, studentId } = req.body;
  try {
    const feedback = await Homework.create({
      queId,
      queQuery,
      studentId,
    });

    res.status(200).json(feedback);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getQuery = async (req, res) => {
  try {
    const homework = await Homework.find({ queQuery: { $exists: true } });
    res.status(200).json(homework);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { queQuery, getQuery };
