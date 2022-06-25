import React from 'react'
import Notebook from './Notebook'
import './NoteCapdo.css'
import Seach from '../../imager/search--v2 2.png'
import mochiNotebook from '../../imager/Mochi notebook.png'

function NoteCapdo5() {
  return (
    <div>
      <Notebook></Notebook>
      <div className="NoteCapdo1_seach">
        <input type="text" className='NoteCapdo1_input' placeholder='Gõ vào đây từ bạn muốn tìm'/>
        <img src={Seach} alt="img" className='NoteCapdo1_seach_imager'/>
      </div>
      {/* có data */}
      <div className='NoteCapdo5_conter_data'></div>
      {/* không có data */}
      <div className='NoteCapdo1_conter_nodata'>
        <img src={mochiNotebook} alt="img" className='NoteCapdo1_nodata_imager' />
        <div className='NoteCapdo1_nodata_text'>
          <span>Ú, không có từ vựng nào của bạn </span>
          <p>đang ở cấp độ này bạn ơi.</p>
        </div>
      </div>
      </div>
  )
}

export default NoteCapdo5