import { Component } from "react";

export class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal hero" />
        <div className="carousel-smaller">
          {images.map((image, i) => (
            <img
              src={image}
              key={image}
              alt="animal thumbnail"
              className={active === i ? "active" : ""}
              data-index={i}
              onClick={(e) => {
                this.setState({
                  active: Number(e.target.dataset.index),
                });
              }}
            />
          ))}
        </div>
      </div>
    );
  }
}
