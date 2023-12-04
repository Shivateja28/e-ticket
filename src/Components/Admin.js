import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import { getPrice, setMatch, setStand, userAccounts } from '../Contract';

function Admin() {

    let [formStep, setFormStep] = useState(0);

    const {register, handleSubmit, formState: {errors}} = useForm()

    const onFormSubmit=async(userObj)=>{
        let account;
        await userAccounts().then(j=>account = j);
        console.log(account);
        console.log("FIRST", parseInt(userObj.MatchNo), userObj.Team1, userObj.Team2, userObj.Stadium, account[0])
        setMatch(parseInt(userObj.MatchNo), userObj.Team1, userObj.Stadium, userObj.Team2, account[0]);
        setFormStep(1)
    }

    const onFormSubmit2=async(userObj)=>{
        let account;
        await userAccounts().then(j=>account = j);
        console.log(account, typeof(2), typeof(parseInt(userObj.Price)), parseInt(userObj.MatchNo), parseInt(userObj.StandNo), parseInt(userObj.NoOfTickets), parseInt(userObj.Price), account[0]);
        setStand(parseInt(userObj.MatchNo), parseInt(userObj.StandNo), parseInt(userObj.NoOfTickets), parseInt(userObj.Price), account[0])
        getPrice(1,0,account[0])
        setFormStep(1)
    }


    return (
        <div>
            {
                formStep == 0 ? 
                <div>
            <div className='row'>
                        <div className="bgcolor mx-auto m-5 w-md-50 border rounded" style = {{width : "1000px"}}>
                        <div className="card-body text-light">
                            <form onSubmit={handleSubmit(onFormSubmit)} className ='w-75 mx-auto m-5 p-2 pt-5 pb-5 '>
                            <p className='h1 text-light text-center'>Sign Up</p>

                                <label htmlFor="MatchNo" className= "h3 mt-4">MatchNo</label>
                                <input type = "text" id = "MatchNo" className="form-control" {...register("MatchNo", {required: true})} />
                                {errors.MatchNo?.type === 'required' && <p>*MatchNo Required</p>}

                                <label htmlFor="Team1" className= "h3">Team1</label>
                                <input type = "text" id = "Team1" className="form-control" {...register("Team1", {required: true})} />
                                {errors.Team1?.type === 'required' && <p>*Team1 Required</p>}

                                <label htmlFor="Team2" className= "h3">Team2</label>
                                <input type = "text" id = "Team2" className="form-control" {...register("Team2", {required: true})} />
                                {errors.Team2?.type === 'required' && <p>*Team2 Required</p>}


                                <label htmlFor='Stadium' className='h3'>Stadium</label>
                                <input type="text" id = 'Stadium' className='form-control' {...register("Stadium", {required: true})}/>
                                {errors.Stadium?.type === 'required' && <p>*Stadium Required</p>}


                                <div className='text-center'>
                                    <button type = "Submit" className='bg-dark text-light p-2 mt-5 ms-0 w-50'>Submit</button>
                                </div>
                            </form>
                        </div>
                        
                    </div>
            </div>
        </div>

                :    
                <div className='row'>
                        <div className="bgcolor mx-auto m-5 w-md-50 border rounded" style = {{width : "1000px"}}>
                        <div className="card-body text-light">
                            <form onSubmit={handleSubmit(onFormSubmit2)} className ='w-75 mx-auto m-5 p-2 pt-5 pb-5 '>
                            <p className='h1 text-light text-center'>Sign Up</p>

                                <label htmlFor="MatchNo" className= "h3 mt-4">MatchNo</label>
                                <input type = "text" id = "MatchNo" className="form-control" {...register("MatchNo", {required: true})} />
                                {errors.MatchNo?.type === 'required' && <p>*MatchNo Required</p>}

                                <label htmlFor="StandNo" className= "h3">StandNo</label>
                                <input type = "text" id = "StandNo" className="form-control" {...register("StandNo", {required: true})} />
                                {errors.StandNo?.type === 'required' && <p>*StandNo Required</p>}

                                <label htmlFor="NoOfTickets" className= "h3">NoOfTickets</label>
                                <input type = "text" id = "NoOfTickets" className="form-control" {...register("NoOfTickets", {required: true})} />
                                {errors.NoOfTickets?.type === 'required' && <p>*NoOfTickets Required</p>}


                                <label htmlFor='Price' className='h3'>Price</label>
                                <input type="text" id = 'Price' className='form-control' {...register("Price", {required: true})}/>
                                {errors.Price?.type === 'required' && <p>*Price Required</p>}


                                <div className='text-center'>
                                    <button type = "Submit" className='bg-dark text-light p-2 mt-5 ms-0 w-50'>Submit</button>
                                </div>
                            </form>
                        </div>
                        
                    </div>
            </div>
            }
            <div>
            </div>
        </div>
    )
}

export default Admin;


   