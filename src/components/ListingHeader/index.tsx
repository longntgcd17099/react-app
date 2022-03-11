import React from 'react';

interface Props {
  tableHeader: string[];
}

const ListingHeader = ({tableHeader}: Props): JSX.Element => {
  return (
    <thead>
      <tr className="table-header">
        {tableHeader.map((head, key)=><th scope="col" key={key}>{head}</th>)}
      </tr>
    </thead>
  );
};

export default React.memo(ListingHeader);
