import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import React from 'react';

import { Accordion } from './index';

import { within } from '@storybook/testing-library';

import { expect } from '@storybook/jest';

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

export const AccordionStory: ComponentStoryObj<typeof Accordion> = {
  args: {
      contents: [{ id: 0, label: 'Accordion1', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum' },{ id: 1, label: 'Accordion1', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum' }]
  },
  render: ({ contents }) => <Accordion contents={contents} />
}

AccordionStory.play = async({ canvasElement }) => {
  const canvas = within(canvasElement);

  await expect(await canvas.findByText('test1')).toBeInTheDocument();
}
