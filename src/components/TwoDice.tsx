import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [left, setLeft] = useState<number>(d6());
    const [right, setRight] = useState<number>(d6());

    const isSnakeEyes = left === 1 && right === 1;
    const isWin = left === right && !isSnakeEyes;

    return (
        <div>
            <div className="mb-2">
                <span data-testid="left-die" className="me-3">
                    Left: {left}
                </span>
                <span data-testid="right-die">Right: {right}</span>
            </div>

            {isWin && <div className="mb-2">You Win!</div>}
            {isSnakeEyes && <div className="mb-2">You Lose!</div>}

            <div className="d-flex gap-2">
                <Button
                    onClick={() => {
                        setLeft(d6());
                    }}
                >
                    Roll Left
                </Button>
                <Button
                    onClick={() => {
                        setRight(d6());
                    }}
                >
                    Roll Right
                </Button>
            </div>
        </div>
    );
}
