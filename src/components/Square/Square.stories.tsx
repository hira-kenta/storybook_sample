import type { Meta, StoryObj } from '@storybook/react';

import Square from "./Square";

const meta = {
    title: "tic-tac-toe/Square",
    component: Square,
    parameters: {
        layout: 'centered'
    },
    args: {
        isWinning: false,
        value: ''
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Square>;

export default meta;
type Story = StoryObj<typeof Square>;

export const Default: Story = {}

export const Cross: Story = {
    args: {
        isWinning: false,
        value: 'X',
    },
};

export const Circle: Story = {
    args: {
        isWinning: false,
        value: 'O',
    },
};

export const Winning: Story = {
    args: {
        isWinning: true,
        value: 'X'
    }
}

export const Triangle: Story = {
    args: {
        isWinning: false,
        value: '△',
    },
};