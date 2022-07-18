import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchBar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Button from './Button/Button';
import Modal from 'components/Modal';

import { AppContainer } from './App.styled';

export class App extends Component {
  state = {
    images: null,
    id: null,
    searchQuery: '',
    page: 1,
    loadMore: false,
    showModal: false,
  };

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery: searchQuery, page: 1, loadMore: false });
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  changeButtonLoadMore = status => {
    this.setState({ loadMore: status });
  };

  openModal = e => {
    this.setState({
      showModal: true,
      id: e.currentTarget.dataset.id,
    });
  };

  closeModal = e => {
    this.setState({
      showModal: false,
    });
  };

  getData = images => {
    this.setState({ images });
  };

  render() {
    const { searchQuery, page, loadMore, showModal, images, id } = this.state;
    return (
      <div>
        <AppContainer>
          <SearchBar onSubmit={this.handleFormSubmit} />
          <ToastContainer position="top-center" autoClose={3000} />
          <ImageGallery
            openModal={this.openModal}
            getData={this.getData}
            searchQuery={searchQuery}
            page={page}
            loadMore={this.changeButtonLoadMore}
          />
          {loadMore && <Button onClick={this.loadMore} page={page} />}
          {showModal && (
            <Modal images={images} id={Number(id)} onClose={this.closeModal} />
          )}
        </AppContainer>
      </div>
    );
  }
}
