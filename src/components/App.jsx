import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
// import Modal from './Modal/Modal';
import { Bars } from 'react-loader-spinner';

import { AppContainer } from './App.styled';

export const App = () => {
  return (
    <div>
      <AppContainer>
        <Searchbar />
        <Bars
          heigth="100"
          width="100"
          color="grey"
          ariaLabel="loading-indicator"
        />
        <ImageGallery />
        <Button />
        {/* <Modal /> */}
      </AppContainer>
    </div>
  );
};
