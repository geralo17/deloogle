// import express
const express = require("express")
//set up express app
const app = express()

app.get('/', (req, res) => { 
    res.send('Our demo app is working!') 
}); 

app.listen(3000, () => { 
    console.log('Demo app is listening on port 3000!') 
}); 