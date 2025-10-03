import React from "react";
import "./App.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript - Devashish
                Kaluvakolanu - Hello World
            </header>

            <img
                src="https://1000logos.net/wp-content/uploads/2022/01/Delaware-Blue-Hens-Logo-2009.png"
                className="App-logo"
                alt="UD Logo"
            />

            <h1>Hello World! Things I like at UD.</h1>

            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>

            <ul>
                <li>Dunkin</li>
                <li>Flip Kitchen</li>
                <li>Den by Dennys</li>
            </ul>

            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>

            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "1300px",
                                height: "100px",
                                backgroundColor: "red",
                            }}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
