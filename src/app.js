import React from "react";
import List from "./list";
import './app.css'

class Cards extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            deck: [],
        };
    }

    componentDidMount() {
        fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
            .then(response => response.json())
            .then(data => {
                console.log('data', data);
                fetch(`https://deckofcardsapi.com/api/deck/${data.deck_id}/draw/?count=${data.remaining}`)
                    .then(response => response.json())
                    .then(data => {
                        console.log('data2', data)
                        this.setState({ deck: data.cards })
                    });
            });
    }

    handleChange = i => {
        this.setState({
            currentIndex: i
        });
    };

    render() {
        const { deck } = this.state;
        console.log('deck', deck)
        const { handleChange } = this;
        const { currentIndex } = this.state;

        return (
            <div className="row">
                {deck.map(function (card, i) {
                    return (
                        <List
                            code={card.code}
                            image={card.image}
                            value={card.value}
                            handleChange={handleChange}
                            key={i}
                            index={i}
                            currentIndex={currentIndex}
                        />
                    );
                })}
            </div>
        );
    }
}
export default Cards;