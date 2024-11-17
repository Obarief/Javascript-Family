import InputForm from "../Elements/Input/index";
import Button from "../Elements/Button/index";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Fullname"
        type="text"
        placeholder="insert your name here..."
        name="fullname"
      />
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
      <InputForm
        label="Confirm Password"
        type="password"
        placeholder="*********"
        name="confirmpassword"
      />
      <Button className="bg-blue-500 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
