import React from 'react'
import NoteModel from '../../models/note';

// const Note: React.FC<{note: NoteModel}> = (props) =>  {
const Note: React.FC<{id: string; title: string; body: string; category: string}> = (props) =>  {
  return (
    <li>
      {props.title} {props.body}
    </li>
  )
}

export default Note
