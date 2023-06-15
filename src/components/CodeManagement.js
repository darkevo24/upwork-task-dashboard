import React, { useState } from 'react';
import Navbar from './Navbar';
import { Modal, Backdrop, Fade, TablePagination, InputAdornment, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Select, MenuItem, Button } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import refresh from "../images/refresh.png";

const data = [
    {
        creatorName: "Kathryn Murphy",
        userName: "ibernard",
        socialMedia: "@darkepi",
        mobileNumber: "+1(234)234-22-98",
        email: "epi-axyc@gmail.com",
        invitationCode: "PSQ 932",
        reach: 9141,
        status: "pending"
    },
    {
        creatorName: "John Doe",
        userName: "johndoe",
        socialMedia: "@johndoe",
        mobileNumber: "+1(123)456-7890",
        email: "johndoe@example.com",
        invitationCode: "ABC 123",
        reach: 5000,
        status: "active"
    },
    // Add more data objects here
    {
        creatorName: "Jane Smith",
        userName: "janesmith",
        socialMedia: "@janesmith",
        mobileNumber: "+1(987)654-3210",
        email: "janesmith@example.com",
        invitationCode: "XYZ 789",
        reach: 7500,
        status: "pending"
    },
    // Add more data objects here
    {
        creatorName: "Michael Johnson",
        userName: "michaeljohnson",
        socialMedia: "@michaeljohnson",
        mobileNumber: "+1(555)123-4567",
        email: "michaeljohnson@example.com",
        invitationCode: "DEF 456",
        reach: 10000,
        status: "active"
    },
    // Add more data objects here
];


