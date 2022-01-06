import { useEffect } from 'react';
import HeaderM from './components/header.component/header.component';
import MainLayout from './layout/main-layout.component';
import Footer from './components/footer.component/footer.component';

// phần login signup
import LoginSignUpLayout from './layout/login-signup-layout/login-signup-layout.component';
import LoginForm from './components/login.component/login.component';
import LoginSignupForm from './components/login-signup.component/login-signup.component';
import ForgotPasswordForm from './components/forgot-password.component/forgot-password.component';
import OTPForm from './components/otp.component/otp.component';

import PostCreate from './components/post.component/post.component';
import ProfileLayout from './layout/profile-layout/profile-layout';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import './App.css';
import DetailItemLayout from './layout/detail-item-layout/detail-item-layout.component';
import PostManagementLayout from './layout/post-management-layout/post-management-layout.component';
import ProfileEditLayout from './layout/profile-edit-layout/profile-edit-layout.component';
import TotalItemLayout from './layout/total-item-layout/layout/total-item-layout.component';
import ProfileEditMainLayout from './layout/profile-edit-main-layout/profile-edit-main-layout.component';
import PostsSaved from './layout/posts-saved-layout/posts-saved-layout.components';
import ChangePasswordLayout from './layout/change-password-layout/change-password-layout.component';
import ProfileCurrentUserLayout from './layout/profile-current-user-layout/profile-current-user-layout.component';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import FollowLayout from './layout/followed-follow-layout/followed-follow-layout.component';
import jwtDecode from "jwt-decode";
import { logIn } from './redux/user/userSlice';
function App() {
  const currentUser = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch();
  useEffect(() => {
    var accessToken = localStorage.getItem('accessToken');
    // var refreshToken = localStorage.getItem('refreshToken');
    if (accessToken) {
      var decodedToken = jwtDecode(accessToken);
      var date = new Date();
      if (decodedToken.exp < date.getTime() / 1000) {
        localStorage.removeItem('accessToken');
      } else {
        dispatch(logIn());
      }
    }
  }, []);
  const checkUser = () => {
    if (currentUser != null) {
      var date = new Date();
      if (currentUser.exp < date.getTime() / 1000) {
        console.log("kkkkk")
        return false;
      }
      console.log("aaaa")
      return true;
    }
    return false;
  };
  return (
    <div className="App" style={{ marginBottom: "50px" }}>
      <BrowserRouter>
        <HeaderM />
        <Switch>
          <Route exact path='/profile/password'
            render={() => currentUser ? (
              <ChangePasswordLayout />
            ) : (
              <Redirect to='/' />
            )} />
          <Route exact path='/' component={MainLayout} />
          <Route path='/user/:id' component={ProfileLayout} />
          <Route exact path='/postssaved'
            render={() => currentUser ? (
              <PostsSaved />
            ) : (
              <Redirect to='/' />
            )} />
          <Route exact path='/tim-kiem-bds' component={TotalItemLayout} />
          <Route exact path='/products/:id' component={DetailItemLayout} />
          <Route exact path='/dashboard/ads' component={PostManagementLayout} />
          <Route exact path='/follow' component={FollowLayout} />
          <Route exact path='/followed' component={FollowLayout} />
          <Route exact path='/follow/:userId' component={FollowLayout} />
          <Route exact path='/followed/:userId' component={FollowLayout} />
          <Route exact path='/dashboard/profile'
            render={() => currentUser ? (
              <ProfileEditLayout />
            ) : (
              <Redirect to='/' />
            )}
          />
          <Route exact path='/user'
            render={() => currentUser ? (
              <ProfileCurrentUserLayout />
            ) : (
              <Redirect to='/' />
            )}
          />
          <Route exact path='/otp'
            render={() => (
              <LoginSignUpLayout>
                <OTPForm />
              </LoginSignUpLayout>
            )} />
          <Route
            exact
            path='/login'
            render={() =>
              currentUser ? (
                <Redirect to='/' />
              ) : (
                <LoginSignUpLayout>
                  <LoginForm />
                </LoginSignUpLayout>
              )
            }
          />
          <Route path='/signin'
            render={() =>
              currentUser ? (
                <Redirect to='/' />
              ) : (
                <LoginSignUpLayout>
                  <LoginSignupForm />
                </LoginSignUpLayout>
              )
            }>
          </Route>
          <Route path='/forgotpassword'>
            <LoginSignUpLayout>
              <ForgotPasswordForm />
            </LoginSignUpLayout>
          </Route>
          <Route path='/postcreate'
            render={() => currentUser ? (
              <PostCreate />
            ) : (
              <Redirect to='/Login' />
            )} 
          />
          <Route path='/chinh-sua/:id'
            render={() => currentUser ? (
              <PostCreate />
            ) : (
              <Redirect to='/Login' />
            )} 
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
