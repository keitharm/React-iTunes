var CarouselItem = require('./Components/CarouselItem');
var SmallMusicIcon = require('./Components/SmallMusicIcon');
var LandscapeMusicItem = require('./Components/LandscapeMusicItem');

var App = React.createClass({
  render: function() {
    var items = [];
    var icons = [];
    var landscape = [];

    for (var i = 1; i <= 3; i++) {
      items.push(<CarouselItem key={i} id={i} />);
    }

    var titles = [
      {
        title: "ArrangingTime",
        subTitle: "Pete Yorn",
        explicit: false
      },
      {
        title: "3001: A Laced Odyssey",
        subTitle: "Flatbush Zombies",
        explicit: true
      },
      {
        title: "Fired Up",
        subTitle: "Randy Houser",
        explicit: false
      },
      {
        title: "Painkillers",
        subTitle: "Brian Fallon",
        explicit: false
      },
      {
        title: "Wide Awake",
        subTitle: "Parachute",
        explicit: false
      },
      {
        title: "All My Demons Greeting Me as a Friend (Deluxe)",
        subTitle: "AURORA",
        explicit: false
      },
      {
        title: "All Have Fallen",
        subTitle: "ELHAE",
        explicit: true
      },
      {
        title: "Anjunabeats in Miami 2016",
        subTitle: "Various Artists",
        explicit: false
      },
      {
        title: "2.0",
        subTitle: "Citizen Way",
        explicit: false
      },
      {
        title: "Journey to Golden",
        subTitle: "Chantae Cann",
        explicit: false
      },
      {
        title: "Ultra Music Festival 2016",
        subTitle: "Various Artists",
        explicit: false
      },
      {
        title: "Struggle",
        subTitle: "Outline in Color",
        explicit: false
      },
      {
        title: "Flygod",
        subTitle: "Westside Gunn",
        explicit: true
      },
      {
        title: "Telluric",
        subTitle: "Matt Corby",
        explicit: false
      },
      {
        title: "Neon Grave - EP",
        subTitle: "Zomboy",
        explicit: true
      },
      {
        title: "Breakfast",
        subTitle: "Lawrence",
        explicit: false
      },
      {
        title: "Have It All (Live)",
        subTitle: "Bethel Music",
        explicit: false
      },
      {
        title: "Incarnate (Deluxe)",
        subTitle: "Killswitch Engage",
        explicit: false
      },
      {
        title: "Us and the Night",
        subTitle: "3 Doors Down",
        explicit: false
      },
      {
        title: "You and I",
        subTitle: "Jeff Buckley",
        explicit: false
      },
      {
        title: "The Glory Album",
        subTitle: "Christon Gray",
        explicit: false
      },
      {
        title: "After Party",
        subTitle: "Adore Delano",
        explicit: true
      },
      {
        title: "Renaissance",
        subTitle: "Polyphia",
        explicit: false
      },
      {
        title: "Good Grief (Deluxe)",
        subTitle: "Lucius",
        explicit: false
      },
      {
        title: "Ahde Vefa",
        subTitle: "Tarkan",
        explicit: false
      },
      {
        title: "All That Is Within Me (Live)",
        subTitle: "Travis Cottrell",
        explicit: false
      },
      {
        title: "Lonely Is a Lifetime",
        subTitle: "The Wild Feathers",
        explicit: false
      },
      {
        title: "EDM.com Presents: Depp Sounds",
        subTitle: "Various Artists",
        explicit: false
      },
      {
        title: "Ascend",
        subTitle: "Nine Lashes",
        explicit: false
      },
      {
        title: "Let a Lover Drown You",
        subTitle: "Penny & Sparrow",
        explicit: false
      },
      {
        title: "Seoulite - EP",
        subTitle: "Lee Hi",
        explicit: true
      },
      {
        title: "Para Mi Ex",
        subTitle: "Espinoza Paz",
        explicit: false
      }
      // "Wide Awake",
      // "All My Demons Greeting Me as a Friend (Deluxe)",
      // "All Have Fallen",
      // "Anjunabeats in Miami 2016",
      // "2.0",
      // "Journey to Golden",
      // "Ultra Music Festival 2016",
      // "Struggle",
      // "Flygod",
      // "Telluric",
      // "Neon Grave - EP";
      // "Breakfast",

    ];
    var landTitles = [
      {
        title: "Dangerous Woman",
        subTitle: "Ariana Grande",
        explicit: false
      },
      {
        title: "Came Here to Forget - Single",
        subTitle: "Blake Shelton",
        explicit: false
      },
      {
        title: "Misery",
        subTitle: "Gwen Stefani",
        explicit: false
      },
      {
        title: "YOUTH",
        subTitle: "Troye Sivan",
        explicit: false
      },
      {
        title: "Lost Weekend",
        subTitle: "Pete Yorn",
        explicit: false
      },
      {
        title: "LIKE I WOULD",
        subTitle: "ZAYN",
        explicit: false
      },
      {
        title: "Green Aphrodisiac",
        subTitle: "Corinne Bailey Rae",
        explicit: false
      },
      {
        title: "California Kids",
        subTitle: "Weezer",
        explicit: false
      },
      {
        title: "The Sound",
        subTitle: "The 1975",
        explicit: false
      },
      {
        title: "The Community of Hope",
        subTitle: "PJ Harvey",
        explicit: false
      },
      {
        title: "In the Room (feat. Seal) - Single",
        subTitle: "Gallant",
        explicit: false
      },
      {
        title: "Mad World",
        subTitle: "Seal",
        explicit: false
      },
      {
        title: "Killer",
        subTitle: "Band of Skulls",
        explicit: false
      },
      {
        title: "Never Be Like You (feat. Kai) - Single",
        subTitle: "Flume",
        explicit: true
      },
      {
        title: "Drone Bomb Me",
        subTitle: "ANOHNI",
        explicit: false
      },
      {
        title: "The Last Goodbye",
        subTitle: "The Kills",
        explicit: false
      },
      {
        title: "Attention",
        subTitle: "James",
        explicit: false
      },
      {
        title: "Disappearing Act",
        subTitle: "The Ready Set",
        explicit: false
      },
      {
        title: "Running (Live from Abbey Road Studios) - Single",
        subTitle: "James Bay",
        explicit: false
      },
      {
        title: "Ghetto Walkin'",
        subTitle: "Miles Davis, Robert Glasper & Bilal",
        explicit: false
      },
      {
        title: "The Magic Kid",
        subTitle: "Hayes Carll",
        explicit: false
      },
      {
        title: "Nothing in My Hands",
        subTitle: "Filter",
        explicit: false
      },
      {
        title: "Liana",
        subTitle: "The Joy Formidable",
        explicit: false
      },
      {
        title: "What's the Secret?",
        subTitle: "Brett Dennen",
        explicit: false
      },
      {
        title: "iT",
        subTitle: "Christine and the Queens",
        explicit: false
      },
      {
        title: "2 Phones",
        subTitle: "Kevin Gates",
        explicit: true
      },
      {
        title: "Lost Prayer",
        subTitle: "Zakk Wylde",
        explicit: false
      },
      {
        title: "Why Don't U (feat. Abra & I LOVE MAKONNEN)",
        subTitle: "Father",
        explicit: true
      },
      {
        title: "Dapper (feat. Anderson .Paak)",
        subTitle: "Domo Genesis",
        explicit: true
      },
      {
        title: "Wild Horses",
        subTitle: "Birdy",
        explicit: false
      },
      {
        title: "Live for Real",
        subTitle: "I LOVE MAKONNEN",
        explicit: true
      },
      {
        title: "Wicked Man Ting",
        subTitle: "Popcaan",
        explicit: true
      }
    ];

    for (var i = 1; i <= 32; i++) {
      icons.push(<SmallMusicIcon info={titles[i-1]} key={i} id={i} />);
    }

    for (var i = 1; i <= 32; i++) {
      landscape.push(<LandscapeMusicItem info={landTitles[i-1]} key={i} id={i} />);
    }

    return (
      <div className="itunes">
        <div className="carousel">
          <div className="carousel-outer">
            <div className="carousel-inner">
              {items}
            </div>
          </div>
        </div>

        <div className="content">

          <div className="newMusic">

            <div className="header">
              <span className="title">
                New Music
              </span>
              <button>New Music</button><button>Recent Releases</button>

              <span className="seeAll">
                See All &gt;
              </span>
            </div>
            <div className="container-outer">
              <div className="container-inner">
                {icons}
              </div>
            </div>

          </div>

          <div className="menu">
            Music
          </div>

          <div className="newMusic">

            <div className="header">
              <span className="title">
                Hot Tracks
              </span>

              <span className="seeAll">
                See All &gt;
              </span>
            </div>
            <div className="container-outer">
              <div className="container-inner">
                {landscape}
              </div>
            </div>

          </div>

        </div>

      </div>
    )
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
