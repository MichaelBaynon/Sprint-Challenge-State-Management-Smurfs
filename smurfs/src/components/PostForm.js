import React from 'react'
import axios from 'axios'

class PostForm extends React.Component {
    constructor(props) {
        super(props)
        
        this.state ={
          name: '',  
          age: '',  
          height: '',  
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios.post('http://localhost:3333/smurfs', this.state)
    .then(response => {
        console.log("response DATA",  response)
    })
    .catch(error => {
        console.log(error)
    })
}

    render() {
        const {name, age, height} = this.state
        return (
            <div >
                <form className='form' onSubmit={this.submitHandler} >
                    <div>
                        <input type='text' name='name' value={name} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type='text' name='age' value={age} onChange={this.changeHandler}  />
                    </div>
                    <div>
                        <input type='text' name='height' value={height}  onChange={this.changeHandler} />
                    </div>
                    <button type='submit' >SUBMIT</button>
                </form>
            </div>
        )
    }
}

export default PostForm