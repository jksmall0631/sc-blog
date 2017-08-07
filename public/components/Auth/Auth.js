const Auth = {
  isAuth: false,

  authenticate(username, password, callback) {
    const url = "https://secleere.herokuapp.com/api/v1/auth";
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    })
      .then(data => data.json())
      .then(data => {
        if (data.message) {
          alert(data.message);
        } else {
          this.isAuth = true;
          callback();
        }
      })
      .catch(err => alert(err));
  }
};

export default Auth;
