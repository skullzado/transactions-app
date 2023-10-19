import { Box } from '@mui/material';
import { DataGrid, GridColDef, GridValidRowModel } from '@mui/x-data-grid';
import CustomToolbar from './CustomToolbar';

type Props = {
  rows: GridValidRowModel[];
  columns: GridColDef[];
};

const DataTable = ({ rows, columns }: Props) => {
  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 25,
            },
          },
        }}
        pageSizeOptions={[25, 50, 100]}
        slots={{
          toolbar: CustomToolbar,
        }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
        sx={{
          '& .MuiDataGrid-columnHeaderTitleContainer': {
            justifyContent: 'space-between',
          },
        }}
        disableRowSelectionOnClick
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        disableColumnMenu
        density="compact"
      />
    </Box>
  );
};

export default DataTable;
