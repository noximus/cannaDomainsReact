import React, { Component } from 'react';

class Modal extends Component {
    render() {
        return (
            <div className="modalCont" onClick={this.props.onModalPopUp}>
                <div className="ModalView" onClick={(e) => {
                    e.preventDefault();e.stopPropagation();
                }}>
                    <div className="closeModal" onClick={this.props.onModalPopUp}>X</div>
                    Modal windows
                    Domains name: {this.props.host} 
                    <button>Buy me</button>
                </div>
                
            </div>
        );
    }
}

export default Modal;