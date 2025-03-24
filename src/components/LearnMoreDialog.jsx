import * as Dialog from '@radix-ui/react-dialog'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from './ui/button'
import { X } from 'lucide-react'
import { useState } from 'react'

export function LearnMoreDialog({ children }) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        {children || <Button variant="outline">Learn More</Button>}
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
                className="fixed inset-0 z-50 flex items-center justify-center"
              >
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden w-full max-w-3xl mx-4 relative">
                  <div className="p-6 h-full overflow-y-auto">
                    <Dialog.Title className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                      About Naath Archive
                    </Dialog.Title>
                    
                    <div className="prose prose-lg dark:prose-invert">
                      <h2 className="text-gray-900 dark:text-gray-100">Preserving Cultural Heritage</h2>
                      <p className="text-gray-700 dark:text-gray-300">
                        Naath Archive is dedicated to preserving and celebrating cultural heritage through digital archiving. Our platform provides communities with the tools they need to document, store, and share their invaluable cultural artifacts, stories, and traditions.
                      </p>
                      
                      <h2 className="text-gray-900 dark:text-gray-100">Our Mission</h2>
                      <p className="text-gray-700 dark:text-gray-300">
                        We believe that every community's cultural heritage is precious and deserves to be preserved for future generations. Our mission is to make cultural preservation accessible to all communities, regardless of size or resources.
                      </p>
                      
                      <h2 className="text-gray-900 dark:text-gray-100">Key Features</h2>
                      <ul className="text-gray-700 dark:text-gray-300">
                        <li>Secure digital storage for cultural artifacts</li>
                        <li>Collaborative documentation tools</li>
                        <li>Customizable access controls</li>
                        <li>Community engagement features</li>
                        <li>Educational resources and support</li>
                      </ul>
                      
                      <h2 className="text-gray-900 dark:text-gray-100">Join Our Community</h2>
                      <p className="text-gray-700 dark:text-gray-300">
                        By joining Naath Archive, you become part of a global community dedicated to cultural preservation. Together, we can ensure that our rich cultural heritage continues to inspire and educate future generations.
                      </p>
                    </div>
                  </div>
                  
                  <Dialog.Close asChild>
                    <button
                      className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-400"
                      aria-label="Close"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </Dialog.Close>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  )
}