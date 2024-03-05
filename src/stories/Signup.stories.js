
// import React from 'react';
// import firebase from '../app/components/signup';
// import Page from '../app/page';


// export default {
//   title: 'Signup Page',
//   component: firebase,
// };

// const Template = (args: React.JSX.IntrinsicAttributes) => <Page {...args} />;

// export const Default = Template.bind({});

import React from 'react';
import Firebase from '../app/components/signup';
import { within, userEvent } from '@storybook/testing-library';

export default {
  title: 'Signup Page',
  component: Firebase,
  
};

const Template = (args) => <Firebase {...args} />;

export const Default = Template.bind({});

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // メールアドレスとパスワードの入力
  await userEvent.type(canvas.getByPlaceholderText('メールアドレス'), 'taku.kawaguchi@scsk.jp', { delay: 100 });
  await userEvent.type(canvas.getByPlaceholderText('パスワード'), 'Popo0159', { delay: 100 });

  // サインアップボタンをクリック
  await userEvent.click(canvas.getByRole('button', { name: 'ログイン' }));

};