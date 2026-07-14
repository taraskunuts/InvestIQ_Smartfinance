import "./LoginForm.css";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
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
      </div>

      <div className="form-group">
        <label htmlFor="password">Пароль:</label>

        <input
          id="password"
          type="password"
          placeholder="********"
        />
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