import React from "react";
import Layout from "./hoc/Layout/Layout";
import Quiz from "./containers/Quiz/Quiz";
import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "./containers/Auth/Auth";
import QuizCreator from "./containers/QuizCreator/QuizCreator";
import QuizList from "./containers/QuizList/QuizList";
import { connect } from "react-redux";
import Logout from "./components/Logout/Logout";
import { authLogin } from "./store/actions/auth";

class App extends React.Component {
  
  componentDidMount() {
    this.props.authLogin()
  }

  render() {
    let routs = (
      <Route path='/' element={<Layout />}>
        <Route index element={<QuizList/>}/>
        <Route path="auth" element={<Auth/>}/>
        <Route path="quiz-creator" element={<QuizCreator/>}/>
        <Route path="quiz/:id" element={<Quiz/>}/>
        <Route path="/logout" element={ <Navigate replace to="/" /> } />
      </Route>
    )

    if(this.props.isAuthenticated) {
      routs = (
        <Route path='/' element={<Layout />}>
          <Route index element={<QuizList/>}/>
          <Route path="quiz-creator" element={<QuizCreator/>}/>
          <Route path="quiz/:id" element={<Quiz/>}/>
          <Route path="/logout" element={<Logout />}/>
          <Route path="/auth" element={ <Navigate replace to="/" /> } />
        </Route>
      )
    }

    return (
      <>
        <Routes>
          { routs }
        </Routes>
      </>
    )
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.auth.token
  }
}

function mapDispatchToProps(dispatch) {
  return {
    authLogin: () => dispatch(authLogin())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
