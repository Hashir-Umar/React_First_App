import React, {Component} from 'react';

class App extends Component {

    constructor(prop) {
        super(prop);

        this.state = {
            newQuote: "",
            quoteList: []
        }
    }

    addQuote() {

        if (this.state.newQuote.trim() === "") {
            alert("Add Quote Text");
            return;
        }

        const lower = this.state.newQuote.slice();
        const value = lower.charAt(0).toUpperCase() + lower.substring(1);

        //create new quote with random id
        const newQuote = {
            id: 1 + Math.random(),
            value
        };

        // copy current list of quote
        const list = [...this.state.quoteList];

        list.push(newQuote);

        // update quotes with new list and reset newQuote input
        this.setState({
            newQuote: "",
            quoteList: list
        });
    }

    deleteQuote(id) {
        // copy current list of quote
        const list = [...this.state.quoteList];

        const updatedList = list.filter(quote => quote.id !== id);

        // update quotes with new list and reset newQuote input
        this.setState({
            newQuote: "",
            quoteList: updatedList
        });
    }

    updateInput(key, value) {
        this.setState({
            [key]: value
        })
    }

    render() {
        return (
            <div className="container">

                <div>
                    <h1 className="text-white text-center my-5">React Quote App</h1>
                    <textarea
                        className="form-control"
                        rows="5"
                        placeholder="Type your quote here"
                        value={this.state.newQuote}
                        onChange={e => this.updateInput("newQuote", e.target.value)}
                    />
                    <button
                        className="btn btn-warning btn-block my-2 text-white"
                        onClick={() => this.addQuote()}>
                        ADD
                    </button>
                </div>

                <ul className="list-group">
                    {this.state.quoteList.map(quote => {
                        return (
                            <li className="list-group-item flex-column align-items-start mb-2" key={quote.id}>

                                <p className="text-justify">{quote.value}</p>
                                <div className="d-flex w-100 justify-content-between">
                                    <small className="text-muted">By Anonymous author</small>

                                    <small className="hover" onClick={() => this.deleteQuote(quote.id)}>
                                        <span className="badge badge-danger badge-pill pb-1">
                                            remove
                                        </span>
                                    </small>
                                </div>
                            </li>

                        )

                    })}
                </ul>

            </div>
        );
    }
}

export default App;
