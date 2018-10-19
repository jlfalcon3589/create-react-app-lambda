import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
// import SubscriptionComponents from './components/Register/Subscription'

export default class AppRouter extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home} />
                    {/* <Route path='/login' component={Login} /> */}
                    {/* <Route path='/register' component={Register} /> */}
                    {/* <Route path='/confirm_subscription/:token' component={SubscriptionComponents} /> */} */}
                    <Route path='*' component={NotFound} />
                </Switch>
            </main>
        );
    }
}