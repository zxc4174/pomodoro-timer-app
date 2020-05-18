import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    IconButton
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { useState, useEffect } from "react";
import alarm from "../audio/alarm.mp3";

let audio = new Audio(alarm);
function playAlarm() {
    audio.play();
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        titleText: {
            color: "#202020",
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


export const RestTimerComponent = (props) => {
    const classes = useStyles();
    const [show, setShow] = useState(true);
    const [restTimer, setRestTimer] = useState(props.restingTime * 60);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setRestTimer((restTimer) => restTimer - 1);
            }, 1000);
        } else if (!isActive) {
            clearInterval(interval);
        }

        if (restTimer === 0) {
            clearInterval(interval);
            playAlarm();
            alert("Time up");
            audio.pause();
            audio.currentTime = 0;
            setShow(false);
        }
        return () => clearInterval(interval);
        // eslint-disable-next-line
    }, [isActive, restTimer]);

    const handelTimerStart = () => {
        console.log(isActive ? "handelTimerPause" : "handelTimerStart");
        setIsActive(!isActive);
    };

    const handleClose = () => {
        setShow(false);
        setIsActive(false);
        console.log("handelClose");
    };

    return (
        <>
            <Dialog open={show}>
                <DialogTitle >
                    <strong className={classes.titleText}>Rest Timer</strong>
                    <div className={classes.closeButton} onClick={handleClose} >
                        <IconButton aria-label="close" style={{ padding: 0, width: "33px", height: "33px" }} >
                            <i className="fas fa-times" style={{ color: "lightGray", padding: 0, marginTop: "-10px" }}></i>
                        </IconButton>
                    </div>
                </DialogTitle>
                <DialogContent style={{ padding: 0 }}>
                    <DialogContentText>
                        <span className="timer" style={{ color: "#202020", margin: "0" }}>
                            {" "}
                            {Math.floor(restTimer / 60)}:
                            {restTimer - Math.floor(restTimer / 60) * 60 < 10 ? "0" : ""}
                            {restTimer - Math.floor(restTimer / 60) * 60}
                        </span>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <button
                        onClick={handelTimerStart}
                        disabled={restTimer === 0 ? true : false}
                        className="action-button"
                    >
                        {isActive ? "PAUSE" : "START"}
                    </button>
                    <button onClick={handleClose} className="action-button">CLOSE</button>
                </DialogActions>
            </Dialog >
        </>
    );
}


export default RestTimerComponent;
