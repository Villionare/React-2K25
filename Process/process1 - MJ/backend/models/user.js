import mongoose from "mongoose";

const fealds = {
    usename: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },

    password: {
        type: String,
        required: true
    }
};

const userSchema = new mongoose.Schema(fealds, { timestamps: true });

const userModel = mongoose.model('USER_MODEL', userSchema);

export default userModel;