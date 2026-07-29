import "./LoginForm.css";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

import { loginSchema } from "../../../utils/validators";

import GoogleLoginButton from "../GoogleLoginButton/GoogleLoginButton";


function LoginForm() {

  const navigate = useNavigate();


  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({

    resolver: yupResolver(loginSchema),

    mode: "onChange",

  });



  const onSubmit = (data) => {

    console.log("Login data:", data);


    // Тимчасово просто переходимо на Dashboard

    navigate("/dashboard");

  };



  return (

    <form 
      className="login-form" 
      onSubmit={handleSubmit(onSubmit)}
    >


      <p className="login-title">

        Ви можете авторизуватися за допомогою акаунта Google

      </p>



      <GoogleLoginButton />



      <p className="login-divider">

        Або увійти за допомогою ел. пошти та паролю після реєстрації.

      </p>




      <div className="form-group">

        <label htmlFor="email">

          Електронна пошта:

        </label>


        <input

          id="email"

          type="email"

          placeholder="your@email.com"

          {...register("email")}

        />


        <span className="error">

          {errors.email?.message}

        </span>


      </div>





      <div className="form-group">


        <label htmlFor="password">

          Пароль:

        </label>



        <input

          id="password"

          type="password"

          placeholder="********"

          {...register("password")}

        />



        <span className="error">

          {errors.password?.message}

        </span>


      </div>





      <div className="buttons">


        <button

          type="submit"

          className="login-btn"

          disabled={!isValid}

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