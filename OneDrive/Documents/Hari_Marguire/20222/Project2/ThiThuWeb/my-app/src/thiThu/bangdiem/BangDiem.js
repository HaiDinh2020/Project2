
import { useSelector } from 'react-redux';


function BangDiem() {
    const userName = useSelector((state) => state.userInfo.userName)


    return (
        <>
            <div className='text-center text-info'>
                <h2>Bảng điểm</h2>
                <h3 className='font-italic'>{userName}</h3>
            </div>
            <div className=' d-flex justify-content-center' >
                <div className='w-75 shadow p-3 mb-5 bg-white rounded'>
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Môn thi</th>
                                <th scope="col">Tên đề thi</th>
                                <th scope="col">Điểm</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td colspan="2">Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default BangDiem;