import React from 'react';
import PropTypes from 'prop-types';
import { Image, Button, Icon } from 'semantic-ui-react';
import './style';

const BCN = 'app__banners-view'; // Base Class Name

class Scroller extends React.PureComponent {
  static propTypes = {
    images: PropTypes.array.isRequired, // массив URL изображений
    scrollInterval: PropTypes.number, // автоскролл каждые {scrollInterval} мс
  };
  static defaultProps = {
    scrollInterval: 5000,
  };
  componentDidMount() {
    this.intervalId = setInterval(
      this.scrollToRandomImage,
      this.props.scrollInterval,
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  getImgs = () => (
    this.ref.current !== null
      ? Array.from(this.ref.current.getElementsByTagName('img'))
      : []
  );
  ref = React.createRef();
  scrollToImage = (index, imgs = this.getImgs()) => {
    const img = imgs[index];

    if (img !== undefined) {
      this.currentImgIndex = index;
      img.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  };
  scrollToRandomImage = () => {
    const imgs = this.getImgs();
    const index = Math.floor(Math.random() * imgs.length);

    this.scrollToImage(index, imgs);
  };
  scrollLeft = () => {
    if (this.currentImgIndex > 0) {
      this.scrollToImage(this.currentImgIndex - 1);
    }
  };
  scrollRight = () => {
    const imgs = this.getImgs();
    if (this.currentImgIndex + 1 < imgs.length) {
      this.scrollToImage(this.currentImgIndex + 1, imgs);
    }
  };
  render() {
    const { images } = this.props;

    return (
      <div className={BCN} ref={this.ref}>
        <Button
          className={`${BCN}__left-button`}
          onClick={this.scrollLeft}
        >
          <Icon name='angle left' />
        </Button>

        {
          images.map((url, i) => (
            <Image
              className={`${BCN}__image`}
              src={url}
              key={String(i)}
            />
          ))
        }

        <Button
          className={`${BCN}__right-button`}
          onClick={this.scrollRight}
        >
          <Icon name='angle right' />
        </Button>
      </div>
    );
  }
}

export default Scroller;
