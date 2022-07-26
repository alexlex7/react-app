import React from 'react';

import Navigation from './Navigation';
// import { pages } from '../NavList/NavList.stories';
const pages = [
  { text: 'Home', to: '/' },
  { text: 'About', to: 'about' },
  { text: 'Features', to: 'features' },
  { text: 'Contact', to: 'contact' },
];

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Navigation/Navigation',
  component: Navigation,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Navigation {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  items: pages,
};
