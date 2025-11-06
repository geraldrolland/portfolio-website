"use client";
import { useState } from "react";
import Loader from "./Loader";
import { useAppStore } from "@/hooks/useAppStore";
import sendIcon from "../public/send-logo.svg";
import Image from "next/image";

const SubmitForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setLoading(false);
    if (res.ok) {
      useAppStore.setState({showNotification: true});
      setFormData({ name: "", email: "", message: "" });
    }
  };
    return (
        <form onSubmit={(e) => {handleSubmit(e)}} className="lg:w-[50%]  md:w-[65%] flex  flex-col gap-y-4 lg:order-2 order-1 w-[100%]">
            <label className="h-[50px] w-[250px] max-w-[100%] mb-6  items-center  rounded-full bg-white shadow-md flex gap-x-6 p-4 block">
                <Image src={sendIcon} width={27} height={27} alt="Send Icon" /><p>Send Me a Message</p>
            </label>
            <input required onChange={(e) => {setFormData({...formData, name: e.target.value})}} value={formData.name} className="w-full h-[40px]  shadow-sm focus:outline-none  placeholder:text-gray-400 text-gray-600 px-2 rounded-md  placeholder:font-thin " type="text" placeholder="enter your full name" />
            <input required onChange={(e) => {setFormData({...formData, email: e.target.value})}} value={formData.email} className="w-full h-[40px]  shadow-sm focus:outline-none  placeholder:text-gray-400 text-gray-600 px-2 rounded-md  placeholder:font-thin " type="email" placeholder="enter your email" />
            <textarea required onChange={(e) => {setFormData({...formData, message: e.target.value})}} value={formData.message} className="w-full resize-none mt-4 h-[250px] shadow-md focus:outline-none placeholder:text-gray-400 text-gray-600 px-2 rounded-md  placeholder:font-thin " placeholder="enter your message"></textarea>
            <button disabled={loading}  className={`mt-4 w-full cursor-pointer flex justify-center items-center h-[40px] ${loading ? 'bg-gray-600' : 'bg-gray-800'} text-white rounded-md hover:bg-gray-700 transition-all duration-500 `}>
                {
                    loading ? <Loader /> : <p>submit</p>
                }
            </button>
        </form>
    )
}

export default SubmitForm