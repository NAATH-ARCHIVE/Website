import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from './ui/button'
import { addToWaitingList } from '../lib/api'
import toast from 'react-hot-toast'
import { X } from 'lucide-react'

export function WaitingListDialog({ children, variant }) {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      await addToWaitingList(name, email)
      toast.success('Thanks for joining our waiting list!')
      setSubmitted(true)
      setName('')
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
    <Dialog.Root open={open} onOpenChange={(isOpen) => {
      setOpen(isOpen)
      if (!isOpen) setSubmitted(false)
    }}>
      <Dialog.Trigger asChild>
        {children || <Button variant={variant}>Get Started</Button>}
      </Dialog.Trigger>
      
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 z-50"
              />
            </Dialog.Overlay>
            
            <Dialog.Content asChild>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-50 w-full max-w-md bg-background rounded-lg shadow-lg p-6"
              >
                {submitted ? (
                  <div className="text-center">
                    <Dialog.Title className="text-2xl font-bold mb-4">
                      Thank You!
                    </Dialog.Title>
                    <p className="mb-4">Thanks for joining our waiting list. We will keep you updated!</p>
                    <Button onClick={() => setOpen(false)} className="w-full">
                      Close
                    </Button>
                  </div>
                ) : (
                  <>
                    <Dialog.Title className="text-2xl font-bold mb-4">
                      Join the Waiting List
                    </Dialog.Title>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">
                          Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full px-3 py-2 rounded-md border border-input"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-3 py-2 rounded-md border border-input"
                          required
                        />
                      </div>
                      
                      <Button type="submit" className="w-full" disabled={loading}>
                        {loading ? 'Joining...' : 'Join Waiting List'}
                      </Button>
                    </form>
                  </>
                )}
                
                <Dialog.Close asChild>
                  <button
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
                    aria-label="Close"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </Dialog.Close>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  )
}