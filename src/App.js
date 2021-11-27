import logo from './logo.webp';
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
// import Slider from './components/slider-images.component/slider-images.component';
import Slider from './components/slider-images.component/slider-images.component';
import DetailItemLayout from './layout/detail-item-layout/detail-item-layout.component';
import PostManagementLayout from './layout/post-management-layout/post-management-layout.component';
import ProfileEditLayout from './layout/profile-edit-layout/profile-edit-layout.component';
import TotalItemLayout from './layout/total-item-layout/layout/total-item-layout.component';
import ProfileEditMainLayout from './layout/profile-edit-main-layout/profile-edit-main-layout.component';
import PostsSaved from './layout/posts-saved-layout/posts-saved-layout.components';


import { useSelector } from 'react-redux';

import Imagess from './imagesss';
function App() {
  const currentUser = useSelector(state => state.user.currentUser)
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderM />
        <Switch>
          <Route exact path='/' component={MainLayout} />
          <Route exact path='/try' component={ProfileLayout} />
          <Route exact path='/postssaved' component={PostsSaved}/>
          <Route exact path='/totalItem' component={TotalItemLayout} />
          <Route exact path='/dashboard/profile' component={ProfileEditLayout} />
          <Route exact path='/products/:id' component={DetailItemLayout} />
          <Route exact path='/dashboard/ads' component={PostManagementLayout} />
          <Route exact path='/dashboard/profile/edit' component={ProfileEditMainLayout} />
          <Route exact path='/otp' component={OTPForm}/>
          <Route
            exact
            path='/Login'
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
          <Route path='/Signin'
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
          <Route path='/ForgotPassword'>
            <LoginSignUpLayout>
              <ForgotPasswordForm />
            </LoginSignUpLayout>
          </Route>
          <Route path='/PostCreate' component={PostCreate} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
