const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard'], default: 'Medium' },
    ingredients: [String],
    steps: [String],
}, { timestamps: true });

module.exports = mongoose.model('Recipe', RecipeSchema);
