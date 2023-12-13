
const FormInput = ({ name, inputName, data, setdata, placeholder, type = 'text', inputIndex }) => {
    return (
        <div className="sm:flex items-center mb-4 md:mb-8" >
            <p className="font-semibold text-sm md:text-base mr-7 mb-1 sm:mb-0 min-w-fit sm:min-w-[10rem] min-[1293px]:text-right" >{name} :</p>
            <input className='text-black overflow-hidden w-[90%] sm:w-[20rem] lg:w-[30rem] outline-none h-10 rounded-xl px-2' name={inputName} value={data} onChange={(e) => inputIndex === undefined ? setdata(e) : setdata(inputIndex, inputName, e.target.value)} placeholder={placeholder} type={type} />
        </div>
    )
}

export default FormInput