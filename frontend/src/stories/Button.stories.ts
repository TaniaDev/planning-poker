import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../components';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    disabled: false,
    onClick: () => {},
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const standard: Story = {
  args: {
    disabled: false,
    onClick: () => {},
    children: 'Standard Button',
  },
};

export const disabled: Story = {
  args: {
    disabled: true,
    onClick: () => {},
    children: 'Disabled Button',
  },
};
