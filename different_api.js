const express=require('express');
const app=express();
const port=6000;
var data={
    name:"karthick",
    age: "23",
    address: "kundrathur"
}
//get method
app.get('/',(req,res)=>{    
res.send(data);
})
/**/
app.listen(port,()=>{
    console.log("server running at 6000");
})
