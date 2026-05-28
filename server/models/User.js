const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    steamId: String,

    nickname: String,

    avatar: String,

    balance: {

        type: Number,

        default: 0

    },

    inventory: {

        type: Array,

        default: []

    },

    history: {

        type: Array,

        default: []

    },

    tradeUrl: {

        type: String,

        default: ''

    },

    stats: {

        openedCases: {

            type: Number,

            default: 0

        },

        upgrades: {

            type: Number,

            default: 0

        }

    }

});

module.exports = mongoose.model('User', userSchema);