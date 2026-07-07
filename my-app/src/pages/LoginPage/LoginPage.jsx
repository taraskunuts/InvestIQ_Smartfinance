import "./LoginPage.css";

import LoginHeader from "../../components/auth/LoginHeader/LoginHeader";
import LoginForm from "../../components/auth/LoginForm/LoginForm";

function LoginPage() {
  return (
    <div className="login-page">

      <LoginHeader />

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