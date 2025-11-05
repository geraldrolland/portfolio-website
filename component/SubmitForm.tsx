

const SubmitForm = () => {
    return (
        <div className="lg:w-[50%]  md:w-[65%] lg:order-2 order-1 max-w-[100%]">
            <p className="text-gray-400 font-thin mb-4">Send Me a Message</p>
            <input className="w-full h-[40px]  shadow-md focus:outline-none  placeholder:text-gray-400 text-gray-600 px-2 rounded-md  placeholder:font-thin " type="text" placeholder="enter email" />
            <textarea className="w-full resize-none mt-4 h-[250px] shadow-md focus:outline-none placeholder:text-gray-400 text-gray-600 px-2 rounded-md  placeholder:font-thin " placeholder="enter message"></textarea>
            <button className="mt-4 w-full h-[40px] bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-all duration-500 ">Submit</button>
        </div>
    )
}

export default SubmitForm