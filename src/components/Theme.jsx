import { connect } from "react-redux"
import { CHANGE_THEME } from "../redux/actionsConstants/actionConstants";

const Theme = (props) => {
  console.log('props', props)
  return (
    <div style={{ background: props.theme && `#333`, color: props.theme && `#fff`}}>
      <p>Theme</p>
      <button onClick={props.handleThemeChange}>Toggle theme</button>
    </div>
  );
}

const mapStateToProps = (state) =>{
  console.log(state)
  return {
    theme: state.theme.isDarkThemeEnabled
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    handleThemeChange: () => {
      dispatch( {type: CHANGE_THEME})
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Theme);
