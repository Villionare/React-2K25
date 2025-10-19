import mongoose from "mongoose"

const b_categoriesSchema = mongoose.Schema({
    id: Number,
    name: String,
    description: String,
    boards: [{
        _id: ObjectId, //this will be linked to the boards id documents.
        name: String,
        ref: 'boards'
    }],
    maxNumber: Number
}, {
    timestamps: true
});

const boardCategoryModel = mongoose.model('boardCategory', b_categoriesSchema);

export default boardCategoryModel;