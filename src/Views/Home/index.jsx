import React from 'react';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useGetCatFactQuery, useGetGifQuery } from '../../Redux/API';
import './index.scss';

export function Home() {
  const { data: catFact, isSuccess, refetch } = useGetCatFactQuery();
  const tempData = catFact?.fact.split(' ');

  const gifResult = useGetGifQuery(
    isSuccess ? `${tempData[0]} ${tempData[1]} ${tempData[2]}` : skipToken
  );

  return (
    <div>
      <div className='random_cat_container'>
        {gifResult.isSuccess && (
          <img
            src={gifResult.data.data[0].images.original.url}
            alt='cat fact'
          />
        )}

        {isSuccess && <p style={{ color: 'white' }}>{catFact?.fact}</p>}
      </div>

      <div className='button_container'>
        <button onClick={() => refetch()} type='button'>
          Get another fact
        </button>
      </div>
    </div>
  );
}

export default Home;
