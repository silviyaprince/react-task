
import './App.css';

const data=[{
  1:"FREE",
  2:"$0/month",
  3:"✓ Single User",
  4:"✓ 50 GB Storage",
  5:"✓ Unlimited Public Projects",
  6:"✓ Community Access",
  7:"X Unlimited Private Projects",
  8:"X  Dedicated Phone Support",
  9:"X  Free Subdomain",
  10:"X  Monthly Status Reports",
},
{
  1:"PLUS",
  2:"$9/month",
  3:"✓ 5 Users",
  4:"✓ 50 GB Storage",
  5:"✓ Unlimited Public Projects",
  6:"✓ Community Access",
  7:"✓ Unlimited Private Projects",
  8:"✓ Dedicated Phone Support",
  9:"✓ Free Subdomain",
  10:"X Monthly Status Reports",
},
{
 1:"PRO",
  2:"$49/month",
  3:"✓ Unlimited Users",
  4:"✓ 50 GB Storage",
  5:"✓ Unlimited Public Projects",
  6:"✓ Community Access",
  7:"✓ Unlimited Private Projects",
  8:"✓ Dedicated Phone Support",
  9:"✓ Free Subdomain",
  10:"✓ Monthly Status Reports", 
}
];
function App() {
  return (
    <div className="App">
      <div className='card-container'
     <Pricecard/>
    </div>
  );
}

export default App;



function Pricecard({data}) {
  return (
    <div className='card-container'>

  <div className='card'>
    <p className='p-element'>{data.1}</p>
    <h1>$0/month</h1>
    <div className='custom-ol-symbols'>
   <li>✓ Single User</li>
   <li>✓ 50 GB Storage</li>
   <li>✓ Unlimited Public Projects</li>
   <li>✓ Community Access</li>
   <li className='li-element'>X Unlimited Private Projects</li>
   <li className='li-element'>X  Dedicated Phone Support</li>
   <li className='li-element'>X  Free Subdomain</li>
   <li className='li-element'>X  Monthly Status Reports</li>
   </div>
     </div>
  <div className='card'>
  <p className='p-element'>PLUS</p>
  <h1>$9/month</h1>  
  </div>
  <div className='card'>
     <p className='p-element'>PRO</p>
     <h1>$49/month</h1>
     </div>
  </div>
  
   
  


    
  )
}

