import type { Meta, StoryObj } from '@storybook/react';
import SortButton from './SortButton';
import { useState } from 'react';

const meta = {
    title: "tic-tac-toe/SortButton",
    component: SortButton,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    args:{
        ascOrder: true,
    },
    decorators: [
        (_SortButton, context) => {
            const [ascOrder, setAscOrder] = useState<boolean>(context.args.ascOrder);

            return (
                <_SortButton args={{...context.args, ascOrder, setAscOrder}}/>
            )
        }
    ]
} satisfies Meta<typeof SortButton>;

export default meta;
type Story = StoryObj<typeof SortButton>;

/**
 * 初期表示（昇順）
 */
export const Default: Story = {};

/**
 * 降順ボタン
 */
export const Desc: Story = {
    args: {
        ascOrder: false,
    }
}