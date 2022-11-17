import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import React from 'react';

import { TestComponent } from './TestComponent';

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  component: TestComponent,
} as ComponentMeta<typeof TestComponent>;

export const testComponent: ComponentStoryObj<typeof TestComponent> = {
  args: {
      title: 'test',
  },
  render: ({ title }) => <TestComponent title={title} />
}