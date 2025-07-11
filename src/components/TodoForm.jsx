import { Check, X } from 'lucide-react'
import React from 'react'

const TodoForm = () => {
  return (
	  <div className='flex items-center gap-3'>
		  <div className="flex-1">
			  <input type="text" className='w-full px-4 py-3  border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent transition-all duration-200 bg-white/90 backdrop-blur-sm text-gray-800 placeholder:gray-600' maxLength={500} />
		  </div>
		  <div className="flex items-center gap-2">
			  <button type='submit' className='flex items-center justify-center w-10 h-10 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-lg transition-colors duration-200' title="Save Todo">
				  <Check size={16} />
			  </button>
			  <button type='submit' className='flex items-center justify-center w-10 h-10 bg-gray-600 hover:bg-gray-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-lg transition-colors duration-200' title="Save Todo">
				  <X size={16} />
			  </button>
	  </div>
	</div>
  )
}

export default TodoForm
