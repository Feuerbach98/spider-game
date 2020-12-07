import React from 'react';
import { Alert } from '../Alert/Alert';
import './About.scss';

export const About = () => (
  <Alert
    title="GitHub will be open in new tab"
    actions={[
      {
        title: 'Confirm',
        href: null,
        func: () => window.open('https://github.com/Feuerbach98/spider-game', '_blank')
      },
      {
        title: 'Cancel',
        href: '/',
        func: null
      }
    ]}
  />
)
