/* const mongoose = require('mongoose');
const TableroSchema = new mongoose.Schema({
    casillas_: [{
        row: {
            type: Number
        },
        col: {
            type: Number
        },
        jug: {
            type: Boolean
        },
        id: {
            type: String
        },

    }],
    turno: {
        type: Boolean,
        default: true
    },
    gana: {
        type: Boolean,
        default: 'undefined'
    },
    empata: {
        type: Boolean,
        default: false
    },
    fecha: {
        type: Date,
    }
});

const TableroModel = mongoose.model('Tableros', TableroSchema);

module.exports = TableroModel; */
