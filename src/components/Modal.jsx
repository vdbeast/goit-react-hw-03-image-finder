import React, { Component } from 'react';

class Modal extends Component {
    componentDidMount() {
      document.addEventListener('keydown', this.handleKeyDown)  
    };

    componentWillMount() {
      document.addEventListener('keydown', this.handleKeyDown)  
    };

    handleKeyDown = (event) => {
        if (event.code === 'Escape') {
            this.props.onCloseModal();
        }
    }
    handleClose = () => {
        this.props.onCloseModal();
    };
    render() {
        const { imageUrl } = this.props;

    return (
      <div>
        <div className="Overlay" onClick={this.handleClose}>
          <div className="Modal">
            <span className="close" onClick={this.handleClose}>&times;</span>
            <img src={imageUrl} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;