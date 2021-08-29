import React, { useState } from ("react");

function Login() {
    const [state, setstate] = useState({
        message: "",
        username: "",
        password: ""
    })



    function updateUsername(event) {
        setstate({
            ...state,
            username: event.target.value
        })
    }
    function updatePassword(event) {
        setstate({
            ...state,
            password: event.target.value
        })
    }
    //check validation after login button clicked
    function checkValidation() {
        if (state.username === 'bikram' && state.password === 'bik') {
            setstate({
                ...state,
                message: "Login Successfull"
            })
        } else {

            setstate({
                ...state,
                message: "login fail",
                username: "",
                password: ""
            })
        }
    }
    if (state.message === "Login Successfull") {
        return (

            <Dashboard animalsName={animals} />
        )
    }


    return (
        <div className="App">
            <h1>Login form</h1>
            <div><input id="username" onChange={updateUsername} autoFocus={true} type="text" placeholder="Username" value={state.username} /></div>
            <div><input id="password" onChange={updatePassword} autoFocus={true} type="text" placeholder="Password" value={state.password} /></div>
            <button onClick={checkValidation}>Login</button>
            <h2>{state.message}</h2>

        </div>
    );
}
export default Login;