import React, { useState, useRef } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import classes from "./NewNoteForm.module.css";
import Modal from "../UI/Modal/Modal";
import colorClasses from "./Colors.module.css";
import { useDispatch } from "react-redux"
import { noteActions } from "../../store/notes-slice";


interface Props {
  onClose: () => void;
}

const CATEGORIES = [
  { id: "p1", name: "Reminder" },
  { id: "p2", name: "Grocery List" },
  { id: "p3", name: "Daily Log" },
  { id: "p4", name: "Undefined" },
];
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

export default function NewNoteForm(props: Props) {
  const dispatch = useDispatch()

  const [color, setColor] = useState("white");
  const [body, setBody] = useState("");
  let enteredTitle, noteData: any;
  const titleRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    const localId = localStorage.getItem('localId')
    event.preventDefault();
    enteredTitle = titleRef.current!.value;
    noteData = {
      title: enteredTitle,
      body: body,
      color: color,
      localId: localId
    };
    dispatch(
      noteActions.addToNotes({ 
        id: new Date().getTime(),
        title: enteredTitle,
        body,
        color,
        localId
      })
    )
    addToDatabase();
  };

  async function addToDatabase() {
    
    //change url when hostin https://notes.com/abc
    const response = await fetch("../api/newnote", {
      method: "POST",
      body: JSON.stringify(noteData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    props.onClose();
  }

  const closeHandler = (event: React.FormEvent) => {
    event.preventDefault();
    props.onClose();
  };

  const colorHandler = (event: React.FormEvent, color: string) => {
    setColor(color);
  };

  const bodyHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(event.currentTarget.value);
  };

  const insertBulletPoint= (event: any) => {
    console.log(event.key)
  };
  return (
    <Modal className={classes.container}>
      <div className="container" style={{ backgroundColor: `${color}` }}>
        <Card className={classes.login}>
          <form onSubmit={submitHandler}>
            <div className={classes.control}>
              <input
                placeholder="Title"
                style={{ fontSize: "2em", backgroundColor: `${color}` }}
                id="title"
                ref={titleRef}
              />
            </div>
            <div className={classes.control}>
              <textarea
                value={body}
                onChange={bodyHandler}
                onKeyDown={insertBulletPoint}
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
                // ref={bodyRef}
              />
            </div>

            {/* Category goes here */}

            <div className={classes.actions}>
              <Button onClick={submitHandler}>Add Note</Button>
              <Button onClick={closeHandler}>Close</Button>
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
    </Modal>
  );
}

{
  /* Categories
          <div className={categoriesClasses.dropdown}>
            <button className={categoriesClasses.dropbtn}>Category</button>
            <div className={categoriesClasses.dropdowncontent}>
              {CATEGORIES.map((category) => (
                <a href="#">{category.name}</a>
              ))}
            </div>
          </div> */
}
