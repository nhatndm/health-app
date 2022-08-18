import { MenuItem, MenuWhenType } from 'model';

// IMAGES
import Img1 from 'assets/images/d01.jpg';
import Img2 from 'assets/images/d02.jpg';
import Img3 from 'assets/images/l01.jpg';
import Img4 from 'assets/images/l02.jpg';
import Img5 from 'assets/images/l03.jpg';
import Img6 from 'assets/images/m01.jpg';
import Img7 from 'assets/images/m02.jpg';
import Img8 from 'assets/images/m03.jpg';

const MockMenuItems: MenuItem[] = [
  {
    id: 1,
    date: '21.5',
    when: MenuWhenType.MORNING,
    image: Img1
  },
  {
    id: 2,
    date: '21.5',
    when: MenuWhenType.LUNCH,
    image: Img2
  },
  {
    id: 3,
    date: '21.5',
    when: MenuWhenType.DINNER,
    image: Img3
  },
  {
    id: 4,
    date: '21.5',
    when: MenuWhenType.SNACK,
    image: Img4
  },
  {
    id: 5,
    date: '21.5',
    when: MenuWhenType.MORNING,
    image: Img5
  },
  {
    id: 6,
    date: '21.5',
    when: MenuWhenType.LUNCH,
    image: Img6
  },
  {
    id: 7,
    date: '21.5',
    when: MenuWhenType.DINNER,
    image: Img7
  },
  {
    id: 8,
    date: '21.5',
    when: MenuWhenType.SNACK,
    image: Img8
  }
];

export { MockMenuItems };
