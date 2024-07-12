import React from 'react';
import { auth } from '../../lib/firebase'; // Adjust the path as needed
import './detail.css';

const Detail = () => {
  return (
    <div className='detail'>
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Jane Doe</h2>
        <p>This is my description, got it iykyk</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & Help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img 
                  src="https://media.istockphoto.com/id/1495793301/photo/mixed-race-teen-girl-student-looking-at-laptop-screen-learning-online-at-home-distance.jpg?s=1024x1024&w=is&k=20&c=hukFMIG7YdsQ1aBSC9CGcs0VBZXFCz3pl91EzePjvxo=" 
                  alt=""
                />
                <span>photo_cmi.png</span>
              </div>
              <img src="./download.png" alt="" className='icons' />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img 
                  src="https://media.istockphoto.com/id/1495793301/photo/mixed-race-teen-girl-student-looking-at-laptop-screen-learning-online-at-home-distance.jpg?s=1024x1024&w=is&k=20&c=hukFMIG7YdsQ1aBSC9CGcs0VBZXFCz3pl91EzePjvxo=" 
                  alt=""
                />
                <span>photo_cmi.png</span>
              </div>
              <img src="./download.png" alt="" className='icons'/>
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block User</button>
        <button className='logout' onClick={() => auth.signOut()}>Log Out</button>
      </div>
    </div>
  );
}

export default Detail;