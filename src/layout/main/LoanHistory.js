import React, {Fragment, useState} from 'react';
import {Modal} from 'react-bootstrap';

function LoanHistory() {

   const [requestLoanModalOpen, setRequestLoanModalOpen]=useState(false);
   const [withdrawFundModalOpen, setWithdrawFundModalOpen]=useState(false);

   const closeRequestLoanModal =()=> {
      setRequestLoanModalOpen(false)
   }
   const closeWithdrawFundModal =()=> {
      setWithdrawFundModalOpen(false)
   }
  return (
     <Fragment>
        <Modal show={requestLoanModalOpen} onHide={closeRequestLoanModal}>
          <Modal.Header closeButton>
            <Modal.Title>
               <h5>Request New Loan</h5>
            </Modal.Title>
         </Modal.Header>
            <Modal.Body>
               <div>
                  <h4 style={{color: 'gray'}} className='text-center'>Maximum Loan Amount <b>₦50,000</b></h4>
               </div>
               <br/>
               <form>
                 <div className='form-group'>
                   <label>Loan Amount</label>
                   <input placeholder='Enter request Amount' className='form-control' type='number'/>
                 </div>

                 <div className='form-group'>
                   <button className='btn btn-success btn-block'>
                     Submit
                   </button>
                 </div>
               </form>
            </Modal.Body>
        </Modal>
        <Modal  show={withdrawFundModalOpen} onHide={closeWithdrawFundModal}>
           <Modal.Header closeButton>
              <Modal.Title>
                 <h5>Withdraw Funds</h5>
              </Modal.Title>
           </Modal.Header>
            <Modal.Body>
               <div>
                  <form>
                     <div className='form-group'>
                        <label>Amount</label>
                        <input placeholder='Enter Amount' className='form-control' type='number'/>
                     </div>

                     <div className='form-group'>
                        <label>VetroPay UID</label>
                        <input placeholder='Enter VetroPay UID' className='form-control' type='number'/>
                     </div>

                     <div className='form-group'>
                       <button className='btn btn-success btn-block'>Withdraw</button>
                     </div>
                  </form>
               </div>
            </Modal.Body>
        </Modal>
  <div className='container'>
    <div className='text-center'>
      <button onClick={()=> setRequestLoanModalOpen(true)} className='btn btn-success'>Request New Loan</button>
      <button onClick={()=>setWithdrawFundModalOpen(true) } className='btn btn-secondary' style={{marginLeft:'20px'}}>Withdraw Funds</button>
    </div>
    <br/>
    Loan History:
    <div className='card card-body shadow mt-3'>
     <div className='loan-history-card'>
        <div>
           Request Date: Aug 4 ,2022 <br/>
           Amount:  ₦20,000
        </div>
        <div>
            Status: <span className='badge bg-warning'>Running</span> <br/>
            Interest: 10%
        </div>
     </div>
    </div>

    <div className='card card-body shadow mt-3'>
     <div className='loan-history-card'>
        <div>
           Request Date: Jun 12 ,2022 <br/>
           Amount:  ₦20,000
        </div>
        <div>
            Status: <span className='badge bg-success'>Paid</span> <br/>
            Interest: 10%
        </div>
     </div>
    </div>

    <div className='card card-body shadow mt-3'>
     <div className='loan-history-card'>
        <div>
           Request Date: Jul 8 ,2022 <br/>
           Amount:  ₦20,000
        </div>
        <div>
            Status: <span className='badge bg-success'>Paid</span> <br/>
            Interest: 10%
        </div>
     </div>
    </div>
  </div>
  </Fragment>
  );
}

export default LoanHistory;
