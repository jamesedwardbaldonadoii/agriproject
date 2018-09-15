const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let TransactionSchema = new Schema({
    amount: {
        type: Number,
        default: 0
    },
    note: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: 'others',
        enum: ['deposit', 'withdrawal', 'payment']
    }, 
    source: {
        type: String,
        default: 'others',
        enum: ['bank', 'visa', 'mastercard', 'paypal']
    },
    amount: {
        type: Number,
        default: 0
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    wallet: {
        type: Schema.ObjectId,
        ref: 'Wallet'
    },
    offer: {
        type: Schema.ObjectId,
        ref: 'Offer'
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

TransactionSchema.set('toJSON', {
    getters: true,
    virtuals: true
});

mongoose.model('Transaction', TransactionSchema);