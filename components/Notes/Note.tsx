import React, { useEffect, useRef } from "react";
import classes from "./Note.module.css";
import { useRouter } from "next/router";

// const Note: React.FC<{note: NoteModel}> = (props) =>  {
const Note: React.FC<{
  id: string;
  title: string;
  body: string;
  color: string;
}> = (props) => {
  const router = useRouter();
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const openNotesHandler = () => {
    router.push("/allnotes/" + props.id);
  };
  useEffect(() => {
    textAreaRef.current.style.height = "0px";
    const scrollHeight = textAreaRef.current.scrollHeight;
    textAreaRef.current.style.height = scrollHeight + "px";
  }, [props.body]);

  return (
    <div
      onClick={openNotesHandler}
      className={classes.note}
      style={{ backgroundColor: `${props.color}` }}
    >
      <li className={classes.li}>
        <div>
          {/* className={classes.h1} */}
          <h1 className={classes.h1}>{props.title} </h1>
        </div>
        {/* <p>{props.body}</p> */}

        <textarea
          value={props.body}
          style={{
            border: "none",
            borderColor: "white",
            width: "100%",
            padding: "0.50rem",
            resize: "none",
            // height: "10rem",
            fontSize: "1.7em",
            textTransform: "-moz-initial",
            backgroundColor: `${props.color}`,
          }}
          placeholder="Notes"
          id="body"
          readOnly
          rows={1}
          ref={textAreaRef}
          // disabled
        />

        <div
          className={classes.dot}
          style={{ backgroundColor: `${props.color}` }}
        ></div>
      </li>
    </div>
  );
};

export default Note;
