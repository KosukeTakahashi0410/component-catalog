import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import React from 'react';

import { Accordion } from './index';

export default {
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

export const Accordion: ComponentStoryObj<typeof Accordion> = {
  args: {
      contents: [{ id: 0, label: 'test1', text: 'test text' },{ id: 1, label: 'test2', text: 'test text' }]
  },
  render: ({ title }) => <TestComponent title={title} />
}