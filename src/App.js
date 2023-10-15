import { useState } from 'react';
import './App.css';
import { CardContainer } from './components/CardContainer';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { filterData, apiUrl } from './data';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [reqData, setReqData] = useState(filterData[0]);
  function updateData(data) {
    setReqData(data);
  }

  // console.log(filterData);
  return (
   <div className='min-h-screen flex flex-col bg-bg-dark2'>
      <ToastContainer/>
      <Header></Header>
      <Navbar title = {filterData} getCourses = {(data) =>updateData(data)} reqData = {reqData}/>
      <CardContainer url = {apiUrl} reqData = {reqData}/>
   </div>
  );
}

export default App;
