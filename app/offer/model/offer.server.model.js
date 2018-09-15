const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let OfferSchema = new Schema({
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    description: {
        type: String,
        default: ''
    },
    totalInvestment: {
        type: Number,
        default: ''
    },
    roi: {
        type: Number,
        default: ''
    },
    range: {
        years: {
            type: Number
        },
        months: {
            type: Number
        },
        days: {
            type: Number
        }
    },
    investors: [{
        type: Schema.ObjectId,
        ref: 'User'
    }],
    status: {
        type: String,
        default: 'active',
        enum: ['active', 'closed', 'disabled']
    },
    bookmarker: [{
        type: Schema.ObjectId,
        ref: 'User'
    }],
    type: {
        type: String,
        default: 'closed',
        enum: ['investee', 'investment']
    },
    tags: [{
        type: String,
        enum: ['crops', 'poultries', 'livestock', 'fisheries', 'organic', 'tech', 'others']
    }],
    created_date: {
        type: Date,
        default: Date.now
    },
    updated_date: {
        type: String
    },
    deleted_date: {
        type: String
    }
});

OfferSchema.set('toJSON', {
    getters: true,
    virtuals: true
});

mongoose.model('Offer', OfferSchema);