import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function BinhLuan() {
    const avatars = useSelector((state) => state.userInfo.avatar)

    const [comment, setComment] = useState("listComment")
    let handleCommet = (e) => {
        e.preventDefault()
        console.log(e.target.comment.value)
    }

    return (
        <div>
            <form className='form-group' onSubmit={e => handleCommet(e)}>
                <div className='d-flex w-100 mb-3' >
                    <img src={avatars} alt='' width='70' height='70' className='m-2' ></img>
                    <textarea className='form-control' name='comment' placeholder='Viết bình luận'></textarea>
                </div>
                <div className="d-flex  justify-content-end mb-3" >
                    <button className=""   >Đăng</button>
                </div>
            </form>
            <div className='listcomment d-flex w-100 mb-3' >
                <img src={avatars} alt='' className='rounded-circle m-2' width='50' height='50'  ></img>
                <div>
                    <div >ngyen van a</div>
                    <div >caau 2 sai dap an</div>
                </div>
            </div>

        </div>
    );
}

export default BinhLuan;