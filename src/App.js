import './App.css';
import {useEffect, useState} from 'react'
import configuration from './Tickets.json'
import { buyTicket, contract, EMPTY_ADDRESS, getFilledCount, getPrice, getTotalTickets, setMatch, setStand, userAccounts, Web3 } from './Contract';
import Admin from './Components/Admin';
import User from './Components/User';
import Home from './Components/Home';
import Match from './Components/Match';
import {Route, Routes, Link} from 'react-router-dom'
import BookTickets from './Components/BookTickets';


function App() {

  let [account, setAccount] = useState(EMPTY_ADDRESS);

  useEffect(() => {
  
    userAccounts().then(j=>setAccount(j));
  }, [])

  return (
    <div >
      {/* <Home/> */}
      {/* <User/>
      <Admin/> */}
      {/* <svg width="500" height="500" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_102_3)">
<rect width="200" height="200" fill="white"/>
<circle cx="100" cy="100" r="100" fill="white"/>
<circle cx="100" cy="100" r="50" fill="#008000"/>
<rect x="95" y="85" width="10" height="30" fill="white"/>
<mask id="path-4-inside-1_102_3" fill="white">
<path d="M152.901 27.1885C164.391 35.5368 173.743 46.486 180.191 59.1409C186.639 71.7958 190 85.7971 190 100C190 114.203 186.639 128.204 180.191 140.859C173.743 153.514 164.391 164.463 152.901 172.812L141.421 157.011C150.418 150.474 157.74 141.901 162.789 131.992C167.837 122.084 170.469 111.121 170.469 100C170.469 88.8792 167.837 77.9163 162.789 68.0076C157.74 58.0989 150.418 49.5258 141.421 42.9891L152.901 27.1885Z"/>
</mask>
<path d="M152.901 27.1885C164.391 35.5368 173.743 46.486 180.191 59.1409C186.639 71.7958 190 85.7971 190 100C190 114.203 186.639 128.204 180.191 140.859C173.743 153.514 164.391 164.463 152.901 172.812L141.421 157.011C150.418 150.474 157.74 141.901 162.789 131.992C167.837 122.084 170.469 111.121 170.469 100C170.469 88.8792 167.837 77.9163 162.789 68.0076C157.74 58.0989 150.418 49.5258 141.421 42.9891L152.901 27.1885Z" className = "Stand Stand4" fill="#FFEC51" stroke="white" stroke-width="2" mask="url(#path-4-inside-1_102_3)"/>
<mask id="path-5-inside-2_102_3" fill="white">
<path d="M141.145 43.3688C150.082 49.8619 157.355 58.378 162.37 68.2207C167.386 78.0634 170 88.9533 170 100C170 111.047 167.386 121.937 162.37 131.779C157.355 141.622 150.082 150.138 141.145 156.631L130.197 141.563C136.756 136.798 142.095 130.548 145.775 123.324C149.456 116.1 151.375 108.107 151.375 100C151.375 91.8925 149.456 83.9002 145.775 76.6763C142.095 69.4525 136.756 63.2024 130.197 58.4369L141.145 43.3688Z"/>
</mask>
<path d="M141.145 43.3688C150.082 49.8619 157.355 58.378 162.37 68.2207C167.386 78.0634 170 88.9533 170 100C170 111.047 167.386 121.937 162.37 131.779C157.355 141.622 150.082 150.138 141.145 156.631L130.197 141.563C136.756 136.798 142.095 130.548 145.775 123.324C149.456 116.1 151.375 108.107 151.375 100C151.375 91.8925 149.456 83.9002 145.775 76.6763C142.095 69.4525 136.756 63.2024 130.197 58.4369L141.145 43.3688Z" fill="#2EC4B6" className = "Stand Stand1" stroke="white" stroke-width="2" mask="url(#path-5-inside-2_102_3)"/>
<mask id="path-6-inside-3_102_3" fill="white">
<path d="M47.0993 27.1885C35.6089 35.5368 26.2574 46.486 19.8094 59.1409C13.3614 71.7958 9.99999 85.7971 10 100C10 114.203 13.3614 128.204 19.8094 140.859C26.2574 153.514 35.6089 164.463 47.0994 172.812L69.9979 141.294C63.4812 136.56 58.1776 130.35 54.5206 123.173C50.8637 115.996 48.9573 108.055 48.9573 100C48.9573 91.9449 50.8637 84.0042 54.5206 76.8271C58.1775 69.65 63.4811 63.4402 69.9978 58.7056L47.0993 27.1885Z"/>
</mask>
<path d="M47.0993 27.1885C35.6089 35.5368 26.2574 46.486 19.8094 59.1409C13.3614 71.7958 9.99999 85.7971 10 100C10 114.203 13.3614 128.204 19.8094 140.859C26.2574 153.514 35.6089 164.463 47.0994 172.812L69.9979 141.294C63.4812 136.56 58.1776 130.35 54.5206 123.173C50.8637 115.996 48.9573 108.055 48.9573 100C48.9573 91.9449 50.8637 84.0042 54.5206 76.8271C58.1775 69.65 63.4811 63.4402 69.9978 58.7056L47.0993 27.1885Z" fill="#D81159" className = "Stand Stand5" stroke="white" stroke-width="2" mask="url(#path-6-inside-3_102_3)"/>
<path d="M64.7466 49.2366C75.1167 42.0039 87.4365 38.0865 100.079 38.0014C112.722 37.9163 125.094 41.6676 135.56 48.76L129.317 57.9733C120.714 52.1439 110.546 49.0605 100.154 49.1305C89.7627 49.2004 79.6367 52.4203 71.1131 58.365L64.7466 49.2366Z" fill="#111D4A" className='Stand Stand2'/>
<path d="M56.0674 37.002C68.9471 27.9895 84.263 23.1067 99.9825 23.0017C115.702 22.8968 131.082 27.5746 144.081 36.4143L136.321 47.8254C125.636 40.5596 112.995 36.7147 100.075 36.801C87.1542 36.8873 74.5654 40.9006 63.979 48.3084L56.0674 37.002Z" fill="#058ED9" className = "Stand Stand6"/>
<path d="M45.5357 22.1627C61.4976 10.9938 80.5074 5.00229 99.9889 5C119.47 4.99772 138.481 10.9848 154.446 22.15L144.751 36.0119C131.63 26.8348 116.003 21.9137 99.9908 21.9156C83.9782 21.9175 68.3533 26.8422 55.2336 36.0224L45.5357 22.1627Z" fill="#5F4BB6" className='Stand Stand8'/>
<path d="M64.7466 150.763C75.1167 157.996 87.4365 161.914 100.079 161.999C112.722 162.084 125.094 158.332 135.56 151.24L129.317 142.027C120.714 147.856 110.546 150.939 100.154 150.87C89.7627 150.8 79.6367 147.58 71.1131 141.635L64.7466 150.763Z" fill="#780116" className='Stand Stand3'/>
<path d="M56.0674 162.998C68.9471 172.011 84.263 176.893 99.9825 176.998C115.702 177.103 131.082 172.425 144.081 163.586L136.321 152.175C125.636 159.44 112.995 163.285 100.075 163.199C87.1542 163.113 74.5654 159.099 63.979 151.692L56.0674 162.998Z" fill="#5C5346" className='Stand Stand7'/>
<path d="M45.5357 177.837C61.4976 189.006 80.5074 194.998 99.9889 195C119.47 195.002 138.481 189.015 154.446 177.85L144.751 163.988C131.63 173.165 116.003 178.086 99.9908 178.084C83.9782 178.083 68.3533 173.158 55.2336 163.978L45.5357 177.837Z" fill="#FA7E61" className='Stand Stand9'/>
</g>
<defs>
<clipPath id="clip0_102_3">
<rect width="200" height="200" fill="white"/>
</clipPath>
</defs>
</svg> */}
{/* 
      <button onClick={()=>getPrice(2, 0, account[0])}> PRice</button>
      <button onClick={()=>getTotalTickets(2, 0, account[0])}>Gt TOtal tickerts</button>
      <button onClick={()=>getFilledCount(2,0,account[0])}>Get Filled Count</button> */}
    

      <Routes>
        <Route path = "/" element={<Admin/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/booktickets" element={<BookTickets/>}></Route>
        <Route path="/match" element={<Match/>}></Route>


      </Routes> 
    
    </div>
  );
}

export default App;