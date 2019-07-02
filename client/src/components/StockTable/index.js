// import React, { Component } from 'react'
import React from 'react'
import "./style.css";

// class StockTable extends Component {
//     render() {
//       return (
//         <div>
//           <BootstrapTable data={this.props.data}>
//             <TableHeaderColumn isKey dataField='id'>
//               ID
//             </TableHeaderColumn>
//             <TableHeaderColumn dataField='name'>
//               Name
//             </TableHeaderColumn>
//             <TableHeaderColumn dataField='value'>
//               Value
//             </TableHeaderColumn>
//           </BootstrapTable>
//         </div>
//       );
//     }
//   }

//   export default StockTable;



const StockTable = props => {
    return (
        <div>
            <div>GDX</div>
            <div>{props.price}</div>
        </div>
    )
}


export default StockTable;