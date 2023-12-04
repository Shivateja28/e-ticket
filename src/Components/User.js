import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import { buyTicket, getPrice, setMatch, setStand, userAccounts } from '../Contract';

function User() {

    let [formStep, setFormStep] = useState(0);

    const {register, handleSubmit, formState: {errors}} = useForm()

    const onFormSubmit=async(userObj)=>{
        let account, price;
        await userAccounts().then(j=>account = j);
        await getPrice(parseInt(userObj.MatchNo), parseInt(userObj.StandNo), account[0]).then(j => price = j);
        console.log(account, "price", parseInt(price), price);
        console.log("Book", parseInt(userObj.MatchNo), parseInt(userObj.StandNo), account[0])
        buyTicket(parseInt(userObj.MatchNo), parseInt(userObj.StandNo), account[0], parseInt(price));
        alert("Ticket Booked Successfully")
    }

    return (
        <div>
            {
                formStep == 0 &&
                <div>
            <div className='row'>
                        <div className="bgcolor mx-auto m-5 w-md-50 border rounded" style = {{width : "1000px"}}>
                        <div className="card-body text-light">
                            <form onSubmit={handleSubmit(onFormSubmit)} className ='w-75 mx-auto m-5 p-2 pt-5 pb-5 '>
                            <p className='h1 text-light text-center'>Sign Up</p>

                                <label htmlFor="MatchNo" className= "h3 mt-4">MatchNo</label>
                                <input type = "text" id = "MatchNo" className="form-control" {...register("MatchNo", {required: true})} />
                                {errors.MatchNo?.type === 'required' && <p>*MatchNo Required</p>}

                                <label htmlFor="StandNo" className= "h3 mt-4">StandNo</label>
                                <input type = "text" id = "StandNo" className="form-control" {...register("StandNo", {required: true})} />
                                {errors.StandNo?.type === 'required' && <p>*StandNo Required</p>}


                                <div className='text-center'>
                                    <button type = "Submit" className='bg-dark text-light p-2 mt-5 ms-0 w-50'>Submit</button>
                                </div>
                            </form>
                        </div>
                        
                    </div>
            </div>
        </div>
            }
            <div>
            </div>
        </div>
    )
}

export default User;


   