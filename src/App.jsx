import React from 'react';

import Homepage from './Pages/Homepage';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Bookings from './Pages/Bookings';



import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {
   
   return(
     <BrowserRouter>
     <div>





  
</div>*


<Routes>
 
 <Route  path='/'   element={<Homepage/>}> </Route>
 <Route  path='/About'   element={<About/>}> </Route>
 <Route  path='/Contact'   element={<Contact/>}> </Route>
 <Route  path='/Bookings'   element={<Bookings/>}> </Route>

 
</Routes>
     
     
     
     </BrowserRouter>



   )
  
 
  
   
 
}

export default App ;
