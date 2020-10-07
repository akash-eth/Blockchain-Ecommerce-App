import React , {useState, useEffect} from 'react';
import Store from './Store.js';
import getBlockchain from './ethereum.js';


function App() {
  const [paymentProcesor, setPaymentProcessor] = useState(undefined);
  const [dai, setDai] = useState(undefined);

  useEffect(() => {
    const init = async () => {
      const {paymentProcesor, dai} = await getBlockchain();
      setPaymentProcessor(paymentProcesor);
      setDai(dai);
    }
    init();
  }, []);

  if(typeof window.ethereum === 'undefined') {
    return (
      <div className='container'>
        <div className='col-sm-12'>
          <h1>Blockchain Ecommerce App</h1>
          <p>You need to install the latest version of Metamask</p>
        </div>
      </div>
    );
  }

  return (
    <div className='container'>
      <div className='col-sm-12'>
        <h1>Blockchain Ecommerce App</h1>
        <Store paymentProcesor={paymentProcesor} dai={dai}></Store>
      </div>
    </div>
  )



  return (
    <div>
      Hello World
    </div>
  );
}

export default App;

