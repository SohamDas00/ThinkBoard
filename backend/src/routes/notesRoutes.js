import express from "express"
import { deleteRoute, getRoute, getRouteNote, postRoute, putRoute } from "../controller/notesController.js";
const router=express.Router();

router.get('/',getRoute)

router.get('/:id',getRouteNote)

router.post('/',postRoute)

router.put('/:id',putRoute);

router.delete('/:id', deleteRoute);

export default router