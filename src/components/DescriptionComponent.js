import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { useState } from "react";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: 345,
        },
        topicText: {
            cursor: "pointer",
            color: "#4fd1c5"
        },
        titleText: {
            color: "black",
        },
        contentText: {
            backgroundColor: "#eeeeee",
            color: "black",
            fontSize: "0.75rem",
            marginBottom: 0,
            padding: "1rem",
            textAlign: "left",
        },
    }),
);

export const DescriptionComponent = () => {
    const classes = useStyles();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <span onClick={handleShow} className={classes.topicText}>
                ( See more about Pomodoro Technique )
            </span>
            <Dialog open={show}>
                <DialogTitle>
                    <strong className={classes.titleText}>Pomodoro Technique Description</strong>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText className={classes.contentText}>
                        There are six steps in the original technique:<br />
                            1.Decide on the task to be done.<br />
                            2.Set the pomodoro timer (traditionally to 25 minutes).<br />
                            3.Work on the task.<br />
                            4.End work when the timer rings and put a check mark on a piece of paper.<br />
                            5.If you have fewer than four check marks, take a short break (3–5 minutes), then go to step 2.<br />
                            6.After four pomodoros, take a longer break (15–30 minutes), reset your check mark count to zero, then go to step 1.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <button onClick={handleClose} variant="contained">
                        Close
                    </button>
                </DialogActions>
            </Dialog >
        </>
    );
}


export default DescriptionComponent;
