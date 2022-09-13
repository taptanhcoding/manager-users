function Home() {
    return (
        <>
            <div>
                Sử dụng API từ trang web
                <a target="_blank" href="https://reqres.in/">
                    https://reqres.in/
                </a>
                để tạo website.
                <br />
                Chức năng chính
                <br />
                <ul>
                    <li> Đăng nhập</li>
                    <li> Thêm User</li>
                    <li> Sửa User</li>
                    <li> Xoá User</li>
                    <li> Hiển thị tất cả các User</li>
                    <li> Tìm kiếm User theo Email</li>
                    <li> Sắp xếp theo FirstName,Id</li>
                </ul>
            </div>
        </>
    );
}

export default Home;
