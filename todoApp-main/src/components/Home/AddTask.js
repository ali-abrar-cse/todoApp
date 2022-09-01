import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const AddTask = () => {
    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const navigate = useNavigate();
    const [close, setClose] =useState(true);
    const handleComplete = () => {
        setClose(false);
        alert(`Successfully Completed...!!!!`);
    };
    const handleClose = () =>{
        setClose(true);
    }

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    

    const { register, handleSubmit } = useForm();
    const onSubmit = () => {
        const data = {
            "name": nameRef.current.value,
            "description": descriptionRef.current.value,
        };
        console.log(data);
        const url = `http://localhost:5000/task`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result =>{
            console.log(result);
        } );
        setName(nameRef.current.value);
        setDescription(descriptionRef.current.value);
        alert('The new task is successfully added.');
    };
    return (
        <div className=''>
            {
                close ? <></>
                : <div className="alert bg-yellow-100 rounded-lg py-5 px-6 mb-3 text-base text-yellow-700 inline-flex items-center w-full alert-dismissible fade show" role="alert">
                <p className='line-through'><strong className="mr-1">{name} </strong> {description}</p>
                <button onClick={handleClose} type="button" className="btn-close box-content w-4 h-4 p-1 ml-auto text-yellow-900 border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-yellow-900 hover:opacity-75 hover:no-underline" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            }
            <h1 className='text-[#96be25] text-5xl mb-8 font-bold shadow-lg shadow-black hover:shadow-xl hover:shadow-black mx-[1vw] py-[1vw] rounded-lg my-6'>Task Insertion</h1>
            <div className='flex justify-center my-20'>
                <div className="block p-6 rounded-xl shadow-lg shadow-black hover:shadow-xl hover:shadow-black bg-white w-full mx-4 md:mx-20">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <p className='text-2xl font-semibold mb-4 text-[#96be25]'>Add New Task</p>
                        <div className='md:flex justify-center'>
                                <div className="form-group mb-6 w-full">
                                    <input type="text" className="form-control block
                                        w-full
                                        px-3
                                        py-1.5
                                        text-base
                                        font-normal
                                        text-gray-700
                                        bg-white bg-clip-padding
                                        border-4 border-solid border-[#96be25]
                                        shadow-lg shadow-white hover:shadow-xl hover:shadow-white
                                        rounded-xl
                                        transition
                                        ease-in-out
                                        m-0
                                        focus:text-gray-700 focus:bg-white focus:border-[#96be25] focus:outline-none" id="exampleInput7"
                                        placeholder="Task Name" {...register("name")} ref={nameRef} required/>
                                </div>
                            </div>
                            <div className="form-group mb-6 w-full">
                                    <input type="text" className="form-control block
                                        w-full
                                        px-3
                                        py-1.5
                                        text-base
                                        font-normal
                                        text-gray-700
                                        bg-white bg-clip-padding
                                        border-4 border-solid border-[#96be25]
                                        shadow-lg shadow-white hover:shadow-xl hover:shadow-white
                                        rounded-xl
                                        transition
                                        ease-in-out
                                        m-0
                                        focus:text-gray-700 focus:bg-white focus:border-[#96be25] focus:outline-none" id="exampleInput9"
                                        placeholder="Task Description" {...register("description")} ref={descriptionRef} required/>
                                </div>
                            <div className="form-group form-check text-center mb-6">
                            <input type="checkbox"
                                className="form-check-input appearance-none h-4 w-4 border border-black rounded-sm bg-white checked:bg-[#96be25] checked:border-[#96be25] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                                id="exampleCheck87"/>
                            <label className="form-check-label inline-block text-[#96be25]" htmlFor="exampleCheck87">Send me a copy of this message</label>
                            </div>
                            <button type="submit" className="
                            w-full
                            px-6
                            py-2.5
                            bg-[#96be25]
                            text-white
                            font-medium
                            text-xs
                            leading-tight
                            uppercase
                            rounded-xl
                            hover:bg-[#607c10]
                            focus:bg-[#57720c] focus:shadow-lg focus:outline-none focus:ring-0
                            active:bg-[#354704] active:shadow-lg
                            shadow-lg shadow-white hover:shadow-xl hover:shadow-white
                            transition
                            duration-150
                            ease-in-out">Add Task</button>
                        </form>
                    </div>                
                </div>
                <div className='md:flex justify-around items-center'>
                <button onClick={()=>navigate('/ViewTask')} className='text-xl text-white bg-[#96be25] hover:bg-[#374904] py-2 px-16 mb-10 rounded-lg'>View Task Details</button>
                <button onClick={handleComplete} className='text-xl text-white bg-red-600 hover:bg-red-900 py-2 px-28 mb-10 rounded-lg'>Complete</button>
            </div>
            </div>
    );
};

export default AddTask;