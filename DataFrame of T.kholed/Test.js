import React from 'react';
import ReactDOM from 'react-dom';
import DashTable from 'dash-table';
import 'dash-table/dash-table.css';
import data from './my_data.json';

const columns = Object.keys(data[0]).map(key => ({ name: key, id: key }));

ReactDOM.render(
  <DashTable
    columns={columns}
    data={data}
    styleCell={{textAlign: 'center'}}
    styleHeader={{
      backgroundColor: 'rgb(230, 230, 230)',
      fontWeight: 'bold',
    }}
    styleData={{
      border: '1px solid grey',
      whiteSpace: 'normal',
      height: 'auto',
      lineHeight: '15px',
    }}
    cellSelectable={false}
    filterAction='native'
    sortAction='native'
    sortMode='multi'
    pageAction='none'
    styleTable={{overflowX: 'scroll'}}
  />,
  document.getElementById('root')
);
