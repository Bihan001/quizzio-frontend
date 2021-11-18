import {
  Dialog as MyDialog,
  DialogActions as MyDialogActions,
  DialogContent as MyDialogContent,
  DialogTitle as MyDialogTitle,
} from '@mui/material';

export const DialogActions = (props) => {
  return <MyDialogActions>{props.children}</MyDialogActions>;
};

export const DialogContent = (props) => {
  return <MyDialogContent>{props.children}</MyDialogContent>;
};

export const DialogTitle = (props) => {
  return <MyDialogTitle>{props.children}</MyDialogTitle>;
};

export const Dialog = (props) => {
  const { fullWidth, maxWidth, open, handleClose, children, ...rest } = props;

  return (
    <MyDialog fullWidth={fullWidth} maxWidth={maxWidth} open={open} onClose={handleClose} {...rest}>
      {children}
    </MyDialog>
  );
};
