import { useEffect, useState } from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Menu, X, ArrowRight, Check, Shield, Mail, LogIn, UserPlus, BookOpen, BadgeDollarSign, Send, ChevronRight } from 'lucide-react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <div className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-indigo-500 to-cyan-400" />
          <span className="text-white font-semibold">Nebula Marketing</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#blog" className="hover:text-white transition">Blog</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <a href="#auth" className="text-zinc-300 hover:text-white flex items-center gap-2 text-sm"><LogIn size={16}/> Log in</a>
          <a href="#auth" className="text-white bg-white/10 hover:bg-white/20 border border-white/10 px-4 py-2 rounded-md text-sm flex items-center gap-2"><UserPlus size={16}/> Sign up</a>
        </div>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X/> : <Menu/>}
        </button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-3 text-zinc-300">
          <a href="#features" className="block">Features</a>
          <a href="#pricing" className="block">Pricing</a>
          <a href="#blog" className="block">Blog</a>
          <a href="#contact" className="block">Contact</a>
          <a href="#auth" className="block">Log in</a>
          <a href="#auth" className="block">Sign up</a>
        </div>
      )}
    </div>
  )
}

function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full bg-black overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-36 pb-24">
        <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.1}} className="text-4xl sm:text-6xl font-bold text-white tracking-tight">
          Scale your marketing with precision
        </motion.h1>
        <motion.p initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.2}} className="mt-4 max-w-2xl text-lg text-zinc-300">
          A modern platform to plan, launch and optimize campaigns. Built for agencies that want speed, clarity and results.
        </motion.p>
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.3}} className="mt-8 flex flex-col sm:flex-row gap-3">
          <a href="#auth" className="inline-flex items-center gap-2 rounded-md bg-indigo-500 hover:bg-indigo-400 text-white px-6 py-3">
            Get started <ArrowRight size={18}/>
          </a>
          <a href="#pricing" className="inline-flex items-center gap-2 rounded-md bg-white/10 hover:bg-white/20 text-white px-6 py-3 border border-white/10">
            View pricing <BadgeDollarSign size={18}/>
          </a>
        </motion.div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {["Faster launches", "Deeper insights", "Client-ready reports"].map((item) => (
            <div key={item} className="rounded-lg border border-white/10 bg-white/5 backdrop-blur p-4 text-zinc-300">
              <div className="flex items-center gap-2 text-white"><Shield size={16}/> {item}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Features() {
  const features = [
    { title: 'Campaign orchestration', desc: 'Coordinate multi-channel campaigns in one place.' },
    { title: 'Attribution & analytics', desc: 'Understand what moves the needle with clean dashboards.' },
    { title: 'Client portals', desc: 'Share progress, assets and results with stakeholders.' },
  ]
  return (
    <section id="features" className="bg-black text-zinc-300">
      <div className="mx-auto max-w-7xl px-4 py-20">
        <h2 className="text-3xl text-white font-semibold">Everything you need to win accounts</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(f => (
            <div key={f.title} className="rounded-lg border border-white/10 bg-white/5 p-6">
              <div className="text-white font-medium">{f.title}</div>
              <p className="mt-2 text-sm text-zinc-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  const [plans, setPlans] = useState([])
  useEffect(() => {
    fetch(`${API_BASE}/pricing`).then(r => r.json()).then(d => setPlans(d.plans || [])).catch(() => {})
  }, [])
  return (
    <section id="pricing" className="bg-black text-zinc-300">
      <div className="mx-auto max-w-7xl px-4 py-20">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-3xl text-white font-semibold">Simple pricing</h2>
            <p className="text-zinc-400 mt-2">Choose a plan that grows with your pipeline.</p>
          </div>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center justify-between">
                <div className="text-white font-medium">{p.name}</div>
                {p.popular && <span className="text-xs px-2 py-1 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">Popular</span>}
              </div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl text-white font-semibold">${p.price}</span>
                <span className="text-sm text-zinc-400">/{p.period}</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm">
                {(p.features||[]).map(f => (
                  <li key={f} className="flex items-center gap-2"><Check size={16} className="text-indigo-400"/> {f}</li>
                ))}
              </ul>
              <a href="#auth" className="mt-6 inline-flex items-center gap-2 w-full justify-center rounded-md bg-white/10 hover:bg-white/20 text-white px-4 py-2 border border-white/10">Start trial <ChevronRight size={16}/></a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Blog() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch(`${API_BASE}/blog`).then(r => r.json()).then(d => setPosts(d)).catch(() => {})
  }, [])
  return (
    <section id="blog" className="bg-black text-zinc-300">
      <div className="mx-auto max-w-7xl px-4 py-20">
        <div className="flex items-baseline justify-between">
          <h2 className="text-3xl text-white font-semibold">From the blog</h2>
          <a href="#" className="text-sm text-indigo-300 hover:text-indigo-200">View all</a>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.length === 0 && [1,2,3].map(i => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-6 h-48 animate-pulse" />
          ))}
          {posts.map(p => (
            <article key={p.id} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="text-white font-medium">{p.title}</div>
              <p className="mt-2 text-sm text-zinc-400 line-clamp-3">{p.excerpt}</p>
              <div className="mt-4 text-xs text-zinc-500">By {p.author}</div>
              <a href={`#/blog/${p.slug}`} className="mt-4 inline-flex items-center gap-2 text-indigo-300 hover:text-indigo-200 text-sm">Read more <ArrowRight size={16}/></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Auth() {
  const [mode, setMode] = useState('login')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ name: '', email: '', password: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const endpoint = mode === 'login' ? '/auth/login' : '/auth/register'
      const res = await fetch(`${API_BASE}${endpoint}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Something went wrong')
      alert(mode === 'login' ? 'Welcome back!' : 'Account created!')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="auth" className="bg-black text-zinc-300">
      <div className="mx-auto max-w-7xl px-4 py-20">
        <div className="max-w-md mx-auto rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-white font-semibold">{mode === 'login' ? 'Log in' : 'Create account'}</h3>
            <button onClick={() => setMode(mode === 'login' ? 'signup' : 'login')} className="text-sm text-indigo-300 hover:text-indigo-200">
              {mode === 'login' ? 'Need an account?' : 'Have an account? Log in'}
            </button>
          </div>
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            {mode === 'signup' && (
              <div>
                <label className="block text-sm text-zinc-400">Name</label>
                <input value={form.name} onChange={e=>setForm({...form, name: e.target.value})} className="mt-1 w-full rounded-md bg-black border border-white/10 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Jane Doe"/>
              </div>
            )}
            <div>
              <label className="block text-sm text-zinc-400">Email</label>
              <input type="email" value={form.email} onChange={e=>setForm({...form, email: e.target.value})} className="mt-1 w-full rounded-md bg-black border border-white/10 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="you@company.com"/>
            </div>
            <div>
              <label className="block text-sm text-zinc-400">Password</label>
              <input type="password" value={form.password} onChange={e=>setForm({...form, password: e.target.value})} className="mt-1 w-full rounded-md bg-black border border-white/10 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="••••••••"/>
            </div>
            {error && <div className="text-sm text-red-400">{error}</div>}
            <button disabled={loading} className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-indigo-500 hover:bg-indigo-400 text-white px-4 py-2">
              {loading ? 'Please wait…' : (mode === 'login' ? <>Log in <LogIn size={16}/></> : <>Create account <UserPlus size={16}/></>)}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)
  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus('')
    try {
      const res = await fetch(`${API_BASE}/contact`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed to send')
      setStatus('Thanks! We will be in touch shortly.')
      setForm({ name: '', email: '', company: '', message: '' })
    } catch (e) {
      setStatus(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="bg-black text-zinc-300">
      <div className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl text-white font-semibold">Tell us about your goals</h2>
            <p className="text-zinc-400 mt-2">Drop a line and we’ll get back within one business day.</p>
            <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-6">
              <form onSubmit={submit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-zinc-400">Full name</label>
                    <input value={form.name} onChange={e=>setForm({...form, name: e.target.value})} className="mt-1 w-full rounded-md bg-black border border-white/10 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Jane Doe"/>
                  </div>
                  <div>
                    <label className="block text-sm text-zinc-400">Email</label>
                    <input type="email" value={form.email} onChange={e=>setForm({...form, email: e.target.value})} className="mt-1 w-full rounded-md bg-black border border-white/10 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="you@company.com"/>
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-zinc-400">Company</label>
                  <input value={form.company} onChange={e=>setForm({...form, company: e.target.value})} className="mt-1 w-full rounded-md bg-black border border-white/10 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Acme Inc."/>
                </div>
                <div>
                  <label className="block text-sm text-zinc-400">Message</label>
                  <textarea rows={6} value={form.message} onChange={e=>setForm({...form, message: e.target.value})} className="mt-1 w-full rounded-md bg-black border border-white/10 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="What are you trying to achieve?"/>
                </div>
                <button disabled={loading} className="inline-flex items-center gap-2 rounded-md bg-indigo-500 hover:bg-indigo-400 text-white px-5 py-2">
                  {loading ? 'Sending…' : <>Send message <Send size={16}/></>}
                </button>
                {status && <div className="text-sm text-zinc-400">{status}</div>}
              </form>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8">
            <div className="text-white font-medium">Why agencies choose us</div>
            <ul className="mt-4 space-y-3 text-sm">
              {["Clear ROI tracking","Lightning-fast workflows","Battle-tested playbooks","Enterprise-grade security"].map(i => (
                <li key={i} className="flex items-start gap-3"><Check size={16} className="mt-0.5 text-indigo-400"/> <span className="text-zinc-300">{i}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer(){
  return (
    <footer className="bg-black border-t border-white/10 text-zinc-400">
      <div className="mx-auto max-w-7xl px-4 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-6 w-6 rounded-md bg-gradient-to-br from-indigo-500 to-cyan-400" />
          <span className="text-sm">© {new Date().getFullYear()} Nebula Marketing. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default function App(){
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar/>
      <Hero/>
      <Features/>
      <Pricing/>
      <Blog/>
      <Auth/>
      <Contact/>
      <Footer/>
    </div>
  )
}
