import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { useNavigate } from 'react-router-dom';

const ViewTask = () => {
    const navigate = useNavigate();
    const [tasks, setTask] = useState([]);
    const url = `http://localhost:5000/task`;

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setTask(data));
    }, [url]);

    const handleOnDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `http://localhost:5000/task/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = tasks.filter(task => task._id !== id);
                setTask(remaining);
            })
        }
    };

    return (
        <div>
        <Helmet>
            <title>To-Do App-Task Details</title>
        </Helmet>
            <h1 className='text-[#96be25] text-5xl mb-8 font-bold shadow-lg shadow-black hover:shadow-xl hover:shadow-black mx-[1vw] py-[1vw] rounded-lg'>Task Details</h1>
            <div className="flex flex-col mx-6 ">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 ">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8 ">
                    <div className="overflow-hidden rounded-lg shadow-lg shadow-black hover:shadow-xl hover:shadow-black">
                        <table className="min-w-full ">
                            <thead className="bg-white border-b">
                                <tr>
                                    <th scope="col" className="text-lg font-bold text-gray-900 px-6 py-4 ">
                                        #
                                    </th>
                                    <th scope="col" className="text-lg font-bold text-gray-900 px-6 py-4 ">
                                        Task Name
                                    </th>
                                    <th scope="col" className="text-lg font-bold text-gray-900 px-6 py-4 ">
                                        Task Description
                                    </th>
                                    <th scope="col" className="text-lg font-bold text-gray-900 px-6 py-4 ">
                                        Task Deletion
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                tasks.map((task, index) =>
                                
                                    <tr key={task._id} className="bg-[#96be25] border-b transition duration-300 ease-in-out hover:bg-[#13151a]">
                                        <td className="text-lg text-white font-semibold px-6 py-4 whitespace-nowrap flex justify-center">
                                            {index+1}
                                        </td>
                                        <td className="text-lg text-white font-semibold px-6 py-4 whitespace-nowrap">
                                            {task.name}
                                        </td>
                                        <td className="text-lg text-white font-semibold px-6 py-4 whitespace-nowrap">
                                            {task.description}
                                        </td>
                                        <td className="text-lg text-white font-semibold px-6 py-4 whitespace-nowrap">
                                            <button onClick={()=>handleOnDelete(task._id)} className='rounded-full bg-red-700 text-white py-3 px-4'><FontAwesomeIcon className='text-white' icon={faTrashCan}></FontAwesomeIcon></button>
                                        </td>
                                    </tr>
                                )
                            }
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={()=>navigate('/')} className='text-xl text-white bg-red-600 hover:bg-red-900 py-2 px-16 my-10 rounded-lg'>Back to the Home Page</button>
        </div>
    );
};

export default ViewTask;