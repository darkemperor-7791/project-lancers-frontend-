import React, { useState } from 'react';
import '../../styles/settings/B_P_History.css';

export default function PaymentHistory() {
  const [activeTab, setActiveTab] = useState('History');
  
  const transactions = [
    {
      invoiceId: 'A53TER34271',
      recipientId: '#A14E3Y',
      date: '17/06/2025',
      projectId: 'LB03271',
      amount: '+2500',
      status: 'completed'
    },
    {
      invoiceId: 'B89KPL28763',
      recipientId: '#B92K4Q',
      date: '22/06/2025',
      projectId: 'LE04715',
      amount: '- 1800',
      status: 'processing'
    },
    {
      invoiceId: 'D67WQP6741',
      recipientId: '#H57T9Z',
      date: '28/06/2025',
      projectId: 'DF05842',
      amount: ' +3200',
      status: 'failed'
    }
  ];

  const StatusIcon = ({ status }) => {
    if (status === 'completed') {
      return (
        <div className="bph-status-icon bph-status-completed">
          <span className="bph-status-check">✓</span>
        </div>
      );
    }
    if (status === 'processing') {
      return (
        <div className="bph-status-icon bph-status-processing">
          <svg className="bph-clock-icon" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
        </div>
      );
    }
    if (status === 'failed') {
      return (
        <div className="bph-status-icon bph-status-failed">
          <span className="bph-status-exclamation">!</span>
        </div>
      );
    }
  };

  return (
    <div className="bph-page">

      {/* Legend */}
      <div className="bph-legend">
        <div className="bph-legend-item">
          <div className="bph-legend-icon bph-legend-completed">
            <span className="bph-legend-check">✓</span>
          </div>
          <span className="bph-legend-text">Payment Completed</span>
        </div>
        <div className="bph-legend-item">
          <div className="bph-legend-icon bph-legend-processing">
            <svg className="bph-legend-clock" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="bph-legend-text">Payment under processing</span>
        </div>
        <div className="bph-legend-item">
          <div className="bph-legend-icon bph-legend-failed">
            <span className="bph-legend-exclamation">!</span>
          </div>
          <span className="bph-legend-text">Payment Failed</span>
        </div>
      </div>

      {/* Table Container */}
      <div className="bph-table-container">
        <div className="bph-table-inner">
          {/* Table Header */}
          <div className="bph-table-header">
            <div className="bph-header-cell">Invoice ID</div>
            <div className="bph-header-cell">Recipient ID</div>
            <div className="bph-header-cell">Date</div>
            <div className="bph-header-cell">Project ID</div>
            <div className="bph-header-cell">
              Amount<br />(Tokens)
            </div>
            <div className="bph-header-cell">Status</div>
          </div>

          {/* Table Body */}
          <div className="bph-table-body">
            {transactions.map((txn, index) => (
              <div key={index} className="bph-table-row">
                <div className="bph-cell">{txn.invoiceId}</div>
                <div className="bph-cell">{txn.recipientId}</div>
                <div className="bph-cell">{txn.date}</div>
                <div className="bph-cell">{txn.projectId}</div>
                <div className="bph-cell">{txn.amount}</div>
                <div className="bph-cell bph-cell-status">
                  <StatusIcon status={txn.status} />
                </div>
              </div>
            ))}
            
            {/* Empty Rows */}
            {[...Array(7)].map((_, index) => (
              <div key={`empty-${index}`} className="bph-table-row bph-empty-row"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}