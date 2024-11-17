const Label = (props) => {
const {htmlFor, placeholder, children} = props
    return (
      <label
        htmlFor={htmlFor}
        className="block text-slate-700 text-sm font-bold mb-2"
        placeholder={placeholder}
      >
        {children}
      </label>
    );
}

export default Label;