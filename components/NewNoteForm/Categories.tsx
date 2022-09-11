import React, { Fragment } from "react";
import classes from "./Categories.module.css";
interface Props {
  categories: {
    id: string; // I assume ID is defined elsewhere
    name: string;
  }[];
}
export default function Categories(props: Props) {
  return (
    <Fragment>
      <div className={classes.dropdown}>
        <button className={classes.dropbtn}>Category</button>
        <div className={classes.dropdowncontent}>
          {props.categories.map((category) => (
            <a href="#">{category.name}</a>
          ))}
        </div>
      </div>
      
    </Fragment>
  );
}
