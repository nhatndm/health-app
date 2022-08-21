import { recordSlice } from './slice';

// TYPE
import { AppThunk } from 'redux/type';

// MODEL
import { RecordType } from 'model';

// MOCK DATA
import { MockRecordsByDay, MockRecordsByWeek, MockRecordsByMonth } from 'data';

const { setMyRecords, setRecordType } = recordSlice.actions;

const getMyRecords =
  (recordType: RecordType): AppThunk =>
  async (dispatch) => {
    if (recordType === RecordType.DAY) {
      dispatch(setMyRecords(MockRecordsByDay));
    }

    if (recordType === RecordType.WEEK) {
      dispatch(setMyRecords(MockRecordsByWeek));
    }

    if (recordType === RecordType.MONTH) {
      dispatch(setMyRecords(MockRecordsByMonth));
    }
  };

export { getMyRecords, setRecordType };
