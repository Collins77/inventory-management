import { BaggageClaim, ChevronLeft, Home, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Sidebar() {
  return (
    <div className='w-56 min-h-screen bg-slate-800 text-slate-50 justify-between'>
        {/* Top Part */}
        <div className="flex flex-col">
            <div className="bg-slate-950 flex space-x-2 items-center py-3 px-2">
                <ShoppingCart />
                <span className='font-semibold text-xl'>Inventory</span>
            </div>
        </div>

        {/* Links */}
        <nav className='flex flex-col gap-4 p-3'>
            <Link className='flex items-center space-x-2' href="">
                <Home className="h-4 w-4" />
                <span>Home</span>
            </Link>
            <Link className='flex items-center space-x-2' href="">
                <BaggageClaim className="h-4 w-4" />
                <span>Inventory</span>
            </Link>
            
        </nav>

        {/* Bottom Part */}
        <div className="flex flex-col justify-end items-center">
            <div className="bg-slate-950 flex space-x-2 items-center py-3 px-2">
                <ChevronLeft />
            </div>
        </div>

        {/* Subscription Card */}

        {/* Footer Icon */}
    </div>
  )
}
