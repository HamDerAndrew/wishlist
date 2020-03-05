import React , { Component }from 'react';

class Modal extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            wish: '',
            wishUrl: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitWish = this.submitWish.bind(this);
    }

    submitWish = (event) => {
        const { wish, wishUrl } = this.state;
        // Prevent the form from submitting to the file.
        event.preventDefault();
        this.props.addWish(wish, wishUrl);
        //console.log(this.state.wishItem.wishUrl)
        this.setState({
            wish: '',
            wishUrl: ''
        })
    }

    handleChange = (event) => {
        //console.log(event.target.value)
        this.setState({
            //use bracket notation to dynamically get the 'name' attribute value of the html inputs in this single handler
            [event.target.name]: event.target.value
        })
    }

    render() {
        return(
            <div className={`modal ${this.props.active}`}>
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                    <p className="modal-card-title">Tilføj ønske</p>
                    <button onClick={this.props.closeModal} className="delete" aria-label="close"></button>
                    </header>
                    <section className="modal-card-body">
                        <form onSubmit={this.submitWish}>
                        <div className="field">
                            <label className="label" htmlFor="ønske">Ønske</label>
                            <div className="control">
                                <input className="input" value={this.state.wish} type="text" name="wish" placeholder="Ønske..." onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label" htmlFor="link">Evt. link</label>
                            <div className="control">
                                <input className="input" value={this.state.wishUrl} type="text" name="wishUrl" placeholder="Link..." onChange={this.handleChange} />
                            </div>
                        </div>
                        </form>
                    </section>
                    <footer className="modal-card-foot">
                    <button type="submit" onClick={this.submitWish} className="button is-success">Tilføj</button>
                    </footer>
                </div>
            </div>
            );
        }

}

export default Modal