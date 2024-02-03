const mongoose = require('mongoose');
 const Schema = mongoose.Schema;

 const projectSchema = new Schema(
    {
        name: {
            type: "string",
        },
        type: {
            type: "string",
        }
    }
 )
 module.exports = mongoose.model("Project", projectSchema)