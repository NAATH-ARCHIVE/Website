import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { addToWaitingList } from '../lib/mongodb'
import toast from 'react-hot-toast'

export function WaitingListForm() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      await addToWaitingList(email)
      toast.success('Thanks for joining our waiting list!')
      setEmail('')
    } catch (error) {
      if (error.message === 'Email already registered') {
        toast.error('This email is already registered')
      } else {
        toast.error('Something went wrong. Please try again.')
        console.error('Error:', error)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-md mx-auto"
      onSubmit={handleSubmit}
    >
      <div className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-1 px-4 py-2 rounded-md border border-input bg-background"
        />
        <Button type="submit" disabled={loading}>
          {loading ? 'Joining...' : 'Join Waitlist'}
        </Button>
      </div>
    </motion.form>
  )
}