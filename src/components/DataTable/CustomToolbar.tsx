import { GridToolbarContainer, GridToolbarQuickFilter } from '@mui/x-data-grid';

const CustomToolbar = () => {
  return (
    <GridToolbarContainer sx={{ justifyContent: 'flex-end' }}>
      <GridToolbarQuickFilter debounceMs={150} />
    </GridToolbarContainer>
  );
};

export default CustomToolbar;
