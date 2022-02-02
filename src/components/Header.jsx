//_rfce \:short cut snippets
import PropTypes from "prop-types"; //type checking for prop

function Header({ text,bgColor,textColor}) {
  const headerStyle = { backgroundColor: bgColor, color: textColor };
  return (
       <header style={headerStyle}>
        <div className="container">
          <h2>{text}</h2>
        </div>
      </header>

  );
}
Header.defaultProps = {
  //when no props is passed in
  text: "hihi",
  bgColor: "black",
  textColor:'#ff6a95'
};
Header.propTypes = {
  //type checking for prop
  text: PropTypes.string,
  bgColor:PropTypes.string,
  textColor:PropTypes.string
};
export default Header;
