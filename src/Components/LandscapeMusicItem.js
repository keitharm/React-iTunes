var LandscapeMusicItem = React.createClass({
  render: function() {
    var info = this.props.info || {};
    var title = info.title || "Nyan Cat";
    var subTitle = info.subTitle || "Garrett Maring";
    var explicit = "";
    if (info.explicit === true) {
      explicit = <img className="explicit" src="img/explicit.png" />;
    }

    return (
      <div className="landscapeMusicItem">
        <img src={"img/hotTracks/" + this.props.id + ".png"} />
        <div className="info">
          <div className="title">{title}</div>{explicit}
          <div className="subTitle">{subTitle}</div>
        </div>
      </div>
    )
  }
});

module.exports = LandscapeMusicItem;
