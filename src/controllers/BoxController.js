const Box = require('../models/Box');

class BoxController {
    async store(req, res) {
        //Creates a new box
        const { title } = req.body;

        const box = await Box.create({title});

        return res.json(box);
    }

    async show(req, res) {
        const box = await Box.findById(req.params.id).populate({
            path: 'files',
            options: {sort: {createdAt: -1}}
        });

        return res.json(box);
    }
}

module.exports = new BoxController();