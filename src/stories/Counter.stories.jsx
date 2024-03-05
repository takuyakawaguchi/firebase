import Counter from '../app/components/Counter';
import React from 'react';
export default {
    title:'usestateComponent',
    component: Counter,
};

const Template =(args)=><Counter{...args}/>;
export const test = Template.bind({});
