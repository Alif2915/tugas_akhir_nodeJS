Contact = require('./mahasiswaModel');

exports.index = (req, res) => {
    Contact.get((err, contact) => {
        if (err){
            res.json({
                status: "error",
                message: err,
            });
        }

        res.json({
            status: "success",
            message: "Data mahasiswa berhasil didapatkan",
            data: contact,
        });
    });
};

exports.new = (req, res) => {
    let contact = new Contact();
    contact.nim = req.body.nim ? req.body.nim : contact.nim;
    contact.nama = req.body.nama;
    contact.jurusan = req.body.jurusan;
    contact.semester = req.body.semester;
    contact.save().then((data) => {
        res.json({
            status: "Success",
            message: "Mahasiswa baru terdaftar",
            Contact: data,
        });
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Internal server error",
        });
    });
};

exports.view = (req, res) => {
    Contact.findById(req.params.contact_id, (err, contact) => {
        if (err) {
            res.json({
                status: 'error',
                message: err,
            });
        }
        res.json({
            message: 'contact detail loading',
            data: contact,
        });
    });
};

exports.update = (req, res) => {
    Contact.findById(req.params.contact_id, (err, contact) => {
        if (err){
            res.json({
                status: 'error',
                message: 'id not found',
            });
        }
        contact.nim = req.body.nim;
        contact.nama = req.body.nama;
        contact.jurusan = req.body.jurusan;
        contact.semester = req.body.semester;
        contact.save().then((data) => {
            res.json({
                status: 'success',
                message: 'Mahasiswa info update',
                Contact: data,
            });
        }).catch((err) => {
            res.status(500).send({
                message: err.message || "Internal sever error",
            });
        });
    });
};

exports.delete = (req, res) => {
    Contact.remove({
        _id: req.params.contact_id,
    }, (err, contact) => {
        if (err) res.send(err);

        res.json({
            status: 'success',
            message: 'Mahasiswa deleted',
        });
    });
};
