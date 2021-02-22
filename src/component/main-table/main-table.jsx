import { useSortableData } from '../../utils/hooks/useSortableData';
import './main-table.css';

const MainTable = (props) => {
  const { items, requestSort, sortConfig } = useSortableData(props);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
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
          {items.map((item) => (
            <tr key={item.id + item.phone}>
              <td>{item.id}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
  );
};

export default MainTable;
