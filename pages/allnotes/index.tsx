import { useContext, useEffect, useState } from "react";
import AuthContext from "../../store/auth-context";
import { useRouter } from "next/router";
import NavBar from "../../components/NavBar/NavBar";
import Notes from '../../components/Notes/Notes'
import classes from './index.module.css'
import NewNoteForm from "../../components/NewNoteForm/NewNoteForm";

const DUMMY_NOTES = [
  {id: '1', title: 'Title One', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', category: 'noteCategory', color: '#F28B82' },
  {id: '2', title: 'Title Two', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', category: 'noteCategory', color: '#D7AEFB' },
  {id: '3', title: 'Title Three', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', category: 'noteCategory', color: '#CBF0F8' },
  {id: '4', title: 'Title Four', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', category: 'noteCategory', color: '#FFF475' },
  {id: '5', title: 'Title Five', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', category: 'noteCategory', color: '#FDCFE8' },
  {id: '5', title: 'Title Five', body: 'survived not only five centuries, but also the leap into electronic typesetting', category: 'noteCategory', color: '#FDCe34' },
]

const COLORS = [
  {id: '#F28B82', name: 'Red'},
  {id: '#FBBC05', name: 'Orange'},
  {id: '#FFF475', name: 'Yellow'},
  {id: '#CCFF90', name: 'Green'},
  {id: '#A7FFEB', name: 'Teal'},
  {id: '#CBF0F8', name: 'Blue'},
  {id: '#AECBFA', name: 'Dark Blue	'},
  {id: '#D7AEFB', name: 'Purple'},
  {id: '#FDCFE8', name: 'Pink'},
  {id: '#E6C9A8', name: 'Brown'},
  {id: '#E8EAED', name: 'Gray'},
]


export default function AllNotes() {
  const [showForm, setShowForm] = useState(false)
  const router = useRouter();
  const authCtx = useContext(AuthContext);
  useEffect(() => {
    if (!authCtx.isLoggedIn) {
      router.replace("/");
    }
  })

  const logoutHandler = () => {
    authCtx.logout();
    router.push("/");
    console.log("logout");
  };

  const showFormHandler = () => {
    setShowForm(true)
  }

  const hideFormHandler = () => {
    setShowForm(false)
  }
  return (
    <div className={classes.container}>
          <NavBar onLogout={logoutHandler} openForm={showFormHandler}/>
          <Notes allNotes={DUMMY_NOTES} />
          {showForm && <NewNoteForm onClose={hideFormHandler}/>}
    </div>
  );
}
