const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let TagSchema = new Schema({
    name: {
        type: String,
        required: 'name is required'
    },
    created: {
        type: Date,
        default: Date.now
    }
});

TagSchema.set('toJSON', {
    getters: true,
    virtuals: true
});

mongoose.model('Tag', TagSchema);