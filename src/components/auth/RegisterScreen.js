import React from 'react';
import {
    Link
} from "react-router-dom";

export const RegisterScreen = () => {
    return (
        <>
            <h3 className="auth__title">register</h3>
            <form>
                <input
                    type="text"
                    placeholder="email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                />
                <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="auth__input"
                />
                <input
                    type="password"
                    placeholder="confirm"
                    name="password2"
                    className="auth__input"
                />
                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    register
                </button>
                <hr/>
                
                <Link 
                    to="/auth/login" 
                    className="link"
                >
                    already registered?
                </Link>
            </form>
        </>
    )
}
