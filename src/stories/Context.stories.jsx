
import React from 'react';
import { MyContextProvider, MyContextConsumer } from '../app/components/Context';

export default {
  title: 'ContextComponent',
  component: MyContextConsumer,
  decorators: [(Story) => <MyContextProvider><Story /></MyContextProvider>],
};

const Template = (args) => <MyContextConsumer {...args} />;

export const Default = Template.bind({});