import React from 'react';

const Login = () => {
    return(
        <div style={containerStyle}>
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>User Name <input type="text"/></label>
                        <label>Mail address <input type="text"/></label>
                        <label>Password <input type="text"/></label>
                    </div>
                    <div style={centered}>
                        <button className="ui primary basic button">Submit Button</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

const containerStyle = {
    width: '80%',
    margin: '20px auto',
};

const centered = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

export default Login;