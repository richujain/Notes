import { useState, useRef } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import classes from "./NewNoteForm.module.css";
import Modal from "../UI/Modal/Modal";
import Colors from "./Colors";
import Categories from "./Categories";

interface Props {
  onClose: () => void;
}
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

const CATEGORIES = [
  { id: "p1", name: "Reminder" },
  { id: "p2", name: "Grocery List" },
  { id: "p3", name: "Daily Log" },
];

export default function NewNoteForm(props: Props) {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const closeHandler = (event: React.FormEvent) => {
    event.preventDefault();
    props.onClose();
  };

  console.log(COLORS[1]);
  return (
    <Modal>
      <Card className={classes.login}>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <input
              ref={emailInputRef}
              placeholder="Title"
              style={{ fontSize: "2em" }}
              id="title"
            />
          </div>
          <div className={classes.control}>
            <textarea
              style={{
                border: 0,
                borderColor: "white",
                width: "100%",
                height: "8rem",
                padding: "0.50rem",
                resize: "none",
                fontSize: "1.7em",
                textTransform: "capitalize",
              }}
              placeholder="Notes"
              id="email"
            />
          </div>
          
          <Categories categories={CATEGORIES}/>
          <Colors colors={COLORS}/>

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
    </Modal>
  );
}
