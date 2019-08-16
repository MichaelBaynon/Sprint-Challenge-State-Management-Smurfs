import React from 'react'

class PostForm extends React.Component {
    constructor(props) {
        super(props)
        
        this.state ={
          name: '',  
          age: '',  
          height: '',  
        }
    }
    render() {
        const {name, age, height} = this.state
        return (
            <div>
                <form>
                    <div>
                        <input type='text' name='name' value={name} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type='text' name='age' value={age} onChange={this.changeHandler}  />
                    </div>
                    <div>
                        <input type='text' name='height' value={height}  onChange={this.changeHandler} />
                    </div>
                </form>
            </div>
        )
    }
}