import { useContext, useEffect } from "react";
import Button from "../../components/UI/Button/Button";
import AuthContext from "../../store/auth-context";
import { useRouter } from "next/router";
import NavBar from "../../components/NavBar/NavBar";
import Notes from '../../components/Notes/Notes'

const DUMMY_NOTES = [
  {id: '1', title: 'noteTitle', body: 'noteBody', category: 'noteCategory' },
  {id: '2', title: 'noteTitle', body: 'noteBody', category: 'noteCategory' },
  {id: '3', title: 'noteTitle', body: 'noteBody', category: 'noteCategory' },
  {id: '4', title: 'noteTitle', body: 'noteBody', category: 'noteCategory' },
  {id: '5', title: 'noteTitle', body: 'noteBody', category: 'noteCategory' },
]


export default function AllNotes() {
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
  return (
    <div>
        <div>
          <NavBar onLogout={logoutHandler} />
          {/* <Button onClick={logoutHandler}>Logout</Button> */}
          
        </div>
        <Notes allNotes={DUMMY_NOTES} />
    </div>
  );
}
