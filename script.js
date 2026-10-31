// Hàm xử lý khi Di chuột vào (mouseover) hoặc Bấm phím Tab vào (focus)
function upDate(previewPic) {
    console.log("Sự kiện kích hoạt trên ảnh:", previewPic.alt);

    var khungHienThi = document.getElementById('image');

    // Cập nhật văn bản và ảnh nền
    khungHienThi.innerHTML = previewPic.alt;
    khungHienThi.style.color = "#fff";
    khungHienThi.style.textShadow = "1px 1px 5px rgba(0,0,0,0.9)";
    khungHienThi.style.backgroundImage = "url('" + previewPic.src + "')";
}

// Hàm xử lý khi Rời chuột (mouseleave) hoặc Rời tiêu điểm bàn phím (blur)
function unDo() {
    var khungHienThi = document.getElementById('image');

    // Trả về giao diện mặc định
    khungHienThi.style.backgroundImage = "url('')";
    khungHienThi.style.color = "#333";
    khungHienThi.style.textShadow = "none";
    khungHienThi.innerHTML = "Di chuột hoặc bấm Tab qua một hình ảnh bên dưới để hiển thị ở đây.";
}

// Hàm tự động thêm thuộc tính tabindex cho tất cả các ảnh bằng vòng lặp FOR (Bước 8 & 9)
function setTabindex() {
    console.log("Trang đã tải xong, đang tự động gán thuộc tính tabindex...");

    // Lấy tất cả các thẻ img có class "preview"
    var images = document.getElementsByClassName('preview');

    // Dùng vòng lặp for để duyệt từng ảnh
    for (var i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
        console.log("Đã thêm tabindex cho ảnh thứ " + (i + 1));
    }
}