import React from 'react'
import NoteModel from '../../models/note'
import Note from './Note';

const Notes: React.FC<{allNotes: NoteModel[];}> = (props) =>  {
  return (
    <ul>
      {props.allNotes.map((note) => (
        <Note
          key = {note.id}
          // note = {[{id: note.id, title: note.title, body: note.body, category: note.category}]}
          id = {note.id}
          title = {note.title}
          body = {note.body}
          category = {note.category}
        />
      ))}
    </ul>
  )
}

export default Notes