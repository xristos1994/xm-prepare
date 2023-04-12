import { createPortal } from 'react-dom';
import { classnames } from '../../utils/classnames/classnames';
import styles from './Snackbar.module.css';

export function Snackbar(props) {
  return createPortal(
    <div className={classnames(styles.snackbarContainer, styles[props.type || 'info'])}>
       {props.text}
       <button className={classnames('linkBtn', styles.cloceBtn)} onClick={props.onClose}>&#x2715;</button>
     </div>,
     document.body
  );
}