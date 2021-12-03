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

import DropDownMenu from './components/drop-downmenu.component/drop-downmenu.component';

import { useSelector } from 'react-redux';

function App() {
  const currentUser = useSelector(state => state.user.currentUser)
  useEffect(() => {
    var accessToken = localStorage.getItem('accessToken');
    var refreshToken = localStorage.getItem('refreshToken');
  }, [])
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderM />
        <Switch>
          <Route exact path='/' component={MainLayout} />
          <Route exact path='/dd' component={DropDownMenu} />
          <Route exact path='/user/:id' component={ProfileLayout} />
          <Route exact path='/postssaved' component={PostsSaved} />
          <Route exact path='/totalItem' component={TotalItemLayout} />
          <Route exact path='/dashboard/profile' component={ProfileEditLayout} />
          <Route exact path='/products/:id' component={DetailItemLayout} />
          <Route exact path='/dashboard/ads' component={PostManagementLayout} />
          <Route exact path='/dashboard/profile/edit' component={ProfileEditMainLayout} />
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
          <Route path='/postcreate' component={PostCreate} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
