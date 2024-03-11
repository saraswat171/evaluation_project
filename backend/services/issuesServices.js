const IssuesModel = require('../models/issues');
const BookModel = require('../models/books'); 
const CustomError = require('../libs/error');
exports.borrownewbook = async (userID, body) => {
    try {
        const { bookId } = body;
        
        const book = await BookModel.findById(bookId);
        if (!book) {
            throw new CustomError("Book not found", 404); 
        }
       
        if (book.quantity <= 0) {
            throw new CustomError("Book not available", 400); 
        }
      
        book.quantity -= 1;
        
        await book.save();
       
        const newIssue = await IssuesModel.create({ student: userID, book: bookId });
      
        return newIssue;
    } catch (err) {
        console.log("Error:", err);
        throw err;
    }};
    exports.returnBook = async (userId, body) => {
        try { console.log("first")
           const {bookId} = body;
            const issue = await IssuesModel.findOne({ student: userId, book: bookId });
            if (!issue) {
                throw new CustomError("Issue not found", 404); 
            }
         
            const book = await BookModel.findById(bookId);
            if (!book) {
                throw new CustomError("Book not found", 404); 
            }
           
            book.quantity += 1;
          
            await book.save();
          
            await IssuesModel.findByIdAndUpdate(issue._id ,{returned:true},{new:true});
            return { message: "Book returned successfully" };
        } catch (err) {
            console.log("Error:", err);
            throw err;
        }
      };
        


