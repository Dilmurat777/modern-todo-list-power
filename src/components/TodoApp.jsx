import { CheckCircle, Circle, Filter, Plus, Trash2 } from 'lucide-react';
import TodoForm from './TodoForm';
import TodoFilter from './TodoFilter';
import TodoItems from './TodoItems';

const TodoApp = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl fond-bold text-gray-800 mb-2">TodoFlow</h2>
          <p>Organize your live, one task at a time</p>
        </div>
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-gray-300 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Progress Overview</h2>
            <div className="text-2xl font-bold text-green-600">{/* Stats completed logics */}</div>
          </div>
          <div className="w-full bg-gray-300 rounded-full h-3mb-4">
            {/* Progressbar */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-500 ease-out"></div>
          </div>
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-gray-800">{/* Stats total logic */}</div>
              <div className="text-sm text-gray-600">Total</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-800">{/* Stats active logic */}</div>
              <div className="text-sm text-gray-600">Active</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-800">{/* Stats Completed logic */}</div>
              <div className="text-sm text-gray-600">Completed</div>
            </div>
          </div>
        </div>
        <div className="bg-white/90 backdrop-blur-sm rounded-b-2xl p-6 mb-6 border border-gray-300 shadow-lg overflow-hidden">
          {/* Action Bar */}
          <div className="p-6 border-b border-gray-300">
            <div className="flex items-center justify-between mb-4">
              <button className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium cursor-pointer">
                <Plus size={20} /> Add todo
              </button>
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-3 text-red-600 hover:text-red-700 px-3 py-2 rounded-lg hover:bg-red-50 transition-colors duration-200 text-sm">
                  <Trash2 size={16} />
                  Clear Completed
                </button>
                <button className="flex items-center gap-3 text-green-600 hover:text-green-700 px-3 py-2 rounded-lg hover:bg-green-50 transition-colors duration-200 text-sm">
                  <CheckCircle size={16} />
                  Clear Completed
                </button>
              </div>
            </div>
            {/* Todo filter I will add Logic */}
            <TodoFilter />
          </div>
          {/* TodoForm */}
          <div className="p-6 border-b border-gray-300 bg-gray-100">
            <TodoForm />
          </div>
          {/* TodoList */}
          <div className="max-h-96 overflow-y-auto">
            <div className="p-12 text-center">
              <div className="text-gray-600">
                <Circle size={48} className="mx-auto mb-4 opacity-50" />
                <p className="text-lg font-medium mb-2 text-gray-800">No Task Yet</p>
                <p>Add Your first todo to get started</p>
              </div>
              {/* Conditional Rendering I will add logic later */}
              <div className="text-gray-600">
                <Filter size={48} className="mx-auto mb-4 opacity-50" />
                <p className="text-lg font-medium mb-2 text-gray-800">No Filter Todos</p>
                <p className="text-sm"></p>
              </div>
            </div>
				  </div>
				  <TodoItems />
        </div>
        <div className="text-center mt-6 text-sm  text-gray-800">Footer</div>
      </div>
    </div>
  );
};

export default TodoApp;
