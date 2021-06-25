import React, { useState } from 'react';

const Contact = () => {
  const [data, setData] = useState({
    Fullname: '',
    email: '',
    phone: '',
    msg: '',
  });

  const InputEvent = e => {
    const { name, value } = e.target;
    console.log(e.target.value);
    setData(preVal => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const Submitform = e => {
    e.preventDefault();
    console.log(setData);
    alert(
      `My fullname is : ${data.Fullname} email address:  ${data.email} Contact Details : ${data.phone} Message : ${data.msg}`
    );
  };
  return (
    <>
      <div className='my-5'>
        <h1 className='text-center'> Contact Us</h1>
      </div>
      <div className='container contact_div'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>
            <form onSubmit={Submitform}>
              <div className='mb-3'>
                <label className='form-label'>Full Name</label>
                <input
                  type='text'
                  className='form-control'
                  id='exampleFormControlInput1'
                  name='Fullname'
                  value={data.Fullname}
                  onChange={InputEvent}
                  placeholder='Enter your name'
                />
              </div>
              <div className='mb-3'>
                <label className='form-label'>Email address</label>
                <input
                  type='email'
                  className='form-control'
                  id='exampleFormControlInput1'
                  name='email'
                  value={data.email}
                  onChange={InputEvent}
                  placeholder='name@example.com'
                />
              </div>
              <div className='mb-3'>
                <label className='form-label'>Contact No</label>
                <input
                  type='number'
                  className='form-control'
                  id='exampleFormControlInput1'
                  name='phone'
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder='Enter Mobile no'
                />
              </div>
              <div className='mb-3'>
                <label className='form-label'>Message</label>
                <textarea
                  className='form-control'
                  id='exampleFormControlTextarea1'
                  rows='3'
                  name='msg'
                  value={data.msg}
                  onChange={InputEvent}
                ></textarea>
              </div>
              <div className='col-auto'>
                <button type='submit' className='btn btn-outline-primary mb-3'>
                  Submit Form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
