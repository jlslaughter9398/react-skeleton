var React = require('react');

var Base = React.createClass({
    render: function() {
        return (
            <div className="col-sm-4">
                <h1>Header1</h1>
                {this.props.children}
                <h1>Footer</h1>
            </div>
        );
    }
});

module.exports = Base;