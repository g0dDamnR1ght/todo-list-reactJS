import React from 'react'; 

class Form extends React.Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleChange(event) {
        this.props.onHandleChange(event.target.value); 
    }

    handleSubmit(event) {
        event.preventDefault(); 
        this.props.addTODO();  
    }

    render() {

        let title = this.props.name; 

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Type your task here</label>
                    <input type="text"
                            placeholder="your task"
                            id="input_text"
                            className="inpText"
                            value={title} 
                            onChange={this.handleChange} />
                    <input type="submit"
                            className="btn-submit"
                            value="Submit"/>
                </div>
            </form>
        )
    }
}

export default Form; 