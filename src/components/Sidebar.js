import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Modal } from '@material-ui/core';
import { Home, Code, Group, ShowChart, AccountBalanceWallet, EmojiEvents, Settings, ExitToApp } from '@material-ui/icons';
import gamly from "../images/gamly.png";
import alert from "../images/alert-triangle.png"

const Sidebar = ({ selectedItem, handleItemClick, toggleModal, handleLogout, isModalOpen }) => {
    return (
        <Drawer
            anchor="left"
            open={true}
            variant="persistent"
            PaperProps={{ style: { position: 'static' } }}
        >
            <div className="w-64 font-[500] text-[16px] leading-4 text-[#2D3657] relative h-screen">
                <div className='flex justify-center items-center h-20 border-b border-gray'>
                    <img src={gamly} alt="Gamly logo" />
                    <p className='text-[#DA0D18] text-[14px] font-[700] ml-1 leading-[18px]'>Gamly</p>
                </div>
                <div className='h-0'></div>
                <div className="overflow-y-auto h-[calc(100vh-92px)]">
                    <List>
                        <ListItem
                            button
                            selected={selectedItem === 'Home'}
                            onClick={() => handleItemClick('Home')}
                            style={{ backgroundColor: selectedItem === 'Home' ? '#FFEDED' : 'transparent', color: selectedItem === "Home" && "#DA0D18" }}
                        >
                            <ListItemIcon><Home /></ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItem>
                        <ListItem
                            button
                            selected={selectedItem === 'Code Management'}
                            onClick={() => handleItemClick('Code Management')}
                            style={{ backgroundColor: selectedItem === 'Code Management' ? '#FFEDED' : 'transparent', color: selectedItem === "Code Management" && "#DA0D18" }}
                        >
                            <ListItemIcon><Code /></ListItemIcon>
                            <ListItemText primary="Code Management" />
                        </ListItem>
                        <ListItem
                            button
                            selected={selectedItem === 'Creators'}
                            onClick={() => handleItemClick('Creators')}
                            style={{ backgroundColor: selectedItem === 'Creators' ? '#FFEDED' : 'transparent', color: selectedItem === "Creators" && "#DA0D18" }}
                        >
                            <ListItemIcon><Group /></ListItemIcon>
                            <ListItemText primary="Creators" />
                        </ListItem>
                        <ListItem
                            button
                            selected={selectedItem === 'Game Metrics'}
                            onClick={() => handleItemClick('Game Metrics')}
                            style={{ backgroundColor: selectedItem === 'Game Metrics' ? '#FFEDED' : 'transparent', color: selectedItem === "Game Metrics" && "#DA0D18" }}
                        >
                            <ListItemIcon><ShowChart /></ListItemIcon>
                            <ListItemText primary="Game Metrics" />
                        </ListItem>
                        <ListItem
                            button
                            selected={selectedItem === 'KYC'}
                            onClick={() => handleItemClick('KYC')}
                            style={{ backgroundColor: selectedItem === 'KYC' ? '#FFEDED' : 'transparent', color: selectedItem === "KYC" && "#DA0D18" }}
                        >
                            <ListItemIcon><AccountBalanceWallet /></ListItemIcon>
                            <ListItemText primary="KYC" />
                        </ListItem>
                        <ListItem
                            button
                            selected={selectedItem === 'Withdrawal Management'}
                            onClick={() => handleItemClick('Withdrawal Management')}
                            style={{ backgroundColor: selectedItem === 'Withdrawal Management' ? '#FFEDED' : 'transparent', color: selectedItem === "Withdrawal Management" && "#DA0D18" }}
                        >
                            <ListItemIcon><AccountBalanceWallet /></ListItemIcon>
                            <ListItemText primary="Withdrawal Management" />
                        </ListItem>
                        <ListItem
                            button
                            selected={selectedItem === 'Contest'}
                            onClick={() => handleItemClick('Contest')}
                            style={{ backgroundColor: selectedItem === 'Contest' ? '#FFEDED' : 'transparent', color: selectedItem === "Contest" && "#DA0D18" }}
                        >
                            <ListItemIcon><EmojiEvents /></ListItemIcon>
                            <ListItemText primary="Contest" />
                        </ListItem>
                    </List>
                </div>
                <div className='absolute bottom-0'>
                    <List>
                        <ListItem
                            button
                            selected={selectedItem === 'Settings'}
                            onClick={() => handleItemClick('Settings')}
                            style={{ backgroundColor: selectedItem === 'Settings' ? '#FFEDED' : 'transparent', color: selectedItem === "Settings" && "#DA0D18" }}
                        >
                            <ListItemIcon><Settings /></ListItemIcon>
                            <ListItemText primary="Settings" />
                        </ListItem>
                        <ListItem
                            button
                            selected={selectedItem === 'Logout'}
                            onClick={() => handleItemClick('Logout')}
                            style={{ backgroundColor: selectedItem === 'Logout' ? '#FFEDED' : 'transparent', color: selectedItem === "Logout" && "#DA0D18" }}
                        >
                            <ListItemIcon><ExitToApp /></ListItemIcon>
                            <ListItemText primary="Logout" />
                        </ListItem>
                    </List>
                </div>
                {/* Logout Confirmation Modal */}
                <Modal open={isModalOpen} onClose={toggleModal}>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 w-[436px] rounded shadow flex flex-col items-center">
                        <div className='flex items-center'>
                            <img src={alert}></img>
                            <h3 className="text-lg font-bold ml-4">Logout</h3>
                        </div>
                        <p className='font-[500] text-[16px] mt-2'>Are you sure you want to log out of your account ?
                        </p>
                        <div className="flex justify-end mt-6">
                            <button className="px-4 py-2 bg-[#E50F1C] rounded mr-2 text-white text-[14px]" onClick={toggleModal}>
                                No
                            </button>
                            <button className="px-4 py-2 bg-[#FFE3D6] text-white rounded text-[#E50F1C] text-[14px]" onClick={handleLogout}>
                                Yes, Logout
                            </button>
                        </div>
                    </div>
                </Modal>
            </div>
        </Drawer>
    );
};

export default Sidebar;
