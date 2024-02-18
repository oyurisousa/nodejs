const mongoose = require("mongoose")

const validateId = (res, id)=>{
    if(mongoose.Types.ObjectId.isValid(id)){ //validation id
        return true
    }
    return false
}


module.exports = validateId
