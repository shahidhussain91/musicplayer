import React, { Component } from "react";
import ReactAudioPlayer from "react-audio-player";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import GetApp from "@material-ui/icons/GetApp";
import Avatar from "@material-ui/core/Avatar";

const styles = {};

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      djwale: false,
      songDetails: [],
      curentWallImage: "gutarbg.jpg",
      curentDjImage: "black.jpg",
      djWaleSongDetails: [
        { title: "Singer : Badshah", image: "badshah.jpg" },
        { title: "Released : 16 July 2015", image: "released.png" },
        { title: "Writer : Badshah", image: "badshah.jpg" },
        { title: "Label: Sony Music India", image: "sony.jpg" },
      ],
      partyAllNightSongDetails: [
        { title: "Singer : Honey Singh ", image: "honey.jpg" },
        { title: "Released : 1 July 2011", image: "released.png" },
        { title: "Writer : Honey Singh", image: "honey.jpg" },
        { title: "Label: Sony Music India", image: "sony.jpg" },
      ],
    };
  }
  handleClickOnPlay = (key) => {
    this.setState({
      songDetails: this.state[key],
      curentWallImage:
        key === "djWaleSongDetails"
          ? "djwale.jpeg"
          : key === "partyAllNightSongDetails"
          ? "party.jpg"
          : "gutarbg.jpg",
      curentDjImage:
        key === "djWaleSongDetails"
          ? "base1.gif"
          : key === "partyAllNightSongDetails"
          ? "base1.gif"
          : "black.jpg",
    });
  };
  render() {
    console.log(this.state.songDetails);
    const { djWaleSongDetails } = this.state;
    return (
      <div>
        <div
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "30%",
              height: "80%",
              paddingLeft: "20px",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Paper
              elevation={1}
              style={{
                width: "86%",
                background: "#383534",
                height: "10vh",
                color: "white",
                fontSize: "1.6em",
              }}
            >
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <span>Song List</span>
                <span>10 Songs</span>
              </div>
            </Paper>

            <ReactAudioPlayer
              src="/djwale.mp3"
              controls
              style={{ margin: "10px 0px" }}
              onPlay={(e) => {
                e.preventDefault();
                this.handleClickOnPlay("djWaleSongDetails");
              }}
            />
            <ReactAudioPlayer
              src="/partyAll.mp3"
              controls
              style={{ margin: "10px 0px" }}
              onPlay={(e) => {
                e.preventDefault();
                this.handleClickOnPlay("partyAllNightSongDetails");
              }}
            />
            <ReactAudioPlayer
              src="/djwale.mp3"
              controls
              style={{ margin: "10px 0px" }}
              onPlay={(e) => {
                e.preventDefault();
                this.handleClickOnPlay("djWaleSongDetails");
              }}
            />
            <ReactAudioPlayer
              src="/partyAll.mp3"
              controls
              style={{ margin: "10px 0px" }}
              onPlay={(e) => {
                e.preventDefault();
                this.handleClickOnPlay("partyAllNightSongDetails");
              }}
            />
            <ReactAudioPlayer
              src="/djwale.mp3"
              controls
              style={{ margin: "10px 0px" }}
              onPlay={(e) => {
                e.preventDefault();
                this.handleClickOnPlay("djWaleSongDetails");
              }}
            />
            <ReactAudioPlayer
              src="/partyAll.mp3"
              controls
              style={{ margin: "10px 0px" }}
              onPlay={(e) => {
                e.preventDefault();
                this.handleClickOnPlay("partyAllNightSongDetails");
              }}
            />
            <ReactAudioPlayer
              src="/djwale.mp3"
              controls
              style={{ margin: "10px 0px" }}
              onPlay={(e) => {
                e.preventDefault();
                this.handleClickOnPlay("djWaleSongDetails");
              }}
            />
          </div>
          <div
            style={{
              width: "70%",
              height: "100%",
              display: "flex",
            }}
          >
            <div
              style={{
                width: "40%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Paper
                elevation={1}
                style={{
                  width: "77%",
                  height: "79%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    flex: "1 1 0%",
                    justifyContent: "space-between",
                    width: "100%",
                    display: "flex",

                    alignItems: "center",
                  }}
                >
                  <FavoriteBorder
                    style={{
                      marginLeft: "12px",
                      height: "5vh",
                      width: "5vh",
                      cursor: "pointer",
                    }}
                  />
                  <GetApp
                    style={{
                      marginRight: "12px",
                      height: "5vh",
                      width: "5vh",
                      cursor: "pointer",
                    }}
                  />
                </div>
                <Paper
                  elevation={1}
                  style={{
                    flex: "7",
                    width: "100%",
                    background: "grey",
                    // opacity: "0.8",
                  }}
                >
                  <img
                    src={this.state.curentWallImage}
                    height="100%"
                    width="100%"
                    alt="img"
                  />
                </Paper>
                <Paper
                  elevation={1}
                  style={{
                    flex: "2",
                    width: "100%",
                    background: "grey",
                    // opacity: "0.8",
                  }}
                >
                  <img
                    src={this.state.curentDjImage}
                    height="100%"
                    width="100%"
                    alt="img"
                  />
                </Paper>
              </Paper>
            </div>
            <div
              style={{
                width: "60%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  flex: 6,
                  height: "100%",
                  width: "100%",
                  // padding: "10px",
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {this.state.songDetails.map((data) => (
                  <Paper
                    style={{
                      width: "33%",
                      height: "26vh",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      opacity: "0.8",
                      lineHeight: "1.8em",
                      margin: "10px",
                    }}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src={data.image}
                      style={{ width: "100px", height: "100px" }}
                    />
                    <span style={{ color: "black", fontSize: "0.8em" }}>
                      {data.title}
                    </span>
                  </Paper>
                ))}
              </div>
              <div
                style={{ flex: "4", paddingLeft: "10%", paddingRight: "10%" }}
              >
                <p
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontFamily: "monospace",
                  }}
                >
                  Music is composed and performed for many purposes, ranging
                  from aesthetic pleasure, religious or ceremonial purposes, or
                  as an entertainment product for the marketplace. When music
                  was only available through sheet music scores, such as during
                  the Classical and Romantic eras, music lovers would buy the
                  sheet music of their favourite pieces and songs so that they
                  could perform them at home on the piano. With the advent of
                  the phonograph, records of popular songs, rather than sheet
                  music became the dominant way that music lovers would enjoy
                  their favourite songs. With the advent of home tape recorders
                  in the 1980s and digital music in the 1990s, music lovers
                  could make tapes or playlists of their favourite songs and
                  take them with them on a portable cassette player or MP3
                  player.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(Landing);
