import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitInfor } from './TrangCaNhanSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function TrangCaNhan() {
    const id = useSelector((state) => state.userInfo.id)
    const userNames = useSelector((state) => state.userInfo.userName)
    const genders = useSelector((state) => state.userInfo.gender)
    const dateOfBirths = useSelector((state) => state.userInfo.dateOfBirth)
    const roles = useSelector((state) => state.userInfo.role)
    const emails = useSelector((state) => state.userInfo.email)
    const phoneNumbers = useSelector((state) => state.userInfo.phoneNumber)
    const addresss = useSelector((state) => state.userInfo.address)
    const avatars =  useSelector((state) => state.userInfo.avatar)

    const [userName, setUserName] = useState(userNames) 
    const [gender, setGender] = useState(genders)
    const [dateOfBirth, setDateOfBirth] = useState(dateOfBirths)
    const [role, setRole] = useState(roles)
    const [email, setEmail] = useState(emails)
    const [phoneNumber, setPhoneNumber] = useState(phoneNumbers)
    const [address, setAddress] = useState(addresss)
    const [avatar, setAvatar] = useState(avatars)
    const [image, setImage] = useState(null)

    const dispatch = useDispatch()

    const updateAvatar = (e) => {
        const curAvatar = e.target.files
        setAvatar(URL.createObjectURL(curAvatar[0]))
        setImage(e.target.files[0])
        // setImage(URL.createObjectURL(curAvatar[0]))
        // setAvatar(e.target.files[0])
    }

    const notify = () => {
        toast.success('Lưu thông tin thành công', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const formData = new FormData()
    formData.append('id', id);
    formData.append('userName', userName);
    formData.append('gender', gender);
    formData.append('dateOfBirth', dateOfBirth);
    formData.append('role', role);
    formData.append('email', email);
    formData.append('phoneNumber', phoneNumber);
    formData.append('address', address);
    formData.append('avatar', image);


    const handleSubmit = (e) => {
        e.preventDefault();
        
        
        axios.post(
            'http://localhost:5000/updateInfor',
            formData
        ).then(res => {
            if (res.data.message === "success") {
                // setAvatar(res.data.avatar)
                // console.log(res.data.avatar, 22)
                var avatar = res.data.avatar
                dispatch(submitInfor({
                    userName, gender, dateOfBirth, role, email, phoneNumber, address, avatar
                }))
                notify();
            } else {
                alert(res.data.message);
            }
        }).catch((error) => {
            if (error.response) {
                // When response status code is out of 2xxx range
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                //When no response was received after request was made
                console.log(error.request);
            } else {
                // Error
                console.log(error.message);
            }
        })
    }

    return (
        <div className=" d-flex justify-content-center text-capitalize">
            <div className='w-75 shadow p-3 mb-5 bg-white rounded'>
                <div className="text-center fw-bold">thông tin cá nhân</div>
                <form className='info-group' onSubmit={handleSubmit.bind(this)}>
                    <div className="d-flex  justify-content-center mb-3">
                        <div className='col-4 fw-bold '>họ và tên</div>
                        <input className='w-50' value={userName}
                            onChange={e => setUserName(e.target.value)} required></input>
                    </div>

                    <div className="d-flex  justify-content-center mb-3">
                        <div className='col-4 fw-bold'>Giới tính</div>
                        <div className='w-50 ' >
                            <select name="selectedGender" className='w-100'
                                onChange={e => { setGender(e.target.value) }} value={gender}  >
                                <option value="Nam">Nam</option>
                                <option value="Nữ">Nữ</option>
                            </select>
                        </div>
                    </div>
                    <div className="d-flex  justify-content-center mb-3">
                        <div className='col-4 fw-bold'>ngày sinh</div>
                        <input type='date' className='w-50'
                            onChange={e => setDateOfBirth(e.target.value)} value={dateOfBirth} required />
                    </div>
                    <div className="d-flex  justify-content-center mb-3">
                        <div className='col-4 fw-bold'>Phân quyền</div>
                        <label className='w-50' >{role}</label>
                    </div>
                    <div className="d-flex  justify-content-center mb-3">
                        <div className='col-4 fw-bold'>Email</div>
                        <input type='email'
                            className='w-50' value={email}
                            onChange={e => setEmail(e.target.value)} required />
                    </div>
                    <div className="d-flex  justify-content-center mb-3">
                        <div className='col-4 fw-bold'>Số điện thoại</div>
                        <input type='number'
                            min={1000000000} max={9999999999}
                            className='w-50' value={phoneNumber}
                            onChange={e => setPhoneNumber(+e.target.value)} required />
                    </div>
                    <div className="d-flex  justify-content-center mb-3">
                        <div className='col-4 fw-bold'>Địa chỉ</div>
                        <input className='w-50' value={address}
                            onChange={e => setAddress(e.target.value)} required></input>
                    </div>
                    <div className="d-flex  justify-content-center mb-3">
                        <div className='col-4 fw-bold'>hình đại diện</div>
                        <div className='w-50'>
                            <img src={avatar} alt='' width='70' height='70' style={{ borderRadius: 50 }} ></img>
                            <input type='file' id="avatar" name="avatar" accept="image/*" onChange={e => updateAvatar(e)}></input>
                        </div>
                    </div>

                    <div className="d-flex  justify-content-end mb-3" >
                        <button className="" >Lưu thông tin</button>
                        <ToastContainer />
                    </div>
                </form>

            </div>

        </div>
    );
}

export default TrangCaNhan;