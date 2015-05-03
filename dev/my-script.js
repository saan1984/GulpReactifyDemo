var React = require('react');
var MyName = React.createClass({
    render: function() {
        return (
            <p>{this.props.name}</p>
        );
    }
});
module.exports = MyName;
React.render(<MyName name="Sandeep"/>,document.body)