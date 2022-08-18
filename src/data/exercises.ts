import { ExerciseItem, DurationType } from 'model';

const MockExercises: ExerciseItem[] = [
  {
    id: 1,
    course: '家事全般（立位・軽い）',
    duration: 10,
    durationType: DurationType.MINUTES,
    kcalUsed: 10
  },
  {
    id: 2,
    course: '家事全般（立位・軽い）',
    duration: 2,
    durationType: DurationType.HOUR,
    kcalUsed: 1000
  },
  {
    id: 3,
    course: '家事全般（立位・軽い）',
    duration: 50,
    durationType: DurationType.MINUTES,
    kcalUsed: 500
  },
  {
    id: 4,
    course: '家事全般（立位・軽い）',
    duration: 2,
    durationType: DurationType.HOUR,
    kcalUsed: 900
  },
  {
    id: 5,
    course: '家事全般（立位・軽い）',
    duration: 90,
    durationType: DurationType.MINUTES,
    kcalUsed: 1000
  }
];

export { MockExercises };
