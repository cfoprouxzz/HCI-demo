# Kiểm tra prototype

Đã thực hiện trên bộ dữ liệu giả lập:

- `npm run build`: TypeScript strict và Vite production build thành công.
- `npm test`: 9 kiểm thử thành công (lọc dị ứng, thành phần không thích, ăn chay, món khóa, tính xác định, trường hợp không có lựa chọn, dinh dưỡng theo gram và natri thiếu).
- `npm audit` sau cập nhật dependencies: 0 lỗ hổng tại thời điểm cài đặt. Các phiên bản thực tế được ghi trong `package-lock.json`.
- Dev server trả HTTP 200.
- Trình duyệt: chọn ảnh mẫu, loading, sửa tên canh, giảm cơm 150 g → 100 g, tổng kcal 615 → 550; xác nhận, đổi Bà Lan → Ông Minh, nhận xét khác nhau, lưu nhật ký.
- Trình duyệt: tạo 3 ngày, khóa món, sinh lại giữ món khóa và đổi các món khác, mở lựa chọn thay món, lưu/mở lại, chuyển tới Ngày 3.
- Trình duyệt: thêm hồ sơ mẫu, xác nhận xóa, hoàn tác thành công.
- Trình duyệt: đồng ý lưu, tải lại trang vẫn bật; khôi phục dữ liệu mẫu tắt lưu như thông báo.
- Kiểm tra responsive qua kích thước CSS khoảng 390 px và 1440 px; dashboard và trang gia đình không tràn ngang; mở menu di động và điều hướng tới gia đình thành công.
- Không ghi nhận lỗi console trong các luồng được kiểm tra.

Chế độ in được triển khai qua `window.print()` và CSS in toàn bộ ngày; chưa xác nhận trên máy in vật lý. Tải tệp và kéo thả được triển khai bằng FileReader; bài thử UC1 trực tiếp dùng ảnh mẫu, chưa kiểm tra hộp chọn tệp hệ điều hành trên nhiều trình duyệt.

Ảnh trong `dashboard-preview.jpg` là ảnh chụp giao diện đang chạy, không phải mockup thiết kế.
