import { Bell, ChevronDown, History, LayoutGrid, Plus, Settings, Users } from 'lucide-react'
import React from 'react'
import SearchInput from './SearchInput'
import Image from 'next/image'

export default function Header() {
  return (
    <div className='bg-gray-100 h-14 flex items-center justify-between px-6 border-b border-slate-200'>
        <div className="flex gap-3">
            {/* recent activities */}
                <button>
                    <History className='w-6 h-6' />
                </button>
            {/* search */} 
            <SearchInput />

        </div>
        <div className="flex items-center gap-3">
            {/* Plus Icon */}
            <div className="pr-2 border-r border-gray-300">
                <button className='p-1 bg-blue-600 rounded-lg'>
                    <Plus className='text-slate-50 w-4 h-4' />
                </button>
            </div>
            <div className="flex border-r border-gray-300 space-x-2">
                <button className='p-1 hover:bg-slate-200 rounded-lg'>
                    <Users className='text-slate-900 w-5 h-5' />
                </button>
                <button className='p-1 hover:bg-slate-200 rounded-lg'>
                    <Bell className='text-slate-900 w-5 h-5' />
                </button>
                <button className='p-1 hover:bg-slate-200 rounded-lg'>
                    <Settings className='text-slate-900 w-5 h-5' />
                </button>
            </div>
            <div className="flex gap-4">
                <button className='flex items-center'>
                    <span>Cotek</span>
                    <ChevronDown className='w-3 h-3' />
                </button>
                <button>
                    <Image src="/user.jpg" alt='user image' width={96} height={96} className='w-9 h-9 rounded-full border border-slate-800' />
                </button>
                <button>
                    <LayoutGrid className='w-7 h-7 text-slate-900' />
                </button>
            </div>
        </div>
    </div>
  )
}
