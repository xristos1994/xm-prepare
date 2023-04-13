import { ReactPortal } from 'react';
import { createPortal } from 'react-dom';
import { StyledSnackbar } from './StyledSnackbar';

interface IProps {
  type?: 'error' | 'warning' | 'info' | 'success';
  text: string;
  onClose: () => void;
}

export const Snackbar = (props: IProps): ReactPortal | null => {
  if (!props.text) {
    return null
  }

  return createPortal(
    <StyledSnackbar className={props.type || 'info'}>
      {props.text}
      <button
        className='linkBtn cloceBtn'
        onClick={props.onClose}
      >
        &#x2715;
      </button>
    </StyledSnackbar>,
    document.body
  );
};
