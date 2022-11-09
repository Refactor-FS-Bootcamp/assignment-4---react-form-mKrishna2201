import React,{Component} from 'react';
class Form extends Component {
  constructor(props) {
    super(props)
    this.state={
      username:'',
      comment:'',
      gender:'',
      agree:''
    }
  }
  handleUserChange = e =>{
    this.setState({
        username: e.target.value
    })
    }
    handleCommentChange = e =>{
        this.setState({
            comment: e.target.value
        })
    }
    handlechange = e =>{
        this.setState({
            gender:e.target.value
        })
    }
    handlecheckchange = e=>{
        this.setState({
            agree:e.target.value
        })
    }
    handleSubmit = e =>{
        e.preventDefault();
        console.log(this.state);
    }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
      <div>
      <label htmlFor='username'>Username :</label>
      <input type="text" id="username" value={this.state.username} onChange={this.handleUserChange} />
      </div>
      <br/>
      <div>
      <label htmlFor='comment'>Comment :</label>
      <textarea id="comment" value={this.state.comment} onChange={this.handleCommentChange}></textarea>
      </div>
      <br/>
      <div>
        <label htmlFor='gender'>Gender :</label>
        <label>Male</label>
        <input type="radio" name='gender' value="male" onChange={this.handlechange}/>
        <label>Female</label>
        <input type="radio" name='gender' value="female" onChange={this.handlechange}/>
      </div>
      <br/>
      <div>
        <input type="checkbox" name='agree' onChange={this.handlecheckchange}/>
        <label>Are you agree ?</label>
      </div>
      <br/>

      <button type="submit">Submit</button>

      </form>
  

    )
  }
}
export default Form