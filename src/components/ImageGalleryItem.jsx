import React, { Component } from "react";
import Modal from "./Modal";

class ImageGalleryItem extends Component {
    state = {
        isModalOpen: false,
    };

    handleOpenModal = () => {
        this.setState({ isModalOpen: true });
    };

    handleCloseModal = () => {
        this.setState({ isModalOpen: false });
    };

    render() {
        const { image } = this.props;
        const { webformatURL, largeImageURL } = image;
        const { isModalOpen } = this.state;

    return (
      <li className="ImageGalleryItem">
        <img
          src={webformatURL}
          alt=""
          className="ImageGalleryItem-image"
          onClick={this.handleOpenModal}
        />
        {isModalOpen && (
          <Modal imageUrl={largeImageURL} onCloseModal={this.handleCloseModal} />
        )}
      </li>
    );
  }
}

export default ImageGalleryItem;
