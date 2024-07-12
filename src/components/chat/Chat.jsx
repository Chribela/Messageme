import { useEffect, useRef, useState } from 'react';
import './chat.css';
import EmojiPicker from 'emoji-picker-react';

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');

  const endRef = useRef(null);

  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleEmoji = (emojiObject) => {
    setText((prev) => prev + emojiObject.emoji);
    setOpen(false);
  };

  console.log(text);

  return (
    <div className='chat'>
      <div className='top'>
        <div className='user'>
          <img src='./avatar.png' alt='' />
          <div className='texts'>
            <span>Jane Doe</span>
            <p>Lorem ipsum dolor sit amet consectetur</p>
          </div>
        </div>
        <div className='icons'>
          <img src='./phone.png' alt='' />
          <img src='./video.png' alt='' />
          <img src='./info.png' alt='' />
        </div>
      </div>
      <div className='center'>
        <div className='message'>
          <img src='./avatar.png' alt='' />
          <div className='texts'>
            <p>
              This is my text for you read it carefully Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Voluptates, corporis, dolores
              placeat fuga eum, quisquam animi maxime distinctio ab
            </p>
            <span>1min ago</span>
          </div>
        </div>
        <div className='message own'>
          <div className='texts'>
            <p>
              Thanks for the message, read it carefully Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Voluptates, corporis, dolores
              placeat fuga eum, quisquam animi maxime distinctio ab
            </p>
            <span>1min ago</span>
          </div>
        </div>
        <div className='message'>
          <img src='./avatar.png' alt='' />
          <div className='texts'>
            <p>
              This is my text for you read it carefully Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Voluptates, corporis, dolores
              placeat fuga eum, quisquam animi maxime distinctio ab
            </p>
            <span>1min ago</span>
          </div>
        </div>
        <div className='message own'>
          <div className='texts'>
            <img
              src='https://media.istockphoto.com/id/1311107708/photo/focused-cute-stylish-african-american-female-student-with-afro-dreadlocks-studying-remotely.jpg?s=1024x1024&w=is&k=20&c=EB_4ZXqrwdetqwlYlZNu1UDPygl8OTOeMaRinoox8Kk='
              alt=''
            />
            <p>
              Thank you for the message, noted. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Voluptates, corporis, dolores
              placeat fuga eum, quisquam animi maxime distinctio ab
            </p>
            <span>1min ago</span>
          </div>
        </div>
        <div className='message'>
          <img src='./avatar.png' alt='' />
          <div className='texts'>
            <p>
              This is my text for you read it carefully Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Voluptates, corporis, dolores
              placeat fuga eum, quisquam animi maxime distinctio ab
            </p>
            <span>1min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className='bottom'>
        <div className='icons'>
          <img src='./image.png' alt='' />
          <img src='./camera.png' alt='' />
          <img src='./mic.png' alt='' />
        </div>
        <input
          type='text'
          placeholder='Type a message...'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className='emoji'>
          <img
            src='./emoji.png'
            alt=''
            onClick={() => setOpen((prev) => !prev)}
          />
          {open && (
            <div className='picker'>
              <EmojiPicker onEmojiClick={handleEmoji} />
            </div>
          )}
        </div>
        <button className='sendButton'>Send</button>
      </div>
    </div>
  );
};

export default Chat;