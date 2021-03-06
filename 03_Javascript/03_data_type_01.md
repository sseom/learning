#01. 자바스크립트 데이터 유형 (Data Type)
- 숫자형, 문자형, 불리언형, 객체형, 배열형, 함수형, null, undefined

##원시 데이터 유형
- 객체는 아니지만 객체처럼 다룬다. 
  + 왜?
- 원시자료형은 값을 할당해주고 값을 복사할뿐. 원래값은 변하지 않는다.

1. 문자 String
  - 안녕, hi ... 등  "쌍따옴표", '홑따옴표' 로 감싸진 글
  ```
  var a   = 'hi';
  var b = "hello";

  // 한 문장에 쌍따옴표, 홑따옴표 가 모두 들어갈 경우 
  // 방법 1 : Escape 처리 (Back Slash `\` 사용) 
  var c  = 'I\'m beautiful.'; 
  // 방법2 : 쌍따옴표 안에 홑따옴표 사용
  var d = "I'm beautiful.";
  ```

  - 문자열의 원시타입 "", ''둘 다 쓸 수 있다.
      + ' '홑따옴표는 영어권에서 구어적 표현, " " 쌍따옴표가 좀 더 정의적
      + 자바스크립트의 표준이 쌍따옴표로 권장
      + 영어의 축약 I'm 이런 문장과 같이 쓰기에 작은 따옴표는 불편, 오류 날수도 있음
      + JSON에서도 문자열 다룰 때 큰 따옴표 사용. 자바스크립트 코드 안에 JSON데이터 가져와서 같이 쓰기엔 큰 따옴표가 편리
  - 한 줄 코드의 줄바꿈은 오류남. 한 코드 내에서 줄바꿈하고싶을 때 이스케이프문자 사용
      + `var a="안녕하\n세요";`
      + 문자이지만 문자열로 해석하지 않는 이스케이프 문자들. 
        * \n:줄바꿈 \t:들여쓰기 \x:16진수로 바꿔줌 \u:유니코드해석
  - ECMAScript2015 백틱(backtick) 문자 ``로 묶으면 템플릿 문자열이 됨
    + 템플릿 문자열안에선 표현식도 사용할 수 있다.
      ```
      var name="썸";
      console.log(`안녕하세요,${name}님`);
      // 안녕하세요,썸님
      ```

2. 숫자 Number
  - 1 , 3.14... , -18 , ...   ==> 정수, 음수, 실수, 소수

3. 불리언 Boolean, 논리 
  - true, false
    + true값 : 아래 false값을 제외한 모든값은 true값을 가짐
    + false값 : 0, ''(공백없이 빈문자열), null, undefined, NaN

4. undefined 
  - 부정, 정의되지 않았다, 듣보잡, 너 없음.. 이런 뜻
  ```
  // 초기 변수를 선언 했을때 값을 할당하지 않으면 초기값은 undefined
  var study_name;
  ```

5. null
  - 부정, 비어있다.
  ```
  // HTML문서에 아이디명 no-ex 없는데 스크립트가 접근 하려했을때
  // HTML문서가 다 로딩되지 않은 상태에서 스크립트 코드가 먼저 해석됐을때 접근하면 있지만 찾지 못함
  var no_exist_el = document.getElementById('no-ex');

  //이벤트의 초기값 : null
  document.onclick;

  //이벤트 제거시 null사용
  document.onclick = function() {
    console.log('clicked document');
    // 1회 클릭 후, 이벤트 속성에서 핸들러 제거.
    doc.onclick = null;
  };

  ```


##참조 데이터 유형 (자료형 데이터)
1. 배열(Array Object)
  - ['사관','포도','귤']

2. 함수(Function Object)
  - function(){...};

3. 객체(Plain Object)
  - {'name': 'sseom', 'age':'20'...}

==> 참조형 데이터는 다음장에서 계속,,,

---

#데이터 변환 (Type Casting) == 형변환
1. 숫자를 문자로 변환 : Number -> String
  1. 데이터 앞,뒤에 홑따옴표(''), 쌍따옴표("")로 감싼다.
    - '데이터값' ==> ` '2016', "1011" `
  2. 빈 문자열 ''을 숫자 뒤에 더한다(+)
    - 데이터값 + '' ==>  ` 9119 + '' `
  3. 문자 객체가 소유한 함수(메소드, Method)를 사용 : 명시적
    - 데이터값.toString();  ==>  `999.toString();`
    - 오류를 발생시키면 데이터를 ()괄호로 감싸서 테스트 == 데이터를 랩핑 ==> `(999).toString();`
    - ?? : 999인 숫자인 원시데이터에 toString이란 속성이 어떻게 붙어?
      + 객체에서만 속성이 있고 사용할수 있다며?? 프로퍼티는 객체만 가질수있다며?? 
      + JS엔진이 알아서 999 를 숫자객체인것처럼 인식해서 toString() 매서드를 실행해줌
  4. 문자 함수를 사용하여 숫자를 문자로 변형 : 명시적
    - String(데이터값);  ==>  `String(999);`

