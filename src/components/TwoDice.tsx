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

    function roll() {
        setLeft(d6());
        setRight(d6());
    }

    const win = left === right;

    return (
        <div>
            <div className="mb-2">
                <span className="me-3">Left: {left}</span>
                <span>Right: {right}</span>
            </div>
            <div className="mb-2">Sum: {left + right}</div>
            <div className="mb-2">{win ? "You Win!" : "You Lose"}</div>
            <Button onClick={roll}>Roll</Button>
        </div>
    );
}
