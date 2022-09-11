import classes from "./NavBar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
interface Props {
  onLogout: () => void;
}

export default function NavBar(props: Props) {
  const router = useRouter();
  const currentRoute = router.pathname;
const logoutHandler = (event: React.FormEvent) => {
  event.preventDefault();
  props.onLogout()
  console.log('ff')
}
  return (
    <header className={classes.header}>
      <Link href="/allnotes">
        <a className={currentRoute == "/allnotes" ? classes.active : ""} href="/allnotes">
          Notes
        </a>
      </Link>

      <Link href="/addnote">
        <a className={currentRoute == "/addnote" ? classes.active : ""}>Add </a>
      </Link>
      <Link href="#">
        <a onClick={logoutHandler}>Logout</a>
      </Link>
    </header>
  );
}
