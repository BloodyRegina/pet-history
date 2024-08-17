import Appearance from "./Appearance"
import Favorite from "./Favorite"
import Img from "./Img"
import Info from "./Info"

function App() {

  return (
    <div className="flex flex-col items-center p-12">
      <h1 className="text-4xl text-blue-600 mb-4">Pet History</h1>
      <div className="bg-blue-100 p-6 container grid grid-cols-3 rounded-2xl h-full m-4">
        <Info/>
        <Appearance/>
        <Favorite/>
        <Img/>
      </div>
    </div>
  )
}

export default App
