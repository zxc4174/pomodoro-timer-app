import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    IconButton
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { useState } from "react";
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        descriptionButton: {
            cursor: "pointer",
            color: "#4fd1c5",
            "&:hover": {
                color: "#00ffcb"
            },
        },
        titleText: {
            color: "#202020",
        },
        contentText: {
            backgroundColor: "#eeeeee",
            color: "#202020",
            fontSize: "0.75rem",
            marginBottom: 0,
            padding: "1rem",
            textAlign: "left",
        },
        closeButton: {
            padding: 0,
            position: 'absolute',
            right: theme.spacing(2),
            top: theme.spacing(1),
            color: theme.palette.grey[500],
            alignItems: "center"
        }
    }),
);

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

export const DescriptionDialogComponent = () => {
    const classes = useStyles();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <span onClick={handleShow} className={classes.descriptionButton}>
                ( See more about Pomodoro Technique )
            </span>
            <Dialog open={show} onKeyUp={(event) => { if (event.keyCode === 27) handleClose(); }} TransitionComponent={Transition}>
                <DialogTitle>
                    <strong className={classes.titleText}>Pomodoro Technique Description</strong>
                    <div className={classes.closeButton} onClick={handleClose} >
                        <IconButton aria-label="close" style={{ padding: 0, width: "33px", height: "33px" }} >
                            <i className="fas fa-times" style={{ color: "lightGray", padding: 0, marginTop: "-10px" }}></i>
                        </IconButton>
                    </div>
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
                    <button onClick={handleClose} variant="contained" className="action-button">
                        Close
                    </button>
                </DialogActions>
            </Dialog >
        </>
    );
}


export default DescriptionDialogComponent;
