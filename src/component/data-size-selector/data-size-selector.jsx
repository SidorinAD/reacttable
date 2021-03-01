import React, { useState } from 'react';
import './data-size-selector.css'

import Loader from '../loader/loader';

import { useFetch  } from '../../utils/hooks/useFetch';

import { SMALL_URL, BIG_URL} from '../../utils/const-val/const-val'
import MainTable from '../main-table/main-table';

const DataSizeSelector = () => {
  const [ url, setUrl] = useState();

  const fetchedUrl = url;

  const { status, data, error } = useFetch(fetchedUrl);

  return (
    <div className='selector-container'>
      {status === 'idle' && (
        <>
          <h1>Выберите количество загружаемых пользователей</h1>
          <button className='btn green' onClick={() => setUrl(SMALL_URL)}> 32 пользователя</button>
          <button className='btn red' onClick={() => setUrl(BIG_URL)}> 1000 пользователей</button>
        </>
      )}
      {status === 'error' &&<div>{error}</div>}
      {status === 'fetching' && <Loader></Loader>}
      {status === 'fetched' &&  <><MainTable data={data}></MainTable></>}
    </div>
  )
}

export default DataSizeSelector;