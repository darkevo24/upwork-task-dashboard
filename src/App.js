import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import CodeManagement from './components/CodeManagement';
import Creators from './components/Creators';
import GameMetrics from './components/GameMetrics';
import KYC from './components/KYC';
import WithdrawalManagement from './components/WithdrawalManagement';
import Contest from './components/Contest';
import PendingRequest from './components/PendingRequest';

const App = () => {
  const [selectedItem, setSelectedItem] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);

  const handleLogout = () => {
    // Handle logout logic here
    // For demonstration purposes, we'll just close the modal
    setModalOpen(false);
  };

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const handleItemClick = (item) => {
    if (item == "Logout") {
      toggleModal();
      return;
    }
    setSelectedItem(item);
  };

  useEffect(() => {
    if (!selectedItem) {
      setSelectedItem("Home");
    }
  }, [selectedItem])

  return (
    <div className="flex">
      <Sidebar isModalOpen={isModalOpen} selectedItem={selectedItem} handleItemClick={handleItemClick} toggleModal={toggleModal} handleLogout={handleLogout} />
      <div className='flex-1'>
        <div className="overflow-y-auto h-screen">
          {/* Render different components based on the selected item */}
          {selectedItem === 'Home' && <Home />}
          {selectedItem === 'Code Management' && <CodeManagement handleItemClick={handleItemClick} />}
          {selectedItem === 'Creators' && <Creators />}
          {selectedItem === 'Game Metrics' && <GameMetrics />}
          {selectedItem === 'KYC' && <KYC />}
          {selectedItem === 'Withdrawal Management' && <WithdrawalManagement />}
          {selectedItem === 'Contest' && <Contest />}
          {selectedItem === 'Pending' && <PendingRequest handleItemClick={handleItemClick} />}
        </div>
      </div>
    </div>
  );
};

export default App;
