import React, { useState } from 'react';
import Navbar from './Navbar';
import { Modal, Backdrop, Fade, TablePagination, InputAdornment, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Select, MenuItem, Button } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import refresh from "../images/refresh.png";
import right from "../images/right.png";

const data = [
    {
        name: "Kathryn",
        email: "kathrin@gmail.com",
        mobileNumber: "+1(903)345-23-52",
        socialMedia: "@kathryn"
    }
];


const PendingRequest = ({ handleItemClick }) => {
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
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
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
                    <div className='flex items-center'>
                        <p onClick={() => { handleItemClick("Code Management") }} className=' font-[400] text-[18px] text-[#878787] cursor-pointer'>Code Management</p>
                        <img className='ml-2 cursor-pointer' src={right}></img>
                        <p className=' font-[400] text-[18px] ml-2 cursor-pointer'>Pending Request</p>
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
                            <Button style={{ background: "white" }} variant="contained" onClick={handleRefresh}>
                                <img src={refresh}></img>
                                <p className='ml-2 font-[700] text-[13px]'>Refresh</p>
                            </Button>
                        </div>
                    </div>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow className=' font-semibold text-white'>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Mobile Number</TableCell>
                                    <TableCell>Social Media</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {/* Render rows based on current page and rowsPerPage */}
                                {(rowsPerPage > 0
                                    ? filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    : filteredData
                                ).map((item) => (
                                    <TableRow key={item.invitationCode}>
                                        <TableCell>{item.name}</TableCell>
                                        <TableCell>{item.email}</TableCell>
                                        <TableCell>{item.mobileNumber}</TableCell>
                                        <TableCell>{item.socialMedia}</TableCell>
                                        <div className="flex mt-2">
                                            <Button style={{ fontsize: 12, fontWeight: 400, color: "#258E22", border: "1px solid #258E22" }} variant="outlined">
                                                Approve
                                            </Button>
                                            <Button style={{ fontsize: 12, fontWeight: 400, color: "#DA0D18", border: "1px solid #DA0D18", marginLeft: 6 }} variant="outlined">
                                                Decline
                                            </Button>
                                        </div>
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
                </div>
            </div>
        </div >
    );
};

export default PendingRequest;
