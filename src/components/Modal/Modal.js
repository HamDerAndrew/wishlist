import React from 'react';

const Modal = (props) => {  



return(
    <div className={`modal ${props.active}`}>
        <div className="modal-background"></div>
        <div className="modal-card">
            <header className="modal-card-head">
            <p className="modal-card-title">Modal title</p>
            <button className="delete" aria-label="close"></button>
            </header>
            <section className="modal-card-body">
                <h1>Content goes here</h1>
            </section>
            <footer className="modal-card-foot">
            <button onClick={props.closeModal} className="button is-success">Save changes</button>
            <button className="button">Cancel</button>
            </footer>
        </div>
    </div>
    );
}

export default Modal