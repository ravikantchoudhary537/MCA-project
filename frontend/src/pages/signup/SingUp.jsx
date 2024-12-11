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
    
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
    });

    const fields = [
        { label: "Name", name: "name", type: "text", placeholder: "Enter your name" },
        { label: "Email", name: "email", type: "email", placeholder: "Enter your email" },
        { label: "Phone Number", name: "phone", type: "tel", placeholder: "Enter your phone number" },
        { label: "Password", name: "password", type: "password", placeholder: "Enter your password" },
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        // Clear error when user starts typing again
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: "",
        }));
    };

    const validate = () => {
        let isValid = true;
        let newErrors = { name: "", email: "", phone: "", password: "" };

        const nameRegex = /^[A-Za-z\s-'.,]+$/;
        if (!formData.name.trim()) {
            newErrors.name = "Name is required.";
            isValid = false;
        } else if (!nameRegex.test(formData.name)) {
            newErrors.name = "Name can only contain letters.";
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
            isValid = false;
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Please enter a valid email.";
            isValid = false;
        }

        const phoneRegex = /^[0-9]{10}$/;
        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required.";
            isValid = false;
        } else if (!phoneRegex.test(formData.phone)) {
            newErrors.phone = "Please enter a valid 10-digit phone number.";
            isValid = false;
        }

        if (!formData.password.trim()) {
            newErrors.password = "Password is required.";
            isValid = false;
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters long.";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            console.log(formData);
            // Handle form submission (e.g., send to server)
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="flex w-full max-w-4xl bg-white rounded-lg shadow-md overflow-hidden">
                {/* Left Side (Image) */}
                <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: 'url("https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?t=st=1733829408~exp=1733833008~hmac=9cbb9c630f734649685bac9d1600b6c909e2bf0f8a74694f9997168bfa445dd1&w=740")' }}></div>

                {/* Right Side (Form) */}
                <div className="w-1/2 p-8">
                    <form onSubmit={handleSubmit} className="w-full">
                        <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>

                        {fields.map((field) => (
                            <div className="mb-4" key={field.name}>
                                <label htmlFor={field.name} className="block text-sm font-semibold mb-1">
                                    {field.label}
                                </label>
                                <Input
                                    id={field.name}
                                    name={field.name}
                                    type={field.type}
                                    value={formData[field.name]}
                                    onChange={handleInputChange}
                                    placeholder={field.placeholder}
                                    className="w-full p-3 border border-gray-300 rounded-md"
                                />
                                {errors[field.name] && <p className="text-blue-500 text-xs mt-1">{errors[field.name]}</p>}
                            </div>
                        ))}

                        <div>
                            <Button type="submit" className="px-8 py-4 rounded-lg">
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
