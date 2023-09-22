import type { Meta, StoryObj } from '@storybook/react';
import Game from './Game';

const meta = {
    title: "tic-tac-toe/Game",
    component: Game,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Game>;

export default meta;
type Story = StoryObj<typeof Game>;

/**
 * 初期表示時
 */
export const Default: Story = {
}