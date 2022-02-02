
const myLogger=(req,res,next)=>{
    console.log(`${req.method}: ${req.url} ${new Date().toLocaleString()}`)
    req.myLogger = Date.now()
    next();
}


module.exports = myLogger