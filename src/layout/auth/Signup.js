import React,{Fragment, useState} from 'react';
import Header from '../common/Header';


function Signup() {
    const [registrationStage, setRegistrationStage] = useState(1);

    const renderRegistrationStage = () => {
          switch(registrationStage){
              case 1: 
              return (
                  <form>
                      <h3 className='text-center'>Signup</h3>
                      <div className='form-group'>
                          <label>
                              Phone Number
                          </label>
                          <input type='text' placeholder='Enter Phone Number' className='form-control'/>
                      </div>

                      <div className='form-group'>
                          <label>
                              Full Name
                          </label>
                          <input type='text' placeholder='Full Name' className='form-control'/>
                      </div>

                      <div className='form-group'>
                          <label>
                              Password
                          </label>
                          <input type='password' placeholder='Enter Password' className='form-control'/>
                      </div>

                      <div className='form-group'>
                          <label>
                             Confirm  Password
                          </label>
                          <input type='password' placeholder='re-Enter Password' className='form-control'/>
                      </div>

                      <div className='form-group'>
                        <button onClick={()=> setRegistrationStage(2)} className='btn btn-success btn-block mt-3'>Next</button>
                      </div>
                  </form>
              )

          case 2: 
          return (
              <form>
                  <h3 className='text-center'>Signup</h3>
                  <div className='form-group'>
                      <label>D.O.B</label>
                      <input type='date' className='form-control'/>
                  </div>

                  <div className='form-group mt-3'>
                    <label>State of Residence</label>
                    <select className='form-control'>
                        <option>...Select State</option>
                        <option>Lagos</option>
                        <option>Ogun</option>
                        <option>Enugu</option>
                    </select>
                  </div>

                <div className='form-group mt-3'>
                    <label>Email</label>
                    <input type='email' placeholder='Enter valid email address' className='form-control'/>
                </div>

                <div className='form-group text-center mt-3'>
                    <button onClick={()=> setRegistrationStage(1)} className='btn btn-success btn-sm'> {'<<'} Previous</button>
                    <button className='btn btn-success btn-sm ' style={{marginLeft:'10px'}}>Create Account</button>
                </div>
              </form>
          )    
          }
    }
  return (
     <div>
      <Fragment>
          <Header/>
          <div className='container mt-5'>
              <div className='col-sm-6 offset-3 card card-body shadow'>
                  {renderRegistrationStage()}
              </div>
          </div>
      </Fragment>
     </div>
   );
}

export default Signup;
