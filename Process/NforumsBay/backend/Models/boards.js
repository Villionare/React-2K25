import mongoose from "mongoose";

const boardsCategories = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

}, {
    timestamps: true,
});