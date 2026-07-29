import "./LoginPage.css";
import '../../index.css';

import LoginHeader from "../../components/auth/LoginHeader/LoginHeader";
import LoginForm from "../../components/auth/LoginForm/LoginForm";

import BigLoginBackground from "../../assets/icons/Big_login_background.svg";
import SmallLoginBackground from "../../assets/icons/Small_login_background.svg";


function LoginPage() {
  return (
    <div className="login-page">

      <img
        src={BigLoginBackground}
        alt=""
        className="login-big-background"
      />

      <img
        src={SmallLoginBackground}
        alt=""
        className="login-small-background"
      />


      <LoginHeader />


      <div className="login-content">

        <div className="login-left">

          <div className="hero">

            <h1 className="login-invest-h1">InvestIQ</h1>

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