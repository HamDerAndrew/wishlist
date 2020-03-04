import React from 'react';

const Modal = (props) => {  

return(
    <div className={`modal ${props.active}`}>
        <div className="modal-background"></div>
        <div className="modal-card">
            <header className="modal-card-head">
            <p className="modal-card-title">Tilføj ønske</p>
            <button onClick={props.closeModal}className="delete" aria-label="close"></button>
            </header>
            <section className="modal-card-body">
                <div className="field">
                    <label className="label" htmlFor="ønske">Ønske</label>
                    <div className="control">
                        <input className="input" type="text" name="ønske" placeholder="Ønske..." value={props.wish} />
                    </div>
                </div>
                <div className="field">
                    <label className="label" htmlFor="link">Evt. link</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Link..." input={props.wishLink}/>
                    </div>
                </div>
            </section>
            <footer className="modal-card-foot">
            <button type="submit" onClick={props.addWish} className="button is-success">Tilføj</button>
            </footer>
        </div>
    </div>
    );
}

export default Modal