// ==================== JSX FILE: BuyTokens.jsx ====================
import coin from "../../assets/coin.png";
import UPI from "../../assets/UPI.png";
import Wallet from "../../assets/Wallet.png";
import Card from "../../assets/Card.png";
import React, { useState } from 'react';
import '../../styles/settings/B_P_BuyTokens.css';

export default function BuyTokens({ isSidebarOpen }) {
  const [activeTab, setActiveTab] = useState('buy');
  const [showPopup, setShowPopup] = useState(false);
  const [selectedTokens, setSelectedTokens] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [userBalance] = useState(25);

  const tokenPackages = [
    { tokens: 25, price: 100 },
    { tokens: 50, price: 200 },
    { tokens: 100, price: 400 },
    { tokens: 250, price: 1000 },
    { tokens: 500, price: 2000 },
    { tokens: 1000, price: 4000 }
  ];

  const transactionHistory = [
    { id: 'ID', date: '22 October 2025', status: 'Success', mode: 'PhonePe Wallet', amount: '100', maker: '00XXX12361', receiver: 'UserID'},
    { id: 'ID', date: '13 October 2025', status: 'Failed', mode: 'MasterCard', amount: '250', maker: '01XXXX3273', receiver: 'UserID' }
  ];

  const handleTokenSelect = (pkg) => {
    setSelectedTokens(pkg);
    setShowPopup(true);
  };

  const handlePurchase = () => {
    if (selectedPayment) {
      alert(`Purchasing ${selectedTokens.tokens} tokens for ₹${selectedTokens.price} via ${selectedPayment}`);
      setShowPopup(false);
      setSelectedPayment(null);
    } else {
      alert('Please select a payment method');
    }
  };

  return (
    <div className={`bpbt-page ${isSidebarOpen ? 'bpbt-sidebar-open' : 'bpbt-sidebar-closed'}`}>
      <div className="bpbt-container">
        
       

        {/* Main Content */}
        <div className="bpbt-content">
          <div className="bpbt-main-section">
            
            {/* Header */}
            <div className="bpbt-header">
              <h2 className="bpbt-title">Token Packages</h2>
              <div className="bpbt-balance">
                <span className = "bpbt-balance-text">Your Balance: {userBalance}</span>
                <img className="bpbt-coin-icon" src={coin} alt="coins" />
              </div>
            </div>

            {/* Token Packages */}
            <div className="bpbt-packages">
              {tokenPackages.map((pkg, index) => (
                <div 
                  key={index} 
                  className="bpbt-package-card"
                  onClick={() => handleTokenSelect(pkg)}
                >
                  <img className="bpbt-coin-stack" src={coin} alt="coin"/>
                  <div className="bpbt-token-amount">{pkg.tokens}</div>
                  <div className="bpbt-price-tag">₹ {pkg.price}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Transaction History Sidebar */}
          <div className="bpbt-history-sidebar">
            <h3 className="bpbt-history-title">Recent Token Purchase History</h3>
            
            {transactionHistory.map((txn, index) => (
              <div key={index} className={`bpbt-history-card ${txn.status === 'Failed' ? 'bpbt-failed' : ''}`}>
                <div className="bpbt-txn-row">
                  <span className="bpbt-txn-label">Transaction ID :</span>
                  <span className="bpbt-txn-value">{txn.id}</span>
                </div>
                <div className="bpbt-txn-row">
                  <span className="bpbt-txn-label">Transaction Date :</span>
                  <span className="bpbt-txn-value">{txn.date}</span>
                </div>
                <div className="bpbt-txn-row">
                  <span className="bpbt-txn-label">Transaction Status :</span>
                  <span className={`bpbt-txn-status ${txn.status === 'Success' ? 'bpbt-success' : 'bpbt-failed-status'}`}>
                    {txn.status}
                  </span>
                </div>
                
                <div className="bpbt-txn-row">
                  <span className="bpbt-txn-label">Payment Mode :</span>
                  <span className="bpbt-txn-value">{txn.mode}</span>
                </div>
                <div className="bpbt-txn-row">
                  <span className="bpbt-txn-label">Payment Maker : </span>
                  <span className="bpbt-txn-value">{txn.maker}</span>
                  </div>
                <div className="bpbt-txn-row">
                  <span className="bpbt-txn-label">Payment Receiver : </span>
                  <span className="bpbt-txn-value">{txn.receiver}</span>
                </div>
                <div className="bpbt-amount-box">{txn.amount}<img className = "bpbt-amt-coin" src={coin}/> 
                </div>
                
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Payment Popup */}
      {showPopup && (
        <div className="bpbt-popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="bpbt-popup" onClick={(e) => e.stopPropagation()}>
            <div className="bpbt-popup-content">
              
              <div className="bpbt-popup-header">
                <span>Tokens purchasing :</span>
                <span className="bpbt-popup-amount">{selectedTokens?.tokens}</span>
                <img className="bpbt-coin-icon" src={coin}/>
              </div>

              <div className="bpbt-payment-section">
                <h3 className="bpbt-payment-title">Select your Payment Method</h3>
                
                <div className="bpbt-payment-options">
                  <button
                    className={`bpbt-payment-btn ${selectedPayment === 'card' ? 'bpbt-payment-selected' : ''}`}
                    onClick={() => setSelectedPayment('card')}
                  >
                    <img className="bpbt-payment-source-icon-card" src={Card}/>
                    <div className="bpbt-payment-label">Credit / Debit card</div>
                  </button>

                  <button
                    className={`bpbt-payment-btn ${selectedPayment === 'upi' ? 'bpbt-payment-selected' : ''}`}
                    onClick={() => setSelectedPayment('upi')}
                  >
                    <img className="bpbt-payment-source-icon-upi" src={UPI}/>
                    <div className="bpbt-payment-label">UPI</div>
                  </button>

                  <button
                    className={`bpbt-payment-btn ${selectedPayment === 'wallet' ? 'bpbt-payment-selected' : ''}`}
                    onClick={() => setSelectedPayment('wallet')}
                  >
                    <img className="bpbt-payment-source-icon-wallet" src={Wallet}/>
                    <div className="bpbt-payment-label">Wallet</div>
                  </button>
                </div>
              </div>

              <button className="bpbt-purchase-btn" onClick={handlePurchase}>
                Purchase
              </button>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}


// ==================== CSS FILE: BuyTokens.css ====================

/* All class names prefixed with "bpbt-" as requested */

/* Sidebar shift classes omitted for brevity - see separate CSS artifact */