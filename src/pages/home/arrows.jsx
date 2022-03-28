import React from 'react';
import { useTheme } from '@emotion/react';

import { VisibilityContext } from 'react-horizontal-scrolling-menu';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Box, Card, CardContent, Button, Typography } from '@mui/material';

function Arrow({ children, disabled, onClick }) {
  const theme = useTheme();
  return (
    <div
      disabled={disabled}
      onClick={onClick}
      style={{
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        right: '5%',
        opacity: disabled ? '0' : '1',
        userSelect: 'none',
        background: 'transparent',
        margin: '1rem',
      }}
    >
      {children}
    </div>
  );
}

export function LeftArrow() {
  const {
    isFirstItemVisible,
    scrollPrev,
    visibleItemsWithoutSeparators,
    initComplete,
  } = React.useContext(VisibilityContext);

  const [disabled, setDisabled] = React.useState(
    !initComplete || (initComplete && isFirstItemVisible)
  );
  React.useEffect(() => {
    // NOTE: detect if whole component visible
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isFirstItemVisible);
    }
  }, [isFirstItemVisible, visibleItemsWithoutSeparators]);

  return (
    <Arrow disabled={disabled} onClick={() => scrollPrev()}>
      <Box
        sx={{
          width: '5rem',
          height: '5rem',
          backgroundColor: 'primary.main',
          borderRadius: '50%',
          cursor: 'pointer',
          padding: '1rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <KeyboardArrowLeftIcon />
      </Box>
    </Arrow>
  );
}

export function RightArrow() {
  const { isLastItemVisible, scrollNext, visibleItemsWithoutSeparators } =
    React.useContext(VisibilityContext);

  // console.log({ isLastItemVisible });
  const [disabled, setDisabled] = React.useState(
    !visibleItemsWithoutSeparators.length && isLastItemVisible
  );
  React.useEffect(() => {
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isLastItemVisible);
    }
  }, [isLastItemVisible, visibleItemsWithoutSeparators]);

  return (
    <Arrow disabled={disabled} onClick={() => scrollNext()}>
      <Box
        sx={{
          width: '5rem',
          height: '5rem',
          backgroundColor: 'primary.main',
          borderRadius: '50%',
          cursor: 'pointer',
          padding: '1rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <KeyboardArrowRightIcon />
      </Box>
    </Arrow>
  );
}
