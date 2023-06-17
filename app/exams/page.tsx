import React from 'react'
import Link from 'next/link'
const Page = () => {
  return (
    <div className='container py-4'>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
           <Link href='/' className='border p-2 rounded py-3 border-primary-500 hover:bg-primary-300'>আজকের পরীক্ষা</Link>
           <Link href='/' className='border p-2 rounded py-3 border-primary-500 hover:bg-primary-300'> ফলাফল </Link>
           <Link href='/' className='border p-2 rounded py-3 border-primary-500 hover:bg-primary-300'> মেরিট লিস্ট </Link>
           <Link href='/' className='border p-2 rounded py-3 border-primary-500 hover:bg-primary-300'> উত্তরপত্র </Link>
           <Link href='/' className='border p-2 rounded py-3 border-primary-500 hover:bg-primary-300'> প্রিভিয়াস পরীক্ষা </Link>
        </div>
    </div>
  )
}

export default Page