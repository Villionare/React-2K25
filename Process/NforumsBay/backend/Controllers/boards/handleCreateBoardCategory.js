import boardCategoryModel from "../../Models/boardCategories";

const handleCreateBoardCategory = async (req, res) => {

    const noofBoardsCategories = await boardCategoryModel.findOne();

    const {name, description, maxNumber} = req.body;

    res.json({ "message": "creating a board category" });
}

export default handleCreateBoardCategory;