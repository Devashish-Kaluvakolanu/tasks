import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript - Devashish
            </header>
            <h1>This is Task 3</h1>
            <img
                src="C:\Users\devas\Downloads\Task3-CISC275.jpeg"
                alt="This is a picture for Task 3."
            />
            <ol>
                <li>Task 1</li>
                <li>Task 2</li>
                <li>Task 3</li>
            </ol>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            ;
            <Container>
                <Row>
                    <Col>
                        <div
                            className="rectangle"
                            style={{
                                width: "100%",
                                height: "100px",
                                backgroundColor: "red",
                            }}
                        ></div>
                        First column.
                    </Col>
                    <Col>
                        <div
                            className="rectangle"
                            style={{
                                width: "100%",
                                height: "100px",
                                backgroundColor: "red",
                            }}
                        ></div>
                        Second column.
                    </Col>
                </Row>
            </Container>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World
            </p>
        </div>
    );
}

export default App;
