import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from 'react';
import {
  Box,
  Button,
  InputAdornment,
  MenuItem,
  Stack,
  TextField,
} from '@mui/material';
import { DateTimeField, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import Utils from '../../../../utils';

type Props = {
  handleClose: () => void;
  data: ITransaction[];
  handleTransaction: (transaction: ITransaction) => void;
};

const TRANSACTION_TYPES = ['Cash In', 'Cash Out'];

const AddTransactionForm = ({
  handleClose,
  data,
  handleTransaction,
}: Props) => {
  const [referenceNo, setReferenceNo] = useState<string>('');
  const [date, setDate] = useState<Date | null>(new Date());
  const [type, setType] = useState<TransactionType>('Cash In');
  const [amount, setAmount] = useState<number>(0);

  const onChangeRefNo = (event: ChangeEvent<HTMLInputElement>) =>
    setReferenceNo(event.target.value);
  const onChangeType = (event: ChangeEvent<HTMLInputElement>) =>
    setType(event.target.value as TransactionType);
  const onChangeAmount = (event: ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(event.target.value));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const refNo = data.filter(
      (transaction) => transaction.referenceNo === referenceNo
    );

    if (amount === 0 || refNo.length || date === null) return;
    handleTransaction({
      id: `${data.length + 1}`,
      referenceNo,
      date,
      type,
      amount,
      fee: Utils.calculateFee(amount),
      walletId: '1',
      customerId: `${data.length + 1}`,
    });
    handleClose();
  };

  return (
    <Box
      component="form"
      sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}
      onSubmit={onSubmit}
    >
      <Stack
        width="100%"
        direction="row"
        gap={2}
      >
        <TextField
          id="referenceNo"
          name="referenceNo"
          label="Reference No."
          size="small"
          helperText="Reference No. of the transaction."
          value={referenceNo}
          onChange={onChangeRefNo}
          fullWidth
          required
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimeField
            id="date"
            name="date"
            label="Date & Time"
            size="small"
            helperText="Date of the transaction."
            value={date}
            onChange={(newValue) => setDate(newValue)}
            fullWidth
            required
          />
        </LocalizationProvider>
      </Stack>
      <TextField
        id="type"
        name="type"
        label="Type"
        size="small"
        helperText="Type of the transaction."
        defaultValue={TRANSACTION_TYPES[0]}
        value={type}
        onChange={onChangeType}
        select
        fullWidth
        required
      >
        {TRANSACTION_TYPES.map((t_type) => (
          <MenuItem
            dense
            key={t_type}
            value={t_type}
          >
            {t_type}
          </MenuItem>
        ))}
      </TextField>
      <Stack
        width="100%"
        direction="row"
        gap={2}
      >
        <TextField
          id="amount"
          name="amount"
          label="Amount"
          size="small"
          helperText="Amount of the transaction."
          value={amount}
          onChange={onChangeAmount}
          InputProps={{
            startAdornment: <InputAdornment position="start">₱</InputAdornment>,
          }}
          fullWidth
          required
        />
        <TextField
          id="fee"
          name="fee"
          label="Fee"
          size="small"
          helperText="Fee of the transaction."
          value={Utils.calculateFee(amount)}
          InputProps={{
            readOnly: true,
          }}
          fullWidth
        />
      </Stack>
      <Button
        type="submit"
        variant="contained"
        sx={{ alignSelf: 'center' }}
        fullWidth
      >
        Submit
      </Button>
    </Box>
  );
};
export default AddTransactionForm;
