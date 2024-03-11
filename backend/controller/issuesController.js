const { issuesServices } = require("../services")
const CustomError = require('../libs/error')
const UserModel = require('../models/user')
const BookModel = require('../models/books')
exports.borrowbook = (async (req, res) => {
    try { 
        if (!res.locals.isAuthenticated) {
            throw new CustomError("User not authorised", 401)
        }
        const userID = req.user.ID;
    
        const response = await issuesServices.borrownewbook(userID , req.body);

        return res.status(201).json({ message: "Success" });
    }
    catch (e) {
        return res.status(e?.code || 500).json({ message: e?.message || "Internal server error" })
    }
});


// exports.allbooks=(async(req, res)=>{
//     console.log('req: ');
//     try{
       
//     const response = await adminServices.booksData(req.query);
//     console.log('response: ', response);

//     return res.status(200).json(response)
//     }
//     catch (e) {
//         return res.status(e?.code || 500).json({ message: e?.message || "Internal server error" })
//     }
// })

exports.updatestatus = (async(req,res)=>{
    try{

        if (!res.locals.isAuthenticated) {
            throw new CustomError("User not authorised", 401)
        }
        const userID = req.user.ID;

       const response = await issuesServices.returnBook(userID , req.body);
    console.log('response: ', response);

    return res.status(200).json(response)
    }
    catch (e) {
        return res.status(e?.code || 500).json({ message: e?.message || "Internal server error" })
    }
})




