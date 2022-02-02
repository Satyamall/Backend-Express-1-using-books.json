
const express=require('express');
const uuid=require('uuid');
const Books=require("../../books.json");
const router=express.Router();

router.get("/",(req,res)=>{
    const value={
        "request_time" : req.myLogger,
        "data": Books
    }
    res.status(200).json(value);
})

router.get("/books/:id",(req,res)=>{
    const book = Books.find((user) => user.id === Number(req.params.id));
    if(!book){
        res.status(400).send("User not found");
    }
    const value={
        "request_time" : req.myLogger,
        "data": book
    }
    res.status(200).json(value);
})

router.post("/books",(req,res)=>{
    // * Create a new user
    try{
        const {author,book_name,pages,published_year}=req.body
        if(!author) throw new Error("Author is required");
        if(!book_name) throw new Error("Book Name is required");
        if(!pages) throw new Error("Pages is required");
        if(!published_year) throw new Error("Published Year is required");
        const book={
            id: uuid.v4(),
            author,
            book_name,
            pages,
            published_year
        }
        Books.push(book);
        res.status(201).json(book);
    }
    catch(err){
      res.status(400).send(`Invalid request: ${err.toString()}`)
    }
})

router.patch("/books/:id",(req,res)=>{
    const book = Books.find((user) => user.id === Number(req.params.id));
    if(!book){
        res.status(400).send("User not found");
    }
    book.author=req.body.author;
    book.published_year=req.body.published_year;
    res.send(book)
})

router.delete("/books/:id",(req,res)=>{
    const bookIndex = Books.findIndex((user) => user.id === Number(req.params.id));
    if(!bookIndex){
        res.status(400).send("User not found");
    }
    Books.splice(bookIndex, 1);
    res.send(Books)
})

module.exports = router;