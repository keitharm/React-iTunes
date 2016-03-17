var SmallMusicIcon = React.createClass({
  render: function() {
    var info = this.props.info;
    var title = info.title || "Nyan Cat";
    var subTitle = info.subTitle || "Garrett Maring";
    var explicit = "";
    if (info.explicit === true) {
      explicit = <img className="explicit" src="img/explicit.png" />;
    }

    return (
      <div className="smallMusicIcon">
        <img src={"img/smallMusicIcon/" + this.props.id + ".png"} />
        <div className="info">
          <div ref="title" className="title">{title}</div>{explicit}
          <div className="subTitle">{subTitle}</div>
        </div>
      </div>
    )
  },
  componentDidMount: function() {
    var truncationEl = this.refs.title;
    function calculateTruncation(el) {
      var text;
      while(el.clientHeight < el.scrollHeight) {
        text = el.innerHTML.trim();
        if(text.split(' ').length <= 6) {
          break;
        }
        el.innerHTML = text.replace(/\W*\s(\S)*$/, '...');
      }
    }

    calculateTruncation(truncationEl);
  }
});

module.exports = SmallMusicIcon;
