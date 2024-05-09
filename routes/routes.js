const express=require('express');
const router=express.Router();
const signUpTemplatecopy=require('../model/Signupmodel');

router.post('/signup',(request,response)=>
{
    const sam=new signUpTemplatecopy({
        fullName:request.body.fullName,
        username:request.body.username,
        email:request.body.email,
        password:request.body.password,
    })
    sam.save().then(data=>
        {
            response.json(data);
            console.log('Data is added successfully');
        }).catch(error=>
            {
              response.json(error)
            })
    
})
module.exports=router;