import React, { useEffect } from 'react';
import Login from "./components/login/Login";
import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import List from "./components/list/List";
import Notification from './components/notification/Notification';
import { onAuthStateChanged } from 'firebase/auth';
import { useUserStore } from './lib/userStore'; 
import { auth } from './lib/firebase'; 

const App = () => {
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo( user?.uid);
    });

    return () => {
      unSub();
    };
  }, [fetchUserInfo]);


  if (isLoading) return <div className='loading'>Loading...</div>;

  return (
    <div className='container'>
      {currentUser ? (
        <>
          <List />
          <Chat />
          <Detail />
        </>
      ) : (
        <Login />
      )}
      <Notification />
    </div>
  );
}

export default App;