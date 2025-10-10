import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [revealed, setRevealed] = useState<boolean>(false);

    return (
        <div>
            <div>Answer: {revealed ? "42" : "???"}</div>
            <div className="mt-2">
                <Button
                    onClick={() => {
                        setRevealed(!revealed);
                    }}
                >
                    {revealed ? "Hide Answer" : "Reveal Answer"}
                </Button>
            </div>
        </div>
    );
}
