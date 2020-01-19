const Sharehd = require("../models/Sharehd");

module.exports = {
    async index(request, response) {
        const sharehds = await Sharehd.find();

        return response.json(sharehds);
    },


    async store(request, response) {
        const { first_name, last_name, participation } = request.body;

        let sharehd = await Sharehd.findOne({ first_name });

        sharehd = await Sharehd.create({
            first_name,
            last_name,
            participation,
        });

        return response.json(sharehd);
    }
};