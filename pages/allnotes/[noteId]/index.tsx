import { useRouter } from "next/router";
import NavBar from "../../../components/NavBar/NavBar";
import React, { useContext, useState } from "react";
import AuthContext from "../../../store/auth-context";
import NewNoteForm from "../../../components/NewNoteForm/NewNoteForm";
import { MongoClient, ObjectId } from "mongodb";
import EditNote from "../../../components/Notes/Note";

export default function NoteDetails(props: any) {
  const [showForm, setShowForm] = useState(false);
  const authCtx = useContext(AuthContext);
  const router = useRouter();


  // interface fetchFunctionReturnType extends WithId<Document> {
  //   id: string,
  //   title: string,
  //   body: string,
  //   localId: string,
  //   color: string,
  // }

  // async function fetchNotesById(): fetchFunctionReturnType {
  // async function fetchNotesById() {
  //   const client = await MongoClient.connect(
  //     "mongodb+srv://cluster0:Password95@cluster0.cuhicor.mongodb.net/?retryWrites=true&w=majority"
  //   );
  //   const db = client.db();
  //   const notesCollection = db.collection("notes");

  //   notes = await notesCollection.find({ id: openedNoteId }).toArray();

  //   client.close();
  //   return notes;
  // }

  // useEffect(() => {
  //   fetchNotesById();
  // })

  // let notesFromRedux = useSelector((state: any) => state.notes);

  // console.log(notesFromRedux) //empty??
  // let filteredData = notesFromRedux.filter((note: any) => note.id == openedNoteId)
  // console.log(filteredData)

  const logoutHandler = () => {
    authCtx.logout();
    router.push("/");
  };

  const showFormHandler = () => {
    setShowForm(true);
  };

  const hideFormHandler = () => {
    setShowForm(false);
  };

  return (
    <React.Fragment>
      <NavBar onLogout={logoutHandler} openForm={showFormHandler} />
      {showForm && <NewNoteForm onClose={hideFormHandler} />}
      <EditNote
      key={props.noteData.id}
      id={props.noteData.id}
      title={props.noteData.title}
      body={props.noteData.body}
      color={props.noteData.color} />
    </React.Fragment>
  );
}

// export async function getStaticPaths(context: any) {
export async function getServerSideProps(context: any) {
  // const router = useRouter();
  // const openedNoteId = router.query;
  const openedNoteId = context.params.noteId

  // const selectedNoteId = new ObjectId(openedNoteId)
  const client = await MongoClient.connect(
    "mongodb+srv://cluster0:Password95@cluster0.cuhicor.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();
  const notesCollection = db.collection("notes");

  const selectedNote: any = await notesCollection.findOne({
    _id:  new ObjectId(openedNoteId)
  });

  client.close();
  return {
    props: {
      noteData: {
        id: selectedNote._id.toString(),
        title: selectedNote.title,
        body: selectedNote.body,
        color: selectedNote.color,
        localId: selectedNote.localId,
      },
      fallback: 'blocking'
    },
  };
}
