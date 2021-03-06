import React from 'react';
import PropTypes from 'prop-types';

import Ul from './Ul';
import Wrapper from './Wrapper';
import TableBody from './tableBody';
import Td from './td';
import Th from './th';

function Table({ strings, loading, error }) {
  let content;
  let dataLodaed = false;

  // If we have items, render them
  if (strings) {
    dataLodaed = true;
    content = strings.map(string => {
     return (
      <tr key={string.id} >
        <Td>{string.id}</Td>
        <Td>{string.string}</Td>
        <Td>{string.createdat.slice(0, 10)} {string.createdat.slice(12, 19)}</Td>
      </tr>
     ) 
    });
    // Otherwise render a single component
  } else if (loading) {
    content = <span>Loading strings data...</span>;
  } else if (error){
    content = <span>Error occured!</span>;
  }


  // if strings are loaded from DB, render a table. Otherwise render a single component
  if(dataLodaed){
    return (
      <TableBody>
        <thead>
          <tr>
            <Th>No #</Th>
            <Th>String</Th>
            <Th>Created Date/Time</Th>
          </tr>
        </thead>
        <tbody>
          {content}
        </tbody>
      </TableBody>
    );
  }
  
  return (
    <Wrapper>
      <Ul>{content}</Ul>
    </Wrapper>
  )
}

Table.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  strings: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.bool]),
};

export default Table;
