import { useState } from 'react';
import { useSortableData } from '../../utils/hooks/useSortableData';
import './main-table.css';
import {DetailRowView} from '../detail-row-view/detail-row-view';


const MainTable = ({data}) => {
  
  const { getClassNamesFor, requestSort } = useSortableData(data);
  
  const [ detailRowData, setDetailRowData] = useState();

  const detailRowDataProvider = detailRowData;
  
  return (
    <div className='main-table-container'>
      <table>
        <thead>
          <tr>
            <th
              onClick={() => requestSort("id")}
              className={getClassNamesFor("id")}
            >
              ID
            </th>
            <th
              onClick={() => requestSort("firstName")}
              className={getClassNamesFor("firstName")}
            >
              First Name
            </th>
            <th
              onClick={() => requestSort("lastName")}
              className={getClassNamesFor("lastName")}
            >
              Last Name
            </th>
            <th
              onClick={() => requestSort("email")}
              className={getClassNamesFor("email")}
            >
              Email
            </th>
            <th
              onClick={() => requestSort("phone")}
              className={getClassNamesFor("phone")}
            >
              Phone
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((person) => (
            <tr key={person.id + person.phone} onClick={() => setDetailRowData(person)}>
              <td>{person.id}</td>
              <td>{person.firstName}</td>
              <td>{person.lastName}</td>
              <td>{person.email}</td>
              <td>{person.phone}</td>
            </tr>
          ))}
        </tbody>
        
      </table>
        {
        detailRowDataProvider ? <><DetailRowView person={detailRowDataProvider}/></> : null
        }
    </div>
      
  )
};

export default MainTable;
