import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useOvermind } from '../../../Others/OvermindHelper';
import IconButton from '@material-ui/core/IconButton';
import SvgHelper from '../../Helpers/SvgHelper';

const TopRightButtons = () => {
  const { state, actions } = useOvermind();

  return (
    <Grid item>
      <IconButton
        size="small"
        onClick={() => {
          actions.setShowColorPickerDialog(!state.showColorPickerDialog);
        }}
      >
        <SvgHelper
          path="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
          styles={{ padding: 8 }}
          size={36}
        />
      </IconButton>
    </Grid>
  );
};

export default TopRightButtons;
