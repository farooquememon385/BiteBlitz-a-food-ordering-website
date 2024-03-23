
    const Login = () => {
        function handleFormSubmit(e){
            e.preventDefault();
        }
      return (
  
        <section className="order" id="order">
          <h1 className="heading"> <span>Login</span> Here</h1>
          {/*?php include 'loginConfig.php'?*/}
          <div className="row">
            <div className="image">
              <img src="images/login.jpg" alt="" />
            </div>
            <form onSubmit={handleFormSubmit}>
              <div className="login">
                <br />
                <div className="inputBox">
                  <input name="username" type="Username" placeholder="username" required />
                </div>
                <br />
                <div className="inputBox">
                  <input name="password" type="password" placeholder="Password" required />
                </div>
                <br />
                <input name="submit" type="submit" defaultValue="Login" className="btn" />
                <p className="login" style={{fontSize: 'medium', paddingTop: '2rem'}}>
                  Don't Have Account? 
                  <button type="submit" style={{cursor: 'pointer', fontWeight: 'bolder', color: 'blue'}}>SignUp</button>
                </p>
              </div></form>
          </div></section>
      );
    };

export default Login