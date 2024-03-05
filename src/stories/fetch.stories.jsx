
import React from 'react';
import SwrComponent from '../app/components/fetch'

export default {
  title: 'wsrComponent',
  component: SwrComponent,
};

const Template = (args) => <SwrComponent {...args} />;

export const Default = Template.bind({});