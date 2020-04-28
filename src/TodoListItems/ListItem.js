import React from 'react'; 

const ListItem = (props) => {

    const classes = [`list-group-item`]

    if(props.isDone){
        classes.push('done')
    }

    return(
        
    <li className={classes.join(' ')}>

        <div className="list-group_title">{props.title}</div>  
            <div className="btn-group">
                <button className="btn btn-primary"
                onClick={ () => props.completeHandler() } >Done</button>
                <button className="btn btn-danger"
                onClick={ () => props.deleteHandler() } >Delete</button>
            </div> 
    </li>
    )
}

export default ListItem