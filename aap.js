// CREATING A REFERENCE for express
let express = require('express')
//instance of express
let app = express();

//BODY PARSER middleware parses the data and makes it available
// under req.body property
//create reference of Body-parser
let bodyParser= require('body-parser')

// ADDING BODY-PARSER TO app.js application 
app.use(bodyParser.urlencoded({

    extended:false
}))
//Main GET request

app.get('/', (req,res)=>{

    res.sendFile(__dirname + '/index.html')
})

// Go to POST handler

app.post('/monash', (req,res)=>{

    res.send('Thank you for this post request')
    console.log(req.body)
})

//listen to port 
app.listen(8080);
