import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Books from './components/Books';
import Categories from './components/Categories';
import Navbar from './components/Navbar';

export const App = () => {
  console.log(this.props.data);
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/books" element={<Books />} />
          ;
          <Route path="/categories" element={<Categories />} />
          ;
        </Routes>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  reminders: state.data,
});

export default connect(mapStateToProps)(App);
