import { DiaryItem } from 'model';

const MockDiaries: DiaryItem[] = [
  {
    id: 1,
    date: new Date().toDateString(),
    title: 'First Diary',
    content: 'Here is my first diary'
  },
  {
    id: 2,
    date: new Date().toDateString(),
    title: 'Second Diary',
    content: 'Here is my second diary'
  },
  {
    id: 3,
    date: new Date().toDateString(),
    title: 'Third Diary',
    content: 'Here is my third diary'
  },
  {
    id: 4,
    date: new Date().toDateString(),
    title: 'Fourth Diary',
    content: 'Here is my Fourth diary'
  }
];

export { MockDiaries };
