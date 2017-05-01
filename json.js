# 1.Syntax JSON
  {"key":"value"}

      key phải là string, được viết trong "key"
      value  có thể là string, number, object, array, boolean, null 
      value string phải được viết trong dấu ""
      
      JSON Data Types
      { "name":"John" } //Strings in JSON must be written in double quotes.

      { "age":30 } //Numbers in JSON must be an integer or a floating point.

      {"employee":{ "name":"John", "age":30, "city":"New York" }} //Values in JSON can be objects.

      {"employees":[ "John", "Anna", "Peter" ]}//Values in JSON can be arrays.

      { "sale":true }//Values in JSON can be true/false.

      { "middlename":null }//Values in JSON can be null.
      
      JSON Object
      Các đối tượng JSON được bao quanh bởi các dấu ngoặc nhọn {}
      Đối tượng JSON được viết bằng các cặp key / value.
      keys phải là string, values phải 1 một trong JSON Data Types
      Keys và values phân cách với nhau bởi dấu :
      mỗi cặp keys/values phân cách với nhau bởi dấu ,
        
      { "name":"John", "age":30, "car":null }
      


## 2. JSON in javascript

     {key:"value"} or {key:'value'}
     Trong javascript key có thể là string, number, tên định danh
     value trong javascript có thể là string, number, object, array, boolean, null,a function, a date, undefined
     value trong javascript có thể được viết trong dấu "value" hoặc 'value' 

#ví dụ

    var person = { "name":"John", "age":31, "city":"New York" };
    //lấy giá trị
    person.name or  person["name"]   //John
    //sửa đổi giá trị
    person.name="nguyenthanhcong" or person["name"]="nguyenthanhcong"



