import InputForm from "../Elements/Input/index";
import Button from "../Elements/Button/index";


const FormLogin = () => {

  const handleLogin = (event) => {
    event.preventDefault(); // agar tidak refresh setelah submit
    localStorage.setItem('email', event.target.email.value);
    localStorage.setItem('password', event.target.password.value);
    window.location.href = '/products';
  };

    return (
      <form onSubmit={handleLogin}>
        <InputForm
          label="Email"
          type="email"
          placeholder="example.gmail.com"
          name="email"
        />
        <InputForm
          label="password"
          type="password"
          placeholder="*********"
          name="password"
        />
        <Button className="bg-blue-500 w-full" type="submit">Login</Button>
      </form>
    );
}

export default FormLogin;