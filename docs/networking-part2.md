# Networking Part 2: Làm việc với HTTP và API thời tiết (Flutter)
<!-- ![Demo App Thời tiết](./assets/images/weather_app_demo.png) -->

_Ảnh minh hoạ giao diện ứng dụng thởi tiết Flutter_

:::tip
Trong bài này, các em sẽ được thực hành từ cơ bản giúp hiểu rõ hoạt động của HTTP và JSON.
:::

---

## 1. Giới thiệu

Trong phần này, các em sẽ học cách sử dụng HTTP để lấy dữ liệu từ một API thởi tiết miễn phí và hiển thị kết quả lên ứng dụng Flutter. Chúng ta sẽ sử dụng API wttr.in (https://wttr.in).

---

## 2. Task 1: Tổng quan về HTTP và API
<!-- ![HTTP Request Flow](./assets/images/http_flow.png) -->

_Ảnh minh hoạ luồng request/response_
:::info
**Luồng HTTP cơ bản:**
- Client gửi Request (Method, URL, Headers)
- Server xử lý và trả về Response (Status Code, Body)
:::

**Mục tiêu:**  
- Hiểu HTTP là gì, API là gì, RESTful API là gì.
- Biết các khái niệm: endpoint, request, response, status code.

**Nội dung:**
- HTTP (HyperText Transfer Protocol) là giao thức giúp các ứng dụng giao tiếp với nhau qua mạng Internet.
- API (Application Programming Interface) là cổng giao tiếp giữa các ứng dụng.
- RESTful API là kiểu API phổ biến, giao tiếp qua HTTP, trả về dữ liệu (thường là JSON).
- Ví dụ: Khi truy cập `https://wttr.in/Hanoi?format=j1`, server sẽ trả về thông tin thởi tiết ở Hà Nội dướidạng JSON.

---

## 3. Task 2: Làm quen với API thởi tiết miễn phí (wttr.in)
<!-- ![JSON Response Example](./assets/images/json_response_example.png) -->

_Minh họa đoạn JSON trả về từ wttr.in_
**Mục tiêu:**  
- Biết cách truy cập API, xem dữ liệu trả về.

**Nội dung:**
- API wttr.in cho phép lấy dữ liệu thởi tiết theo thành phố, trả về JSON.
- Ví dụ:  
  - Lấy thởi tiết Hà Nội: [https://wttr.in/Hanoi?format=j1](https://wttr.in/Hanoi?format=j1)
- Thử mở link trên trình duyệt để xem dữ liệu JSON trả về.

---

## 4. Task 3: Gửi HTTP GET request trong Flutter

**Mục tiêu:**  
- Biết cách gửi HTTP GET request trong Flutter.

**Các bước:**

1. Thêm package http vào `pubspec.yaml`:
```yaml
dependencies:
  flutter:
    sdk: flutter
  http: ^0.13.6
```
> **💡 Tip:** Chạy `flutter pub get` để cài đặt dependencies.

2. Import package http:
```dart
import 'package:http/http.dart' as http;
import 'dart:convert';
```

3. Gửi GET request và in kết quả:
```dart
void fetchWeather() async {
  final url = Uri.parse('https://wttr.in/Hanoi?format=j1');
  final response = await http.get(url);
  if (response.statusCode == 200) {
    print(response.body); // Dữ liệu JSON
  } else {
    print('Lỗi khi lấy dữ liệu thởi tiết');
  }
}
```

---

## 5. Task 4: Phân tích dữ liệu JSON trả về

**Mục tiêu:**  
- Biết cách parse JSON thành object trong Dart.

**Các bước:**

1. Xem cấu trúc JSON trả về từ API (chỉ lấy một số trường cần thiết, ví dụ: nhiệt độ, mô tả thởi tiết).
2. Tạo class model:
```dart
class WeatherInfo {
  final String areaName;
  final String tempC;
  final String weatherDesc;

  WeatherInfo({required this.areaName, required this.tempC, required this.weatherDesc});

  factory WeatherInfo.fromJson(Map<String, dynamic> json) {
    return WeatherInfo(
      areaName: json['nearest_area'][0]['areaName'][0]['value'],
      tempC: json['current_condition'][0]['temp_C'],
      weatherDesc: json['current_condition'][0]['weatherDesc'][0]['value'],
    );
  }
}
```
:::tip
Có thể sử dụng Dart Data Class Generator để tự động sinh model từ JSON.
:::

3. Parse dữ liệu:
```dart
void fetchWeather() async {
  final url = Uri.parse('https://wttr.in/Hanoi?format=j1');
  final response = await http.get(url);
  if (response.statusCode == 200) {
    final data = jsonDecode(response.body);
    final weather = WeatherInfo.fromJson(data);
    print(weather.tempC);
    print(weather.weatherDesc);
  } else {
    print('Lỗi khi lấy dữ liệu thởi tiết');
  }
}
```

---

## 6. Task 5: Hiển thị dữ liệu thởi tiết lên UI Flutter
<!-- ![UI Layout Sketch](./assets/images/ui_layout_sketch.png) -->

_Sơ đồ bố cục giao diện ứng dụng_
**Mục tiêu:**  
- Biết cách cập nhật UI với dữ liệu lấy từ API.

**Các bước:**

1. Sử dụng StatefulWidget để lưu và hiển thị dữ liệu thởi tiết.
2. Ví dụ code UI đơn giản:
```dart
class WeatherScreen extends StatefulWidget {
  @override
  _WeatherScreenState createState() => _WeatherScreenState();
}

class _WeatherScreenState extends State<WeatherScreen> {
  WeatherInfo? weather;
  bool isLoading = true;

  @override
  void initState() {
    super.initState();
    fetchWeather();
  }

  void fetchWeather() async {
    final url = Uri.parse('https://wttr.in/Hanoi?format=j1');
    final response = await http.get(url);
    if (response.statusCode == 200) {
      final data = jsonDecode(response.body);
      setState(() {
        weather = WeatherInfo.fromJson(data);
        isLoading = false;
      });
    } else {
      setState(() {
        isLoading = false;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Thời tiết Hà Nội')),
      body: Center(
        child: isLoading
            ? CircularProgressIndicator()
            : weather == null
                ? Text('Lỗi khi lấy dữ liệu')
                : Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Text('Khu vực: ${weather!.areaName}'),
                      Text('Nhiệt độ: ${weather!.tempC}°C'),
                      Text('Mô tả: ${weather!.weatherDesc}'),
                    ],
                  ),
      ),
    );
  }
}
```

---

## 7. Task 6: Xử lý lỗi và mở rộng
:::warning
Bắt lỗi network và API để tránh crash ứng dụng.
:::
**Mục tiêu:**  
- Biết cách xử lý lỗi mạng, lỗi API, hiển thị thông báo lỗi.

**Các bước:**
- Sử dụng try-catch để bắt lỗi.
- Hiển thị thông báo lỗi trên UI.
- Gợi ý mở rộng: Cho phép nhập tên thành phố, thêm nút refresh, loading indicator, v.v.

### Code demo: Xử lý lỗi và hiển thị thông báo
```dart
Future<void> fetchWeather() async {
  setState(() => isLoading = true);
  try {
    final response = await http.get(
      Uri.parse('https://wttr.in/Hanoi?format=j1')
    ).timeout(Duration(seconds: 10));
    if (response.statusCode == 200) {
      final data = jsonDecode(response.body);
      setState(() {
        weather = WeatherInfo.fromJson(data);
      });
    } else {
      throw Exception('Server error: \\${response.statusCode}');
    }
  } on TimeoutException {
    _showError('Request timeout. Vui lòng thử lại.');
  } catch (e) {
    _showError('Lỗi kết nối: $e');
  } finally {
    setState(() => isLoading = false);
  }
}

void _showError(String message) {
  ScaffoldMessenger.of(context).showSnackBar(
    SnackBar(content: Text(message)),
  );
}
```

---

## 8. Tổng kết
:::success
**Bạn sẽ nắm được:**
- ✅ HTTP, API, RESTful API
- ✅ Gửi GET request với http package
- ✅ Phân tích JSON và tạo Dart model
- ✅ Cập nhật và hiển thị data lên UI Flutter
- ✅ Xử lý lỗi network và API
:::

### Các kiến thức các em sẽ học được sau bài này:
- Hiểu về HTTP, API, RESTful API, endpoint, request/response, status code.
- Biết cách gửi HTTP GET request trong Flutter.
- Biết cách sử dụng package http trong Flutter.
- Biết cách phân tích dữ liệu JSON trả về từ API.
- Biết cách xây dựng class model để parse dữ liệu JSON.
- Biết cách cập nhật và hiển thị dữ liệu từ API lên UI Flutter.
- Biết cách xử lý lỗi khi làm việc với mạng.
- Có thể tự phát triển thêm (nhập tên thành phố, refresh dữ liệu, loading indicator...).
