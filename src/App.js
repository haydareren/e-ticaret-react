import React,{Component} from "react"
import Navigation from "./components/Navigation";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import {Row, Container, Col} from "reactstrap"

class App extends Component {
    state={
        categoryName:"",
    }
     categoryInfo ={
        title:'Kategori Listesi'
    }
     productInfo ={
        title:'Ürün Listesi'
    }
    changeCategory=(category)=>{
        this.setState({
            categoryName : category.categoryName,
        });
    }
    render(){

        return(
            <Container>
                <Row>
                    <Navigation/>
                </Row>
                <Row>
                    <Col xs="4" >
                        <CategoryList changeCategory={this.changeCategory} categoryName={this.state.categoryName} info={this.categoryInfo}/>
                    </Col>
                    <Col xs="8" >
                        <ProductList info={this.productInfo} categoryName={this.state.categoryName} />
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default App
