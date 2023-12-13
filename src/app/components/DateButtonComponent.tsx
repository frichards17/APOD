'use client'

import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import IconButton from '@mui/material/IconButton';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker, DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import { UseDateFieldProps } from '@mui/x-date-pickers/DateField';
import {
  BaseSingleInputFieldProps,
  DateValidationError,
  FieldSection,
} from '@mui/x-date-pickers/models';
import { CalendarIcon } from '@mui/x-date-pickers';
import { useRouter, useSearchParams } from 'next/navigation';
import HomeIcon from '@mui/icons-material/Home'
import { useDateStore } from '../state/DateState';
import { useLoadingStore } from '../state/LoadingState';

interface ButtonFieldProps
  extends UseDateFieldProps<Dayjs>,
    BaseSingleInputFieldProps<
      Dayjs | null,
      Dayjs,
      FieldSection,
      DateValidationError
    > {
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

function ButtonField(props: ButtonFieldProps) {
  const {
    setOpen,
    label,
    id,
    disabled,
    InputProps: { ref } = {},
    inputProps: { 'aria-label': ariaLabel } = {},
  } = props;

  return (
    <IconButton
      id={id}
      disabled={disabled}
      ref={ref}
      aria-label={ariaLabel}
      onClick={() => setOpen?.((prev) => !prev)}
    >
      <CalendarIcon />
    </IconButton>
  );
}

function ButtonDatePicker(
  props: Omit<DatePickerProps<Dayjs>, 'open' | 'onOpen' | 'onClose'>,
) {
  const [open, setOpen] = React.useState(false);

  return (
    <DatePicker
      slots={{ field: ButtonField, ...props.slots }}
      slotProps={{ field: { setOpen } as any }}
      {...props}
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      closeOnSelect={true}
      format="DD/MM/YYYY"
      value={props.value}
      minDate={dayjs(props.minDate)}
      maxDate={dayjs(props.maxDate)}
    />
  );
}

export default function DateButtonComponent() {
  const {date, setDate} = useDateStore()
  const {setLoading} = useLoadingStore()
  const router = useRouter()

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ButtonDatePicker
        value={date}
        onChange={(newValue) => {
            router.push(`/?date=${newValue?.format('YYYY-MM-DD')}`)
            setLoading(true)
            setDate(newValue)
        }}
        minDate={dayjs('1995-06-20')}
        maxDate={dayjs()}
      />
    </LocalizationProvider>
  );
}