import express from "express";
import store from "../store/store";
import {
  actions as sharedStateActions,
} from "../../shared/store/sharedState";

const router = express.Router()

router.post("/simulate",  (req, res) => {
    const { flag } = req.body;
    console.log(" A BOOOOOOOOOOL", flag)
    store.dispatch(sharedStateActions.simulateForcedDiskSpace(flag));
    res.send(204)
})

export default router;