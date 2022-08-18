import { createSlice } from '@reduxjs/toolkit';

// DOMAIN
import { Domain } from 'constant';

// INTERFACE
import { RecordSlice, RecordType } from 'model';

// ACTION SLICE
import { setMyRecords, setRecordType } from './actionsSlice';

export const initialState: RecordSlice = {
  type: RecordType.DAY,
  data: []
};

export const recordSlice = createSlice({
  name: Domain.Record,
  initialState,
  reducers: {
    setMyRecords,
    setRecordType
  }
});

// REDUCER
export default recordSlice.reducer;
