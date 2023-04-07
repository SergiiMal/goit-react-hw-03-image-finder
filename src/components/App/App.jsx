import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { Component } from 'react';
import { featchImages } from 'components/Api/Api';
import { Container } from './App.styled';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
// import { Button } from 'components/Button/Button.styled';
import { Loader } from 'components/Loader/Loader';
import { LoadMoreBtn } from 'components/Button/Button';
import { Modal } from 'components/Modal/Modal';

export class App extends Component {
  state = {
    images: null,
    pageNum: 2,
    search: '',
    isLoading: false,
    showModal: false,
    modalImg: null,
    btnVision: true,
    error: null,
    isLoadingSpinner: false,
  };

  acceptSearch = async search => {
    if (this.state.search === search || search === '') {
      return;
    }
    try {
      this.setState({ images: null });
      this.setState({ isLoading: true });
      this.setState({ search: search });
      this.setState({ pageNum: 2 });
      this.setState({ btnVision: true });

      const response = await featchImages(search);
      this.setState({ images: response.hits });
      if (response.total === 0) {
        this.setState(toast.warn('Please enter a request!'));
      }
    } catch {
      return toast.error(
        'Sorry, there are no images matching your request. Please try again.'
      );
    } finally {
      this.setState({ isLoading: false });
    }
  };
  onClickPageUp = async () => {
    try {
      this.setState({ isLoadingSpinner: true });
      const { pageNum, search } = this.state;
      this.setState(prevState => {
        return { pageNum: prevState.pageNum + 1 };
      });
      const response = await featchImages(search, pageNum);

      const nextPictures = response.hits;
      if (nextPictures.length < 1) {
        this.setState({ btnVision: false });
        toast.info(
          `That's all.
          We're sorry, but you've reached the end of search results. `
        );
        return;
      }
      this.setState(prevState => ({
        images: [...prevState.images, ...nextPictures],
      }));
    } catch (error) {
      return toast.error(
        'Sorry, there are no images matching your request. Please try again.'
      );
    } finally {
      this.setState({ isLoading: false });
      this.setState({ isLoadingSpinner: false });
    }
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  updateModalPicture = img => {
    this.setState({ modalImg: img });
  };
  render() {
    const {
      images,
      isLoading,
      showModal,
      modalImg,
      btnVision,
      error,
      isLoadingSpinner,
    } = this.state;
    return (
      <>
        <Container>
          <Searchbar onSubmit={this.acceptSearch} />
          {isLoading && <Loader />}

          {error && error}

          {images && (
            <ImageGallery
              images={images}
              onClick={this.toggleModal}
              onUpdateModalPicture={this.updateModalPicture}
            />
          )}
          {images && images.length > 0 && btnVision && (
            <>
              <LoadMoreBtn
                onLoadMore={this.onClickPageUp}
                isLoadingSpin={isLoadingSpinner}
              />
            </>
          )}
          <ToastContainer autoClose={3000} />
          {showModal && (
            <Modal onClose={this.toggleModal} onGiveImg={modalImg} />
          )}
        </Container>
      </>
    );
  }
}
