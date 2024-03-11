const BookModel = require('../models/books')
const CustomError = require('../libs/error');



exports.addnewbook = async (body) => {
    try {

        const { name, author, description, genre, quantity } = body;
        if (!name || !author || !quantity || !genre) {
            throw new CustomError('Fields are required', 400)
        }





        const newbook = await BookModel.create({ name, author, description, genre, quantity });

        return newbook
    }


    catch (err) {
        console.log("dd", err)
        throw err;
    }
};
exports.booksData = async (query) => {
    
    try { let queries={};
        if(query) {
            const { field, search } = query;
            console.log('field: ', field);
    
            if (field === 'name') {
                queries.name = { $regex: new RegExp(search, 'i') }
            }
    
            if (field === 'author') {
                queries.author = { $regex: new RegExp(search, 'i') }
    
            }
            if (field === 'genre') {
                queries.genre = { $regex: new RegExp(search, 'i') }
    
            }
            console.log('query is', queries)
        }
       



        const booksdata = await BookModel
            .find(queries)

            .collation({ locale: 'en', strength: 2 });


        return booksdata;




    }
    catch (err) {
        throw err;
    }
};


exports.updateBook = async (params ,body) => {
    console.log('params: ', params);
    

    try {
       

      const bookId = params.id;

        const { name, author, description, genre, quantity } = body;
        console.log('name: ', name);
        console.log('bookId: ', bookId);
        if (await BookModel.findById(bookId)) {
            const updatedbook = await BookModel.findByIdAndUpdate(bookId, {name :name, author:author, description:description, genre :genre,quantity: quantity }, { new: true  , upsert: true});
            return updatedbook;
        }
        throw new CustomError("Unauthorised", 401)

    }
    catch (err) {
        throw err;
    }
};

exports.deleteBook = async (params) => {

    try {
        const { bookId } = params; //postId

        console.log(postId)

        const delPost = await BookModel.findByIdAndDelete(bookId);
        return delPost;





    }
    catch (err) {
        throw err;
    }
};
