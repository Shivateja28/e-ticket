import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import QRCode from 'react-qr-code';
import icccwc23 from '../Images/ICCCWC23.svg'

function BookTickets() {

    let location = useLocation();

    useEffect(()=>{
        console.log(location.state);
    })
  return (
    <div>
        <svg width="50vw" height="500" viewBox="0 0 337 184" fill="none" xmlns="http://www.w3.org/2000/svg">

            <rect x="19" y="17" width="300" height="150" fill="black"/>
            <rect x="150" y="17" fill="#483285" width="170" height="150"/>
            <ellipse cx="18.5" cy="17.5" rx="18.5" ry="17.5" fill="white"/>
            <ellipse cx="318.5" cy="17.5" rx="18.5" ry="17.5" fill="white"/>
            <ellipse cx="318.5" cy="166.5" rx="18.5" ry="17.5" fill="white"/>
            <ellipse cx="18.5" cy="166.5" rx="18.5" ry="17.5" fill="white"/>
            <QRCode value = {location.state.qrdata} x="40" y="40" size={100} />

            

            <text x="160" y="60" font-size="12" fontWeight={"bold"} fill="white">{location.state.team1} VS {location.state.team2}</text>
            <text x="160" y="75" font-size="8" fontWeight={"bold"} fill="white">MATCH {location.state.matchno} - THURSDAY</text>
            <text x="160" y="87" font-size="8" fontWeight={"bold"} fill="white">19TH OCTOBER 2K23</text>
            <text x="160" y="99" font-size="8" fontWeight={"bold"} fill="white">SEAT - {location.state.seatno}, STAND - {location.state.stand}</text>
            <text x="160" y="111" font-size="8" fontWeight={"bold"} fill="white">{location.state.standname}</text>
            <text x="160" y="123" font-size="8" fontWeight={"bold"} fill="white">{location.state.stadium}</text>


        </svg>

    </div>
  );
}

export default BookTickets;