//this controller will send the info of all the board categories, boards, threads, replies

import boardCategoryModel from "../../Models/content/boardCategories.js";

const send_DBData = async (req, res) => {
    //for now i will just be sending the boards categories 
    const boardCategories = await boardCategoryModel.find();

    req.status(200).json({
        "data": { boardCategories }
    })
}

export default send_DBData;