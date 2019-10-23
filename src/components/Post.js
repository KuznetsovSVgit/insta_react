import React, {Component} from 'react';
import User from './User';

export default class Postt extends Component {
  render() {
    return(
      <div className="post">
        <User 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLkTuwsuK-Msm8VGluEnfJzIWu0-6kQ4ZL6aFAjUxpp8KrM12e&s" 
        alt="jlg" 
        name="Scott" 
        min/>
        <img src={this.props.src} alt={this.props.alt}></img>
        <div className="post__name">
          some account
        </div>
        <div className="post__descr">
          Всякая хрень как всегда вместо рыбы.. а что поделать лень открывать генератор случайного текста
        </div>
      </div>
    )
  }
}