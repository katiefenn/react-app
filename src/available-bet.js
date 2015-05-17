var AvailableBet = React.createClass({
    handleBetSelection: function (event) {
        event.preventDefault();

        React.render(
            <BetSlip betid={this.props.betid} event={this.props.event} name={this.props.name} odds={this.props.odds} />,
            document.getElementById('bet-slip'),
            function () {
                // Reset BetSlip state so that more bets
                // can be made after bet is placed
                this.replaceState(this.getInitialState());
            }
        );

        return;
    },
    render: function() {
        var oddsLabel = this.props.odds.numerator + " / " + this.props.odds.denominator;
        return (
            <tr>
                <td className="bets-table_column bets-table_column__bet" >
                    <h4>Event:</h4>
                    {this.props.event}
                    <h4>Outcome:</h4>
                    {this.props.name}
                </td>
                <td className="bets-table_column bets-table_column__event" >{this.props.event}</td>
                <td className="bets-table_column bets-table_column__outcome" >{this.props.name}</td>
                <td className="bets-table_column bets-table_column__odds" >
                    <form onSubmit={this.handleBetSelection}>
                        <input type="hidden" ref="betid" value={this.props.betid}></input>
                        <input type="hidden" ref="event" value={this.props.event}></input>
                        <input type="hidden" ref="name" value={this.props.name}></input>
                        <input type="submit" value={oddsLabel} />
                    </form>
                </td>
            </tr>
        );
    }
});
