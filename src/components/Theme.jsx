import { connect } from "react-redux"
import { CHANGE_THEME } from "../redux/actionsConstants/actionConstants";

const Theme = (props) => {
  // console.log('props', props)
  return (
    <div>
      <p>{props.theme}</p>
      <h1>My Dark Theme</h1>
      <button onClick={props.handleThemeChange}>Toggle theme</button>
    </div>
  );
}

const mapStateToProps = (state) =>{
  // console.log('state',state)
  return { theme: state.theme.isDarkThemeEnabled }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    handleThemeChange: () => {
      return dispatch( {type: CHANGE_THEME})
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Theme);
