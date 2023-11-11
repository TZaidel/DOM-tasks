import transactionHistory from './data/transactions.js'

const table = document.querySelector('.transaction-table')

const makeTable = ({ id, amount, date, business, name, type, account }) => {
   
    return `      
<tbody>
        <tr>
          <td>${id}</td>
          <td>${amount}</td>
          <td>${date}</td>
          <td>${business}</td>
          <td>${name}</td>
          <td>${type}</td>
          <td>${account}</td>
        </tr>
      </tbody>`
}


const makeTableRows = transactionHistory.map(makeTable).join('')
table.insertAdjacentHTML('beforeend', makeTableRows)