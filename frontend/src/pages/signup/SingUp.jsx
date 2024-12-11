import React, { useState } from "react";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

function SignUp() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Handle form submission, e.g., send to server
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            {/* Container for both image and form */}
            <div className="flex w-full max-w-4xl bg-white rounded-lg shadow-md overflow-hidden">
                {/* Left Side (Image) */}
                <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: 'url("https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?t=st=1733829408~exp=1733833008~hmac=9cbb9c630f734649685bac9d1600b6c909e2bf0f8a74694f9997168bfa445dd1&w=740")' }}>
                    {/* You can adjust this to your needs */}
                </div>

                {/* Right Side (Form) */}   
                <div className="w-1/2 p-8">
                    <form onSubmit={handleSubmit} className="w-full">
                        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-semibold mb-">Name</label>
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full p-3 border border-gray-300 rounded-md"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-semibold mb-">Email</label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full p-3 border border-gray-300 rounded-md"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="phone" className="block text-sm font-semibold mb-">Phone Number</label>
                            <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="w-full p-3 border border-gray-300 rounded-md"
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="password" className="block text-sm font-semibold mb-">Password</label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                className="w-full p-3 border border-gray-300 rounded-md"
                            />
                        </div>

                        <div className="py-">
                            <Button type="submit" className="px-8 py-4  rounded-lg hover:bg-gray-800">
                            Sign Up
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
