import React from "react";
import classes from "./Note.module.css";
import { useRouter } from "next/router";

// const Note: React.FC<{note: NoteModel}> = (props) =>  {
const EditNote: React.FC<{
  id: string;
  title: string;
  body: string;
  color: string;
}> = (props) => {
  const router = useRouter();

  const openNotesHandler = () => {
    router.push("/allnotes/" + props.id);
  };
  return (
    <div
      onClick={openNotesHandler}
      className={classes.note}
      style={{ backgroundColor: `${props.color}` }}
    >
      <li className={classes.li}>
        <div>
          <h1>{props.title} </h1>
        </div>
        <div>{props.body}</div>
        <div
          className={classes.dot}
          style={{ backgroundColor: `${props.color}` }}
        ></div>
      </li>
    </div>
  );
};

export default EditNote;
