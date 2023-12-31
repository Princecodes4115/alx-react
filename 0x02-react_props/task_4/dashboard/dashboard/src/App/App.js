import './App.css'
import Header from './components/Header';
import Notifications from './components/Notifications';
import Login from './components/Login';
import Footer from './components/Footer';
import PropTypes from 'prop-types';
import CourseList from '.components/CourseList';

export default function App(props) {
  const { isLoggedIn } = props;
  return (
    <div>
      <Notifications />
      <Header />
     {isLoggedIn ? <CourseList /> : <Login />}
      <Footer />
    </div>
  )
}

App.propTypes = {
isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
isLoggedIn: false,
};
