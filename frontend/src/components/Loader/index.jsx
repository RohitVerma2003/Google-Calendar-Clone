import React from 'react'

const Loader = () => {
  return (
    <div className='fixed inset-0 z-50  backdrop-blur-sm flex items-center justify-center'>
      <div className='w-10 h-10 animate-spin bg-slate-800'></div>
    </div>
  )
}

export default Loader
