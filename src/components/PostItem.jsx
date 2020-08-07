import React from 'react';
import Card from 'react-bootstrap/Card';

function PostItem(props) {
    const { title, body } = props;

    return ( 
        // <div>
        //     <h3> { title } </h3>
        //     <p> {body} </p>
        // </div>
        <Card style={{ width: '66rem'}} className="p-3 m-2">
            <Card.Header>{ title }</Card.Header>
            <Card.Body>
                <Card.Text>{ body }</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default PostItem;