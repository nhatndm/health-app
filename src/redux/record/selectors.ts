import { RootState } from 'redux/type';

// MODEL
import { RecordItem, RecordType } from 'model';

export const selectMyRecords = (state: RootState): RecordItem[] => state.record.data;
export const selectRecordType = (state: RootState): RecordType => state.record.type;
export const selectRecordLabel = (state: RootState): string[] => {
  return state.record.data.map((v) => v.label);
};
export const selectRecordData = (state: RootState): number[] => {
  return state.record.data.map((v) => v.data);
};
