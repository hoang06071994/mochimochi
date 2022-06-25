import React, {useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import './NoteCapdo.css'
import Notebook from './Notebook'
// imager
import Seach from '../../imager/search--v2 2.png'
import Ellipse from '../../imager/Ellipse 9.png'
import vector42 from '../../imager/Vector 4.2.png'
import mochiNotebook from '../../imager/Mochi notebook.png'

let arrayRememberStatus= []
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
      test1.data.data[1] = test1.data.data[1].filter((val)=>{
        return val.review_status ==1;
      })
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
//function post trạng thái của từ để hiện thị
function postStatusWord (id,numbstate) {
 axios.post('https://mochien-test.akira.edu.vn/v3.0/words/update-learn-status', 
  {
    user_token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjo0MzQ2NywidG9rZW4iOiI2MmIzZTU2Yzc3MjAzIiwiaXAiOiI1OC4xODcuMTU0LjIwNiJ9.p9OqGFM2_aHcb7E0a4HupzA_WI7ZHNmqD1dJUZ6EMp0",
    words: {words:[{word_id:id,review_status:numbstate}]}
  },{
    headers:{
      privateKey: 'M0ch1M0ch1_En_$ecret_k3y',
      DeviceType: 'wed', 
      AppVersion: 1.0
    }})
}
// console.log(44,NoteData1)
// const [count,setCount]=useState(0)
function onof_check(e,value){
  console.log(52,value.id)
  // postStatusWord (value.id)
  e.target.classList.toggle("activeCheck");

  if(e.target.classList.contains("activeCheck")){
    arrayRememberStatus.push(value.id)
    console.log(66,arrayRememberStatus)

    console.log('haylaem')
    // postStatusWord (value.id,0)
  }else{
    // console.log(75,arrayRememberStatus.findIndex((val)=>{return val==value.id}))
    arrayRememberStatus.splice(arrayRememberStatus.findIndex((val)=>{return val==value.id}),1)
    // postStatusWord (value.id,1)
    console.log(66,arrayRememberStatus)
  }
}
// function onof_check2(e,value){

//   console.log(52,value.id)
//   arrayRememberStatus.push(value.id)
//   e.target.classList.toggle("activeCheck");
//   if(e.target.classList.contains("activeCheck")){
//     arrayRememberStatus.push(value.id)
//     console.log('haylaem')
//     console.log(66,arrayRememberStatus)
//     // postStatusWord (value.id,0)
//   }else{
//     // postStatusWord (value.id,1)
//     arrayRememberStatus.splice(arrayRememberStatus.findIndex((val)=>{return val==value.id}),1)
//     console.log(66,arrayRememberStatus)

//   }
  
// }
// console.log(count)
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
     <table className='NoteCapdo1_table'>
      <thead></thead>
      <tbody>
        {NoteData1.map((value,index)=>{
          // console.log('value',value)
          return(
            <tr key={index} style= {{height:"36px"}} >
              <td>
               <div className='Notebook_imgager_wrap' onClick={(e)=>{onof_check(e,value,index)}}>
                  {/* <img src={Ellipse} alt='img' className='NoteBook_1_imgager1' onClick={onof_check} /> */}
                  {/* <img onClick={(e)=>{onof_check2(e,value,index)}} src={vector42} alt='img' className='NoteBook_1_imgager2 ' /> */}
               </div>
              </td>
              <td  style= {{textAlign: "left",fontWeight:"bold",paddingLeft:"8px"}}>{value.content}</td>
              <td style= {{textAlign: "left",fontSize:"12px"}}>{value.ja_trans}</td>
              <td style= {{textAlign: "left"}}>{value.trans}</td>
            </tr>
          )
        })}
      </tbody>
     </table>
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