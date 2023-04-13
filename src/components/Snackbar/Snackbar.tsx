import { ReactPortal } from 'react';
import { createPortal } from 'react-dom';
import { classnames } from '../../utils/classnames/classnames';

// @ts-ignore
import styles from './Snackbar.module.css';

interface IProps {
  type?: 'error' | 'warning' | 'info' | 'success';
  text: string;
  onClose: () => void
}

export const Snackbar = (props: IProps): ReactPortal  => {
  return createPortal(
    <div className={classnames(styles.snackbarContainer, styles[props.type || 'info'])}>
       {props.text}
       <button className={classnames('linkBtn', styles.cloceBtn)} onClick={props.onClose}>&#x2715;</button>
     </div>,
     document.body
  );
}