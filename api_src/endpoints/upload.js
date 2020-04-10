import express from "express";
import multer from "multer";
import * as fs from "fs";
import store from "../store/store";
import { actions as sharedStateActions } from "./../../shared/store/sharedState";

const router = express.Router()

const uploadPath = `${__dirname.split("/api_dist")[0]}/uploads`;
const storage = multer.memoryStorage()
const upload = multer({ storage: storage }).single("recfile");

router.use(upload)

router.post("/upload", (req, res) => {
    const {
        originalname: filename,
        buffer,
        size
    } = req.file;

    const filePathname = `${uploadPath}/${filename}`

    if (fs.existsSync(filePathname)) {
        res.status(400).send("Duplicate filenames disallowed")
    } else {
        fs.writeFile(filePathname, buffer, () => {});
        store.dispatch(sharedStateActions.addNewFilename(filename));
        res.sendStatus(204);
    }
})

export default router;
