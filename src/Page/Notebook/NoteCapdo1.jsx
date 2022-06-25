import React, {useState} from 'react'
import './NoteCapdo.css'
import Notebook from './Notebook'
import Seach from '../../imager/search--v2 2.png'
import mochiNotebook from '../../imager/Mochi notebook.png'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'


function NoteCapdo1() {
  const [active, setActive] = useState()

  const {capdo} = useParams()
  useEffect(function(){
    let index = capdo.split('NoteCapdo')[1]
    setActive(index)
  }, [capdo])

    // lấy data
const [NoteData1,setNoteData1]=useState([])
useEffect(function(){
  async function test(){
    try {
    let test1 = await axios.get(`https://mochien-test.akira.edu.vn/v3.0/words/page?user_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjo0MzQ2NywidG9rZW4iOiI2MmIzZTU2Yzc3MjAzIiwiaXAiOiI1OC4xODcuMTU0LjIwNiJ9.p9OqGFM2_aHcb7E0a4HupzA_WI7ZHNmqD1dJUZ6EMp0&offset=20`, {
      headers :{
        privateKey: 'M0ch1M0ch1_En_$ecret_k3y',
        DeviceType: 'wed', 
        AppVersion: 1.0,
      }
  })
    if(test1.data.code===1){
      setNoteData1(test1.data.data[1])
    }else{
      setNoteData1([])
    }
    } catch (error) {
      console.log(error);
    }
   }
   test()
},[])
console.log(44,NoteData1)
  return (
    <div>
      <Notebook active={active}></Notebook>
      <div className="NoteCapdo1_seach">
        <input type="text" className='NoteCapdo1_input' placeholder='Gõ vào đây từ bạn muốn tìm'/>
        <img src={Seach} alt="img" className='NoteCapdo1_seach_imager'/>
      </div>
      {NoteData1 ?
       (
  
       <div className='NoteCapdo1_conter_data'> 
     <table>
      <thead></thead>
      <tbody>
        {NoteData1.map((value,index)=>{
          console.log('value',value)
          return(
            <tr key={index}>
              <td>{value.content}</td>
              <td>{value.ja_trans}</td>
              <td>{value.trans}</td>
            </tr>
          )
        })}
      </tbody>
     </table>
       <h1>abchbhj</h1>
       </div>
       ) : (

         <div className='NoteCapdo1_conter_nodata'>
        <img src={mochiNotebook} alt="img" className='NoteCapdo1_nodata_imager' />
        <div className='NoteCapdo1_nodata_text'>
          <span>Ú, không có từ vựng nào của bạn </span>
          <p>đang ở cấp độ này bạn ơi.</p>
        </div>
      </div>
       )}
   

      </div>
  )
}

export default NoteCapdo1