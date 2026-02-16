import { motion } from 'framer-motion'
import { CheckCircle, Send } from 'lucide-react'
import React, { useState } from 'react'
import { sendContactMessage } from '../../services/api'
import { Button } from '../ui/Button'

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>(
    'idle',
  )
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    try {
      await sendContactMessage(formState)
      setStatus('success')
      setFormState({
        name: '',
        email: '',
        message: '',
      })
    } catch (error) {
      setStatus('error')
      setErrorMessage('Prišlo je do napake. Prosimo poskusite ponovno.')
      console.error('Error sending message:', error)
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        className="bg-surface border border-green-500/20 rounded-2xl p-8 text-center h-full flex flex-col items-center justify-center min-h-[400px]"
      >
        <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Sporočilo poslano!</h3>
        <p className="text-zinc-400 mb-8 max-w-xs mx-auto">
          Hvala, ker ste nas kontaktirali. Odgovorili vam bomo v 24 urah.
        </p>
        <Button variant="outline" onClick={() => setStatus('idle')}>
          Pošlji novo sporočilo
        </Button>
      </motion.div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-surface border border-white/5 rounded-2xl p-6 md:p-8 space-y-6"
    >
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-zinc-400 mb-2"
        >
          Ime in Priimek <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formState.name}
          onChange={handleChange}
          className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none"
          placeholder="Janez Novak"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-zinc-400 mb-2"
        >
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formState.email}
          onChange={handleChange}
          className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none"
          placeholder="janez@podjetje.si"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-zinc-400 mb-2"
        >
          Sporočilo <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formState.message}
          onChange={handleChange}
          className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none resize-none"
          placeholder="Povejte nam kakšne so vaše želje in cilji, dileme, izzivi ali vprašanja."
        />
      </div>

      {status === 'error' && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-red-500 text-sm">
          {errorMessage}
        </div>
      )}

      <Button
        type="submit"
        className="w-full"
        size="lg"
        isLoading={status === 'submitting'}
        rightIcon={<Send className="w-4 h-4" />}
      >
        Pošlji sporočilo
      </Button>
    </form>
  )
}
