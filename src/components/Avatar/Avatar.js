import React from 'react';
import './Avatar.css';

const Avatar = (props) => {
    const texto = props.children;

    return (
        <div>
            <h1>{texto}</h1>
            <img alt="Avatar do Kanye West" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ0IwxmLMzbOk1V0haFxiUISHJr9w5Fy5a7B6A_AwfN2z_F1kw8zEtXYsZJa5gBJDRzLg&usqp=CAU" />
        </div>
    )
}

export default Avatar;