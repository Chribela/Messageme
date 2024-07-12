import React, { useState, useEffect } from 'react';
import AddUser from "./addUser/AddUser";
import { doc, onSnapshot, getDoc } from 'firebase/firestore';
import { useUserStore } from '../../../lib/userStore';
import { db } from '../../../lib/firebase';
import './chatList.css';

const ChatList = () => {
  const [chats, setChats] = useState([]);
  const [addMode, setAddMode] = useState(false);
  const { currentUser } = useUserStore();

  useEffect(() => {
    if (!currentUser?.id) return;

    const unSub = onSnapshot(doc(db, 'userChats', currentUser.id), async (res) => {
      const items = res.data().chats || [];

      const promises = items.map(async (item) => {
        const userDocRef = doc(db, 'users', item.receiverId);
        const userDocSnap = await getDoc(userDocRef);

        const user = userDocSnap.exists() ? userDocSnap.data() : null;

        return { ...item, user };
      });

      const chatData = await Promise.all(promises);

      setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
    });

    return () => {
      unSub();
    };
  }, [currentUser?.id]);

  return (
    <div className='chatlist'>
      <div className="search">
        <div className="searchBar">
          <img src="/search.png" alt="" />
          <input type="text" placeholder='Search' />
        </div>
        <img 
          src={addMode ? "./minus.png" : "./plus.png"} 
          className="add" 
          alt="" 
          onClick={() => setAddMode(prev => !prev)} 
        />
      </div>
      {chats.map(chat => (
        <div className="item" key={chat.chatId}>
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>{chat.user?.name || 'Unknown User'}</span>
            <p>{chat.lastMessage}</p>
          </div>
        </div>
      ))}

      {addMode && <AddUser />}
    </div>
  );
}

export default ChatList;