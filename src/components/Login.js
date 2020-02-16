import React from 'react';
import { Field, reduxForm } from 'redux-form';

const Login = (props) => {

    const renderError = ({ error, touched}) => {
        if(touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            )
        }
    };

    const renderInput = ({ input, label, meta }) => {
        return (
            <div>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {renderError(meta)}
            </div>
        );
    };

    const onClick = (formValues) => {
        console.log(formValues);
    }

    return(
        <div style={containerStyle}>
            <div className="ui segment">
                <div className="field">
                    <form className="ui form error">
                        <Field name="Username" component={renderInput} label="Enter username"/>
                        <Field name="MailAddress" component={renderInput} label="Enter a mail adress"/>
                        <Field name="Password" component={renderInput} label="Enter your password"/>
                    </form>
                </div>
                <div style={centered}>
                    <button onClick={props.handleSubmit(onClick)}className="ui primary basic button">Submit Button</button>
                </div>
            </div>
        </div>
    );
}

const validate = (formValues) => {
    const errors = {};
    if(!formValues.Username) {
        errors.Username = "You must enter a valid name"
    }

    if(!formValues.MailAddress) {
        errors.MailAddress = "You must enter a valid email"
    }

    if(!formValues.Password) {
        errors.Password = "You must enter a valid password"
    }

    return errors;
}

const redText = {
    color: 'red'
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

export default reduxForm({
    form: 'Login',
    validate
})(Login);