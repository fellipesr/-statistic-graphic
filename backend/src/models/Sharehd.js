const mongoose = require('mongoose');

const ShareHolders = new mongoose.Schema({
    first_name: String,
    last_name: String,
    participation: Number,
});

module.exports = mongoose.model('Sharehd', ShareHolders);