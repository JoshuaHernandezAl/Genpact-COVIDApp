import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"
import { Navbar } from "../ui/Navbar"
import { DatePage, HistoricPage, HomePage, StatePage } from "../pages"
import { Redirect } from "react-router-dom/cjs/react-router-dom.min"

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navbar/>
                <Switch>
                    <Route exact  path = "/" component = { HomePage }/>
                    <Route exact  path = "/historic" component = { HistoricPage }/>
                    <Route exact  path = "/state" component = { StatePage }/>
                    <Route exact  path = "/date" component = { DatePage }/>
                    <Redirect to = "/"/>
                </Switch>
            </div>
        </Router>
    )
}
