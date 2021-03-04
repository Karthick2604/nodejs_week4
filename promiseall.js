function company_name(company){
 return new Promise ((resolve,reject)=>{
     
        setTimeout(()=>{
            resolve(company);
        },210);
     })
}
function job_details(job) {
   return new Promise((resolve,reject) =>{       
        setTimeout(()=>{
            resolve(job)
        },200)
    });  
}
function application_detail(application){
    return new Promise ((resolve,reject)=>{
       
            setTimeout(()=>{
                resolve(application)
            },500)
    })
}
function salary(package) {
    return new Promise ((resolve,reject)=>{  
            setTimeout(()=>{
                resolve(package)
            },3000)
        reject(new Error("oops4!"));
    })
}
Promise.all( 
    [
        company_name('Claritytts').catch(error =>{ return error}),
        job_details('software developer') .catch(error =>{ return error}),
        application_detail('fresher').catch(error =>{ return error}),
        salary().catch(error =>{ return error})
    ]
    ).then(console.log)