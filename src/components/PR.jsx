import React from 'react';
import PropTypes from 'prop-types';
import SmartTable from './SmartTable';

const renderSortedHeader = (headerName) => {
  return (
    <div className="u-flex">{headerName}
    </div>
  );
};

const columns = [
    {
      Header: () => renderSortedHeader('PR Link'),
      accessor: 'prLink',
      fixed: 'left',
    },
    {
      Header: () => renderSortedHeader('Jira ID'),
      accessor: 'jiraId',
      fixed: 'left',
    },
    {
      Header: () => renderSortedHeader('Component'),
      accessor: 'component',
      fixed: 'left',
    },  
    {
      Header: () => renderSortedHeader('Date Open'),
      accessor: 'prOpenDate',
      fixed: 'left',
    },
    {
      Header: () => renderSortedHeader('Date Closed'),
      accessor: 'prCloseDate',
    },
    {
      Header: () => renderSortedHeader('Turn Around Time'),
      accessor: 'trt',
    },
    {
      Header: () => renderSortedHeader('Raised By'),
      accessor: 'raisedBy',
    },
];

const PR = (props) => {
  const { prs } = props;
  return (
    <div className="pr-list__wrapper">
      <div className="pr-list__header">Tabular Summary of PRs</div>
      <SmartTable
        data={prs}
        minRows={0}
        sticky
        columns={columns}
        sortable
        striped
      />
    </div>
  );
};

PR.propTypes = {
  prs: PropTypes.array,
};

export default PR;
