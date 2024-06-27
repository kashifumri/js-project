//class Class extends React.Component {}//
import { Component } from "react";
class MyClass extends Component {
    
    render() {
        return (
           <div style={{backgroundColor:"skyblue" ,margin:"3%"}}> <h1>class props {this.props.name}</h1>
            <h2>class rollno. {this.props.rollno}</h2>
            <h2>{this.props.other.address}</h2>
            </div>
        )
    }
}
export default MyClass
