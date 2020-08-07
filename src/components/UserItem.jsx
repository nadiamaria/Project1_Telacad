import React from 'react';
import Card from 'react-bootstrap/Card';

function UserItem(props) {
    const {name, email, salary, imag, isGoldClient} = props;
    const handleLangChange = (event) => {
        props.parentFunction2(event.target.value);         
    }

    return (
        <div className='p-2'>
            <Card style={{ width: '20vh', height: '36vh'}} className="px-4 pt-1">
                <button type="button" 
                    className="close ml-auto" 
                    onClick={(event) => handleLangChange(event)} value={name}>&times;</button>
                { imag
                    ? <Card.Img variant="top" src={ imag } width= '100px' height= '200px' className="rounded-circle"/>
                    : <Card.Img variant="top" src='assets/images/f.png' />
                }
                <Card.Body>
                    <Card.Title>{ name }</Card.Title>
                    <Card.Text>
                        { email }
                        <br/>
                        { salary
                            ?  <span> Salary: { salary } </span>
                            : null 
                        }
                        <br/>
                        { isGoldClient
                            ? <span><strong> Client GOLD</strong></span> 
                            : null
                        }
                    </Card.Text>
                    </Card.Body>
                </Card>
        </div>
    );
}

export default UserItem;