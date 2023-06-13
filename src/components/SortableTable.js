import { GoArrowSmallDown, GoArrowSmallUp } from 'react-icons/go';
import Table from "./Table";
import useSort from "../hooks/use-sort";

function SortableTable(props){
  
  const { config, data } = props;
  const {
    sortOrder,
    sortBy,
    sortedData,
    setSortColumnClick
  } = useSort(data, config);

  const updatedConfig = config.map((column) => {
    if(!column.sortValue){
      return column;
    }

    function getIcons(label, sortBy, sortOrder) {
      if (label !== sortBy){
        return(
           <div>
          <GoArrowSmallDown />
          <GoArrowSmallUp />
        </div>
        );
      }

      if( sortOrder === null){
        return(
        <div>
          <GoArrowSmallDown />
          <GoArrowSmallUp />
        </div>
         );
      } else if (sortOrder === 'asc'){
        return(  <div>
          <GoArrowSmallUp />
        </div>
         );
      } else if (sortOrder === 'desc'){
        return( <div>
          <GoArrowSmallDown />
        </div>
         );
      }
    }

    return {
      ...column,
      header: () => <th className="cursor-pointer hover:bg-gray-100" onClick={() => setSortColumnClick(column.label)}>
        <div className="flex items-center">
          {getIcons(column.label, sortBy, sortOrder)}
          {column.label}
        </div>
      </th>
    }
  });

  return (
    <Table {...props} data={sortedData} config={updatedConfig} />
  );
}

export default SortableTable;