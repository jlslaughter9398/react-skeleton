var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
//var browserHistory = ReactRouter.browserHistory;
var Link = ReactRouter.Link;
var CreateHistory = require('history/lib/createHashHistory');

var History = new CreateHistory({
    queryKey:false
});

var Base = require('./components/Base.jsx');
var Home = require('./components/Home.jsx');
var Page1 = require('./components/Page1.jsx');
var Page2 = require('./components/Page2.jsx');
//var Link = require('react-router').Link <Router history={browserHistory}> <Route path="/" component={Home} />

var Routes = React.createClass({
    render: function() {
        return (
            <Router history={History}>
                <Route path="/" component={Base}>
                    <Route path="page1" component={Page1} />
                    <Route path="page2" component={Page2} />
                </Route>
            </Router>
        );
    }
});

/*
var Routes = (
    <Router history={History}>
        <Route path="/" component={Base}>
            <IndexRoute component={Home} />
            <Route path="page1" component={Page1} />
            <Route path="page2" component={Page2} />
        </Route>
    </Router>
);

 <Router history={new BrowserHistory}>
 <Route path="/" component={App}>
 <Route path="about" name="about" component={About}/>
 <Route path="users" name="users"  component={Users} indexComponent={RecentUsers}>
 <Route path="/user/:userId" name="user" component={User}/>
 </Route>
 <Route path="*" component={NoMatch}/>
 </Route>
 </Router>

var Routes = React.createClass({
    render: function() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Base}>
                    <IndexRoute component={Home}/>
                    <Route path="page1" component={Page1}/>
                    <Route path="page2" component={Page2}/>
                </Route>
            </Router>
        );
    }
});
  */
module.exports = Routes;

//<Route path="/" component={Home} />