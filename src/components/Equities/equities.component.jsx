import React from 'react';

import './equities.styles.css'; 

const Equities = () => (
    <div>
      <h1>Equities</h1>
      <div className='small-caps'>
        <h2>Small Cap Stocks</h2>
        <p>Many of today's renowed companies started as a small cap stocks 
        (market capitalization of less than $2 billion). These companies became successful over the years, 
        and the list includes Starbucks (SBUX),  NVIDIA (NVDA), or Apple (AAPL). To be a successful
        investor, you must pay attention to market trends and spot these companies as they become
        a global jugglenaut.</p>
      </div>
      <div>
        <h2>Mid Cap Stocks</h2>
      </div>
      <div>
        <h2>Big Cap Stocks</h2>
      </div>
      <div className='international-stocks'>
        <h2>International Stocks</h2>
        <p>
        Finding international opportunities can be rewarding at times. Some of the most 
        interesting companies can be found abroad such as Alibaba (BABA), Tencent (TCEHY), or 
        JD.com (JD). 
        </p>
      </div>
    </div>
  );

  export default Equities; 