import MUISpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';

const SpeedDial = (props) => {
  const {
    style = { position: 'absolute', bottom: 16, right: 16 },
    icon = <SpeedDialIcon />,
    actions = [],
    onOpen = undefined,
    onClose = undefined,
    open = undefined,
    closeOnActionClick = false,
  } = props;
  return (
    <MUISpeedDial
      ariaLabel='SpeedDial uncontrolled open example'
      sx={style}
      icon={icon}
      onClose={onClose}
      onOpen={onOpen}
      open={open}
    >
      {actions.map((action, idx) => (
        <SpeedDialAction
          onClick={() => {
            action.onClick();
            if (closeOnActionClick) onClose();
          }}
          key={idx}
          icon={action.icon}
          tooltipTitle={action.name}
        />
      ))}
    </MUISpeedDial>
  );
};

export default SpeedDial;
