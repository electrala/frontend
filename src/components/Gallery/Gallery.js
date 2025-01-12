/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component } from "react";
import welcomePic from "./images/ELECTRA-Welcome.png";
import fillerPic from "./images/ELECTRA-Filler.png";
import "./gallery.css";
import axios from 'axios';
import Crit from '../Crit/Crit';
import ReactModal from 'react-modal';
import '../Crit/Crit.css';
import clearLogo from "../../img/clearElectraLogo.png";
import electraLogo from "../../img/final_logo.png";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

// import { generateHtml, placeholder }

export default class Gallery extends Component {
  static propTypes = {};

  constructor(props) {
    // call parent (React.Component) constructor
    super(props);

    // set intial state
    this.state = {
      critiques: [],
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  async grabCritsFromDB() {
    console.log('Gallery Mounted');
    // 1. request the data from our server
    const { data } = await axios.get(
      'https://electra-la-development.herokuapp.com/critiques/all'
    );
    // 2. hold that data in state so that it will be passed down to our Snips
    this.setState({
      critiques: data,
    });
  }

  componentDidMount() {
    this.grabCritsFromDB();
  }

  render() {
    if (!this.state.critiques[0]) return null
    return (
      <div id="gallery-container">
        <section className="gallery">
          <div className="item h4 v3" >
            <img src={welcomePic} alt="filler" />
            <div className="item__overlay welcome_overlay">
              <button onClick={this.handleOpenModal}>
                All About ELECTRA
              </button>
              <ReactModal
                isOpen={this.state.showModal}
                contentLabel="Electra welcome statement"
                onRequestClose={this.handleCloseModal}
                style={{
                  overlay: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(65, 159, 161, 0.85)'
                  },
                  content: {
                    position: 'absolute',
                    top: '20%',
                    left: '20%',
                    right: '20%',
                    bottom: '15%',
                    border: 'none',
                    background: 'var(--electra-grey)',
                    overflow: 'auto',
                    WebkitOverflowScrolling: 'touch',
                    borderRadius: '20px',
                    outline: 'none',
                    boxShadow: '0px 4px 7px 0px rgba(0, 0, 0, 0.34)',
                    padding: '0',

                  }
                }}
              >
                <div id="critique-modal-view" >
                  <div id="critique-info-side">
                    <h1 id="critique-title" >ELECTRA LA</h1>
                    <p id="critique-description" >Welcome to Electra, a community built by artists for artists. Our goal is to help our community grow by creating a safe and supportive environment where constructive feedback is key. When you want to show your art to the world, you will need to create a spark (try using that button in the bottom-right corner). A spark is an unfinished piece that you want feedback on. You choose the questions, so you drive the conversation. After, the community gives you tips, tricks, and feedback on how to create a better version of your spark! Get collaborating!</p>
                    <button id="modal-close-button" onClick={this.handleCloseModal}>Close</button>
                  </div>
                </div>
              </ReactModal>
            </div>
          </div>


          {this.state.critiques.map(critique => (
            <Crit key={critique.id} critique={critique} userInfo={this.props.userInfo} />
          ))
          }

          <div className="item h1 v1" >
            <img src={fillerPic} alt="filler" />
            <div className="item__overlay">
              <button onClick={this.handleOpenModal}>
                Tips!
              </button>
              <ReactModal
                isOpen={this.state.showModal}
                contentLabel="Electra welcome statement"
                onRequestClose={this.handleCloseModal}
                style={{
                  overlay: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(65, 159, 161, 0.85)'
                  },
                  content: {
                    position: 'absolute',
                    top: '20%',
                    left: '20%',
                    right: '20%',
                    bottom: '15%',
                    border: 'none',
                    background: 'var(--electra-grey)',
                    overflow: 'auto',
                    WebkitOverflowScrolling: 'touch',
                    borderRadius: '20px',
                    outline: 'none',
                    boxShadow: '0px 4px 7px 0px rgba(0, 0, 0, 0.34)',
                    padding: '0',

                  }
                }}
              >
                <div id="critique-modal-view" >
                  <div id="critique-info-side">
                    <h1 id="critique-title" >ELECTRA LA</h1>
                    <p id="critique-description">Welcome to Electra, a community built by artists for artists. Our goal is to help our community grow by creating a safe and supportive environment where constructive feedback is key. When you want to show your art to the world, you will need to create a spark (try using that button in the bottom-right corner). A spark is an unfinished piece that you want feedback on. You choose the questions, so you drive the conversation. After, the community gives you tips, tricks, and feedback on how to create a better version of your spark! Get collaborating!</p>
                    <button id="modal-close-button" onClick={this.handleCloseModal}>Close</button>
                  </div>
                </div>
              </ReactModal>
            </div>

          </div >
          <div className="item h1 v1" >
            <img src={fillerPic} alt="filler" />
            <div className="item__overlay">
              <button onClick={this.handleOpenModal}>
                Tips!
              </button>
              <ReactModal
                isOpen={this.state.showModal}
                contentLabel="Electra welcome statement"
                onRequestClose={this.handleCloseModal}
                style={{
                  overlay: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(65, 159, 161, 0.85)'
                  },
                  content: {
                    position: 'absolute',
                    top: '20%',
                    left: '20%',
                    right: '20%',
                    bottom: '15%',
                    border: 'none',
                    background: 'var(--electra-grey)',
                    overflow: 'auto',
                    WebkitOverflowScrolling: 'touch',
                    borderRadius: '20px',
                    outline: 'none',
                    boxShadow: '0px 4px 7px 0px rgba(0, 0, 0, 0.34)',
                    padding: '0',

                  }
                }}
              >
                <div id="critique-modal-view" >
                  <div id="critique-info-side">
                    <h1 id="critique-title" >ELECTRA LA</h1>
                    <p id="critique-description" >Welcome to Electra, a community built by artists for artists. Our goal is to help our community grow by creating a safe and supportive environment where constructive feedback is key. When you want to show your art to the world, you will need to create a spark (try using that button in the bottom-right corner). A spark is an unfinished piece that you want feedback on. You choose the questions, so you drive the conversation. After, the community gives you tips, tricks, and feedback on how to create a better version of your spark! Get collaborating!</p>
                    <button id="modal-close-button" onClick={this.handleCloseModal}>Close</button>
                  </div>
                </div>
              </ReactModal>
            </div>

          </div >
          <div className="item h1 v1" >
            <img src={fillerPic} alt="filler" />
            <div className="item__overlay">
              <button onClick={this.handleOpenModal}>
                Tips!
              </button>
              <ReactModal
                isOpen={this.state.showModal}
                contentLabel="Electra welcome statement"
                onRequestClose={this.handleCloseModal}
                style={{
                  overlay: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(65, 159, 161, 0.85)'
                  },
                  content: {
                    position: 'absolute',
                    top: '20%',
                    left: '20%',
                    right: '20%',
                    bottom: '15%',
                    border: 'none',
                    background: 'var(--electra-grey)',
                    overflow: 'auto',
                    WebkitOverflowScrolling: 'touch',
                    borderRadius: '20px',
                    outline: 'none',
                    boxShadow: '0px 4px 7px 0px rgba(0, 0, 0, 0.34)',
                    padding: '0',

                  }
                }}
              >
                <div id="critique-modal-view" >
                  <div id="critique-info-side">
                    <h1 id="critique-title" >ELECTRA LA</h1>
                    <p id="critique-description" >Welcome to Electra, a community built by artists for artists. Our goal is to help our community grow by creating a safe and supportive environment where constructive feedback is key. When you want to show your art to the world, you will need to create a spark (try using that button in the bottom-right corner). A spark is an unfinished piece that you want feedback on. You choose the questions, so you drive the conversation. After, the community gives you tips, tricks, and feedback on how to create a better version of your spark! Get collaborating!</p>
                    <button id="modal-close-button" onClick={this.handleCloseModal}>Close</button>
                  </div>
                </div>
              </ReactModal>
            </div>

