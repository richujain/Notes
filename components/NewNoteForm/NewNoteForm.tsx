import { useState, useRef } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import classes from "./NewNoteForm.module.css";
import Modal from "../UI/Modal/Modal";

interface Props {
  onClose: () => void;
}
export default function NewNoteForm(props: Props) {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current!.value;
    const enteredPassword = passwordInputRef.current!.value;
  };

  const closeHandler = (event: React.FormEvent) => {
    event.preventDefault();
    props.onClose();
  };
  return (
    <Modal>
      <Card className={classes.login}>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <input
              ref={emailInputRef}
              placeholder="Title"
              style={{ fontSize: "30px" }}
              id="title"
            />
          </div>
          <div className={classes.control}>
           
            <textarea style={{ border: 0, borderColor: 'white',width: '100%', height: '7rem', padding: '1rem' }} placeholder="Notes" id="email" />
          </div>
          <div className={classes.control}>
            <input ref={emailInputRef} placeholder="Category" id="email" />
          </div>
          <div className={classes.control}>
            <input ref={emailInputRef} placeholder="Color" id="email" />
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
    </Modal>
  );
}
