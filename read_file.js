const fs = require('fs')
async function fname() {
    await fs.readFile('/home/haridha/Documents/hari.txt',(err, data) => {
     if (err) {
      throw (err)
    }
    console.log(data.toString());
    })   
}
async function wname() {
 await fs.writeFile('/home/haridha/Documents/hari12.txt','hi karthick you are good boy',(err,data)=>{
        if(err)
            throw err
       console.log("data write successfully");
   })   
}
fname();
wname();