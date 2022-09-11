import React, { useState, useRef } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import classes from "./NewNoteForm.module.css";
import Modal from "../UI/Modal/Modal";
import colorClasses from "./Colors.module.css";
import categoriesClasses from "./Categories.module.css";

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
  const [color, setColor] = useState("white");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const closeHandler = (event: React.FormEvent) => {
    event.preventDefault();
    props.onClose();
  };

  const colorHandler = (event: React.FormEvent, color: string) => {
    event.preventDefault();
    setColor(color);
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
              />
            </div>
            <div className={classes.control}>
              <textarea
                style={{
                  border: 'none',
                  borderColor: "white",
                  width: "100%",
                  height: "12rem",
                  padding: "0.50rem",
                  resize: "none",
                  fontSize: "1.7em",
                  textTransform: "capitalize",
                  outline: 'none',
                  backgroundColor: `${color}`,
                }}
                placeholder="Notes"
                id="email"
              />
            </div>

            {/* Category goes here */}

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

            <div className={classes.actions}>
              {!isLoading && <Button onClick={submitHandler}>Add Note</Button>}
              {error && (
                <p style={{ color: "red", marginBottom: -25 }}>Invalid Entry</p>
              )}
              {isLoading && <p>Sending Request...</p>}
              <Button onClick={closeHandler}>Close</Button>
            </div>
          </form>
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
