// App.js called from index.js


// import components
import Actions from "./components/Actions/Actions"


// import SCSS
import "../src/styles/app.scss";

export default function App()
{
  return (
    <div className="container">
      <div className="main max-wrapper">
        <Actions />
      </div>
    </div>
  )
}