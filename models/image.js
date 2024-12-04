import mongoose from "mongoose"; 
const { Schema, model } = mongoose; 

const ImageSchema = new Schema({
    url: {
        type: String, 
        required: true, 
    },
    publicId: {
        type: String, 
        required: true
    }, 
    uploadedBy: {
        type: Schema.Types.ObjectId, 
        ref: "User", 
        required: "true"
    }
}, {timestamps: true})

export const Image = model("Image", ImageSchema); 