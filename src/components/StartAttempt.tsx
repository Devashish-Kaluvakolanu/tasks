import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    function start() {
        if (attempts > 0 && !inProgress) {
            setAttempts(attempts - 1);
            setInProgress(true);
        }
    }
    function stop() {
        setInProgress(false);
    }
    function mulligan() {
        if (!inProgress) {
            setAttempts(attempts + 1);
        }
    }

    return (
        <div>
            <div>Attempts Remaining: {attempts}</div>
            <div className="mt-2 d-flex gap-2">
                <Button onClick={start} disabled={attempts === 0 || inProgress}>
                    Start Quiz
                </Button>
                <Button onClick={stop} disabled={!inProgress}>
                    Stop Quiz
                </Button>
                <Button onClick={mulligan} disabled={inProgress}>
                    Mulligan
                </Button>
            </div>
        </div>
    );
}
