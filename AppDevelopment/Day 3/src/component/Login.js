
import React from "react"
import "./login.css"

function Login_Component() {
    return (
        <div className="login-inputs ">
            <input type="text" placeholder="name" />
            <input type="password" placeholder="password" />
            
        </div>
    )
}

function Signup_Component() {
    return (
        <div className="login-inputs ">
            <input type="text" placeholder="name" />
            <input type="text" placeholder="email" />
            <input type="text" placeholder="age" />
            <input type="password" placeholder="password" />
            <input type="password" placeholder="confirm password" />
        </div>
    )
}

function Login() {

    let [page, setPage] = React.useState(0)

    return (

        <main className="login-container">
            <div className="login">
                <h1>{page == 0 ? "Login " : "Sign up"}</h1>
                <div className="login-page">
                    <h1 className={page == 0 ? "active-login-page" : ""} onClick={() => {
                        setPage(prev => prev = 0)
                    }} >Login</h1>
                    <h1 className={page == 1 ? "active-login-page" : ""} onClick={() => {
                        setPage(prev => prev = 1)
                    }}>Sign up</h1>
                </div>
                {
                    page == 0 ? <Login_Component /> : <Signup_Component />
                }

                <div className="login-button">
                    <button onClick={() => {

                        let arr = []

                        document.querySelectorAll("input").forEach(val => {
                            arr.push(val.value)
                        })
                        console.log(arr);

                        if (!page) {
                            if ((arr[0] || arr[1]) == "") alert("enter all values")
                            else {
                                fetch("http://localhost/login", { method: "post", headers: { "content-type": "application/json" }, body: JSON.stringify({ name: arr[0], password: arr[1] }) })
                                    .then(ful => {
                                        return ful.json()
                                    })
                                    .then(ful => {
                                        if (!ful) alert("invalid username or password")
                                        else window.location.href = `http://localhost:3000/home?name=${arr[0]}`
                                    })
                                    .catch(err => {
                                        console.log(err);
                                    })

                            }
                        }
                        else {
                            if ((arr[1] || arr[2]) == "") alert("enter all values")
                            // else if (arr[1] !==arr[2]) alert("password not correct")
                            else {
                                fetch("http://localhost/signup", { method: "post", headers: { "content-type": "application/json" }, body: JSON.stringify({ name: arr[0], password: arr[1] }) })
                                    .then(ful => {
                                        return ful.json()
                                    })
                                    .then(ful => {
                                        if (!ful) alert("user already exist please choose another user name")
                                        else setPage(0)
                                    })
                                    .catch(err => {
                                        console.log(err);
                                    })

                            }
                        }


                    }}>{page == 0 ? "Login" : "Sign up"}</button>
                </div>
            </div>
        </main>



    )
}

export { Login }