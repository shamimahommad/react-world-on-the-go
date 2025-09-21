

import { Suspense } from 'react';
import './App.css'
import Countries from './Component/Countries/Countries'



const countriesPromise = fetch('https://openapi.programming-hero.com/api/all#').then(res => res.json());

function App() {

  return (
    <>

      <Suspense fallback={<h3>Country Loading...</h3>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>

    </>
  )
}

export default App
