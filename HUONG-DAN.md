# Khu Rừng Ngủ Quên: đưa game lên mạng bằng GitHub Pages

Thư mục này là bản game hoàn chỉnh dạng app cài được (PWA): có icon, chơi toàn màn hình, chơi được khi không có mạng, và tự cập nhật khi có chương mới. GitHub Pages miễn phí.

## Lần đầu: đưa game lên (khoảng 10 phút)

1. **Tạo tài khoản** tại github.com (nếu chưa có). Tên tài khoản sẽ nằm trong địa chỉ game, nên chọn tên bạn muốn giữ lâu dài.
2. **Tạo kho chứa (repository):** bấm dấu **+** góc trên bên phải → **New repository**.
   - Repository name: `khu-rung-ngu-quen`
   - Chọn **Public**
   - Bấm **Create repository**.
3. **Tải file lên:** ở trang kho vừa tạo, bấm dòng **uploading an existing file**.
   - Giải nén file .zip trên máy.
   - Mở thư mục vừa giải nén, chọn **tất cả bên trong** (`index.html`, `sw.js`, `manifest.webmanifest`, thư mục `chapters`, thư mục `icons`, file hướng dẫn này) rồi kéo thả vào trang GitHub.
   - Đợi tải xong, bấm **Commit changes**.
4. **Bật trang web:** vào **Settings** của kho → mục **Pages** ở cột trái.
   - Source: **Deploy from a branch**
   - Branch: **main**, thư mục **/ (root)** → **Save**.
5. Đợi 1–2 phút, tải lại trang Pages. GitHub hiện địa chỉ game, dạng:
   `https://<tên-tài-khoản>.github.io/khu-rung-ngu-quen/`

## Cài game lên máy

- **Android (Chrome):** mở địa chỉ game → bấm nút **⬇ Cài game vào máy** ở màn hình chính của game (hoặc menu ⋮ → *Cài đặt ứng dụng* / *Thêm vào màn hình chính*).
- **iPhone / iPad:** mở bằng **Safari** → nút **Chia sẻ** → **Thêm vào MH chính**.
- **Máy tính (Chrome / Edge):** bấm biểu tượng cài đặt ở cuối thanh địa chỉ, hoặc nút **⬇ Cài game vào máy**.

Sau khi cài, game có icon riêng và mở toàn màn hình. Lần đầu mở cần có mạng. Từ lần sau chơi được cả khi không có mạng.

## Khi có chương mới: cập nhật

1. Nhận file .zip mới, giải nén.
2. Vào kho `khu-rung-ngu-quen` trên GitHub → **Add file** → **Upload files** → kéo thả **toàn bộ** nội dung mới vào (ghi đè file cũ) → **Commit changes**.
3. Đợi 1–2 phút. Người chơi mở game (có mạng) sẽ thấy thông báo **«✨ Game có bản mới. Bấm để cập nhật»**. Bấm vào là có chương mới, tiến độ cũ giữ nguyên.

## Lưu ý quan trọng

- **Không đổi tên tài khoản hay tên kho** sau khi đã chia sẻ link. Địa chỉ đổi thì người chơi mất tiến độ đã lưu.
- Tiến độ lưu trên từng máy, từng trình duyệt. Xóa dữ liệu trình duyệt là mất tiến độ.
- Muốn thử nhanh không cần GitHub: kéo cả thư mục vào **app.netlify.com/drop** để có ngay một địa chỉ tạm. Nhưng nên dùng GitHub Pages làm địa chỉ chính, cố định.
