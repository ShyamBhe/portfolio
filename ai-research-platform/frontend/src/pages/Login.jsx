import {useState} from "react"
import {useNavigate} from "react-router-dom"
import {api} from "../api"

export default function Login(){
  const nav=useNavigate(), [email,setEmail]=useState(""), [password,setPassword]=useState(""), [error,setError]=useState("")
  async function submit(e){
    e.preventDefault(); setError("")
    try { const r=await api.login(email,password); localStorage.setItem("aiResearchToken",r.access_token); nav("/admin") }
    catch(err){setError(err.message)}
  }
  return <div className="container narrow"><div className="panel">
    <p className="eyebrow">ADMIN</p><h1>Sign in</h1>
    <form onSubmit={submit}><label>Email<input type="email" value={email} onChange={e=>setEmail(e.target.value)} required /></label>
    <label>Password<input type="password" value={password} onChange={e=>setPassword(e.target.value)} required /></label>
    {error&&<p className="error">{error}</p>}<button>Sign in</button></form>
  </div></div>
}
