import React from 'react';
import PropTypes from 'prop-types';
import { Image, Button, Icon } from 'semantic-ui-react';
import './style';

const BCN = 'app__banners-view'; // Base Class Name

class Scroller extends React.PureComponent {
  static propTypes = {
    images: PropTypes.array.isRequired, // array of image URL's
    scrollInterval: PropTypes.number, // scroll left or right every {scrollInterval} ms
  };
  static defaultProps = {
    scrollInterval: 3000,
  };
  componentDidMount() {
    this.intervalId = setInterval(
      () => {
        if (this.currentImgIndex > 0 && Math.random() > 0.5) {
          this.scrollLeft();
        } else {
          this.scrollRight();
        }
      },
      this.props.scrollInterval,
    );

    const imgs = this.getImgs();
    if (imgs.length > 0) {
      // scroll somewhere to the middle initially
      this.currentImgIndex = Math.floor(imgs.length / 2);
      imgs[this.currentImgIndex].scrollIntoView({ block: 'end' });
    }
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
  scrollLeft = () => {
    if (this.currentImgIndex > 0) {
      const imgs = this.getImgs();
      const img = imgs[this.currentImgIndex - 1];
      if (img !== undefined) {
        this.currentImgIndex -= 1;
        img.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };
  scrollRight = () => {
    const imgs = this.getImgs();
    if (this.currentImgIndex < imgs.length) {
      const img = imgs[this.currentImgIndex + 1];
      if (img !== undefined) {
        this.currentImgIndex += 1;
        img.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }
    } else {
      this.currentImgIndex = imgs.length;
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
              key={String(i)}
              src={url}
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
