const Homework = require('../../models/homework')

const getAllhomework = async (req, res) => {
    try {
        const homeworks = await Homework.find({}).sort({ createdAt: -1 });
        res.status(200).json(homeworks)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


const addHomework = async (req, res) => {
    const { title, description, subject } = req.body
    try {
        const homework = await Homework.create({ title, description, subject })
        res.status(200).json(homework)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = { getAllhomework, addHomework }