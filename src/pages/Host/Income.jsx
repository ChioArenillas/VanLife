import React from 'react'
import { transactionsData } from '../../data'

export default function Income() {

  const formatEUR = (value) => value.toLocaleString("es-ES") + " €"

  const transactionElements = transactionsData.map(trans => {
    return (
      <div key={trans.id} className='transaction'>
        <h3>{formatEUR(trans.amount)}</h3>
        <p>{trans.date}</p>
      </div>
    )
  }
  )
  const totalIncome = transactionsData.reduce((acc, transaction) =>
    acc + transaction.amount, 0)

  return (
    <section className='host-income'>
      <h2>Total Income: {formatEUR(totalIncome)}</h2>
      <div className='info-header'>
        <h3>Your transactions({transactionsData.length})</h3>
        <p>Last <span>30 days</span></p>
        <div className='transactions'>
          {transactionsData && transactionElements}
        </div>
      </div>
    </section>
  )
}
