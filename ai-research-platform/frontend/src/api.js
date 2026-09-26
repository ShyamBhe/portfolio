const API = import.meta.env.VITE_API_URL || "http://localhost:8000/api"

async function request(path, options = {}) {
  const response = await fetch(`${API}${path}`, {
    headers: {"Content-Type": "application/json", ...(options.headers || {})},
    ...options
  })
  if (!response.ok) {
    let message = "Request failed"
    try { message = (await response.json()).detail || message } catch {}
    throw new Error(message)
  }
  return response.json()
}

export const api = {
  list: (params = "") => request(`/articles${params}`),
  article: slug => request(`/articles/slug/${encodeURIComponent(slug)}`),
  login: (email, password) => request("/auth/login", {method:"POST", body:JSON.stringify({email,password})}),
  adminAll: token => request("/articles/admin/all", {headers:{Authorization:`Bearer ${token}`}}),
  create: (token, data) => request("/articles", {method:"POST", headers:{Authorization:`Bearer ${token}`}, body:JSON.stringify(data)}),
  update: (token, id, data) => request(`/articles/${id}`, {method:"PUT", headers:{Authorization:`Bearer ${token}`}, body:JSON.stringify(data)}),
  remove: (token, id) => request(`/articles/${id}`, {method:"DELETE", headers:{Authorization:`Bearer ${token}`}})
}
