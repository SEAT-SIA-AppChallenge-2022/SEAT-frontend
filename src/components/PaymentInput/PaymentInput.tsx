import React from 'react';

const PaymentInput = () => {
  return (
    <div>
      <div className='border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600 mb-7'>
        <label htmlFor='name' className='block text-xs font-medium text-gray-900'>
          Name
        </label>
        <input
          type='text'
          name='name'
          id='name'
          className='block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm'
          placeholder='Jane Smith'
          value='John Smith'
        />
      </div>
      <fieldset>
        <legend className='block text-sm font-medium text-gray-700'>Card Details</legend>
        <div className='mt-1 bg-white rounded-md shadow-sm -space-y-px'>
          <div>
            <label htmlFor='card-number' className='sr-only'>
              Card number
            </label>
            <input
              value={4916283567489080}
              type='text'
              name='card-number'
              id='card-number'
              className='focus:ring-indigo-500 focus:border-indigo-500 relative block w-full rounded-none rounded-t-md bg-transparent focus:z-10 sm:text-sm border-gray-300'
              placeholder='Card number'
            />
          </div>
          <div className='flex -space-x-px'>
            <div className='w-1/2 flex-1 min-w-0'>
              <label htmlFor='card-expiration-date' className='sr-only'>
                Expiration date
              </label>
              <input
                value='07/23'
                type='text'
                name='card-expiration-date'
                id='card-expiration-date'
                className='focus:ring-indigo-500 focus:border-indigo-500 relative block w-full rounded-none rounded-bl-md bg-transparent focus:z-10 sm:text-sm border-gray-300'
                placeholder='MM / YY'
              />
            </div>
            <div className='flex-1 min-w-0'>
              <label htmlFor='card-cvc' className='sr-only'>
                CVC
              </label>
              <input
                value='708'
                type='text'
                name='card-cvc'
                id='card-cvc'
                className='focus:ring-indigo-500 focus:border-indigo-500 relative block w-full rounded-none rounded-br-md bg-transparent focus:z-10 sm:text-sm border-gray-300'
                placeholder='CVC'
              />
            </div>
          </div>
        </div>
      </fieldset>
      <fieldset className='mt-6 bg-white'>
        <legend className='block text-sm font-medium text-gray-700'>Billing address</legend>
        <div className='mt-1 rounded-md shadow-sm -space-y-px'>
          <div>
            <label htmlFor='country' className='sr-only'>
              Country
            </label>
            <select
              id='country'
              name='country'
              autoComplete='country-name'
              className='focus:ring-indigo-500 focus:border-indigo-500 relative block w-full rounded-none rounded-t-md bg-transparent focus:z-10 sm:text-sm border-gray-300'
            >
              <option>Singapore</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div>
          <div>
            <label htmlFor='postal-code' className='sr-only'>
              ZIP / Postal code
            </label>
            <input
              value='426571'
              type='text'
              name='postal-code'
              id='postal-code'
              autoComplete='postal-code'
              className='focus:ring-indigo-500 focus:border-indigo-500 relative block w-full rounded-none rounded-b-md bg-transparent focus:z-10 sm:text-sm border-gray-300'
              placeholder='ZIP / Postal code'
            />
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default PaymentInput;
