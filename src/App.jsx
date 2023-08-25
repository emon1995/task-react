
import './App.css'
import ParentCard from './components/ParentCard/ParentCard'

function App() {

  return (
    <div className='p-6 h-screen'>
      <div className="flex items-center justify-center gap-4 overflow-x-scroll min-w-fit">
        <ParentCard />
        <ParentCard />
        <ParentCard />
        <ParentCard />
        <ParentCard />
        <ParentCard />
      </div>
    </div>
  )
}

export default App
