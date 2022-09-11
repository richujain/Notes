import React from 'react'
import NoteModel from '../../models/note'
import Note from './Note';
import classes from './Notes.module.css'
import Layout from '../UI/Layout/Layout'


const Notes: React.FC<{allNotes: NoteModel[];}> = (props) =>  {
  return (
    <Layout>
      <ul className={classes.notes}>
      {props.allNotes.map((note) => (
        
        <Note
          key = {note.id}
          id = {note.id}
          title = {note.title}
          body = {note.body}
          category = {note.category}
          color = {note.color}
        />
      ))}
    </ul>
    </Layout>
  )
}

export default Notes