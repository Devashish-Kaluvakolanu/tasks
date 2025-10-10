import React from "react";
import { Button } from "react-bootstrap";
import { useDoubleHalfState } from "./DoubleHalfState";

type DoubleHalfState = {
    dhValue: number;
    setDhValue: (n: number) => void;
};

function Doubler({ dhValue, setDhValue }: DoubleHalfState): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDhValue(dhValue * 2);
            }}
        >
            Double
        </Button>
    );
}

function Halver({ dhValue, setDhValue }: DoubleHalfState): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDhValue(dhValue / 2);
            }}
        >
            Halve
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useDoubleHalfState();

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                <span>{dhValue}</span>
            </div>
            <Doubler dhValue={dhValue} setDhValue={setDhValue} />
            <Halver dhValue={dhValue} setDhValue={setDhValue} />
        </div>
    );
}
