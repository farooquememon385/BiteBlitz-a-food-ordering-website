const Register = () => {
      return (
  
        <section className="order" id="order">
          <h1 className="heading"> <span>Signup</span> Here</h1>
          {/*?php include 'config.php'?*/}
          <div className="row">
            <form action method="POST">
              <div className="inputBox">
                <input type="text" name="fname" placeholder="First Name" required />
                <input type="text" name="lname" placeholder="Last Name (optional)" />
              </div>
              <div className="inputBox">
                <input type="mobile" name="mobile" placeholder="Mobile Number" />
                <input type="email" name="email" placeholder="Email" />
              </div>
              <div className="inputBox">
                <input type="username" name="username" placeholder="Username (Unique)" required />
                <input type="password" name="password" placeholder="Password" required />
              </div>
              <input type="submit" name="submit" defaultValue="Sign Up" className="btn" />
            </form>
          </div>
        </section>
      );
    };

    export default Register