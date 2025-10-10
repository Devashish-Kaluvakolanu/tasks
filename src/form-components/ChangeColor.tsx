import React, { useState } from "react";

const COLORS = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "pink",
    "black",
];

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>(COLORS[0]);
    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((clr: string) => (
                <div key={clr}>
                    <label style={{ marginRight: "10px" }}>
                        <input
                            type="radio"
                            name="color"
                            value={clr}
                            checked={color === clr}
                            onChange={(e) => {
                                setColor(e.target.value);
                            }}
                        />
                        {clr}
                    </label>
                </div>
            ))}
            <div
                data-testid="colored-box"
                style={{
                    width: "100px",
                    height: "50px",
                    backgroundColor: color,
                    color: "white",
                    marginTop: "10px",
                    textAlign: "center",
                    lineHeight: "50px",
                }}
            >
                {color}
            </div>
        </div>
    );
}
