import React, { useState } from 'react';
import coin from '../../assets/coin.png';
import coinl from '../../assets/coin-light.png';
import Card from '../../assets/Card.png';   // ✅ FIX
import UPI from '../../assets/UPI.png';
import Wallet from '../../assets/Wallet.png';

import '../../styles/settings/B_P_Withdraw.css';

export default function Withdraw() {
  const [tokenAmount, setTokenAmount] = useState('');
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [availableBalance] = useState(3200);

  const conversionRate = 4;
  const minimumWithdrawal = 800;

  const calculateRupees = (tokens) =>
    tokens ? (tokens / conversionRate).toFixed(2) : '';

  const handleWithdraw = () => {
    if (!selectedMethod) {
      alert('Please select a payout method');
      return;
    }
    if (tokenAmount < minimumWithdrawal) {
      alert(`Minimum withdrawal is ${minimumWithdrawal} tokens`);
      return;
    }
    if (tokenAmount > availableBalance) {
      alert('Insufficient balance');
      return;
    }

    alert(
      `Withdrawing ${tokenAmount} tokens (₹${calculateRupees(
        tokenAmount
      )}) via ${selectedMethod}`
    );
  };

  return (
    <div className="bpw-page">
      {/* BALANCE INFO */}
      <div className="bpw-balance-section">
        <div className="bpw-conversion-rate">
          <span className = "bpw-conversion-rate">Conversion Rate : {conversionRate}
          <img src={coinl} alt="coin" className="bpw-rate-coin" />
          <span className='bpw-1rs'>= ₹ 1</span></span>
        </div>

        <div className="bpw-available-balance">
          <span className="bpw-balance-text">Available Balance :            
            <span className='bpw-available-balance-amount'>{availableBalance}</span>
            </span>
          <div className="bpw-balance-amount">
            <img src={coinl} alt="coins" className="bpw-balance-coins" />
          </div>
        </div>

        <div className="bpw-minimum-limit">
          Minimum Withdrawal Limit : {minimumWithdrawal} 
          <img src={coinl} alt="coins" className="bpw-min-wid-coins" />
        </div>
      </div>

      {/* FORM */}
      <div className="bpw-form-section">
        <div className="bpw-input-row">
          <label className='bpw-token-withdraw-heading'>Enter Tokens to withdraw</label>

          <div className="bpw-input-group">
            <div className="bpw-token-input">
             
              <input
                type="number"
                value={tokenAmount}
                onChange={(e) => setTokenAmount(e.target.value)}
                className="bpw-input-field"
              />
               <img className='bpw-impur-coin-img' src={coin} alt="coin" />
            </div>

            <span className="bpw-equals">=</span>

            <div className="bpw-rupee-input">
              <span className='bpw-rupee'>₹</span>
              <input
                type="text"
                value={calculateRupees(tokenAmount)}
                readOnly
                className="bpw-output-field"
              />
            </div>
          </div>
        </div>

        {/* PAYOUT METHODS */}
        <div className="bpw-payout-section">
          <h3 className='bpw-methods-line'>Payout Methods</h3>

          <div className="bpw-payment-methods">
            <button
              className={`bpw-method-btn ${
                selectedMethod === 'card' ? 'bpw-method-selected' : ''
              }`}
              onClick={() => setSelectedMethod('card')}
            >
              <img className = "bpw-cards-img" src={Card} alt="Card" />
              <span className='bpw-method-name-cdc'>Credit / Debit Card</span>
            </button>

            <button
              className={`bpw-method-btn ${
                selectedMethod === 'upi' ? 'bpw-method-selected' : ''
              }`}
              onClick={() => setSelectedMethod('upi')}
            >
              <img className = 'bpw-upi-img' src={UPI} alt="UPI" />
              <span className='bpw-method-name-upi'>UPI</span>
            </button>

            <button
              className={`bpw-method-btn ${
                selectedMethod === 'wallet' ? 'bpw-method-selected' : ''
              }`}
              onClick={() => setSelectedMethod('wallet')}
            >
              <img className='bpw-wallet-img' src={Wallet} alt="Wallet" />
              <span className='bpw-method-name-wt'>Wallet Transfer</span>
            </button>
          </div>

          {/* ACTION BUTTON */}
          <button className="bpw-withdraw-btn" onClick={handleWithdraw}>
            Withdraw Tokens
          </button>
        </div>
      </div>
    </div>
  );
}
