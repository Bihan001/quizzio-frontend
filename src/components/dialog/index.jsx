import {
  Dialog as MyDialog,
  DialogActions as MyDialogActions,
  DialogContent as MyDialogContent,
  DialogTitle as MyDialogTitle,
} from '@mui/material';

export const DialogActions = (props) => {
  const { children, ...rest } = props;
  return <MyDialogActions {...rest}>{children}</MyDialogActions>;
};

export const DialogContent = (props) => {
  const { children, ...rest } = props;
  return <MyDialogContent {...rest}>{children}</MyDialogContent>;
};

export const DialogTitle = (props) => {
  const { children, ...rest } = props;
  return <MyDialogTitle {...rest}>{children}</MyDialogTitle>;
};

export const Dialog = (props) => {
  const { fullWidth, maxWidth, open, handleClose, children, ...rest } = props;

  return (
    <MyDialog fullWidth={fullWidth} maxWidth={maxWidth} open={open} onClose={handleClose} {...rest}>
      {children}
    </MyDialog>
  );
};
