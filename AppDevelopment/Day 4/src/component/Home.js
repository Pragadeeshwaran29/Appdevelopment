import React, { useEffect } from "react"
import "./home.css";

function NewTable(prop) {
    console.log(prop);

    let [update, setUpdate] = React.useState(null)

    return (

        prop.data.map((val, ind) => {

            return (

                update == val.id && prop.data[ind].id || (update == 0 && val.id == 0) ?

                    <tr className="update-value">
                        <td><input type="text" defaultValue={val.name} /></td>
                        <td><input type="text" defaultValue={val.age}  /></td>
                        <td><input type="text" defaultValue={val.gender} /></td>
                        <td><input type="text" defaultValue={val.address} /></td>
                        <td><input type="text" defaultValue={val.mobileNumber} /></td>
                        <td><input type="text" defaultValue={val.email} /></td>
                        <td>
                            <div className="actions">
                                <button onClick={() => {
                                    console.log(val.id);

                                    let arr = []
                                    document.querySelectorAll("input").forEach(val => {
                                        arr.push(val.value)
                                    })

                                    document.querySelectorAll("option")
                                        .forEach(val => {
                                            if (val.selected) { arr.push(val.value) }
                                        })

                                    if (arr.some(val => {
                                        if (val == "") return true
                                    })) alert("enter all details")
                                    else {
                                        let object = {
                                            "name": arr[0],
                                            "age": arr[1],
                                            "gender": arr[2],
                                            "address": arr[3],
                                            "mobileNumber": arr[4],
                                            "email": arr[5],
                                            "id": val.id

                                        }

                                        fetch(`http://localhost/update?name=${window.location.href.split("?")[1].split("=")[1]}`, { method: "put", headers: { "content-type": "application/json" }, body: JSON.stringify(object) })
                                            .then(ful => ful.json())
                                            .then(ful => {
                                                if (!ful) alert("something error occured")
                                                else {
                                                    window.location.href = `http://localhost:3000/home?name=${window.location.href.split("?")[1].split("=")[1]}`
                                                }
                                            })
                                            .catch(err => { console.log(err, "error") })

                                    }

                                }}>Save</button>

                                <button onClick={() => {
                                    setUpdate(null)
                                }}>Cancel</button>
                            </div>
                        </td>
                    </tr >

                    :

                    <tr>
                        <td>{val.name}</td >
                        <td>{val.age}</td>
                        <td>{val.gender}</td>
                        <td>{val.address}</td>
                        <td>{val.mobileNumber}</td>
                        <td>{val.email}</td>
                        <td>
                            <div className="actions">
                                <button onClick={() => {
                                    console.log(val.id);
                                    setUpdate(val.id)
                                }}>Update</button>

                                <button onClick={() => {

                                    console.log(val.id);

                                    fetch(`http://localhost/delete?name=${window.location.href.split("?")[1].split("=")[1]}&id=${val.id}`, {
                                        method: "delete",
                                        headers: {
                                            "content-type": "application/json"
                                        }
                                    })
                                        .then(ful => ful.json())
                                        .then(ful => console.log(ful))


                                    prop.setData(prev => prev.filter(v => v.id != val.id))
                                }}>Delete</button>
                            </div>
                        </td>
                    </tr >
            )
        })


    )

}

function ListAll(prop) {
    console.log(prop);


    return (
        <div className="home-listall-wrapper">

            <div className="home-ListAll-header">
                <h1>All List</h1>
            </div>
            <table className="home-table">
                <tr >
                    <th >name</th>
                    <th>age</th>
                    <th>gender</th>
                    <th>address</th>
                    <th>mobile Number</th>
                    <th>email</th>
                    <th>Actions</th>
                </tr>

                <NewTable data={prop.data} setData={prop.setData} />
            </table>

        </div>
    )
}

function AddDetails(prop) {
    console.log(prop);
    return (
        <div>
            <div className="home-ListAll-header">
                <h1 >Add Details</h1>
            </div>
            <div className="addDetails">
                <label >
                    <h2>Name</h2>
                    <input required type="text" />
                </label>
                <label >
                    <h2>Email</h2>
                    <input required type="email" />
                </label>
                <label >
                    <h2>Mobile Number</h2>
                    <input required type="number" />
                </label>
                <label >
                    <h2>Age</h2>
                    <input required type="number" />
                </label>
                <label >
                    <h2>Address</h2>
                    <input required type="text" />
                </label>
                <label >
                    <h2>Gender</h2>
                    <select >
                        <option value="">select </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </label>
            </div>

            <div className="actions">
                <button onClick={
                    () => {
                        let arr = []
                        document.querySelectorAll("input").forEach(val => {
                            arr.push(val.value)
                        })

                        document.querySelectorAll("option")
                            .forEach(val => {
                                if (val.selected) { arr.push(val.value) }
                            })

                        if (arr.some(val => {
                            if (val == "") return true
                        })) alert("enter all details")
                        else {
                            let object = {
                                "name": arr[0],
                                "email": arr[1],
                                "mobileNumber": arr[2],
                                "age": arr[3],
                                "address": arr[4],
                                "gender": arr[5],
                                "id": prop.data.length
                            }

                            fetch(`http://localhost/addData?name=${window.location.href.split("?")[1].split("=")[1]}`,
                                {
                                    method: "post",
                                    headers: { "content-type": "application/json" },
                                    body: JSON.stringify(object)
                                })
                                .then(ful => ful.json())
                                .then(ful => {
                                    if (!ful) alert("something error occured")
                                    else {
                                        prop.setData(prev => [...prev, object])
                                        prop.state(0)
                                    }
                                })
                                .catch(err => { console.log(err) })

                        }
                    }
                }>save</button>
                <button onClick={() => {
                    prop.state(0)
                }}>cancel</button>
            </div>
        </div>
    )
}


function Home(prop) {

    let [nav, setNav] = React.useState(0)

    let [data, setData] = React.useState([])


    useEffect(() => {
        fetch(`http://localhost/get?name=${window.location.href.split("?")[1].split("=")[1]}`, { headers: { "content-type": "application/json" } })
            .then(ful => {
                return ful.json()
            })
            .then(ful => {
                console.log(ful);
                setData(ful)
            })
            .catch(err => {
                console.log(err);
            })

    }, 0)

    let userName
    try {
        if (window.location.href.split("?")[1].split("=")[0] != "name") throw new Error("error")
        else if (userName = window.location.href.split("?")[1].split("=")[1] == "") throw new Error("error");
        else userName = window.location.href.split("?")[1].split("=")[1]

        console.log(userName);



    } catch (e) {
        alert("sign in first")
        window.location.href = "http://localhost:3000"
    }

    return (
        <div className="home-container">
            <header>
                <h1>Welcome {userName}</h1>
                <p onClick={() => {
                    window.location.href = "http://localhost:3000"
                }} className="home-logout">Logout</p>
            </header>
            <nav className="home-nav-background">
                <h3 className={nav ? "home-nav-active" : ""} onClick={() => {
                    setNav(1)
                }}>Add details</h3>
                <h3 className={nav ? "" : "home-nav-active"} onClick={() => {
                    setNav(0)
                }}>List all</h3>
            </nav>

            <main>
                {
                    nav ? <AddDetails state={setNav} data={data} setData={setData} /> : <ListAll state={setNav} data={data} setData={setData} />
                }
            </main>

        </div>
    )
}

export { Home }