const express = require('express');
const app = express();
const port = 3000;




app.get('/profile', (req, res)=> {
    
console.log(req.query.city,req.query.pincode);
res.send(`Hello guys ${req.query.city} ${req.query.pincode}`);
}); 

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

