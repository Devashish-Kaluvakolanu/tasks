import React, { useState } from "react";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [numberToAdd, setNumberToAdd] = useState<string>("");

    const parsed = parseInt(numberToAdd);

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts: {attempts}</div>
            <input
                type="number"
                value={numberToAdd}
                onChange={(e) => {
                    setNumberToAdd(e.target.value);
                }}
            />
            <button
                onClick={() => {
                    if (!isNaN(parsed)) {
                        setAttempts(attempts + parsed);
                        setNumberToAdd("");
                    }
                }}
            >
                gain
            </button>
            <button
                onClick={() => {
                    setAttempts(attempts - 1);
                }}
                disabled={attempts <= 0}
            >
                use
            </button>
        </div>
    );
}
