import './styles.scss';

import Emitter from 'helpers/Emitter';

import { Component } from 'react';

import SplitText from 'vendors/splitText.js';

import {
  EXP_TOGGLE_CAMERA
} from 'config/messages';

/**
 * LevelIntroduction component
 */
class LevelIntroduction extends Component {

  state = {
  }

  componentWillMount() {

    this.bind();
  }

  componentDidMount() {

    this.addEventListeners();

    this.generateTimelineMax();

    this.beginTitle();
  }

  componentWillUnmount() {

    this.removeEventListeners();
  }

  bind() {
  }

  addEventListeners() {

  }

  removeEventListerners() {

  }

  generateTimelineMax() {

    // Title Timeline
    this.titleSplited = new SplitText( this.refs.titleName, {
      type: 'chars'
    });

    this.titleTl = new TimelineMax({ paused: true, onComplete: ()=> {
      this.beginTutorial();

      this.endIntroduction();
    } });

    this.titleTl
      .from( this.refs.titleDive, 1, { y: '200%', ease: Expo.easeOut }, 4 )
      .from( this.refs.titleSep, 0.6, { scale: 0, ease: Expo.easeOut }, '-=0.3' )
      .staggerFrom( this.titleSplited.chars, 1.8, { opacity: 0, ease: Expo.easeOut }, 0.05, '-=0.6' )
      .to( this.refs.titleStep, 2, { opacity: 0, y: '-75%', ease: Expo.easeOut });

  }

  beginTitle() {

    this.titleTl.play();
  }

  beginTutorial() {

  }

  beginTooltips() {

  }

  endIntroduction() {

    TweenMax.to( this.refs.container, 1.5, { opacity: 0, ease: Expo.easeOut, onComplete: ()=> {
      Emitter.emit( EXP_TOGGLE_CAMERA, true );
    } });

  }

  render() {

    const title = `${this.props.config.name} zone`;

    return (

      <div className="level-introduction" ref="container">

        <div className="level-introduction__title-step" ref='titleStep'>

          <strong className="level-introduction__title-dive">

            <span ref="titleDive">First Dive</span>

          </strong>

          <span className="level-introduction__title-separator" ref="titleSep"></span>

          <h1 className="level-introduction__title-name" ref="titleName">{title}</h1>

        </div>

      </div>

    );
  }
}

export default LevelIntroduction;
