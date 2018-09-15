const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let OrganizationSchema = new Schema({
    creator: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    name: {
        type: String,
        default: ''
    },
    address: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: 'others',
        enum: ['ngo', 'others']
    },
    license: {
        type: String,
        default: ''
    },
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

OrganizationSchema.set('toJSON', {
    getters: true,
    virtuals: true
});

mongoose.model('Organization', OrganizationSchema);