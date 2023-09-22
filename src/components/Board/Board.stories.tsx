import type { Meta, StoryObj } from '@storybook/react';
import Board from './Board';
import { useState } from 'react';

const meta = {
    title: "tic-tac-toe/Board",
    component: Board,
    parameters: {
        layout: 'centered'
    },
    args: {
        xIsNext: true,
    },
    tags: ['autodocs'],
    decorators: [
        (_Board, context) => {
            const [history, setHistory] = useState<string[][]>([context.args.squares || Array(9).fill('')]);
            const [locations, setLocations] = useState<string[]>(['']);
            const [currentMove, setCurrentMove] = useState<number>(0);
            const squares: string[] = history[currentMove];
            const [xIsNext, setXIsnext] = useState<boolean>(context.args.xIsNext);
          
            const onPlay = (nextSquares: string[], location: {row: number, column: number}) => {
              const nextHistory: string[][] = [...history.slice(0, currentMove + 1), nextSquares]
              const currentLocation: string[] = [...locations.slice(0, currentMove + 1), `(${location.row},${location.column})`];
              setHistory(nextHistory);
              setLocations(currentLocation);
              setCurrentMove(nextHistory.length - 1);
              setXIsnext(!xIsNext);
            }
            return (
                <_Board args={{...context.args,xIsNext, squares, onPlay}}/>
            );
        }
    ]
} satisfies Meta<typeof Board>;

export default meta;
type Story = StoryObj<typeof Board>;

/**
 * 初期表示時
 */
export const Default: Story = {
    args:{
        xIsNext: true,
    }
}

/**
 * プレイ中
 */
export const Playing: Story = {
    args:{
        xIsNext: false,
        squares: ['X','O','X','O','X','','','','',],
    }
}

/**
 * X が勝利した場合の盤面
 */
export const WinningOfCross: Story = {
    args:{
        xIsNext: false,
        squares: ['X','O','X','O','X','O','X','','',],
    }
}

/**
 * O が勝利した場合の盤面
 */
export const WinningOfCircle: Story = {
    args:{
        xIsNext: false,
        squares: ['O','X','O','O','X','X','O','','X'],
    }
}

/**
 * すべてのマスに△がセットされた場合
 */
export const FilledWithTriangle: Story = {
    args:{
        xIsNext: false,
        squares: Array(9).fill('△'),
    }
}