const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let WalletSchema = new Schema({
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    amount: {
        type: Number,
        default: 0
    }
});

WalletSchema.set('toJSON', {
    getters: true,
    virtuals: true
});

mongoose.model('Wallet', WalletSchema);