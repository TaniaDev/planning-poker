import type { Meta, StoryObj } from '@storybook/react';

import { PokerCard } from '../components';

const meta = {
  title: 'Components/PokerCard',
  component: PokerCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    content: 1,
    turned: false,
    disabled: false,
    pending: false,
    onClick: () => {},
  },
} satisfies Meta<typeof PokerCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const front: Story = {
  args: {
    content: 1,
    turned: true,
    disabled: false,
    pending: false,
    onClick: () => {},
  },
};

export const back: Story = {
  args: {
    content: 1,
    turned: false,
    disabled: false,
    pending: false,
    onClick: () => {},
  },
};

export const disabled: Story = {
  args: {
    content: 1,
    turned: false,
    disabled: true,
    pending: false,
    onClick: () => {},
  },
};

export const pending: Story = {
  args: {
    content: 1,
    turned: false,
    disabled: false,
    pending: true,
    onClick: () => {},
  },
};
