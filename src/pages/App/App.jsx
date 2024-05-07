import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'; 
import { getUser } from '../../utilities/users-services';

import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import AuthPage from '../AuthPage/AuthPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';

export default function App() {
  // user = {name: 'Dorjee', email: 'dorjee@gmail.com', _id: '6636cfcfd3ee0ebd4cb33643', createdAt: '2024-05-05T00:16:15.806Z', updatedAt: '2024-05-05T00:16:15.806Z', …}
  // user object has password key deleted 
  const [user, setUser] = useState(getUser()); // users-services module from utilities folder 

  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} />
      { user ? 
      <>
        <Routes>
          <Route path="/orders/new" element={<NewOrderPage />} />
          <Route path="/orders" element={<OrderHistoryPage />} />
        </Routes>
      </>
      : 
      <AuthPage setUser={setUser} />
      }
    </main>
  );
}


