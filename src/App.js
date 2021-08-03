import React from "react"
import Navigation from "./components/Navigation";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import {Row, Container, Col} from "reactstrap"

function App() {
    return (
            <Container>
                <Row>
                    <Navigation/>
                </Row>
                <Row>
                    <Col xs="4" >
                        <CategoryList/>
                    </Col>
                    <Col xs="8" >
                        <ProductList/>
                    </Col>
                </Row>
            </Container>
    );
}

export default App;
