import classes from "./NavBar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  const currentRoute = router.pathname;
  console.log(currentRoute);
//   const className = currentRoute == "/allnotes" ? "classes.active" : "classes.active"
  const className = "classes.active"
  console.log(className);

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
      <Link href="/allnotes/asd">
        <a href="/allnotes/">Logout</a>
      </Link>
    </header>
  );
}
