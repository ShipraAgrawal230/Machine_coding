import ReactDOM from "react-dom/client"
import TabForm from "./components/TabForm"

const App=()=>{
    return(
        <TabForm/>
    )
}
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)
