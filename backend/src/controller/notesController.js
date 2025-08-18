import Note from "../model/Note.js";

export const getRoute=async(_,res)=>{
    try {
        const notes=await Note.find().sort({createdAt:-1});
        res.status(200).json({
            message:"All notes fetched",
            data:notes
        })   
    } catch (error) {
        res.status(500).json({message:error.message})
    }

}

export const getRouteNote=async(req,res)=>{
    try {
        const {id}=req.params;
        const notes=await Note.findById(id);
        if(!notes){
            return res.status(404).send({message:"Note not found"})
        }
        res.status(200).json({
            message:"Note fetched",
            data:notes
        })   
    } catch (error) {
        res.status(500).json({message:error.message})
    }

}

export const postRoute=async(req,res)=>{
    try {
        const {title,content}=req.body

        if(!title && !content){
            return res.status(400).json({message:"Title and Content are required"})
        }

        const newNote=await Note.create({title,content});

        res.status(201).json({
            message:"New note created",
            data:newNote
        })

    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const putRoute= async(req, res) => {
    try {
        const {id}=req.params;
        const {title,content}=req.body;

        if(!title && !content){
            return res.status(400).json({message:"Title and Content required"})
        }

        const updateNote=await Note.findByIdAndUpdate(
            id,
            {title,content},
            {new:true}
        );

        if(!updateNote){
            res.status(404).json({message:"Note note found"})
        }
        res.status(201).json({
            message:"Note updated successfully",
            data:updateNote
        })
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}   

export const deleteRoute=async(req, res) => {
    try {
        const {id}=req.params;
        const deleteNote=await Note.findByIdAndDelete(id);

        if(!deleteNote){
            res.status(404).json({message:"Delete id not found"})
        }

        res.status(200).json({
            message:"Note delete successfully",
            data:deleteNote
        })   
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}