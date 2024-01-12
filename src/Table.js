import React from 'react'

function Table() {
  return (
    <div>
<table className='dashboard-table'>
    <thead>
        <tr>
            <th>Advocate name</th>
            <th>Enrollment</th>
            <th>Plan chooosed</th>
            <th>Amount</th>
            <th>Paid om</th>
            <th>Membership Status</th>

        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Jhony</td>
            <td>Lp/2345/67</td>
            <td>12 Month</td>
            <td>4000</td>
            <td>2023-12-03</td>
            <td>APPROVED</td>
        </tr>
        <tr>
            <td>Juby</td>
            <td>Lp/2565/67</td>
            <td>24 Month</td>
            <td>6000</td>
            <td>2024-12-03</td>
            <td>APPROVED</td>
        </tr>
    </tbody>
</table>
    </div>
  )
}

export default Table;
