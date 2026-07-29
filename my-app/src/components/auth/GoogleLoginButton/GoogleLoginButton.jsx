import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { login } from "../../../redux/auth/authSlice";


function GoogleLoginButton() {

    const dispatch = useDispatch();
    const navigate = useNavigate();


    return (

        <GoogleLogin

            onSuccess={(credentialResponse) => {


                const user = jwtDecode(
                    credentialResponse.credential
                );


                console.log("Google user:", user);



                dispatch(
                    login({
                        email: user.email,
                        name: user.name
                    })
                );



                navigate("/dashboard");


            }}


            onError={() => {

                console.log("Google Login Failed");

            }}

        />

    );

}


export default GoogleLoginButton;