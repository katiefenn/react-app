var BetSlip = React.createClass({
    getInitialState: function () {
        var stake = 10,
            numerator = this.props.odds.numerator,
            denominator = this.props.odds.denominator;

        return {
            winnings: this.calculateWinnings(stake, numerator, denominator),
            stake: stake,
            reference: ""
        };
    },
    handleBetSubmit: function (event) {
        event.preventDefault();
        var data = {
            "bet_id": this.props.betid,
            "odds": this.props.odds,
            "stake": this.state.stake
        };

        this.showPlacingBet();

        $.ajax('http://skybettechtestapi.herokuapp.com/bets', {
            contentType: 'application/json',
            context: this,
            data: JSON.stringify(data),
            type: 'POST',
            success: function (data) {
                this.handleBetSuccess(data);
            }
        });
    },
    handleStakeChange: function () {
        var stake = parseFloat(React.findDOMNode(this.refs.stake).value.trim()),
            numerator = this.props.odds.numerator,
            denominator = this.props.odds.denominator;

        this.setState({
            stake: stake,
            winnings: this.calculateWinnings(stake, numerator, denominator)
        });
    },
    handleBetSuccess: function (data) {
        this.showReceipt();
        this.setState({reference: data.transaction_id});
    },
    showPlacingBet: function () {
        React.findDOMNode(this.refs.betSlip).className = 'waiting';
    },
    showReceipt: function () {
        React.findDOMNode(this.refs.betSlip).className = 'receipt';
        React.findDOMNode(this.refs.stake).disabled = true;
    },
    calculateWinnings: function (stake, numerator, denominator) {
        return (numerator / denominator) * stake + stake;
    },
    render: function() {
        return (
            <form name="bet-slip" onSubmit={this.handleBetSubmit} ref="betSlip">
                <h2>Bet Slip</h2>
                <input type="hidden" name="betid" ref="betid" value={this.props.betid} />
                <h3>{this.props.event} - {this.props.name}</h3>
                <div className="bet-slip_stake">
                    £
                    <div className="input-text">
                        <input name="stake" type="text" value={this.state.stake} onChange={this.handleStakeChange} ref="stake" />
                    </div>
                    @ {this.props.odds.numerator} / {this.props.odds.denominator} could return £{this.state.winnings}
                </div>
                <div className="bet-slip_submit">
                    <div className="input-submit">
                        <input name="submit" type="submit" value="Place Bet" />
                    </div>
                </div>
                <div className="bet-slip_confirm">
                    <h3>Bet placed</h3>
                    Your reference: {this.state.reference}
                </div>
            </form>
        );
    }
});
