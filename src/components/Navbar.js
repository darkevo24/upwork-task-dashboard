import React, { useState } from "react";
import setting from "../images/setting.png"
import notification from "../images/notification.png"
import avatar from "../images/Avatar.png"
import { Search } from '@material-ui/icons';
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

const Navbar = ({ title }) => {
    const [type, setType] = useState("Creator")

    return (
        <div className='h-20 border-b border-gray flex items-center'>
            <p className=' font=[700] text-[14px] leading-[140%] text-[#2D3748] ml-2 font-bold'>{title}</p>
            <div className='flex justify-between w-full'>
                <Select
                    value={type}
                    onChange={(e) => { setType(e.target.value) }}
                    variant="outlined"
                    size="small"
                    className="border-[#DA0D18] text-[#DA0D18] ml-4 px-2 py-1 rounded-md"
                    style={{ border: "1px solid #DA0D18 ", color: "#DA0D18", borderRadius: "4px", width: "133px", height: "40px" }}
                >
                    <MenuItem value="Creator">Creator</MenuItem>
                    <MenuItem value="option2">Option 2</MenuItem>
                    <MenuItem value="option3">Option 3</MenuItem>
                </Select>

                <div className='flex items-center'>
                    <div className="relative">
                        <Search fontSize='small' className='absolute left-0 m-3' />
                        <input
                            type="text"
                            placeholder="Type here..."
                            className="border border-gray-300 rounded-2xl pl-10 pr-4 py-2 focus:outline-none focus:border-blue-500 w-40"
                        />
                        <Search fontSize="15px" className='absolute right-0 m-2' />
                    </div>
                    <img className='mx-4' width={18} height={18} src={setting}></img>
                    <img width={18} src={notification}></img>
                    <img className='ml-4 mr-12' width={40} height={40} src={avatar}></img>
                </div>
            </div>
        </div>
    )
}

export default Navbar;