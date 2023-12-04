import Web3 from 'web3';
import configuration from './Tickets.json'
import { useState } from 'react';

const CONTRACT_ADDRESS =  configuration.networks['5777'].address;
const CONTRACT_ABI = configuration.abi;

export const web3 = new Web3(Web3.givenProvider || 'http://127.0.0.1:7545');

export const contract = new web3.eth.Contract(CONTRACT_ABI,CONTRACT_ADDRESS);

export const EMPTY_ADDRESS = '0x0000000000000000000000000000000000000000';

let ticketPrice, totalTickets, filledCount;

export const userAccounts = async()=>{
    let accounts;
    try{
        await window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then((j)=>{ 
            accounts = j
        })
        .catch((error) => {
            if (error.code === 4001) {
            console.log('Please connect to MetaMask.');
            } else {
            console.error(error);
            }
        }
        );
    }
    catch(err){
        alert("Please Connect To MetaMask")
    }
    return accounts;
}

export const setMatch = async(matchNO, team1, team2, stadium, account)=>{
    console.log("Before: Set Match",matchNO, team1, team2, stadium, account)
    await contract.methods.setMatch(matchNO, team1, team2, stadium).send({from: account, gas: 6721975 })
    console.log("After: Set Match",matchNO, team1, team2, stadium, account)
}

export const setStand = async(matchNO, standNo, noOfTickets, price, account)=>{
    console.log("Before: Set Stand",matchNO, standNo, noOfTickets, price, account)
    await contract.methods.setStand(matchNO, standNo, noOfTickets, 7800000000000*parseInt(price)).send({from: account, gas: 6721975 }).then(console.log).catch((e)=>console.log(e))
    console.log("After: Set Stand",matchNO, standNo, noOfTickets, price, account)
}

export const buyTicket = async(matchNO, standNo, account, _value)=>{
    console.log(account[0],"Before: Buyticket", _value,7800000000000*parseInt(_value));
    await contract.methods.buyTicket(matchNO, standNo).send({from:account, value:7800000000000*parseInt(_value), gasPrice: 6721975})
    console.log(account, "After: Buyticket");
    return "Booked Sucessfully"
}

export const getPrice = async(matchNO, standNo, account)=>{
    // console.log(account[0],"Before: RS");
    await contract.methods.getPrice(matchNO, standNo).call().then(j=>ticketPrice = j);
    // console.log(account, "After: RS");
    return ticketPrice;
}

export const getTotalTickets = async(matchNO, standNo, account)=>{
    console.log("Gettotaltickets")
    await contract.methods.getTotalTickets(matchNO, standNo).call().then(j=>totalTickets = j);
    return totalTickets;
}

export const getFilledCount = async(matchNo, standNo, account)=>{
    console.log("Filled Tickets")
    await contract.methods.getFilledCount(matchNo,standNo).call().then(j=>filledCount = j);
    return filledCount;
}

export const getMatch = async(matchNo)=>{
    console.log("Match")
    let Match;
    await contract.methods.getMatch(matchNo).call().then(j=>Match = j);
    return Match;
}