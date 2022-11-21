import React from 'react';

const AddTransaction = () => {

    return (
        <form>
            <div className='row'>
                <div className='col-sm'>
                    <label for='name'>Name</label>
                    <input  
                        required='required' 
                        type='text' 
                        className='form-control'
                        id='name'>
                    </input>
                </div>
                <div className='col-sm'>
                    <label for='cost'>Cost</label>
                    <input 
                        required='required' 
                        type='text' 
                        className='form-control'
                        id='cost'>
                    </input>
                </div>
                <div className='h2'></div>
                <div className='col-sm'>
                    <button type='submit' className='btn btn-primary'>
                    Add
                    </button>
                </div>
            </div>
        </form>
    );
};

export default AddTransaction;