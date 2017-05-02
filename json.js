# 1. Syntax JSON
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

## 3. JSON Parse 
    '{ "name":"John", "age":30, "city":"New York"}'
    var obj = JSON.parse('{ "name":"John", "age":30, "city":"New York"}') //obj bây giờ là 1 javascript object

    JSON.parse('{}');              // {}
    JSON.parse('true');            // true
    JSON.parse('"foo"');           // "foo"
    JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
    JSON.parse('null');            // null

    var text = '{"p":5,"a":"b"}'
    var obj = JSON.parse(text, function(key,value){
      (typeof value ==='number')? value*2 : value
    });
    console.log(obj.p)//10
    console.log(obj.a)//b


##4. JSON.stringify()
    JSON.stringify({});                  // '{}'
    JSON.stringify(true);                // 'true'
    JSON.stringify('foo');               // '"foo"'
    JSON.stringify([1, 'false', false]); // '[1,"false",false]'
    JSON.stringify({ x: 5 });            // '{"x":5}'
    JSON.stringify({ x: [10, undefined, function(){}, Symbol('')] }); 
    // '{"x":[10,null,null,null]}' 
    JSON.stringify({ x: undefined, y: Object, z: Symbol('') });
    // '{}'
    JSON.stringify([new Number(1), new String('false'), new Boolean(false)]);
    // '[1,"false",false]'
    JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)) 
    // '"2006-01-02T15:04:05.000Z"'

    var obj = { "name":"John", "age":30, "city":"New York"}//đây là 1 json object
    //Use the JavaScript function JSON.stringify() to convert it into a string.
    var text = JSON.stringify(obj)
    console.log(typeof text)//result string

    //chuyển đổi 1 mảng thành chuỗi
    var arr = [ "John", "Peter", "Sally", "Jane" ]
    var myJSON = JSON.stringify(arr)
    console.log(myJSON) //result string

    //In JSON, date objects are not allowed. The JSON.stringify() function will convert any dates into strings.
    var obj = { "name":"John", "today":new Date(), "city":"New York"};
    var myJSON = JSON.stringify(obj);
    console.log(myJSON)// result {"name":"John","today":"2017-05-02T06:50:07.187Z","city":"New York"}

    //In JSON, functions are not allowed as object values.
    //The JSON.stringify() function will remove any functions from a JavaScript object, both the key and the value:
    var obj = { "name":"John", "age":function () {return 30;}, "city":"New York"};
    var myJSON = JSON.stringify(obj);
    console.log(myJSON)// result {"name":"John","city":"New York"}

