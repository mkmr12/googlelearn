import React, { useEffect, useState } from "react";
import './span.css'
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch, { SwitchProps } from '@mui/material/Switch';
const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
                opacity: 1,
                border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
            },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
            color:
                theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[600],
        },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 22,
        height: 22,
    },
    '& .MuiSwitch-track': {
        borderRadius: 26 / 2,
        backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
            duration: 500,
        }),
    },
}));
export default function Drumber() {
    const [onOff,setOnOff] = useState(true)
    let Heater1 = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3")
    let Heater2 = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3")
    let Heater3 = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3")
    let Heater4 = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3")
    let Heater5 = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3")
    let Heater6 = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3")
    let Heater7 = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3")
    let Heater8 = new Audio("https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3")
    let Heater9 = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3")
    window.onkeydown = (e) => {
        checkKey(e.key)
    }

    const checkKey = (e) => {
        if(onOff){
            switch (e) {
                case 'q': console.log(e); Heater1.play(); break;
                case 'w': console.log(e); Heater2.play(); break;
                case 'e': console.log(e); Heater3.play(); break;
                case 'a': console.log(e); Heater4.play(); break;
                case 's': console.log(e); Heater5.play(); break;
                case 'd': console.log(e); Heater6.play(); break;
                case 'z': console.log(e); Heater7.play(); break;
                case 'x': console.log(e); Heater8.play(); break;
                case 'c': console.log(e); Heater9.play(); break;
            }    
        } 
     

    }

    return (

        <div className="d-flex justify-content-center row mt-5">
            <div style={
                {
                    border: '3px solid goldenrod', width: '50%'
                }
            } className='d-flex'>
                <div className="col-8 ">
                    <div> <div className='btn' onClick={() => { checkKey('q') }}>Q</div>
                        <div className='btn ' onClick={() => { checkKey('w') }}>W</div>
                        <div className='btn' onClick={() => { checkKey('e') }}>E</div>
                    </div>
                    <div> <div className='btn' onClick={() => { checkKey('a') }}>A</div>
                        <div className='btn' onClick={() => { checkKey('s') }}>S</div>
                        <div className='btn' onClick={() => { checkKey('d') }} >D</div>
                    </div>
                    <div> <div className='btn' onClick={() => { checkKey('z') }}>Z</div>
                        <div className='btn' onClick={() => { checkKey('x') }}>X</div>
                        <div className='btn' onClick={() => { checkKey('c') }}>C</div>
                    </div>
                </div>
                <div className="col-4 d-flex justify-content-center">

                    <div style={{ height: 100 }} className='mt-5'>
                        <FormControlLabel
                            control={<IOSSwitch checked={onOff} onClick={()=>{
                                setOnOff(!onOff)
                            }}/>}
                            label="Turn ON or OFF"
                            labelPlacement="top"
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

