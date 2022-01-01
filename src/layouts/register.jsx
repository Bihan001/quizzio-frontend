import { useDispatch, useSelector } from 'react-redux';
import { DialogActions, DialogContent, DialogTitle, Dialog } from 'components/dialog';
import { dialogNames, hideVisibility } from 'redux/slices/dialog-visibility';

const Register = () => {
  const dispatch = useDispatch();

  const { [dialogNames.register]: registerVisibility } = useSelector((state) => state.dialogVisibility);

  const handleClose = () => {
    dispatch(hideVisibility(dialogNames.register));
  };

  return (
    <Dialog open={registerVisibility} handleClose={() => handleClose()}>
      register
    </Dialog>
  );
};

export default Register;
