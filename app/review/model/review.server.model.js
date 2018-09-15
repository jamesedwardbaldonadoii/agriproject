const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let ReviewSchema = new Schema({
    from: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    to: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    message: {
        type: String,
        default: ''
    },
    rating: {
        type: Number,
        default: 0
    },
    hide: {
        type: Number,
        default: 0
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

ReviewSchema.set('toJSON', {
    getters: true,
    virtuals: true
});

mongoose.model('Review', ReviewSchema);