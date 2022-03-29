const express = require('express');
const bodyParser=require(`body-parser`);
const app = express();
const port = 3000;



app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.post('/profile',(req,res)=> {
console.log(req.body.city,req.body.pincode)
res.send(`Hello guys ${req.body.city}${req.body.pincode}`);
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
