var Avatar = React.createClass({
    getDefaultProps: function() {
        return {
            path: 'https://image.flaticon.com/icons/svg/145/145862.svg'
        };
    },

    render: function() {
        return (
            <div>
                <a href={this.props.path}>
                    <img src={this.props.path} />
                </a>
            </div>
        );
    }
});

React.render(<Avatar path="https://image.flaticon.com/icons/svg/145/145867.svg" />, document.body)