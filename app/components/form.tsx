import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Select from 'react-select';
import dropdownArrow from '../assets/Vector.png';
import call from '../assets/Group 5.svg'

// Define language options for the Select component
const languageOptions = [
  { value: 'english', label: 'English' },
  { value: 'spanish', label: 'Spanish' },
  { value: 'french', label: 'French' },
  { value: 'german', label: 'German' },
  // Add more languages as needed
];

// Custom styles for the Select component
const customStyles = {
  control: (provided: any) => ({
    ...provided,
    backgroundColor: 'transparent',
    borderColor: '#000000',
    borderWidth: '0.5px',
    height: '40px',
    minHeight: '40px',
    boxShadow: 'none',
    '&:hover': {
      borderColor: '#000000',
    },
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: '#999999',
  }),
  placeholder: (provided: any) => ({
    ...provided,
    color: '#999999',
  }),
  input: (provided: any) => ({
    ...provided,
    color: '#999999',
  }),
};

// Custom dropdown indicator component for the Select component
const DropdownIndicator = () => {
  return (
    <img src={dropdownArrow.src} alt="Dropdown Indicator" className="h-[2.71px] w-[5.83px]" />
  );
};

// Form component
const Form: React.FC = () => {
  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    language: ''
  });

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle phone number change
  const handlePhoneChange = (value: string) => {
    setFormData(prevState => ({
      ...prevState,
      phone: value
    }));
  };

  // Handle language change
  const handleLanguageChange = (selectedOption: any) => {
    setFormData(prevState => ({
      ...prevState,
      language: selectedOption ? selectedOption.value : ''
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className='flex justify-center items-center pt-[20px]'>
      {/* Form */}
      <form className='w-full pl-[17px]' onSubmit={handleSubmit}>
        
        {/* Name input */}
        <div className='mb-4'>
          <input
            type='text'
            name='name'
            id='name'
            value={formData.name}
            onChange={handleChange}
            className='h-[40px] !bg-transparent appearance-none border-[0.5px] border-[#000000] rounded w-[279px] py-2 px-3 text-[#999999] placeholder-[#999999]'
            placeholder='Name'
          />
        </div>
        
        {/* Phone input */}
        <div className='mb-4'>
          <PhoneInput
            country={'in'}
            value={formData.phone}
            onChange={handlePhoneChange}
            inputClass='!bg-transparent !w-[279px] !h-[40px] !border-[#000000] !rounded !text-[#999999] !placeholder-[#999999] !pl-[40px]' 
            buttonStyle={{ background: 'transparent', border: 'none' }}
            dropdownStyle={{ background: 'white' }}
            inputStyle={{ width: 'calc(100% - 58px)' }} 
            containerClass='!w-[279px]'
          />
        </div>
        
        {/* Language dropdown */}
        <div className='mb-6'>
          <Select
            options={languageOptions}
            onChange={handleLanguageChange}
            placeholder="Choose your language"
            styles={customStyles}
            className='!w-[279px]'
            classNamePrefix="select"
            components={{ DropdownIndicator }}
          />
        </div>
        
        {/* Call button */}
        <div>
          <button
            type='submit'
            className=' relative'
          >
            <img src={call.src} alt="call" className='pl-[102px] pt-[70px]'/>
            
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
