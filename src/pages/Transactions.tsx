import { Box, Button, IconButton } from '@mui/material';
import { DataTable } from '../components';
import { GridColDef, GridValueFormatterParams } from '@mui/x-data-grid';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { format } from 'date-fns';
import { AddForm } from '../features';
import { useState } from 'react';
import ModalContainer from '../components/ModalContainer';

const SAMPLE_COLUMNS: GridColDef[] = [
  {
    field: 'date',
    headerName: 'Date',
    width: 200,
    editable: false,
    valueFormatter: (params: GridValueFormatterParams<Date>) =>
      format(params.value, 'Pp'),
  },
  {
    field: 'referenceNo',
    headerName: 'Reference No.',
    width: 160,
    editable: false,
  },
  {
    field: 'type',
    headerName: 'Type',
    width: 120,
    editable: false,
  },
  {
    field: 'amount',
    headerName: 'Amount',
    width: 120,
    editable: false,
    align: 'right',
    headerAlign: 'right',
  },
  {
    field: 'fee',
    headerName: 'Fee',
    width: 120,
    editable: false,
    align: 'right',
    headerAlign: 'right',
  },
  {
    field: 'walletId',
    headerName: 'GCash Wallet',
    width: 160,
    editable: false,
  },
  {
    field: 'customerId',
    headerName: 'Customer',
    width: 160,
    editable: false,
  },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 120,
    editable: false,
    sortable: false,
    align: 'center',
    headerAlign: 'center',
    renderCell: (_params) => (
      <>
        <IconButton
          title="Edit"
          aria-label="edit"
        >
          <EditIcon color="success" />
        </IconButton>
        <IconButton
          title="Delete"
          aria-label="delete"
        >
          <DeleteIcon color="error" />
        </IconButton>
      </>
    ),
  },
];

const SAMPLE_ROWS: ITransaction[] = [
  {
    id: '1',
    referenceNo: '123',
    date: new Date('2023-10-19T03:49:57.504Z'),
    type: 'Cash In',
    amount: 1000,
    fee: 5,
    walletId: '1',
    customerId: '1',
  },
  {
    id: '2',
    referenceNo: '321',
    date: new Date('2023-10-19T03:49:57.504Z'),
    type: 'Cash In',
    amount: 500,
    fee: 5,
    walletId: '1',
    customerId: '2',
  },
  {
    id: '3',
    referenceNo: '667',
    date: new Date('2023-10-19T03:49:57.504Z'),
    type: 'Cash Out',
    amount: 15000,
    fee: 75,
    walletId: '2',
    customerId: '3',
  },
];

const Transactions = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [data, setData] = useState<ITransaction[]>(SAMPLE_ROWS);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleTransaction = (transaction: ITransaction) =>
    setData((prevData) => [...prevData, transaction]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Box sx={{ alignSelf: 'flex-end' }}>
        <Button
          variant="contained"
          onClick={handleOpen}
        >
          Add
        </Button>
      </Box>
      <DataTable
        rows={data}
        columns={SAMPLE_COLUMNS}
      />
      <ModalContainer
        title="Add Transaction"
        open={open}
        handleClose={handleClose}
      >
        <AddForm
          handleClose={handleClose}
          data={data}
          handleTransaction={handleTransaction}
        />
      </ModalContainer>
    </Box>
  );
};

export default Transactions;
