import React, { Fragment } from 'react'
import classes from './Modal.module.css'

const Backdrop = props => {
  return <div className={classes.backdrop} onClick={props.onClose} />
}

const ModalOverlay = props => {
  return <div className={classes.modal}>
    <div className={classes.content}>
      {props.children}
    </div>
  </div>
}


export default function Modal(props) {
  
  return (
    <Fragment>
      <Backdrop onClose={props.onClose} />
      <ModalOverlay>{props.children}</ModalOverlay>
    </Fragment>
  )
}




// import React, { Fragment } from 'react'
// import ReactDOM from 'react-dom'
// import classes from './Modal.module.css'

// const Backdrop = props => {
//   return <div className={classes.backdrop} onClick={props.onClose} />
// }

// const ModalOverlay = props => {
//   return <div className={classes.modal}>
//     <div className={classes.content}>
//       {props.children}
//     </div>
//   </div>
// }

// let  portalElement = document.getElementById('root')

// export default function Modal(props) {
  
//   //Made changes in index.html. Added a div with id overlays in index.html
//   return (
//     <Fragment>
//       {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
//       {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
//     </Fragment>
//   )
// }
