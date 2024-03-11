const { adminServices } = require("../services")
const CustomError = require('../libs/error')
const UserModel = require('../models/user')
exports.addingbooks = (async (req, res) => {
    try {
        if (!res.locals.isAuthenticated) {
            throw new CustomError("User not authorised", 401)
        }
        const userID = req.user.ID;
        console.log('userID: ', userID);
        const userDATA = await UserModel.findById(userID)
        console.log('user: ', userDATA);
        if (userDATA.role !== 'admin') throw new CustomError('You dont have permission', 401)
        const response = await adminServices.addnewbook(req.body);

        return res.status(201).json({ message: "Success" });
    }
    catch (e) {
        return res.status(e?.code || 500).json({ message: e?.message || "Internal server error" })
    }
});


exports.allbooks=(async(req, res)=>{
    console.log('req: ');
    try{
       
    const response = await adminServices.booksData(req.query);
    console.log('response: ', response);

    return res.status(200).json(response)
    }
    catch (e) {
        return res.status(e?.code || 500).json({ message: e?.message || "Internal server error" })
    }
})




exports.updatingBook = async (req, res) => {
    try {
        if (!res.locals.isAuthenticated) {
            throw new CustomError("User not authorised", 401)
        }
        const response = await adminServices.updateBook(req.params, req.body);
        return res.status(200).json(response);
    }
    catch (e) {
        return res.status(e?.code || 500).json({ message: e?.message || "Internal server error" })
    }

};
exports.deletingBook = async(req,res)=>{
    try{if (!res.locals.isAuthenticated) {
        throw new CustomError("User not authorised", 401)
    }
    const userID = req.user.ID;
    console.log('userID: ', userID);
    const userDATA = await UserModel.findById(userID)
    console.log('user: ', userDATA);
    if (userDATA.role !== 'admin') throw new CustomError('You dont have permission', 401)
        if (!res.locals.isAuthenticated) {
            throw new CustomError("User not authorised", 401)
        }
        const response = await adminServices.deleteBook(req.params );
        return res.status(200).json(response);
    }
    catch(e){
        return res.status(e?.code || 500).json({message:e?.message || "Internal server error"})
    }
};
