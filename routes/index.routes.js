import { Router } from "express";
import { saludo, pong, polo, abc } from "../controllers/index.controllers.js";

const router = Router();

router.get("/", saludo);
router.get("/ping", pong);
router.get("/marco", polo);
router.get("/a/b/c", abc);

export default router;