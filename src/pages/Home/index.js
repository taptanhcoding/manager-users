function Home() {
    return (
        <>
            <p>
                Yêu cầu : <br />
                Sử dụng API từ trang web
                <a target="_blank" href="https://reqres.in/">
                    https://reqres.in/
                </a>
                để tạo website.
                <br />
                Sử dụng thư viện React để tạo một màn hình website cơ bản bao gồm các chức năng:
                <br />
                <ul>
                    <li> Đăng nhập</li>
                    <li> Thêm User</li>
                    <li> Sửa User</li>
                    <li> Xoá User</li>
                    <li> Hiển thị tất cả các User</li>
                    <li> Tìm kiếm User theo Id</li>
                    <li> Sắp xếp theo FirstName</li>
                    <li> Import User từ file .csv</li>
                    <li> Export User ra file .csv</li>
                </ul>
                Tự do tùy chỉnh html, css, để có một website nhẹ nhàng, khoa học và đẹp.
                <br />
                Commit và đẩy source code lên github public.
                <br />
                Triển khai website lên Heroku để demo.
                <br />
                Result
                <br />
                Thời gian hoàn thành: 1-3 ngày
                <br />
                Gửi link Heroku và Github link lại email này
                <br />
                Thời gian phản hồi 2 ngày làm việc kể từ ngày nhận được bài thi.
                <br />
                Yêu cầu backend (optional - không bắt buộc):
                <br />
                Sử dụng python django rest framework, tạo các api như trên trang web: https://reqres.in/
            </p>
        </>
    );
}

export default Home;