          </div >
          <div className="item h1 v1" >
            <img src={fillerPic} alt="filler" />
            <div className="item__overlay">
              <button onClick={this.handleOpenModal}>
                Tips!
              </button>
              <ReactModal
                isOpen={this.state.showModal}
                contentLabel="Electra welcome statement"
                onRequestClose={this.handleCloseModal}
                style={{
                  overlay: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(65, 159, 161, 0.85)'
                  },
                  content: {
                    position: 'absolute',
                    top: '20%',
                    left: '20%',
                    right: '20%',
                    bottom: '15%',
                    border: 'none',
                    background: 'var(--electra-grey)',
                    overflow: 'auto',
                    WebkitOverflowScrolling: 'touch',
                    borderRadius: '20px',
                    outline: 'none',
                    boxShadow: '0px 4px 7px 0px rgba(0, 0, 0, 0.34)',
                    padding: '0',

                  }
                }}
              >
                <div id="critique-modal-view" >
                  <div id="critique-info-side">
                    <h1 id="critique-title" >ELECTRA LA</h1>
                    <p id="critique-description" >Welcome one and all to Electra! Your favorite digital artist community critique spot! We want to see what you’re working on and give you some constructive feedback and help. Post your latest work of art and get advice, tips and tricks from artists around the globe. We started here in LA but we’re making a run for the world!</p>
                    <button id="modal-close-button" onClick={this.handleCloseModal}>Close</button>
                  </div>
                </div>
              </ReactModal>
            </div>

          </div >
          <div className="item h1 v1" >
            <img src={fillerPic} alt="filler" />
            <div className="item__overlay">
              <button onClick={this.handleOpenModal}>
                Tips!
              </button>
              <ReactModal
                isOpen={this.state.showModal}
                contentLabel="Electra welcome statement"
                onRequestClose={this.handleCloseModal}
                style={{
                  overlay: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(65, 159, 161, 0.85)'
                  },
                  content: {
                    position: 'absolute',
                    top: '20%',
                    left: '20%',
                    right: '20%',
                    bottom: '15%',
                    border: 'none',
                    background: 'var(--electra-grey)',
                    overflow: 'auto',
                    WebkitOverflowScrolling: 'touch',
                    borderRadius: '20px',
                    outline: 'none',
                    boxShadow: '0px 4px 7px 0px rgba(0, 0, 0, 0.34)',
                    padding: '0',

                  }
                }}
              >
                <div id="critique-modal-view" >
                  <div id="critique-info-side">
                    <h1 id="critique-title" >ELECTRA LA</h1>
                    <p id="critique-description" >Welcome one and all to Electra! Your favorite digital artist community critique spot! We want to see what you’re working on and give you some constructive feedback and help. Post your latest work of art and get advice, tips and tricks from artists around the globe. We started here in LA but we’re making a run for the world!</p>
                    <button id="modal-close-button" onClick={this.handleCloseModal}>Close</button>
                  </div>
                </div>
              </ReactModal>
            </div>

          </div >
          <div className="item h1 v1" >
            <img src={fillerPic} alt="filler" />
            <div className="item__overlay">
              <button onClick={this.handleOpenModal}>
                Tips!
              </button>
              <ReactModal
                isOpen={this.state.showModal}
                contentLabel="Electra welcome statement"
                onRequestClose={this.handleCloseModal}
                style={{
                  overlay: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(65, 159, 161, 0.85)'
                  },
                  content: {
                    position: 'absolute',
                    top: '20%',
                    left: '20%',
                    right: '20%',
                    bottom: '15%',
                    border: 'none',
                    background: 'var(--electra-grey)',
                    overflow: 'auto',
                    WebkitOverflowScrolling: 'touch',
                    borderRadius: '20px',
                    outline: 'none',
                    boxShadow: '0px 4px 7px 0px rgba(0, 0, 0, 0.34)',
                    padding: '0',

                  }
                }}
              >
                <div id="critique-modal-view" >
                  <div id="critique-info-side">
                    <h1 id="critique-title" >ELECTRA LA</h1>
                    <p id="critique-description" >Welcome one and all to Electra! Your favorite digital artist community critique spot! We want to see what you’re working on and give you some constructive feedback and help. Post your latest work of art and get advice, tips and tricks from artists around the globe. We started here in LA but we’re making a run for the world!</p>
                    <button id="modal-close-button" onClick={this.handleCloseModal}>Close</button>
                  </div>
                </div>
              </ReactModal>
            </div>

          </div >
          <div className="item h1 v1" >
            <img src={fillerPic} alt="filler" />
            <div className="item__overlay">
              <button onClick={this.handleOpenModal}>
                Tips!
              </button>
              <ReactModal
                isOpen={this.state.showModal}
                contentLabel="Electra welcome statement"
                onRequestClose={this.handleCloseModal}
                style={{
                  overlay: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(65, 159, 161, 0.85)'
                  },
                  content: {
                    position: 'absolute',
                    top: '20%',
                    left: '20%',
                    right: '20%',
                    bottom: '15%',
                    border: 'none',
                    background: 'var(--electra-grey)',
                    overflow: 'auto',
                    WebkitOverflowScrolling: 'touch',
                    borderRadius: '20px',
                    outline: 'none',
                    boxShadow: '0px 4px 7px 0px rgba(0, 0, 0, 0.34)',
                    padding: '0',

                  }
                }}
              >
                <div id="critique-modal-view" >
                  <div id="critique-info-side">
                    <h1 id="critique-title" >ELECTRA LA</h1>
                    <p id="critique-description" >Welcome one and all to Electra! Your favorite digital artist community critique spot! We want to see what you’re working on and give you some constructive feedback and help. Post your latest work of art and get advice, tips and tricks from artists around the globe. We started here in LA but we’re making a run for the world!</p>
                    <button id="modal-close-button" onClick={this.handleCloseModal}>Close</button>
                  </div>
                </div>
              </ReactModal>
            </div>

          </div >
          <div className="item h1 v1" >
            <img src={fillerPic} alt="filler" />
            <div className="item__overlay">
              <button onClick={this.handleOpenModal}>
                Tips!
              </button>
              <ReactModal
                isOpen={this.state.showModal}
                contentLabel="Electra welcome statement"
                onRequestClose={this.handleCloseModal}
                className="welcome-modal"
                overlayClassName="welcome-overlay"

              >
                <div id="critique-modal-view" >
                  <div id="welcome-modal">
                    <img id="electraLogo" src={electraLogo} />
                    {/* <h1 id="critique-title" >ELECTRA LA</h1> */}
                    <p id="critique-description" >Welcome to Electra, a community built by artists for artists. Our goal is to help our community grow by creating a safe and supportive environment where constructive feedback is key. When you want to show your art to the world, you will need to create a spark (try using that button in the bottom-right corner). A spark is an unfinished piece that you want feedback on. You choose the questions, so you drive the conversation. After, the community gives you tips, tricks, and feedback on how to create a better version of your spark! Get collaborating!</p>
                    <button id="modal-close-button" onClick={this.handleCloseModal}>Close</button>
                  </div>
                </div>
              </ReactModal>
            </div>

          </div >
        </section>
      </div>
    );
  }
}
