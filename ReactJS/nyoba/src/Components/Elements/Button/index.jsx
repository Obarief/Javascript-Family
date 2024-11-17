

const Button = (props) => {
  const { children = "...", className, onClick= () => {} , type="button" } = props; // destructuring dengan "=" memberikan nilai default pada variant atau children (bila dikosongkan tidak apa")
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${className} text-white`}
      type={type}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export default Button;
