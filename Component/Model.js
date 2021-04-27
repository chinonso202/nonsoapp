const mongoose = require("mongoose")

const schemaStructure = mongoose.Schema({
    item:{
        type:"String",
        required:true,
        unique:true
        },
    
        price:{
            type:"string",
            required:true,
            unique:true
    
        }
    })

module.exports = mongoose.model("stocks", schemaStructure)
