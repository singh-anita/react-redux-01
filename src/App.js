import { connect } from "react-redux";
import { CHANGE_THEME } from "./redux/actionsConstants/actionConstants";
import Theme from "./components/Theme";
import Counter from "./components/Counter";
import './App.css';

function App(props) {
  // console.log("------app props", props);
  return (
    <div className={props.theme.isDarkThemeEnabled === true ? `dark-theme App` : `App`}>
      <header className="App-header">
        <Theme></Theme>
        <Counter></Counter>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    theme: state.theme,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleThemeChange: () => {
      return dispatch({ type: CHANGE_THEME });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);