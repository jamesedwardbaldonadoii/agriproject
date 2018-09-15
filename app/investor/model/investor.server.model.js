const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let InvestorSchema = new Schema({
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    amount: {
        type: Number,
        default: 0
    },
    note: {
        type: String,
        default: ''
    },
    confirm: {
        type: Boolean,
        default: false
    }
});

InvestorSchema.set('toJSON', {
    getters: true,
    virtuals: true
});

mongoose.model('Investor', InvestorSchema);