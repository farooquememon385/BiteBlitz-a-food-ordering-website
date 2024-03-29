
    import logiImg from '../images/login.jpg'
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
              <img src={logiImg} alt="" />
            </div>
            <form onSubmit={handleFormSubmit} className='login'>
                <br />
                <div className="inputBox">
                  <input name="username" type="Username" placeholder="username" required />
                </div>
                <br />
                <div className="inputBox">
                  <input name="password" type="password" placeholder="Password" required />
                </div>
                <br />
                <input name="submit" type="submit" value="Login" className="btn" />
                
                </form>
                <p className="login" style={{fontSize: 'medium', paddingTop: '2rem'}}>
                  Don't Have Account? 
                  <a href='/register' style={{cursor: 'pointer', fontWeight: 'bolder', color: 'blue'}}>Register</a>
                </p>
          </div></section>
      );
    };

export default Login