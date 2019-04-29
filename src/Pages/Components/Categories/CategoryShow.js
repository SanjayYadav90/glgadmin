import React, {Component} from 'react';
import axios from 'axios';

class Show extends Component {
  state = {
    category: []
  }
  componentDidMount(){
    var headers = {
      'Content-Type': 'application/json',
      'access_token': '727de2eca135bee172287de7fce7ebf26ffb91f4abde61ed5807e5ca6dd2b0b6a517753977a27a94dc1e24bd54229dda93b0fda64e21ead0833f98b7ba4f84ae' 
  }
    axios.get(`/category_edit?catid=${this.props.match.params.id}&uid=5&status=1`, {headers: headers})
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
