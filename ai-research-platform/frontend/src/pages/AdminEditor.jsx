import {useEffect,useState} from "react"
import {useNavigate,useParams} from "react-router-dom"
import {api} from "../api"

const blank={title:"",slug:"",excerpt:"",content:"",category:"AI Research",tags:"",cover_image:"",references:"",published:false}

export default function AdminEditor(){
  const token=localStorage.getItem("aiResearchToken"), nav=useNavigate(), {id}=useParams(), [form,setForm]=useState(blank), [error,setError]=useState("")
  useEffect(()=>{if(!token){nav("/login");return} if(id) api.get ? null : api.adminAll(token).then(xs=>{const a=xs.find(x=>String(x.id)===id);if(a)setForm(a)})},[id])
  const change=e=>setForm({...form,[e.target.name]:e.target.type==="checkbox"?e.target.checked:e.target.value})
  async function save(e){e.preventDefault();setError("");try{if(id) await api.update(token,id,form);else await api.create(token,form);nav("/admin")}catch(err){setError(err.message)}}
  async function remove(){if(confirm("Delete this article?")){await api.remove(token,id);nav("/admin")}}
  return <div className="container editor"><div className="section-head"><div><p className="eyebrow">EDITOR</p><h1>{id?"Edit article":"New article"}</h1></div><button className="secondary" onClick={()=>nav("/admin")}>Cancel</button></div>
  <form onSubmit={save} className="editor-form">
    <label>Title<input name="title" value={form.title} onChange={change} required /></label>
    <div className="two"><label>Category<select name="category" value={form.category} onChange={change}><option>AI Research</option><option>AI News & Analysis</option><option>Research Notes</option><option>Paper Summaries</option><option>My Ideas</option></select></label><label>Tags<input name="tags" value={form.tags} onChange={change} placeholder="AI, agents, multimodal" /></label></div>
    <label>Slug<input name="slug" value={form.slug} onChange={change} placeholder="Leave empty to generate from title" /></label>
    <label>Excerpt<textarea name="excerpt" value={form.excerpt} onChange={change} rows="3" /></label>
    <label>Article content<textarea className="content-editor" name="content" value={form.content} onChange={change} rows="22" placeholder={"Write your article here.\n\nUse blank lines between paragraphs.\n\n## Heading\n\n### Subheading\n\n- List item"} /></label>
    <label>Cover image URL<input name="cover_image" value={form.cover_image} onChange={change} /></label>
    <label>References / sources<textarea name="references" value={form.references} onChange={change} rows="4" placeholder="Add paper titles, DOI links, source URLs, etc." /></label>
    <label className="check"><input type="checkbox" name="published" checked={form.published} onChange={change} /> Publish this article</label>
    {error&&<p className="error">{error}</p>}
    <div><button>{id?"Save changes":"Create article"}</button>{id&&<button type="button" className="danger" onClick={remove}>Delete</button>}</div>
  </form></div>
}