const CodeManagement = ({ handleItemClick }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDuration, setSelectedDuration] = useState('Select Durations');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [openModal, setOpenModal] = useState(false);


    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleDurationChange = (event) => {
        setSelectedDuration(event.target.value);
    };

    const handleRefresh = () => {
        // Perform data refresh logic here
    };

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };


    const filteredData = data.filter((item) =>
        item.creatorName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const emptyRows =
        rowsPerPage - Math.min(rowsPerPage, filteredData.length - page * rowsPerPage);

    return (
        <div>
            <Navbar title="Code Managements" />
            <div className='px-9 py-3'>
                <div className='flex justify-between items-center'>
                    <p className=' font-[500]'>Creators Code Details</p>
                    <div className='flex items-center'>
                        <button onClick={() => { handleItemClick("Pending") }} className='border border-[#DA0D18] font-[600] rounded-[4px] py-2 px-6 text-[#DA0D18] text-[16px] hover:bg-[#DA0D18] hover:text-[white]'>
                            Pending request
                        </button>
                        <button onClick={handleOpenModal} className='border border-[#DA0D18] ml-3 font-[600] rounded-[4px] py-2 px-6 text-[#DA0D18] text-[16px] hover:bg-[#DA0D18] hover:text-[white]'>
                            Send Invite
                        </button>
                    </div>
                </div>
                <div className="p-6 bg-white mt-12 rounded-[8px]">
                    <div className="flex justify-between mb-4">
                        <div className="flex items-center">
                            <TextField
                                label="Search"
                                variant="outlined"
                                size="small"
                                value={searchTerm}
                                onChange={handleSearchChange}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Search />
                                        </InputAdornment>
                                    ),
                                    style: {
                                        backgroundColor: '#E5E7EB'
                                    }
                                }}
                            />
                        </div>
                        <div className="flex items-center">
                            <Select
                                value={selectedDuration}
                                onChange={handleDurationChange}
                                variant="outlined"
                                size="small"
                                className="mr-4 bg-[#E50F1C] w-[167px] h-[40px]"
                                style={{ color: 'white', fontSize: 13 }}
                            >
                                <MenuItem value="Select Durations">Select Durations</MenuItem>
                                <MenuItem value="1 hour">1 hour</MenuItem>
                                <MenuItem value="2 hours">2 hours</MenuItem>
                                <MenuItem value="3 hours">3 hours</MenuItem>
                            </Select>
                            <Button className='bg-[#DCDEE6]' variant="contained" onClick={handleRefresh}>
                                <img src={refresh}></img>
                                <p className='ml-2 font-[700] text-[13px]'>Refresh</p>
                            </Button>
                        </div>
                    </div>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow className=' font-semibold text-white'>
                                    <TableCell>Creator Name</TableCell>
                                    <TableCell>User Name</TableCell>
                                    <TableCell>Social Media</TableCell>
                                    <TableCell>Mobile Number</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Invitation Code</TableCell>
                                    <TableCell>Reach</TableCell>
                                    <TableCell>Status</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {/* Render rows based on current page and rowsPerPage */}
                                {(rowsPerPage > 0
                                    ? filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    : filteredData
                                ).map((item) => (
                                    <TableRow key={item.invitationCode}>
                                        <TableCell>{item.creatorName}</TableCell>
                                        <TableCell>{item.userName}</TableCell>
                                        <TableCell>{item.socialMedia}</TableCell>
                                        <TableCell>{item.mobileNumber}</TableCell>
                                        <TableCell>{item.email}</TableCell>
                                        <TableCell>{item.invitationCode}</TableCell>
                                        <TableCell>{item.reach}</TableCell>
                                        <TableCell><div className='flex items-center'><div className={`bg-${item.status === 'active' ? '[#44AC21]' : '[#EFA30E]'} w-[10px] h-[10px] rounded-full mr-2`}></div>{item.status}</div></TableCell>
                                    </TableRow>
                                ))}

                                {/* Render empty rows if necessary */}
                                {emptyRows > 0 && (
                                    <TableRow style={{ height: 53 * emptyRows }}>
                                        <TableCell colSpan={8} />
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    {/* Pagination */}
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={filteredData.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                    <Modal
                        open={openModal}
                        onClose={handleCloseModal}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                        }}
                    >
                        <Fade in={openModal}>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 w-[436px] rounded shadow flex flex-col items-center">
                                <p className="text-[18px] font-[500] leading-[23px] text-left w-full">Send Invite</p>
                                <div className='w-full'>
                                    <p className="text-[14px] mt-10">Email</p>
                                    <TextField
                                        label="Input email"
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                        InputProps={{
                                            style: {
                                                backgroundColor: '#F3F4F6',
                                                marginTop: 4,
                                                border: '0.8px solid #E7E7E7',
                                                color: '#000',
                                                fontSize: 12,
                                            },
                                        }}
                                    />
                                </div>
                                <div className='w-full'>
                                    <p className="text-[14px] mt-2">Mobile Number</p>
                                    <TextField
                                        label="Mobile Number"
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                        InputProps={{
                                            style: {
                                                backgroundColor: '#F3F4F6',
                                                marginTop: 4,
                                                border: '0.8px solid #E7E7E7',
                                                color: '#000',
                                                fontSize: 12,
                                            },
                                        }}
                                    />
                                </div>
                                <div className='w-full'>
                                    <p className="text-[14px] mt-2">Social Media</p>
                                    <TextField
                                        label="Social Media"
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                        InputProps={{
                                            style: {
                                                backgroundColor: '#F3F4F6',
                                                marginTop: 4,
                                                border: '0.8px solid #E7E7E7',
                                                color: '#000',
                                                fontSize: 12,
                                            },
                                        }}
                                    />
                                </div>
                                <div className="flex justify-end w-full mt-4">
                                    <Button style={{
                                        background: "#920000", color: "white", fontWeight: 500, fontSize: 14
                                    }} variant="contained">
                                        Generate invitation
                                    </Button>
                                </div>
                            </div>
                        </Fade>
                    </Modal>
                </div>
            </div>
        </div >
    );
};

export default CodeManagement;