2. 문자형 숫자를 숫자로 변환 : String(Like Number) -> Number
  - 단, 숫자형 문자만 가능!! ` '2016haha' * 1  ==> NaN 출력`
  1. 숫자형 문자 뒤에 0을 빼거나, 1을 곱하거나 나눈다.
    - 데이터값 -0 , *1, /1 ==>  `'2016' - 0 ==> 2016 ,  '9119' * 1 , '1011' / 1 `
  2. 숫자형 문자 앞에 + 기호를 붙인다.
    - +데이터값 ==>  `  +'0.999' ==> 0.999 `
  3. 숫자 함수에 숫자형 문자를 전달하여 실행
    - Number('데이터값'); ==>  `Number('4200');`

3. 단위를 가진 문자형 숫자를 숫자로 변환 : String(Like Unit) -> Number
  - 단위(Unit)의 유형
    + 10px, 11pt, 1em, 2.1rem, 100%, 80vmin, 20vw,,,
  1. parseInt() 함수에 단위 유형의 문자를 전달 -> 정수(Integer)를 반환
    - parseInt('데이터'); ==> `parseInt('10px'); ==> 10`
  2. parseFloat() 함수에 단위 유형의 문자를 전달 -> 실수(Floating)를 반환
    - parseFloat('데이터'); ==>  `parseFloat('20.3%'); // ==> 20.3`
    - **주의** 
      + 브라우져마다 실수 처리 방식이 달라서 정수로 빼는것이 좋음. 특히 디자인이 실수로 되어있을땐 정수로 요청해야함
  3. parseInt(), parseFloat() 사용시 권장사항
    - 8진수 인지 10진수 인지 써주는것을 권장!! 정확하게 수를 출력하기 위해~
      + `console.log(parseInt('100px', 8));` ==> 64 출력
      + `console.log(parseInt('100px', 10));` ==> 100 출력
  
  - parseInt() 활용예제 : 문서 객체의 스타일 속성 값을 가져와 조작
    ```
    // 문서에서 요소이름(tagName)이 'h1'인 요소를 탐색하여 수집
    // Nodelist (노드리스트)
    var h1_els = document.getElementsByTagName('h1'); // [ <h1> ]
    // 수집된 집합(Nodelist) 내에서 대상 객체를 뽑아내야만 제어가 가능하다.
    var h1 = h1_els.item(0); // Programming에서는 시작되는 숫자 값이 0부터 이다.
    
    // 이벤트 속성에 실행할 함수를 연결한다.
    h1.onclick = function() {
      console.log('this is heading 1.');
      // 클릭하면 h1 참조 객체의 font-size 값을 가져오고자 한다.
      var current_font_size = h1.style.fontSize;

      //console.log(current_font_size);
      // ==> font size값을 가져오지 못한다.
      
      // 표준방식
      // W3C Standard Method
      current_font_size = window.getComputedStyle(h1).fontSize;
      // 비표준방식
      // Microsoft Non Standard Method 
      // h1.currentStyle.fontSize;

      current_font_size = window.parseInt(current_font_size, 10);

      current_font_size = current_font_size - 10;

      h1.style.fontSize = current_font_size + 'px';
    };

    // 참고로 수집된 집합 자체에 이벤트를 연결하면 동작하지 않는다.
    h1_els.onclick = function() {
      console.log('h1_els 변수에 참조된 것은 노드리스트(집합)이기에 이 코드는 작동되지 않는다.');
    };
    ```

4. Boolean값으로 변환
  - 객체가 있다, 없다의 판별할때 유용함 
  1. Boolean() 함수 사용
  2. !! 를 데이터 앞에 붙여주는 것 (주로사용)
    - !  : 데이터의 반대값으로 출력 ==> `!99 // => false`
    - !! : 데이터의 본래 불린값으로 출력 ==> `!!99 // => true`
  ```
  var num = 101,
      str = 'variable vs constant',
      nu  = null,
      un; // 변수 초기값은 undefined

  // Boolean함수 사용 변환
  console.log( Boolean(num) ); // true
  console.log( Boolean(str) ); // true
  console.log( Boolean(nu) );  // false
  console.log( Boolean(un) );  // false
  
  // ! 사용 변환
  console.log( !num ); // !true -> false
  console.log( !str ); // !true -> false
  console.log( !nu );  // !false -> true
  console.log( !un );  // !false -> true

  // !! 사용 변환
  console.log( !!num ); // true
  console.log( !!str ); // true
  console.log( !!nu );  // false
  console.log( !!un );  // false

  ```
  - *true, false 값을 가진 데이터*
    + true값 : 아래 false값을 제외한 모든값은 true값을 가짐
    + false값 : 0, ''(공백없이 빈문자열), null, undefined, NaN
4. undefined, null 데이터 유형 변경 방법
  - undefined, null 은 객체가 아님. 단지 부정을 뜻함.
  ```
  // 문자로 변경 : ''로 감싸거나 , 빈문자열 더하기
  // 'null', undefined + '', String(null)

  // 불리언으로 변경 : ! 사용
  // !null, !!undefined
  // !  : true
  // !! : false

  // 주의할것!
  // 숫자로 변경 : 숫자를 더하거나, Number()함수 사용 
  // undefined는 안됨
  // null + 9 => 9 출력
  // Number(null) => 0 출력
  ```
