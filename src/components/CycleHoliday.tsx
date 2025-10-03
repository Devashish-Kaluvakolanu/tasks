import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎆" | "🍀" | "🎃" | "🦃" | "🎄";
const YEAR_ORDER: Holiday[] = ["🍀", "🎆", "🎃", "🦃", "🎄"];
const ALPHABETICAL_ORDER: Holiday[] = ["🎄", "🎃", "🎆", "🍀", "🦃"];

function nextIn<T>(arr: T[], current: T): T {
    const idx = arr.indexOf(current);
    return arr[(idx + 1) % arr.length];
}

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🍀");

    return (
        <div>
            <div style={{ fontSize: "2rem" }} aria-label="current-holiday">
                {holiday}
            </div>
            <div className="mt-2">
                <Button
                    className="me-2"
                    onClick={() => {
                        setHoliday(nextIn(ALPHABETICAL_ORDER, holiday));
                    }}
                >
                    Advance by Alphabet
                </Button>
                <Button
                    onClick={() => {
                        setHoliday(nextIn(YEAR_ORDER, holiday));
                    }}
                >
                    Advance by Year
                </Button>
            </div>
        </div>
    );
}
