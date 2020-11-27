import './App.css';
import Header from './components/Header/Header';
import Post from './components/Post/Post';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import PostDetail from './components/PostDetail/PostDetail';

function App() {
  
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
          <Post></Post>
        </Route>
        <Route path='/postID/:postId'>
          <PostDetail></PostDetail>
        </Route>
        <Route path='*'>
          <NoMatch></NoMatch>
        </Route>
      </Switch>
      
    </Router>
  );
}

export default App;
