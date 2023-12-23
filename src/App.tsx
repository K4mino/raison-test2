import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import LoginPage from './pages/LoginPage'
import ConfirmPage from './pages/ConfirmPage'

export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <LoginPage/>
                </Route>
                <Route path="/step2">
                    <ConfirmPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

/* function LoginPage() {
    return (
        <Switch>
            <Route>
                <FormInput />
                <div className="p-1"></div>
                <FormCheckbox />
                <button className="btn btn-primary mt-auto">Hold to proceed</button>
            </Route>
            <Route>Not implemented</Route>
        </Switch>
    )
}
 */

