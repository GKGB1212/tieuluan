import { useState, useEffect } from 'react';
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
import PostEdit from './components/post-edit.component/post-edit.component';
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
import { fetchNotification } from './redux/report/reportSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import FollowLayout from './layout/followed-follow-layout/followed-follow-layout.component';
import jwtDecode from "jwt-decode";
import { logIn } from './redux/user/userSlice';
import LoadingComponent from './components/loader/LoadingComponent';
import ArticleLayout from './layout/article-layout/article-layout.component';
import AllArticleLayout from './layout/all-article-layout/all-article-layout.component';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import { FacebookProvider, Page } from 'react-facebook';
function App() {
  const currentUser = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(0);
  useEffect(() => {
    var accessToken = localStorage.getItem('accessToken');
    // var refreshToken = localStorage.getItem('refreshToken');
    if (accessToken) {
      dispatch(fetchNotification());
      var decodedToken = jwtDecode(accessToken);
      var date = new Date();
      if (decodedToken.exp < date.getTime() / 1000) {
        localStorage.removeItem('accessToken');
        setLoading(1);
      } else {
        dispatch(logIn());
        setLoading(1);
      }
    }
    setLoading(1);
  }, []);
  return (
    <div className="App">
      {
        loading != 0
          ? (<BrowserRouter>
            <MessengerCustomerChat
              pageId="108923665216134"
              appId="5429323507132483"
            />
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
              <Route path='/tim-kiem-bds' component={TotalItemLayout} />
              <Route exact path='/products/:id' component={DetailItemLayout} />
              <Route exact path='/products/:id' component={DetailItemLayout} />
              <Route exact path='/news/:id' component={ArticleLayout} />
              <Route exact path='/dashboard/ads' component={PostManagementLayout} />
              <Route exact path='/follow' component={FollowLayout} />
              <Route exact path='/all-article' component={AllArticleLayout} />
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
                  <PostEdit />
                ) : (
                  <Redirect to='/Login' />
                )}
              />
            </Switch>

            {/* <FacebookProvider appId="5429323507132483">
              <Page href="https://www.facebook.com/Atlanta-B%E1%BA%A5t-%C4%90%E1%BB%99ng-S%E1%BA%A3n-108923665216134" tabs="timeline" />

            </FacebookProvider> */}
            <Footer/>
          </BrowserRouter>)
          : (<LoadingComponent isLoading={true} />)
      }
    </div>
  );
}

export default App;
