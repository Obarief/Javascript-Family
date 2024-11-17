import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, Please enter your account information.
        </p>

        {children}

          <Navigation type={type} />
      </div>
    </div>
  );
};

const Navigation = ({type}) => {
  if(type === "login") {
    return (
      <p className="text-sm text-center mt-3">
        Not registered yet?{" "}
        <Link
          to="/register"
          className="underline text-blue-600 hover:text-blue-800"
        >
          Register
        </Link>
      </p>
    );  
  }else {
    return (
      <p className="text-sm text-center mt-3">
        Already registered?{" "}
        <Link
          to="/login"
          className="underline text-blue-600 hover:text-blue-800"
        >
          Login
        </Link>
      </p>
    );
  }
}

export default AuthLayouts;
