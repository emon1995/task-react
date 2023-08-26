
import './App.css'
import ParentCard from './components/ParentCard/ParentCard'

function App() {

  return (
    <div className='p-6 h-screen'>
      <div className="flex items-center justify-center gap-4 overflow-x-scroll min-w-fit">
        <ParentCard title="Incomplete" count={0} isColor={true} color="red" />
        <ParentCard title="To Do" count={0} isColor={true} color="blue" />
        <ParentCard title="Doing" count={0} isColor={true} color="yellow" />
        <ParentCard title="Under Review" count={0} isColor={false} />
        <ParentCard title="Completed" count={0} isColor={false} />
        <ParentCard title="Overd" count={0} isColor={false} />
      </div>
    </div>
  )
}

export default App
