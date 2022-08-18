import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// MODEL
import { RecordSlice, RecordItem, RecordType } from 'model';

// ACTION TO CHANGE STATE
export const setRecordType: CaseReducer<RecordSlice, PayloadAction<RecordType>> = (state, action) => {
  state.type = action.payload;
};

export const setMyRecords: CaseReducer<RecordSlice, PayloadAction<RecordItem[]>> = (state, action) => {
  state.data = action.payload;
};
