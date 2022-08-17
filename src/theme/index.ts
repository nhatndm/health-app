export interface StyledTheme {
  theme: ITheme;
}

export interface ITheme {
  light: string;
  primary: {
    yellow: {
      '300': string;
    };
    orange: {
      '400': string;
    };
    red: {
      '500': string;
    };
  };
  secondary: {
    cyan: { '300': string };
  };
  dark: {
    '600': string;
    '500': string;
  };
  gray: { '400': string };
  linear: {
    firstColor: string;
    secondColor: string;
  };
}

const theme: ITheme = {
  light: '#FFFFFF',
  primary: {
    yellow: {
      '300': '#FFCC21'
    },
    orange: {
      '400': '#FF963C'
    },
    red: {
      '500': '#EA6C00'
    }
  },
  secondary: {
    cyan: {
      '300': '#8FE9D0'
    }
  },
  dark: {
    '600': '#2E2E2E',
    '500': '#414141'
  },
  gray: {
    '400': '#777777'
  },
  linear: {
    firstColor: '#FFCC21',
    secondColor: '#FF963C'
  }
};

export { theme };
