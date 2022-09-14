import React, { useRef, useState } from "react";
import classes from "./EditNotes.module.css";
import Card from "../UI/Card/Card";
import { useDispatch } from "react-redux";
import Button from "../UI/Button/Button";
import colorClasses from "../NewNoteForm/Colors.module.css";
import { useRouter } from "next/router";


const COLORS = [
  { id: "#F28B82", name: "Red" },
  { id: "#FBBC05", name: "Orange" },
  { id: "#FFF475", name: "Yellow" },
  { id: "#CCFF90", name: "Green" },
  { id: "#A7FFEB", name: "Teal" },
  { id: "#CBF0F8", name: "Blue" },
  { id: "#AECBFA", name: "Dark Blue	" },
  { id: "#D7AEFB", name: "Purple" },
  { id: "#FDCFE8", name: "Pink" },
  { id: "#E6C9A8", name: "Brown" },
  { id: "#E8EAED", name: "Gray" },
];
// const Note: React.FC<{note: NoteModel}> = (props) =>  {
const EditNote: React.FC<{
  id: string;
  title: string;
  body: string;
  color: string;
}> = (props) => {
  const dispatch = useDispatch();

  const [color, setColor] = useState(props.color);
  const [body, setBody] = useState(props.body);
  const [title, setTitle] = useState(props.title);
  const id = props.id;
  const router = useRouter();

  //   const [bulletPoints, setBulletPoints] = useState(false);
  let noteData: any;
  const titleRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLTextAreaElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    const localId = localStorage.getItem("localId");
    event.preventDefault();
    noteData = {
      id: id,
      title: title,
      body: body,
      color: color,
      localId: localId,
    };
    updateNote();
  };

  async function updateNote() {
    //change url when hostin https://notes.com/abc
    const response = await fetch("../api/updatenote", {
      method: "POST",
      body: JSON.stringify(noteData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    router.replace("/allnotes");
  }

  const titleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value);
  };

  const colorHandler = (event: React.FormEvent, color: string) => {
    setColor(color);
  };

  const bodyHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(event.currentTarget.value);
  };

  //   const insertBulletPoint = (event: any) => {
  //     if (bulletPoints && event.key == "Enter") {
  //       setBody(event.currentTarget.value + '• ')
  //     }
  //     console.log('insertBulletPoint')

  //   };

  //   const bulletPointHandler = (event: any) => {
  //     event.preventDefault()
  //     // setBody(event.currentTarget.value + '• ') // not working
  //     setBody(bodyRef.current.value + '• ')

  //     setBulletPoints(!bulletPoints ); // Not Working. Value not changing.
  //     console.log(bulletPoints)
  //   };
  return (
    // style={{ backgroundColor: `${color}`, width: '60%' }}
    <div>
      <div style={{ backgroundColor: `${color}`, width: "40rem" }}>
        <Card className={classes.login} style={{ backgroundColor: "red" }}>
          <form onSubmit={submitHandler}>
            <div className={classes.control}>
              <input
                placeholder="Title"
                style={{ fontSize: "2em", backgroundColor: `${color}` }}
                id="title"
                value={title}
                ref={titleRef}
                onChange={titleHandler}
              />
            </div>
            <div className={classes.control}>
              <textarea
                value={body}
                onChange={bodyHandler}
                // onKeyUp={insertBulletPoint}
                style={{
                  border: "none",
                  borderColor: "white",
                  width: "100%",
                  height: "12rem",
                  padding: "0.50rem",
                  resize: "none",
                  fontSize: "1.7em",
                  textTransform: "-moz-initial",
                  outline: "none",
                  backgroundColor: `${color}`,
                }}
                placeholder="Notes"
                id="body"
                ref={bodyRef}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                // justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              {/* <button
                onClick={bulletPointHandler}
                className={classes.button}
                style={{
                  backgroundColor: "transparent",
                  alignSelf: "center",
                }}
            
              >
                <img
                  style={{ height: "3rem" }}
                  src="/static/bulleticonsmall.png"
                  alt="my image"
                  onClick={bulletPointHandler} />
              </button>  */}

              {/* <Button onClick={submitHandler}>Update Note</Button> */}
              <Button onClick={submitHandler}>Update Note</Button>
            </div>
          </form>

          <div className={colorClasses.listColorDiv}>
            {COLORS.map((color) => (
              <button
                // data-value={color.name}
                key={color.id}
                onClick={(e) => colorHandler(e, color.id)}
                className={colorClasses.dot}
                style={{ backgroundColor: `${color.id}` }}
              ></button>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default EditNote;
