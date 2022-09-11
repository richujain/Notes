import React from "react";
import classes from "./Note.module.css";

// const Note: React.FC<{note: NoteModel}> = (props) =>  {
const Note: React.FC<{
  id: string;
  title: string;
  body: string;
  color: string
}> = (props) => {
  return (
    <div className={classes.note}  style={{backgroundColor: `${props.color}`}}>
      <li className={classes.li}>
        <div>
          <h1>{props.title} </h1>
        </div>
        <div>{props.body}</div>
        <div className={classes.dot} style={{backgroundColor: `${props.color}`}}></div>
      </li>
    </div>
  );
};

export default Note;
