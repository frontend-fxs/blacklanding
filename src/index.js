import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './index.tsx';
const   products= [
    {
      Id: '1',
      Name: '1 MONTH',
      Price: '$35',
      Description: 'Pay $35 every month no permanence',
      Saved: 0,
      IsFxsChoice: false,
      DataGtmId: 'landing-subscribe-1',
      ButtonUrl:
        'https://www.fxstreet.com/account/premium-payment?subscriptionid=ba7897ce-e16a-4bb6-8c05-ed4499dc3c29&uritoredirect=/live-video',
      MonthlyPrice: '$35',
    },
    {
      Id: '2',
      Name: '3 MONTHS',
      Price: '$99.95',
      Description: 'Only one payment of $99.95 for three months subscription',
      Saved: 10,
      IsFxsChoice: true,
      DataGtmId: 'landing-subscribe-3',
      ButtonUrl:
        'https://www.fxstreet.com/account/premium-payment?subscriptionid=de0212bb-054a-4adb-a3cb-26b11ff3b334&uritoredirect=/live-video',
      MonthlyPrice: '$33.32',
    },
    {
      Id: '3',
      Name: '12 MONTHS',
      Price: '$245.95',
      Description: 'Only one payment of $245.95 for a year subscription',
      Saved: 20,
      IsFxsChoice: false,
      DataGtmId: 'landing-subscribe-12',
      ButtonUrl:
        'https://www.fxstreet.com/account/premium-payment?subscriptionid=f6bb3ea9-e28d-46ee-8889-6949518353df&uritoredirect=/live-video',
      MonthlyPrice: '$20.83',
    },
  ]
  
ReactDOM.render(
    <React.StrictMode>
      <Landing Products={products} />
    </React.StrictMode>,
    document.getElementById('root')
  );
