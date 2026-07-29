import "./LoginHeader.css";
import logo from "../../../assets/logos/logo.svg";

function LoginHeader() {
    return (
        <header className="login-header">

            <div className="login-logo">

                <img src={logo} alt="logo"/>

                <h2 className="login-logo-text">INVESTIQ</h2>

            </div>

        </header>
    );
}

export default LoginHeader;