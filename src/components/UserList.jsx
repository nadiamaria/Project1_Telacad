import React from 'react';
import UserItem from './UserItem';

function UserList(props) {
    const { users } = props;

    return (
        <div> 
            <div className="row pl-5">
                <h2>Lista utilizatorilor:</h2>
            </div>
            <div className="row">
                { users.map((user, index) => {
                    return <UserItem
                        id={ user.id }
                        name={ user.name }
                        email={ user.email }
                        salary={ user.salary }
                        imag={ user.imag }
                        isGoldClient={ user.isGoldClient }
                        key={ index }
                        parentFunction2={(name) => props.parentFunction(name)}/>
                })}
            </div>
        </div>
    );
}

export default UserList;