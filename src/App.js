import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  changeFathername,
  changeFirstname,
  changeLastname,
} from "./actionCreators";

class App extends React.Component {
  render() {
    const {
      firstname,
      fathername,
      lastname,
      changeLastname,
      changeFirstname,
      changeFathername,
    } = this.props;
    return (
      <div className="App">
        <h1>{lastname + " " + firstname + " " + fathername}</h1>
        <p>
          <label htmlFor="lastname">Фамилия</label>
          <br />
          <input
            type="text"
            id="lastname"
            placeholder="Иванов"
            onChange={(e) => changeLastname(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="firstname">Имя</label>
          <br />
          <input
            type="text"
            id="firstname"
            placeholder="Иван"
            onChange={(e) => changeFirstname(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="fathername">Отчество</label>
          <br />
          <input
            type="text"
            id="fathername"
            placeholder="Иванович"
            onChange={(e) => changeFathername(e.target.value)}
          />
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lastname: state.lastname,
    firstname: state.firstname,
    fathername: state.fathername,
  };
};

const putActionProps = (dispatch) => {
  return {
    changeLastname: bindActionCreators(changeLastname, dispatch),
    changeFirstname: bindActionCreators(changeFirstname, dispatch),
    changeFathername: bindActionCreators(changeFathername, dispatch),
  };
};

export default connect(mapStateToProps, putActionProps)(App);

/* const connect = (mapStateToProps, putActionProps) =>
  {return (Component) => {return <Component {...mapStateToProps} {...putActionProps} />}}
 */
