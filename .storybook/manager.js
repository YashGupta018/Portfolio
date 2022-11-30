import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: 'https://yashgupta.com/icon.svg',
    brandTitle: 'Yash Gupta Components',
    brandUrl: 'https://yashgupta.com',
  },
});
