
var AppComponent = React.createClass({
    render: function() {
        return (
            <div>
                <h2 className="form__heading form__heading_main">React Component</h2>
                <fieldset>

                </fieldset>
            </div>
        );
    }
});

React.render(
    <AppComponent />,
    document.getElementById('app-form')
);
