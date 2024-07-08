import React, { useState } from 'react';
import axios from "axios";
import '../index.css';

export default function Register() {
    const [formdata, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [res, setRes] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...formdata, [name]: value });
    }

    const HandleSubmit = async (e) => {
        e.preventDefault(); // Prevent default submission
        try {
            const response = await axios.post("http://localhost:3001/users/register/", formdata);
            console.log("Form data successfully submitted!!", response.data);
            setRes("Register Successful!! ");
            alert("Register Successful!! ");
            setForm({
                name: "",
                email: "",
                password: ""
            });
        } catch (err) {
            console.log(err);
            setRes("Registration Failed ");
            alert("Register Failed!! ");
        }
    }

    return (
        <form className="max-w-lg mx-auto p-8 bg-white shadow-md rounded-lg m-10 border border-blue-200" onSubmit={HandleSubmit} method="post">
            {res && <p className="text-red-500 mb-4">{res}</p>}
            <h1 className="font-bold text-2xl mb-6 text-center">Register</h1>
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
                <input
                    className="border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:border-blue-500"
                    id="name"
                    name="name"
                    type="text"
                    value={formdata.name}
                    onChange={handleChange}
                    placeholder="Enter Name"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
                <input
                    className="border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:border-blue-500"
                    id="email"
                    name="email"
                    type="email"
                    value={formdata.email}
                    onChange={handleChange}
                    placeholder="Enter Email"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password:</label>
                <input
                    className="border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:border-blue-500"
                    id="password"
                    name="password"
                    type="password"
                    value={formdata.password}
                    onChange={handleChange}
                    placeholder="Enter Password"
                />
            </div>
            <button
                type="submit"
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg w-full hover:bg-blue-700 transition duration-200"
            >
                Submit
            </button>
            <p className="text-center text-gray-600 mt-4">{res}</p>
        </form>
    )
}
