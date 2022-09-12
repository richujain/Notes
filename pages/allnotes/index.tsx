import { useContext, useEffect, useState } from "react";
import AuthContext from "../../store/auth-context";
import { useRouter } from "next/router";
import NavBar from "../../components/NavBar/NavBar";
import Notes from "../../components/Notes/Notes";
import classes from "./index.module.css";
import NewNoteForm from "../../components/NewNoteForm/NewNoteForm";
import { MongoClient } from "mongodb";
import { useDispatch, useSelector } from "react-redux";
import { noteActions } from "../../store/notes-slice";

const DUMMY_NOTES = [
  {
    id: "1",
    title: "Title One",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    category: "noteCategory",
    color: "#F28B82",
  },
  {
    id: "2",
    title: "Title Two",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    category: "noteCategory",
    color: "#D7AEFB",
  },
  {
    id: "3",
    title: "Title Three",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    category: "noteCategory",
    color: "#CBF0F8",
  },
  {
    id: "4",
    title: "Title Four",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    category: "noteCategory",
    color: "#FFF475",
  },
  {
    id: "5",
    title: "Title Five",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    category: "noteCategory",
    color: "#FDCFE8",
  },
  {
    id: "6",
    title: "Title Five",
    body: "survived not only five centuries, but also the leap into electronic typesetting",
    category: "noteCategory",
    color: "#FDCe34",
  },
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
interface Props {
  notes: {
    id: string;
    title: string;
    body: string;
    color: string;
  }[];
}

export default function AllNotes(props: Props) {
  const dispatch = useDispatch();
  let isInitial = true;
  const [showForm, setShowForm] = useState(false);
  const router = useRouter();
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    if (!authCtx.isLoggedIn) {
      router.replace("/");
    }
    if (isInitial) {
      isInitial = false;
      dispatch(noteActions.updateNotes(props.notes));
    } else {
      return;
    }
  }, [props.notes]);
  let notesFromRedux = useSelector((state: any) => state.notes);
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
    <div className={classes.container}>
      <NavBar onLogout={logoutHandler} openForm={showFormHandler} />
      <Notes allNotes={notesFromRedux} />
      {showForm && <NewNoteForm onClose={hideFormHandler} />}
    </div>
  );
}
export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://cluster0:Password95@cluster0.cuhicor.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();
  const notesCollection = db.collection("notes");

  const notes = await notesCollection.find().toArray();

  client.close();

  return {
    //always returns an object
    props: {
      notes: notes.reverse().map((note) => ({
        title: note.title,
        body: note.body,
        color: note.color,
        id: note._id.toString(),
      })),
    },
    revalidate: 1, // You can recreate static page from server every 10 seconds if there are continous requests coming for this particular page. So you can make sure that your data is not older than 10 seconds.
  };
}
