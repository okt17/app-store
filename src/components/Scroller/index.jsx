import React from 'react';
import PropTypes from 'prop-types';
import { Image, Button, Icon } from 'semantic-ui-react';
import './style';

/*
  Cкроллит элемент {element} горизонтально в направлении {direction}
  на расстояние не больше {distance} с шагом {step} с частотой {frequency} мс
*/
function scrollHorizontal(
  element,
  direction = 'right',
  distance = 400,
  step = 10,
  frequency = 10,
) {
  if (element !== null) {
    let scrolledDistance = 0;

    const intervalId = setInterval(
      () => {
        if (direction === 'right') {
          element.scrollLeft += step;
        } else {
          element.scrollLeft -= step;
        }

        scrolledDistance += step;

        if (scrolledDistance >= distance) {
          clearInterval(intervalId);
        }
      },
      frequency,
    );
  }
}

const BCN = 'app__main-banners'; // Base Class Name

class Scroller extends React.PureComponent {
  static propTypes = {
    images: PropTypes.array.isRequired, // массив URL изображений
    scrollInterval: PropTypes.number, // автоскролл каждые {scrollInterval} мс
  };
  static defaultProps = {
    scrollInterval: 5000,
  };
  componentDidMount() {
    this.scroll('right', this.ref.current.offsetWidth);

    this.intervalId = setInterval(
      () => {
        const element = this.ref.current;

        if (element !== null) {
          const direction = (
            element.scrollLeft > 0
            &&
            Math.random() < 0.5
              ? 'left'
              : 'right'
          );

          this.scroll(direction);
        }
      },
      this.props.scrollInterval,
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  ref = React.createRef();
  scroll = (direction, distance) => scrollHorizontal(this.ref.current, direction, distance);
  scrollLeft = () => this.scroll('left');
  scrollRight = () => this.scroll('right');
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
              key={url + String(i)}
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
