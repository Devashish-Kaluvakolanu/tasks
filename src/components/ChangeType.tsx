import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

function formatType(qType: QuestionType): string {
    return qType === "short_answer_question" ? "Short Answer" : (
            "Multiple Choice"
        );
}

export function ChangeType(): React.JSX.Element {
    const [qType, setQType] = useState<QuestionType>("short_answer_question");

    function toggleType() {
        setQType(
            qType === "short_answer_question" ?
                "multiple_choice_question"
            :   "short_answer_question",
        );
    }

    return (
        <div>
            <span>Question Type: {formatType(qType)}</span>
            <div className="mt-2">
                <Button className="btn btn-primary" onClick={toggleType}>
                    Change Type
                </Button>
            </div>
        </div>
    );
}
