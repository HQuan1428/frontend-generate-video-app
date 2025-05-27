import Link from 'next/link'
import { BrainCircuit } from 'lucide-react'

import { Button } from '@/components/common/button'

import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  return (
    <nav className='border-b'>
      <div className='container mx-auto flex h-16 items-center justify-between px-4'>
        <Link href='/' className='flex items-center space-x-2'>
          <BrainCircuit />
          <span className='text-xl font-bold md:text-2xl'>
            AI Shorts Generator
          </span>
        </Link>
        <div className='flex items-center space-x-4'>
          <Button asChild>
            <Link href='/dashboard'>Dashboard</Link>
          </Button>
          <Button asChild>
            <Link href='/sign-in'>Sign In</Link>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
