# Bếp Nhà — Interactive HCI Prototype

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Open%20Website-green?style=for-the-badge)](https://divine-frost-db96.cfoprouxzz.workers.dev/) <br/>
Prototype tiếng Việt cho đề tài **Hệ thống AI phân tích bữa ăn và đề xuất thực đơn cá nhân hóa theo bệnh lý của từng thành viên trong gia đình**.

## Chạy dự án

Yêu cầu Node.js **20.19+** (hoặc Node.js 22.12+).

```bash
npm install
npm run dev
```

Mở địa chỉ localhost mà Vite in trong terminal, mặc định `http://127.0.0.1:5173/`.

```bash
npm run build    # Kiểm tra TypeScript và tạo bản production trong dist/
npm run preview  # Xem bản production
npm test         # Kiểm thử tính dinh dưỡng và ràng buộc tạo thực đơn
```

Không cần API key, backend, tài khoản hay dịch vụ trả phí. Sau khi cài dependencies, mọi tương tác xử lý trong trình duyệt. Ảnh công khai cần mạng; nếu không tải được, ứng dụng dùng ảnh SVG cục bộ tại `public/food-fallback.svg`.

## Tính năng

- **Tổng quan:** chọn thành viên, xem bữa ăn gần nhất, thực đơn mẫu hoặc thực đơn đã lưu và hướng dẫn nhanh.
- **Gia đình:** 3 hồ sơ Bà Lan, Ông Minh, Anh Nam; xem, thêm, sửa, xóa có xác nhận và hoàn tác.
- **Phân tích:** tải hoặc kéo thả JPG/PNG/WebP tối đa 4 MB, xem trước, chọn preset mẫu; loading mô phỏng khoảng 1 giây. Sửa tên món, chọn lại dữ liệu món gốc, thêm/xóa món, nhập gram và chọn khẩu phần. Tổng dinh dưỡng cập nhật theo khối lượng.
- **Đánh giá:** nhận xét minh họa riêng theo thành viên; giải thích dữ liệu còn thiếu; cảnh báo trùng dị ứng khai báo; thử thay món; lưu vào nhật ký theo từng thành viên.
- **Thực đơn:** tạo 1 hoặc 3 ngày với 28 món; lọc dị ứng, thành phần không thích và lựa chọn ăn chay/món mềm. Sở thích khai báo được dùng để sắp thứ tự lựa chọn. Khóa món, đổi món, sinh lại giữ món khóa, chi tiết thành phần/dinh dưỡng, lưu và mở lại thực đơn. In toàn bộ các ngày qua `window.print()`.
- **Nhật ký:** xem, tìm kiếm món/bữa ăn, lọc theo thành viên, mở chi tiết/nhận xét, xóa có xác nhận và hoàn tác.
- **Cài đặt:** bật/tắt lưu trình duyệt, xóa toàn bộ hoặc khôi phục bộ dữ liệu mẫu có xác nhận và hoàn tác.
- Responsive với sidebar desktop, menu gia đình/cài đặt và điều hướng dưới trên mobile; focus bàn phím, dialog native giữ focus, thông báo thao tác và trạng thái trống/lỗi/loading/thành công.

## Hai kịch bản trình diễn

### UC1: Phân tích và xem nhận xét

1. Tổng quan → **Phân tích bữa ăn**.
2. Chọn **Bữa cơm nhà** → **Phân tích bữa ăn**.
3. Thử sửa “Canh bí xanh” (độ tin cậy 68%) thành “Canh bí nhà nấu”. Giảm cơm từ 150 g xuống 100 g để quan sát tổng năng lượng mẫu đổi từ 615 xuống 550 kcal.
4. **Xác nhận khẩu phần** → **Đánh giá theo thành viên**.
5. Chọn **Bà Lan**, đọc hai điểm cần làm rõ. Chọn **Ông Minh**, quan sát kịch bản về thiếu thông tin giai đoạn bệnh và chỉ định cá nhân.
6. **Lưu vào nhật ký** → mở **Nhật ký bữa ăn** để kiểm tra bản ghi.
7. Để thử cảnh báo dị ứng, thêm **Canh rau ngót nấu tôm** ở bước xác nhận và xem nhận xét cho Bà Lan.

### UC2: Lập thực đơn có món khóa

1. **Thực đơn cá nhân** → chọn **Bà Lan**, **3 ngày**, **Đa dạng món Việt** → **Tạo thực đơn**.
2. Khóa món bữa sáng bằng biểu tượng khóa; đổi một món khác qua **Đổi món**.
3. **Sinh lại thực đơn**: món đã khóa giữ nguyên, các món chưa khóa được đổi khi bộ dữ liệu còn lựa chọn.
4. Chuyển **Ngày 2**, **Ngày 3**, xem chi tiết món.
5. **Lưu thực đơn** → **Đã lưu** → **Mở**, hoặc **In** để in toàn bộ 3 ngày.

### Trạng thái biên

- Phân tích khi chưa chọn ảnh: thông báo chọn ảnh.
- Xóa hết món: yêu cầu thêm ít nhất một món trước khi xác nhận.
- Gram không hợp lệ: yêu cầu từ 1 đến 2.000 g.
- Natri thiếu ở ít nhất một món: hiển thị **Chưa đủ dữ liệu**, không dùng tổng thiếu như số hoàn chỉnh.
- Để thử thực đơn trống: đặt món không thích thành `cơm, cháo, bún, phở, bánh, khoai, bắp`, rồi tạo thực đơn. Mở rộng điều kiện để thử lại.
- Xóa toàn bộ dữ liệu trong Cài đặt để xem các trạng thái trống; khôi phục mẫu để bắt đầu lại.

## Lưu trữ và quyền riêng tư

Mặc định dữ liệu chỉ tồn tại trong bộ nhớ của phiên. Bật đồng ý trong Cài đặt để lưu vào khóa localStorage `bep-nha-demo-v1`. Tắt sẽ xóa khóa lưu, nhưng không xóa phiên đang sử dụng. Khi tải lại mà chưa bật lưu, ứng dụng quay về mẫu ban đầu. Các mẫu có thời gian cố định để nội dung demo nhất quán.

Ảnh người dùng tải lên được đọc bằng FileReader và không gửi đi. Nếu bật lưu, ảnh trong bữa ăn/nhật ký cũng được giữ cục bộ; dung lượng localStorage tùy trình duyệt. Ứng dụng có thông báo khi không thể lưu. Ảnh mẫu lấy từ Unsplash và chỉ mang tính minh họa, có thể không trùng chính xác tên món; yêu cầu tải ảnh gửi trực tiếp đến nhà cung cấp ảnh.

## Giới hạn chuyên môn

Đây là mô phỏng giao diện, **không nhận diện AI thật và không đưa ra đánh giá lâm sàng**. Ảnh tùy ý luôn được thông báo sử dụng kết quả preset. Sửa tên món không thay đổi dữ liệu gốc; chọn lại loại món nếu muốn đổi dữ liệu. Tất cả dinh dưỡng là số mẫu, không phải phép đo hay mục tiêu khuyến nghị.

Nhận xét theo hồ sơ dùng kịch bản soạn sẵn. Không có ngưỡng an toàn theo bệnh lý; không kết luận món ăn an toàn/nguy hiểm; không xác nhận thực đơn đáp ứng điều trị. Dị ứng chỉ được đối chiếu với danh sách thành phần khai báo, không xác minh nhiễm chéo hoặc cách chế biến.

## Cấu trúc

```text
src/
  components/       # Layout, dialog, toast, ảnh fallback, dinh dưỡng
  data/             # Members, dishes, sampleMeals, menuPresets, assessments
  hooks/            # Context và localStorage có đồng ý
  pages/            # 7 nhóm màn hình và trang đánh giá riêng
  services/mock/    # Phân tích giả lập, lọc và ghép thực đơn; unit tests
  types/            # Interfaces TypeScript
  utils/            # Dinh dưỡng theo gram, ngày giờ Việt Nam, ID
  styles.css        # Layout, responsive, print
  readability.css   # Cỡ chữ, tương phản, vùng bấm
```

Stack: React, TypeScript strict, Vite, Tailwind CSS, React Router, Lucide React. Không có backend, database, auth hoặc AI service.
