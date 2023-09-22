import type { Meta, StoryObj } from '@storybook/react';
import History from './History';
import { useState } from 'react';

const meta = {
    title: "tic-tac-toe/History",
    component: History,
    parameters: {
        layout: 'centered'
    },
    args: {
        locations: [''],
        history: [Array(9).fill('')],
    },
    tags: ['autodocs'],
    decorators: [
        (_History, context) => {
            const [currentMove, setCurrentMove] = useState<number>(context.args.locations.length - 1);
            return (
                <_History args={{...context.args, currentMove, setCurrentMove}} />
            );
        },
    ],
} satisfies Meta<typeof History>;

export default meta;
type Story = StoryObj<typeof History>;

/**
 * 初期表示時
 */
export const Default: Story = {};

/**
 * プレイ中
 */
export const Playing: Story = {
    args: {
        currentMove: 5,
        locations: ['','(1,2)','(1,3)','(2,1)','(2,2)','(2,3)'],
        history: [[''],[''],[''],[''],[''],['']],
    }
}