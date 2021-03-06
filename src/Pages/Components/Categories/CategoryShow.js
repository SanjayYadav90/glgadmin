import React, {Component} from 'react';
import axios from 'axios';

class Show extends Component {
  state = {
    category: []
  }
  componentDidMount(){
    var headers = {
      'Content-Type': 'application/json',
      'access_token': '49ec71eee48d7399f1c692a19c4092447fff9a799597f79189743521d1d290e31ffb135499e287cc503a0cff51467d54069f773f595323cbc6d24e3e22da607e' 
  }
    axios.get(`/category_view?catid=${this.props.match.params.id}&uid=5&status=1`, {headers: headers})
    .then(
      res => {
        const category = res.data;
        console.log(category);
        this.setState({ category });
      }
    );
  }
  render() {
    return(
      <div className="card" style={{marginTop: `4%`}} >
        <img src={`../../../team.jpg`} style={{width: '100%'}} alt="" />
        <h1> {this.state.category.title} </h1>
        <p className="title">Age: {this.state.category.description  }</p>
        <p>{this.state.category.cream_level}</p>
        <p>{this.state.category.status}</p>
        <p>{this.state.category.created_at}</p>
        <p>{this.state.category.updated_at}</p>
        <div style={{margin: '24px 0'}}>
          
        </div>
        <p><button>Contact : {this.state.category.created_by}</button></p>
      </div>


    );
  }
}
export default Show
