import React, { Component } from 'react';

class Modal extends Component {
    render() {
        return (
            <div className="modalCont" >
                <div className="ModalView text-center" onClick={(e) => {
                    // e.preventDefault();e.stopPropagation();onClick={this.props.onModalPopUp}
                }}>
                    <div className="closeModal text-right" onClick={this.props.onModalPopUp}><i className="fas fa-window-close fa-2x purple"></i></div>
                    
                    <h3>Purchase The Domain</h3>
                    <p>Domains name: {this.props.host}</p>
                    <p>Price: {this.props.price}</p>
                    <p>Number of Hits: {this.props.noh}</p>
                    <form action="https://www.escrow.com/checkout" method="post">
                        <input type="hidden" name="type" value={this.props.host} />
                        <input type="hidden" name="non_initiator_email" value="cannatopiacon@gmail.com" />
                        <input type="hidden" name="non_initiator_id" value="1493982" />
                        <input type="hidden" name="non_initiator_role" value="seller" />
                        <input type="hidden" name="title" value={this.props.host} />
                        <input type="hidden" name="currency" value="USD" />
                        <input type="hidden" name="domain" value={this.props.host} />
                        <input type="hidden" name="price" value={this.props.price} />
                        <input type="hidden" name="concierge" value="false" />
                        <input type="hidden" name="with_content" value="false" />
                        <input type="hidden" name="inspection_period" value="1" />
                        <input type="hidden" name="fee_payer" value="buyer" />
                        <input type="hidden" name="return_url" value="http://www.cannadomain.com" />
                        <input type="hidden" name="offer" value="false" />
                        <input type="hidden" name="auto_accept" value="" />
                        <input type="hidden" name="auto_reject" value="" />
                        <input type="hidden" name="item_key" value={this.props.host} />
                        <button className="EscrowButtonPrimary btn btn-success" type="submit">Buy It Now</button>
                        <img src="https://t.escrow.com/1px.gif?name=bin&price=250&title=Test%20Button&user_id=1493982" alt="alt button" />
                    </form>
                </div>
                
            </div>
        );
    }
}

export default Modal;