import {useEffect,useState} from "react"
import {Link,useNavigate} from "react-router-dom"
import {api} from "../api"

export default function Admin(){
  const token=localStorage.getItem("aiResearchToken"), nav=useNavigate(), [items,setItems]=useState([])
  useEffect(()=>{if(!token){nav("/login");return} api.adminAll(token).then(setItems).catch(()=>{localStorage.removeItem("aiResearchToken");nav("/login")})},[])
  function logout(){localStorage.removeItem("aiResearchToken");nav("/")}
  return <div className="container admin"><div className="section-head"><div><p className="eyebrow">PUBLISHING</p><h1>Dashboard</h1></div><div><button onClick={()=>nav("/admin/new")}>+ New article</button> <button className="secondary" onClick={logout}>Log out</button></div></div>
    <div className="admin-list">{items.map(a=><div className="admin-row" key={a.id}><div><strong>{a.title}</strong><small>{a.category} · {a.published?"Published":"Draft"} · {new Date(a.updated_at).toLocaleDateString()}</small></div><Link to={`/admin/edit/${a.id}`}>Edit</Link></div>)}</div>
  </div>
}
