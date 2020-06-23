import React from 'react';
import 'tachyons'
import './App.css';
import AdminNavBar from './containers/Admin/admin.dashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <AdminNavBar />
      </header>
    </div>
  );
}

export default App;
