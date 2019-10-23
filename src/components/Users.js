import React, {Component} from 'react';
import User from './User';

export default function Users() {
  return(
    <div className="right">
      <User 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLkTuwsuK-Msm8VGluEnfJzIWu0-6kQ4ZL6aFAjUxpp8KrM12e&s" 
        alt="jlg" 
        name="Scott"/>
      <div className="users__block">
      <User 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLkTuwsuK-Msm8VGluEnfJzIWu0-6kQ4ZL6aFAjUxpp8KrM12e&s" 
        alt="jlg" 
        name="Scott" 
        min/>
      <User 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLkTuwsuK-Msm8VGluEnfJzIWu0-6kQ4ZL6aFAjUxpp8KrM12e&s" 
        alt="jlg" 
        name="Scott" 
        min/>
      <User 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLkTuwsuK-Msm8VGluEnfJzIWu0-6kQ4ZL6aFAjUxpp8KrM12e&s" 
        alt="jlg" 
        name="Scott" 
        min/>
      <User 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLkTuwsuK-Msm8VGluEnfJzIWu0-6kQ4ZL6aFAjUxpp8KrM12e&s" 
        alt="jlg" 
        name="Scott" 
        min/>
      </div>
    </div>
  )
}