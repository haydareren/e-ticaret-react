import React,{Component} from "react";
import { ListGroup, ListGroupItem } from 'reactstrap';
import axios from "axios";
class CategoryList extends Component{
    state={
        categories:[],
    }
componentDidMount() {
        this.getCategories()
}

    getCategories = () => {
        axios.get("http://localhost:3000/categories")
            .then((response) => response.data)
            .then(data=>{
            console.log(data)
                this.setState({
                    categories:data
                })
            })
            .catch(error => {
                console.log(error);
            });
    }

    render(){
        return(
            <div>
                <h2>{this.props.info.title}</h2>
                <ListGroup>
                    {
                       this.state.categories.map(category =>
                            <ListGroupItem
                                onClick={()=>this.props.changeCategory(category)}
                                key={category.id}>{category.categoryName}
                            </ListGroupItem>
                        )
                    }
                </ListGroup>
                <h3>{this.props.categoryName}</h3>
            </div>
        )
    }
}

export default CategoryList
