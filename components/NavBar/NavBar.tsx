import classes from "./NavBar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
interface Props {
  onLogout: () => void;
  openForm: () => void;
}
// I can access the logout function here using useContext instead of passing it thourgh props. 
export default function NavBar(props: Props) {
  const router = useRouter();
  const currentRoute = router.pathname;
const logoutHandler = (event: React.FormEvent) => {
  event.preventDefault();
  localStorage.removeItem('localId')
  props.onLogout()
}
  return (
    <header className={classes.header}>
      <Link href="/allnotes">
        <a className={currentRoute == "/allnotes" ? classes.active : ""} href="/allnotes">
          Notes
        </a>
      </Link>

      {/* <Link href="/addnote">
        <a className={currentRoute == "/addnote" ? classes.active : ""}>Add </a>
      </Link> */}
      <Link href="#">
        <a onClick={props.openForm}>Add </a>
      </Link>
      <Link href="#">
        <a onClick={logoutHandler}>Logout</a>
      </Link>
    </header>
  );
}
