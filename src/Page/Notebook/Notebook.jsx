import React, { useEffect,useState} from 'react'
import './Notebook.css'
// imager
import mochiver3 from '../../imager/MochiMochi ver3.png'
import mochiNotebook from '../../imager/Mochi notebook.png'
import alarm from '../../imager/alarm 1.png'
import vector1 from '../../imager/Vector 9.1.png'
import vector3 from '../../imager/Vector 9.3.png'
import mochihuongdan from '../../imager/mochihuongdan.png'
import closemodal from '../../imager/closebutton.png'

// 
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


function Notebook(props) {
  const navigate = useNavigate()
  // chuyển trangs
  function onof_capdo1(){
    navigate('/Page/Notebook/NoteCapdo1')
  }
  function onof_capdo2(){
    alert('bạn có chắc chuyển trang')
    navigate('/Page/Notebook/NoteCapdo2')
  }
  function onof_capdo3(){
    navigate('/Page/Notebook/NoteCapdo3')
  }
  function onof_capdo4(){
    navigate('/Page/Notebook/NoteCapdo4')
  }
  function onof_capdo5(){
    navigate('/Page/Notebook/NoteCapdo5')
  }
  // lấy data
const [NoteData,setNoteData]=useState([])
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
      setNoteData([test1.data])
    }else{
      setNoteData([])
    }
    } catch (error) {
      console.log(error);
    }
   }
   test()
},[])
  return (
    <>
    {NoteData.length ?
    (
  
    <div className='notebook_1'>
      <div className="notebook_1_left">
        <img src={mochiver3} alt="img" className='notebook_mochiver3_imager'/>
      </div>
      <div className="notebook_1_center">
        <div className='notebook_1_button_grup'>
           <div 
            className={props.active * 1 === 1 ? "notebook_1_capdo_1 active" : "notebook_1_capdo_1" } 
            onClick={onof_capdo1}>
              <button>Cấp độ 1</button> <br />
              <div className='capdo1_vector'>
                <img src={vector1} alt="" />
                <img src={vector1} alt="" />
                <img src={vector3} alt="" />
                <img src={vector3} alt="" />
                <img src={vector3} alt="" />
              </div>
              <div className='capdo1_bottom'></div>
            </div>
            <div 
            className={props.active * 1 === 2 ? "notebook_1_capdo_2 active" : "notebook_1_capdo_2" } 
            onClick={onof_capdo2} >
              <button>Cấp độ 2</button>
              <div className='capdo2_vector'>
                <img src={vector1} alt="" />
                <img src={vector1} alt="" />
                <img src={vector3} alt="" />
                <img src={vector3} alt="" />
                <img src={vector3} alt="" />
              </div>
              <div className='capdo2_bottom'></div>
            </div>
            <div 
            className={props.active * 1 === 3 ? "notebook_1_capdo_3 active" : "notebook_1_capdo_3" } 
            onClick={onof_capdo3}>
              <button>Cấp độ 3</button>
              <div className='capdo3_vector'>
                <img src={vector1} alt="" />
                <img src={vector1} alt="" />
                <img src={vector3} alt="" />
                <img src={vector3} alt="" />
                <img src={vector3} alt="" />
              </div>
              <div className='capdo3_bottom'></div>
            </div>
            <div 
              className={props.active * 1 === 4 ? "notebook_1_capdo_4 active" : "notebook_1_capdo_4" } 
              onClick={onof_capdo4}>
              <button>Cấp độ 4</button>
              <div className='capdo4_vector'>
                <img src={vector1} alt="" />
                <img src={vector1} alt="" />
                <img src={vector3} alt="" />
                <img src={vector3} alt="" />
                <img src={vector3} alt="" />
              </div>
              <div className='capdo4_bottom'></div>
            </div>
            <div 
             className={props.active * 1 === 5 ? "notebook_1_capdo_5 active" : "notebook_1_capdo_5" } 
            onClick={onof_capdo5}>
              <button>Cấp độ 5</button>
              <div className='capdo5_vector'>
                <img src={vector1} alt="" />
                <img src={vector1} alt="" />
                <img src={vector3} alt="" />
                <img src={vector3} alt="" />
                <img src={vector3} alt="" />
              </div>
              <div className='capdo5_bottom'></div>
            </div>
        </div>   
        <div className='capdo1'>

          </div> 
      </div>
      <div className="notebook_1_right"></div>
    </div>
    ) : (
      
    <div className='notebook_'>
    <div className="notebook_left">
      <img src={mochiver3} alt="img" className='notebook_mochiver3_imager'/>
    </div>
    <div className="notebook_center">
      <img src={mochiNotebook} alt="img" className='notebook_mochinotebook_imager' />
      <div className='notebook_center_text1'>
        <span>Bạn chưa có từ vựng nào trong sổ tay.</span>
        <p>Hãy học 1 bài từ mới để cập nhật sổ tay</p>
      </div>
      <button className='notebook_center_button'>Học từ mới</button>
    </div>
    <div className="notebook_right">
       <div className='notebook_right_alarm'>
        <img src={alarm} alt="img" className='notebook_alarm_imager' />
        <span className='notebook_right_text'>Bật thông báo thời điểm vàng ngay</span>
       </div>
    </div>
    </div>
    )
     }
<div className="notebook_modal">
  <img src={mochihuongdan} alt="img" />
  <div>
    <img src={closemodal} alt="" />
  </div>
  <p>Bạn vừa thay đổi danh sách từ cần ôn tập.</p>
  <button className='notebook_modal_button_update'>Lưu thay đổi</button>
  <button className='notebook_modal_button_no'>Hủy</button>
</div>

      </>
  )
}

export default Notebook