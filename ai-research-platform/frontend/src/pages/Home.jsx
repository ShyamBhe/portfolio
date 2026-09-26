import {useEffect, useState} from "react"
import {Link, useSearchParams} from "react-router-dom"
import {api} from "../api"

export default function Home() {
  const [params] = useSearchParams()
  const category = params.get("category") || ""
  const [articles,setArticles] = useState([])
  const [search,setSearch] = useState("")
  const [loading,setLoading] = useState(true)

  useEffect(()=> {
    setLoading(true)
    api.list(`?category=${encodeURIComponent(category)}&search=${encodeURIComponent(search)}`)
      .then(setArticles).catch(()=>setArticles([])).finally(()=>setLoading(false))
  },[category,search])

  return <div className="container">
    <section className="hero">
      <p className="eyebrow">AI RESEARCH & ANALYSIS</p>
      <h1>Understand AI beyond the headlines.</h1>
      <p className="hero-copy">Research notes, AI news analysis, paper summaries and original ideas — published from a practical software and research perspective.</p>
      <div className="search-row"><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search articles, topics or tags..." /></div>
    </section>
    <div className="section-head"><h2>{category || "Latest research"}</h2><span>{articles.length} article{articles.length!==1?"s":""}</span></div>
    {loading ? <p>Loading...</p> : articles.length ? <div className="grid">{articles.map(a=>
      <article className="card" key={a.id}>
        <div className="card-meta"><span>{a.category}</span><span>{new Date(a.updated_at).toLocaleDateString()}</span></div>
        <h3><Link to={`/article/${a.slug}`}>{a.title}</Link></h3>
        <p>{a.excerpt}</p>
        <div className="tags">{a.tags.split(",").filter(Boolean).map(t=><span key={t}>{t.trim()}</span>)}</div>
        <Link className="read-more" to={`/article/${a.slug}`}>Read analysis →</Link>
      </article>
    )}</div> : <div className="empty"><h3>No published articles yet.</h3><p>Log in to Admin and publish your first piece.</p></div>}
  </div>
}
