import { useState } from "react";

export function useDoubleHalfState(initialValue: number = 10) {
    return useState<number>(initialValue);
}
