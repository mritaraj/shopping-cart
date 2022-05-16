import '../styles/comm.css'
const BtnComp = ({ children, buttonType, ...otherProps }) => {
    return (
      <button
        className="btnC"
        {...otherProps}
      >
        {children}
      </button>
    );
  };
  export default BtnComp