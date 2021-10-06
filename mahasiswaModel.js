const mongoose = require('mongoose');

const mahasiswaSchema = mongoose.Schema({
    create_date: {
        type: Date,
        default: Date.now(),
    },
    nim: {
        type: String,
        required: true,
    },
    nama: {
        type: String,
        required: true,
    },
    jurusan: String,
    semester: String,
});

const Contact = module.exports = mongoose.model('contact', mahasiswaSchema);
module.exports.get = (callback, limit) => {
    Contact.find(callback).limit(limit);
}