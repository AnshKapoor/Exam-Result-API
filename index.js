// Get the adodb module
const express = require('express');
const accessdb = require('./Connection/connect');
const app = express();
const port = process.env.PORT || 3000;
app.get('/',(req,res)=>{
  res.send(company);
});
app.get('/ids/:id/:id2/:id3',(req,res)=>{
  accessdb.getData(req.params,(comp,param)=>{
    console.log(param);
    res.send(comp);
  })
  
});
app.listen(port,()=>{console.log(`listening on port ${port}`)});


// Connect to the MS Access DB

