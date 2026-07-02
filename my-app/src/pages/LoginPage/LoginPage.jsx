import "./LoginPage.css";

import Header from "../../components/shared/Header/Header";
import LoginForm from "../../components/auth/LoginForm/LoginForm";

function LoginPage() {
  return (
    <div className="login-page">

      <Header />

      <div className="login-content">

        <div className="login-left">
          <div className="hero">
            <h1>InvestIQ</h1>
            <p>SMART FINANCE</p>
          </div>
        </div>

        <div className="login-right">
          <div className="login-card">
            <LoginForm />
          </div>
        </div>

      </div>

    </div>
  );
}

export default LoginPage;