import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom"
import App from "./App"
import Single from "./components/singleDiary"
import MultiDiaries from "./components/home"
import { allDiaries } from "./loaders"

const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<App/>}>
    <Route path="" element={<MultiDiaries/>} loader={allDiaries}/>
    {/* <Route path=":id" element={<Single/>}/> */}
    <Route path="create" />
    <Route path="update/:id" />
    <Route path="delete/:id" />
    </Route>

    )
)

export default router