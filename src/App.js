import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LoginForm from "./components/Login/login";
import SignUpForm from "./components/Signup/signup";

import CreatePostForm from "./components/PostForm/PostForm";
import Navigation from "./components/Navigation/navigation";
import PostList from "./components/Posts/PostList";


function App() {


  return (
    <div>
      <Router>
      <Navigation/>
      <Routes>
      <Route exact path="/" element={<LoginForm/>} />
      <Route exact path="/signup" element={<SignUpForm/>} />
      <Route exact path="/posts" element={<PostList/>} />
      <Route exact path="/create" element={<CreatePostForm/>} />
    </Routes>
    </Router>
      
    </div>
  );
}

export default App;
