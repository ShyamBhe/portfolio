import {useEffect,useState} from "react"
import {Link,useParams} from "react-router-dom"
import {api} from "../api"

function renderContent(text) {
  return text.split(/\n\s*\n/).map((block,i)=>{
    const line=block.trim()
    if(!line) return null
    if(line.startsWith("### ")) return <h3 key={i}>{line.slice(4)}</h3>
    if(line.startsWith("## ")) return <h2 key={i}>{line.slice(3)}</h2>
    if(line.startsWith("# ")) return <h1 key={i}>{line.slice(2)}</h1>
    if(line.startsWith("- ")) return <ul key={i}>{line.split("\n").map((x,j)=><li key={j}>{x.replace(/^-\s/,"")}</li>)}</ul>
    return <p key={i}>{line}</p>
  })
}

export default function Article(){
  const {slug}=useParams()
  const [a,setA]=useState(null)
  useEffect(()=>api.article(slug).then(setA).catch(()=>setA(false)),[slug])
  if(a===null) return <div className="container article"><p>Loading...</p></div>
  if(!a) return <div className="container article"><h1>Article not found</h1><Link to="/">← Back</Link></div>
  return <div className="container article">
    <Link className="back" to="/">← All research</Link>
    <div className="article-meta">{a.category} · {new Date(a.published_at || a.updated_at).toLocaleDateString()}</div>
    <h1>{a.title}</h1><p className="lead">{a.excerpt}</p>
    <div className="tags">{a.tags.split(",").filter(Boolean).map(t=><span key={t}>{t.trim()}</span>)}</div>
    <div className="content">{renderContent(a.content)}</div>
    {a.references && <section className="references"><h2>References & sources</h2><p>{a.references}</p></section>}
  </div>
}
