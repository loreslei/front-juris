import Dropdown from '@/components/ui/Dropdown'
import Input from '@/components/ui/Input'
import SearchInput from '@/components/ui/SeachInput'
import React from 'react'

export default function Components() {
  return (
    <div className='w-full h-screen bg-indigo-200 flex items-center justify-center'>
        <div className='w-1/2 h-1/2 space-y-3 p-8 bg-sky-100 rounded-xl'>
            <Input />
            <SearchInput />
            <Dropdown />
        </div>
    </div>
  )
}
