import {Routes, Route, Link, useNavigate} from "react-router-dom"
import Home from "./pages/Home"
import Article from "./pages/Article"
import Login from "./pages/Login"
import Admin from "./pages/Admin"
import AdminEditor from "./pages/AdminEditor"

export default function App() {
  return <>
    <header className="site-header">
      <div className="container nav">
        <Link className="brand" to="/">AI Research<span>.</span></Link>
        <nav>
          <Link to="/">Latest</Link>
          <Link to="/?category=AI%20News%20%26%20Analysis">AI News</Link>
          <Link to="/?category=Research%20Notes">Research Notes</Link>
          <Link to="/?category=Paper%20Summaries">Papers</Link>
          <Link to="/?category=My%20Ideas">My Ideas</Link>
          <Link className="admin-link" to="/admin">Admin</Link>
        </nav>
      </div>
    </header>
    <main><Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/article/:slug" element={<Article/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/admin/new" element={<AdminEditor/>}/>
      <Route path="/admin/edit/:id" element={<AdminEditor/>}/>
    </Routes></main>
    <footer><div className="container">AI Research · News, ideas, papers and practical AI analysis.</div></footer>
  </>
}
