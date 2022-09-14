import NoteModel from "../../models/note";
import Note from "./Note";
import classes from "./Notes.module.css";
import Layout from "../UI/Layout/Layout";
import { useEffect, useState } from "react";

const Notes: React.FC<{ allNotes: NoteModel[] }> = (props) => {
  console.log(props)
  const [userLoginId, setUserLoginId] = useState<string | null>();
  useEffect(() => {
    if(localStorage.getItem("localId")){
      setUserLoginId(localStorage.getItem("localId"));
    }

  },[]);

  return (
    <Layout>
      <ul className={classes.notes}>

        
        {props.allNotes.flatMap((note) =>
          note.localId == userLoginId ? (
            <Note
              key={note.id}
              id={note.id}
              title={note.title}
              body={note.body}
              color={note.color}
            />
          ) : (
            []
          )
        )}


      </ul>
    </Layout>
  );
};

export default Notes;

// {props.allNotes.flatMap(note => note.localId == userLocalId ? (

//   <Note
//     key = {note.id}
//     id = {note.id}
//     title = {note.localId}
//     body = {note.body}
//     color = {note.color}
//   />
// ): [])}

// {props.allNotes.flatMap((note) => (

//   <Note
//     key = {note.id}
//     id = {note.id}
//     title = {userLoginId}
//     body = {note.body}
//     color = {note.color}
//   />
// ))}
