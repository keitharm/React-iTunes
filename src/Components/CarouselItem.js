var CarouselItem = React.createClass({
  render: function() {
    return (
      <div className="carouselItem">
        <img src={"img/carousel/" + this.props.id + ".png"} />
      </div>
    )
  }
});

module.exports = CarouselItem;
