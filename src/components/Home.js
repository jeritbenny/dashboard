import React from 'react'
import { BsBellFill, BsCrosshair, BsExclamationCircle, BsPeopleFill } from 'react-icons/bs'
import Table from '../Table'

function Home() {
  return (
    <main className='main-container'>
        <div className='main-header'>
            <div className='box'>
            <span className='home-icon'>logo</span>
            <span className='home-bar'>Associates</span>
            </div>
           
        </div>
    <div className='main-title'>
         <h2>Advocates</h2>
    </div>

    <div className='main-cards'>
        <div className='card'>
        <div className='card-inner'>
        <h3>Active Members</h3>
        <BsPeopleFill className='card_iicon'/>
        </div>
        </div>

        <div className='card'>
        <div className='card-inner'>
        <h3>Pending Request{" "}<sup className='notification'>4</sup></h3>
        <BsBellFill className='card_iicon'/>
        </div>
        </div>

        <div className='card'>
        <div className='card-inner'>
       
        <h3>Membership Expired{" "}<sup className='notification'>2</sup></h3>
       
        <BsExclamationCircle className='card_iicon'/>
        </div>
        </div>

       
    </div>
    <div className='table-div'>
            <Table/>
        </div>
    </main>
  )
}

export default Home