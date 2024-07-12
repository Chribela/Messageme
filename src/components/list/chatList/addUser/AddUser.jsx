import React, { useState } from 'react';
import './addUser.css';
import { db } from "../../../../lib/firebase";
import {
  collection,
  getDocs,
  query,
  where,
  serverTimestamp,
  updateDoc,
  setDoc,
  doc,
  arrayUnion
} from 'firebase/firestore';
import { useUserStore } from '../../../../lib/userStore';

const AddUser = () => {
  const [user, setUser] = useState(null);
  const { currentUser } = useUserStore();

  const handleSearch = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get('username');
    console.log(`Searching for user: ${username}`);

    try {
      const userRef = collection(db, 'users');
      const q = query(userRef, where('username', '==', username));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const foundUser = querySnapshot.docs[0].data();
        foundUser.uid = querySnapshot.docs[0].id; // Add UID to the user object
        setUser(foundUser);
        console.log(`User found: `, foundUser);
      } else {
        setUser(null);
        console.log('No user found');
      }
    } catch (err) {
      console.log('Error during user search:', err);
    }
  };

  const handleAdd = async () => {
    if (!user || !currentUser) {
      console.log('User or current user not defined');
      return;
    }

    const chatRef = collection(db, 'chats');
    const userChatsRef = collection(db, 'userChats');

    try {
      const newChatRef = doc(chatRef);
      console.log('Creating new chat document with ID:', newChatRef.id);

      await setDoc(newChatRef, {
        createdAt: serverTimestamp(),
        messages: [],
      });

      console.log('New chat document created:', newChatRef.id);

      await updateDoc(doc(userChatsRef, user.uid), {
        chats: arrayUnion({
          chatId: newChatRef.id,
          lastMessage: "",
          receiverId: currentUser.uid,
          updatedAt: serverTimestamp(),
        }),
      });

      console.log(`Updated userChats for user ${user.uid}`);

      await updateDoc(doc(userChatsRef, currentUser.uid), {
        chats: arrayUnion({
          chatId: newChatRef.id,
          lastMessage: "",
          receiverId: user.uid,
          updatedAt: serverTimestamp(),
        }),
      });

      console.log(`Updated userChats for current user ${currentUser.uid}`);

    } catch (err) {
      console.log('Error during adding user to chat:', err);
    }
  };

  return (
    <div className='addUser'>
      <form onSubmit={handleSearch}>
        <div className="input-group">
          <input type="text" placeholder='Username' name='username' />
          <button type="submit">Search</button>
        </div>
      </form>
      {user && (
        <div className="user">
          <div className="detail">
            <img src={user.avatar || "../avatar.png"} alt="User Avatar" />
            <span>{user.username}</span>
          </div>
          <button onClick={handleAdd}>Add user</button>
        </div>
      )}
    </div>
  );
};

export default AddUser; 