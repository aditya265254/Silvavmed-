import React from 'react'

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-90 flex justify-center items-center z-50">
      <div className="text-center">
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-[#14967F] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-[#14967F] font-medium">Loading...</p>
      </div>
    </div>
  )
}

export default Loader