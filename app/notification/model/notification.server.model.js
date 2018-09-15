const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let NotificationSchema = new Schema({
    from: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    to: [{
        type : Schema.ObjectId,
        ref: 'User'
    }],
    type: {
        type: String,
        default: 'updates',
        enum: ['transaction', 'confirmation', 'updates', 'others']
    },
    seen: [{
        type : Schema.ObjectId,
        ref: 'User'
    }],
    read: [{
        type : Schema.ObjectId,
        ref: 'User'
    }],    
    created_date: {
        type: Date,
        default: Date.now
    }
});

NotificationSchema.set('toJSON', {
    getters: true,
    virtuals: true
});

mongoose.model('Notification', NotificationSchema);