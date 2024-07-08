import React  from 'react';
import '../index.css'
import axios from "axios"
import {useState} from "react"
import {useNavigate} from 'react-router-dom'

export default function Login(){
    const history=useNavigate()
    const [formdata,setForm]=useState({
        email:"",
        password:""
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...formdata, [name]: value });
    };
    
    const HandleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/users/login/', formdata);
            console.log('Login successful!', response.data);
            alert('Login successful!');
            history ("/home", { state: { id: formdata.email } });
        } catch (err) {
            console.log(err)
            alert( 'Login failed');
        }
    };
    return(
        <form className="max-w-lg mx-auto p-8 bg-white shadow-md rounded-lg m-10 border border-blue-200"   onSubmit={HandleSubmit}  >
        <div className="mb-4">
        <h1 className="font-bold text-2xl mb-6 text-center">Login</h1>
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">UserName:</label>
            <input 
            className="border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:border-blue-500"
            type="email" id="email" name="email" value={formdata.email} onChange={handleChange} placeholder="Enter UserName"/><br/>
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password:</label>
            <input
            className="border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:border-blue-500" 
            type="password" id="password" name="password" value={formdata.password} onChange={handleChange} placeholder="Enter password"/>
            <br/><br/>
            
            <button  type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg w-full hover:bg-blue-700 transition duration-200">Login</button>
            
        </div>
        </form>
    )
}