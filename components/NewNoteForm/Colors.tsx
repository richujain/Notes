import React, { Fragment } from 'react'
import classes from './Colors.module.css'
interface Props {
    colors: {
        id: string; // I assume ID is defined elsewhere
        name: string;
      }[]
  }
export default function Colors(props: Props) {
  return (
    <Fragment>
        <div className={classes.listColorDiv}>
            {props.colors.map((color) => 
                 <div
                 className={classes.dot}
                 style={{ backgroundColor: `${color.id}` }}
               ></div>
            )}
          </div>
    </Fragment>
  )
}
