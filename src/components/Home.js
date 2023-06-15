import React, { useState } from 'react';
import people from "../images/people.png"
import calendar from "../images/calendar.png"
import circle from "../images/circle-graph.png"
import up from "../images/up.png"
import down from "../images/down.png"
import greenline from "../images/greenline.png"
import redline from "../images/redline.png"
import redcolor from "../images/redcolor.png"
import greencolor from "../images/greencolor.png"
import Navbar from './Navbar';
import { Select, MenuItem } from '@material-ui/core';

const Home = () => {
    const [firstMonth, setFirstMonth] = useState("April");
    const [secondMonth, setSecondMonth] = useState("May");
    const [signUpDuration, setSignUpDuration] = useState("Last 1 hour")

    return (
        <div className=''>
            <Navbar title="Dashboard" />
            <div className='px-9 py-3'>
                <div className='flex h-[147px] w-full'>
                    <div className='bg-white w-1/2 h-full p-4 flex items-center rounded-[15px] justify-between'>
                        <div className='flex flex-col justify-center h-full'>
                            <p className='text-[#2D3748] font-bold'>Welcome Vikram</p>
                            <p className='text-[#A0AEC0]'>Here’s an overview of your gamyly activities</p>
                        </div>
                        <div className='border border-gray-100 flex justify-between items-center h-3/4 mr-4 w-[182px] rounded-md p-2'>
                            <div>
                                <p className='text-[#A0AEC0] text-[10px] leading-[15.71px]'>Total creators</p>
                                <p className='text-[#2D3748] text-[20px] font-bold'>53,000</p>
                            </div>
                            <img width={29} height={29} src={people}></img>
                        </div>
                    </div>
                    <div className='bg-white ml-4 w-4/12 h-full p-4 rounded-[15px] '>
                        <p className='text-[#525256] text-[14px] leading-[22px]'>Platform Discovery</p>
                        <div className='flex items-center mt-4'>
                            <div className='border border-gray-100 flex justify-between items-center h-3/4  w-[182px] rounded-md p-2'>
                                <div>
                                    <p className='text-[#A0AEC0] text-[10px] leading-[15.71px]'>Social media Ads</p>
                                    <p className='text-[#2D3748] text-[20px] font-bold'>53,000</p>
                                </div>
                            </div>
                            <div className='border border-gray-100 flex justify-between items-center h-3/4 ml-4 w-[182px] rounded-md p-2'>
                                <div>
                                    <p className='text-[#A0AEC0] text-[10px] leading-[15.71px]'>Personal Reach</p>
                                    <p className='text-[#2D3748] text-[20px] font-bold'>53,000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-6'>
                    <p className='font-[600] text-[24px] leading-[30px]'>Sign Up</p>
                    <div className='mt-2 h-[150px] flex'>
                        <div className='text-white w-[215px] h-full bg-[#DA0D18] rounded-tl-[8px] rounded-bl-[8px] p-4'>
                            <p >Total</p>
                            <p className='mt-4 text-[36px] leading-[24px] font-[700]'>$ 120,000</p>
                        </div>
                        <div className='w-[215px] h-full p-4 border border-gray'>
                            <p className='text-[#6D7D93]'>Last Month</p>
                            <p className='mt-4 text-[36px] leading-[24px] font-[700] text-[#6D7D93]'>16,500</p>
                            <p className='text-[#6D7D93] text-[12px] mt-6'><span className='text-[#DA0D18]'>2%</span> Decrease From Previous month</p>
                        </div>
                        <div className='w-[215px] h-full p-4 border border-gray'>
                            <p className='text-[#6D7D93]'>Last Week</p>
                            <p className='mt-4 text-[36px] leading-[24px] font-[700] text-[#6D7D93]'>48,670</p>
                            <p className='text-[#6D7D93] text-[12px] mt-6'><span className='text-[#2EDB2B]'>6%</span> Increase From Previous Week</p>
                        </div>
                        <div className='w-[215px] h-full p-4 border border-gray rounded-tr-[8px] rounded-br-[8px]'>
                            <p className='text-[#6D7D93]'>Last 24 Hours</p>
                            <p className='mt-4 text-[36px] leading-[24px] font-[700] text-[#6D7D93]'>74,330</p>
                            <p className='text-[#6D7D93] text-[12px] mt-6'><span className='text-[#2EDB2B]'>1%</span> Increase From Previous Day</p>
                        </div>
                    </div>
                </div>
                <div className='flex items-center h-[239px] mt-6'>
                    <div className='w-7/12 h-full bg-white rounded-[8px] border border-[#DCDEE6] p-4'>
                        <div className='flex items-center justify-between'>
                            <p className='text-[#106DEE]'>Avg. <span className=' font-bold'>1,500</span></p>
                            <div className='border border-[#DCDEE6] rounded-[8px] flex items-center py-2 px-6'>
                                <p className=' text-[15px] leading-[180%]'>April, 01 - May, 30 2022</p>
                                <img className='ml-3' width={19.6} height={21.78} src={calendar}></img>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <div className='mt-6'>
                                <p className='text-[#DA0D18] text-[16px] leading-[26px] font-bold'>APRIL</p>
                                <p className=' font-bold text-[43px] leading-[25px] mt-3'>1,000</p>
                                <p className='font-[400] text-[13px] leading-[25px] text-[#2D3657] mt-3'>Total Signup as on April 30, 2023</p>
                            </div>
                            <div className='h-[133px] border border-[#B5B5B5] w-[1px] mx-10'></div>
                            <div className='mt-6'>
                                <p className='text-[#DA0D18] text-[16px] leading-[26px] font-bold'>MAY</p>
                                <p className=' font-bold text-[43px] leading-[25px] mt-3'>6,000</p>
                                <p className='font-[400] text-[13px] leading-[25px] text-[#2D3657] mt-3'>Total profit as on May 30, 2023</p>
                            </div>
                        </div>
                        <div className='flex items-center w-full mt-2'>
                            <p className='text-center ml-32 text-[12px] text-[#6D7D9399]'><span className='text-[#2EDB2B]'>6% </span>Increase From Previous April</p>
                            <img className='ml-2' src={up}></img>
                        </div>
                    </div>
                    <div className='ml-4 bg-white border border-[#DADADA] p-4 h-full w-1/3 rounded-[8px]'>
                        <div className='flex items-center justify-between'>
                            <p className=' font-bold'>Sign Up</p>
                            <Select
                                value={signUpDuration}
                                onChange={(e) => { setSignUpDuration(e.target.value) }}
                                variant="outlined"
                                size="small"
                                style={{
                                    marginLeft: '4px',
                                    border: '1px solid #E8E8E8',
                                    backgroundColor: '#D2D2D240',
                                    color: '#666666',
                                    padding: '3px 6px',
                                    borderRadius: '0.375rem',
                                    width: 104,
                                    height: 30,
                                    fontSize: 11
                                }}
                            >
                                <MenuItem value="Last 1 hour">Last 1 hour</MenuItem>
                                <MenuItem value="option2">Option 2</MenuItem>
                                <MenuItem value="option3">Option 3</MenuItem>
                            </Select>
                        </div>
                        <div className='flex justify-center items-center flex-col'>
                            <p className='font-[700] text-[40px] leading-[22px] mt-10'>20,000</p>
                            <p className=' text-[#2EDB2B] text-[16px] mt-4 font-bold'>65%</p>
                        </div>
                    </div>
                </div>
                <div className='bg-white border border-[#ECECEC] rounded-[6px] p-4 mt-6 '>
                    <p className=' font-bold'>Active creators</p>
                    <div className='flex items-center h-1/3'>
                        <div className='border border-[#ECECEC] w-full p-4 mt-12 h-full'>
                            <p className='font-bold'>Active creators</p>
                            <div className='flex items-center'>
                                <div className="relative inline-block">
                                    <img width={175} height={175} src={circle} />
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-lg font-bold">
                                        <p className='text-[24px] leading-[31px]'>100,000</p>
                                        <p className='text-[#FF0000]'>Total</p>
                                    </div>
                                </div>
                                <div className='ml-6'>
                                    <div className='flex items-center mb-10'>
                                        <div className='bg-[#48BB78] w-[44px] h-[6px] rounded-[148px]'></div>
                                        <div className='ml-4'>
                                            <p className='text-[22px]'>25,000</p>
                                            <p className='text-[#7D7D7D] text-[18px]'>This week</p>
                                        </div>
                                        <p className='ml-6 text-[#48BB78]'>+5%</p>
                                        <img className='ml-3' src={up}></img>
                                    </div>
                                    <div className='flex items-center'>
                                        <div className='bg-[#DA0D18] w-[44px] h-[6px] rounded-[148px]'></div>
                                        <div className='ml-4'>
                                            <p className='text-[22px]'>25,000</p>
                                            <p className='text-[#7D7D7D] text-[18px]'>This week</p>
                                        </div>
                                        <p className='ml-6 text-[#E53E3E]'>-14%</p>
                                        <img className='ml-3' src={down}></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='border border-[#ECECEC] w-full p-4 mt-12 ml-2 h-[272px]'>
                            <div className='flex'>
                                <p className='font-bold'>Active creators Comparison</p>
                                <Select
                                    value={firstMonth}
                                    onChange={(e) => { setFirstMonth(e.target.value) }}
                                    variant="outlined"
                                    size="small"
                                    className="border border-[#DCDEE6] text-[#121212] ml-4 px-1 py-1 rounded-md w-[104px] h-[29px]"
                                >
                                    <MenuItem value="April">April</MenuItem>
                                </Select>
                                <Select
                                    value={secondMonth}
                                    onChange={(e) => { setSecondMonth(e.target.value) }}
                                    variant="outlined"
                                    size="small"
                                    className="border border-[#DCDEE6] text-[#121212] ml-4 px-1 py-1 rounded-md w-[104px] h-[29px]"
                                >
                                    <MenuItem value="May">May</MenuItem>
                                </Select>
                            </div>
                            <div className='flex flex-col justify-center h-2/3'>
                                <div>
                                    <div className='flex justify-between'>
                                        <p>April</p>
                                        <p className='text-[#DA0D18] mr-12'>50,00.00</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <img src={redline}></img>
                                        <img src={redcolor}></img>
                                    </div>
                                </div>
                                <div className='mt-6'>
                                    <div className='flex justify-between'>
                                        <p>May</p>
                                        <p className='text-[#369657] mr-12'>80,00.00</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <img src={greenline}></img>
                                        <img width={220} src={greencolor}></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#DA0D18] mt-12 border border-[#CDCDCD] w-1/4 h-[272px] flex justify-center items-center'>
                            <p className='text-white'>8%</p>
                        </div>
                    </div>
                    <div className='flex items-center h-[239px] mt-6'>
                        <div className='w-7/12 h-full bg-white rounded-[8px] border border-[#DCDEE6] p-4'>
                            <div className='flex items-center justify-between'>
                                <p className='text-[#106DEE]'>Avg. <span className=' font-bold'>1,500</span></p>
                                <div className='border border-[#DCDEE6] rounded-[8px] flex items-center py-2 px-6'>
                                    <p className=' text-[15px] leading-[180%]'>April, 01 - May, 30 2022</p>
                                    <img className='ml-3' width={19.6} height={21.78} src={calendar}></img>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <div className='mt-6'>
                                    <p className='text-[#DA0D18] text-[16px] leading-[26px] font-bold'>APRIL</p>
                                    <p className=' font-bold text-[43px] leading-[25px] mt-3'>1,000</p>
                                    <p className='font-[400] text-[13px] leading-[25px] text-[#2D3657] mt-3'>Active creators as on April 30, 2023</p>
                                </div>
                                <div className='h-[133px] border border-[#B5B5B5] w-[1px] mx-10'></div>
                                <div className='mt-6'>
                                    <p className='text-[#DA0D18] text-[16px] leading-[26px] font-bold'>MAY</p>
                                    <p className=' font-bold text-[43px] leading-[25px] mt-3'>6,000</p>
                                    <p className='font-[400] text-[13px] leading-[25px] text-[#2D3657] mt-3'>Active creators as on May 30, 2023</p>
                                </div>
                            </div>
                            <div className='flex items-center w-full mt-2'>
                                <p className='text-center ml-32 text-[12px] text-[#6D7D9399]'><span className='text-[#2EDB2B]'>6% </span>Increase From Previous April</p>
                                <img className='ml-2' src={up}></img>
                            </div>
                        </div>
                        <div className='ml-4 bg-white border border-[#DADADA] p-4 h-full w-1/3 rounded-[8px]'>
                            <div className='flex items-center justify-between'>
                                <p className=' font-bold'>Active</p>
                                <Select
                                    value={signUpDuration}
                                    onChange={(e) => { setSignUpDuration(e.target.value) }}
                                    variant="outlined"
                                    size="small"
                                    style={{
                                        marginLeft: '4px',
                                        border: '1px solid #E8E8E8',
                                        backgroundColor: '#D2D2D240',
                                        color: '#666666',
                                        padding: '3px 6px',
                                        borderRadius: '0.375rem',
                                        width: 104,
                                        height: 30,
                                        fontSize: 11
                                    }}
                                >
                                    <MenuItem value="Last 1 hour">Last 1 hour</MenuItem>
                                    <MenuItem value="option2">Option 2</MenuItem>
                                    <MenuItem value="option3">Option 3</MenuItem>
                                </Select>
                            </div>
                            <div className='flex justify-center items-center flex-col'>
                                <p className='font-[700] text-[40px] leading-[22px] mt-10'>800</p>
                                <p className=' text-[#2EDB2B] text-[16px] mt-4 font-bold'>65%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Home;
