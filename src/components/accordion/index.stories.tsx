import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import React from 'react';

import { Accordion } from './index';

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

export const AccordionStory: ComponentStoryObj<typeof Accordion> = {
  args: {
      contents: [{ id: 0, label: 'test1', text: 'test text' },{ id: 1, label: 'test2', text: 'test text' }]
  },
  render: ({ contents }) => <Accordion contents={contents} />
}