const { request } = require('express');
const mongoose=require('mongoose');
const signUpTemplate=new mongoose.Schema(
    {
        fullName:{
            type:String,
            request:true,
        },
        username:{
            type:String,
            request:true,
        },
        email:{
            type:String,
            request:true
        },
        password:{
            type:String,
            request:true
        },
        date:{
          type:String,
          default:Date.now
        }

    })

module.exports=mongoose.model('mytable',signUpTemplate)

