import "./LoginForm.css";

function LoginForm() {
  return (
    <form className="login-form">

      <p className="login-title">
        Ви можете авторизуватися за допомогою акаунта Google
      </p>

      <button type="button" className="google-btn">
        Google
      </button>

      <p className="login-divider">
        Або увійти за допомогою ел. пошти та паролю після реєстрації.
      </p>

      <div className="form-group">
        <label htmlFor="email">Електронна пошта:</label>

        <input
          id="email"
          type="email"
          placeholder="your@email.com"
        />

        <span className="error"></span>
      </div>

      <div className="form-group">
        <label htmlFor="password">Пароль:</label>

        <input
          id="password"
          type="password"
          placeholder="********"
        />

        <span className="error"></span>
      </div>

      <div className="buttons">

        <button
          type="submit"
          className="login-btn"
        >
          УВІЙТИ
        </button>

        <button
          type="button"
          className="register-btn"
        >
          РЕЄСТРАЦІЯ
        </button>

      </div>

    </form>
  );
}

export default LoginForm;