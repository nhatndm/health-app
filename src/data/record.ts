import { RecordItem } from 'model';

const MockRecordsByDay: RecordItem[] = [
  {
    id: 1,
    label: '6:00',
    data: 100
  },
  {
    id: 2,
    label: '8:00',
    data: 300
  },
  {
    id: 3,
    label: '10:00',
    data: 500
  },
  {
    id: 4,
    label: '12:00',
    data: 350
  },
  {
    id: 5,
    label: '14:00',
    data: 800
  },
  {
    id: 6,
    label: '16:00',
    data: 200
  },
  {
    id: 7,
    label: '18:00',
    data: 500
  }
];

const MockRecordsByWeek: RecordItem[] = [
  {
    id: 1,
    label: 'Mon',
    data: 110
  },
  {
    id: 2,
    label: 'Tue',
    data: 390
  },
  {
    id: 3,
    label: 'Web',
    data: 200
  },
  {
    id: 4,
    label: 'Thur',
    data: 850
  },
  {
    id: 5,
    label: 'Fri',
    data: 100
  },
  {
    id: 6,
    label: 'Sat',
    data: 300
  },
  {
    id: 7,
    label: 'Sun',
    data: 910
  }
];

const MockRecordsByMonth: RecordItem[] = [
  {
    id: 1,
    label: 'Jan',
    data: 190
  },
  {
    id: 2,
    label: 'Feb',
    data: 310
  },
  {
    id: 3,
    label: 'Mar',
    data: 290
  },
  {
    id: 4,
    label: 'Apr',
    data: 550
  },
  {
    id: 5,
    label: 'May',
    data: 990
  },
  {
    id: 6,
    label: 'June',
    data: 120
  },
  {
    id: 7,
    label: 'July',
    data: 510
  },
  {
    id: 8,
    label: 'Aug',
    data: 590
  },
  {
    id: 9,
    label: 'Sep',
    data: 710
  },
  {
    id: 10,
    label: 'Oct',
    data: 780
  },
  {
    id: 11,
    label: 'Nov',
    data: 650
  },
  {
    id: 12,
    label: 'Dec',
    data: 990
  }
];

export { MockRecordsByDay, MockRecordsByWeek, MockRecordsByMonth };
