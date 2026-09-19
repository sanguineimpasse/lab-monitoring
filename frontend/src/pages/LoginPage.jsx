function Login(){
    return(
        <div style={{display:"flex",flexDirection:"column",width:"42vw"}}>
            <label>
                Username: <input name="username" />
            </label>
            <label>
                Password: <input name="password" />
            </label>
            <button>Login</button>
        </div>
    )
}

export default Login;