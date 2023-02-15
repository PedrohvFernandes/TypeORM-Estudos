import express from "express";
import { RoomController } from "./controllers/RoomController";
import { SubjectController } from "./controllers/SubjectController";

export const routes = express.Router();

routes.post('/subject', new SubjectController().create)

routes.post('/room', new RoomController().create)

routes.post('/room/video/:room_id/create', new RoomController().createVideo)

routes.post('/room/:room_id/subject', new RoomController().roomSubject)

routes.get('/rooms', new RoomController().list)