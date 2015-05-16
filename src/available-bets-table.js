var AvailableBetsTable = React.createClass({
    getInitialState: function () {
        return {
            bets: []
        };
    },
    componentDidMount: function () {
        $.get('http://skybettechtestapi.herokuapp.com/available', function (data) {
            if (this.isMounted()) {
                this.setState({
                    bets: data
                });
            }
        }.bind(this));
    },
    render: function() {
        var betListItems = this.state.bets.map(function (bet) {
            var odds = bet.odds.numerator + " / " + bet.odds.denominator;
            return (
                <AvailableBet key={bet.bet_id} betid={bet.bet_id} event={bet.event} name={bet.name} odds={bet.odds} />
            );
        }, this);

        return (
            <div>
                <h2>Available Bets</h2>
                <table className="bets-table">
                    <tr>
                        <th className="bets-table_column">Event</th>
                        <th className="bets-table_column">Bet</th>
                        <th className="bets-table_column bets-table_column__odds">Odds</th>
                    </tr>
                    {betListItems}
                </table>
            </div>
        );
    }
});

React.render(
    <AvailableBetsTable />,
    document.getElementById('available-bets-table')
);
