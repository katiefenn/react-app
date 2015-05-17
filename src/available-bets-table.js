var AvailableBetsTable = React.createClass({
    getInitialState: function () {
        return {
            bets: []
        };
    },
    componentDidMount: function () {
        // When component mounts, get bets from
        // the web service
        BettingService.getAvailableBets(function (data) {
            if (this.isMounted()) {
                this.setState({
                    bets: data
                });
            }
        }, this);
    },
    render: function() {
        // Render table items
        var betListItems = this.state.bets.map(function (bet) {
            var odds = bet.odds.numerator + " / " + bet.odds.denominator;
            return (
                <AvailableBet
                    key={bet.bet_id}
                    betid={bet.bet_id}
                    event={bet.event}
                    name={bet.name}
                    odds={bet.odds} />
            );
        }, this);

        return (
            <div>
                <h2>Available Bets</h2>
                <table>
                    <tr>
                        <th className="bets-table_column bets-table_column__bet">Bet</th>
                        <th className="bets-table_column bets-table_column__event">Event</th>
                        <th className="bets-table_column bets-table_column__outcome">Outcome</th>
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
