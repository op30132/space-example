

### 事前準備

* Postman - API 測試工具

* Visual Code - IDE

* Nodejs - Platform

* Angular-CLI - Develop tool

* Markdown Editor

  

### 預備知識 

* [Angular 官網](https://angular.io/)
* [保哥 TODO MVC教學](https://www.youtube.com/watch?v=aMeF8ksXv7o)
* Typescript - 記語法即可，可以想作有型別的Javascript，實際上還是Javascript
* Angular - 
  * COMPONENT
  * SERVICE
  * PIPE
  * MODULE
  * ROUTING
  * ROUTING - LAZY LOAD
  * REACTIVE FORM
* RXJS
  * [希望是最淺顯易懂的 RxJS 教學](https://blog.techbridge.cc/2017/12/08/rxjs/)
  * [30 天精通 RxJS (01)：認識 RxJS ](https://ithelp.ithome.com.tw/articles/10186104)
  * [Marble Diagram](https://rxmarbles.com/)

### TODO

實做研究小間後台功能，需滿足下列功能：

1. 登入功能

   1. 透過Reactive Form實做
   2. 送出請求前必須驗證帳號格式(email)
   3. 帳號與密碼為必填
   4. 使用者點擊過的輸入欄位，有違反驗證規則的情況必須提示使用者，呈現於畫面上
   5. 成功登入後，需要儲存取回之AuthToken於 AuthTokenService
   6. 取回AuthToken後，接著抓取人員帳號資料，並將資料存於UserProfileService中npm
   7. 登入失敗需要提示使用者
   8. 未登入成功前無法進入會員帳號頁面
2. 會員帳號清單

   1. 會員帳號清單
   2. 上方提供查詢欄位，以帳號、姓名、卡號、Email查詢
   3. 點選帳號可將畫面重導到編輯維護畫面
   4. 實做分頁功能(每頁筆數選擇、頁碼選擇、總筆數資訊)
   5. 提供新增帳號功能
   6. 狀態目前以 Y/N 顯示，調整為Y：啟用；N:停用
3. 帳號維護

   1. 提供基本資料維護功能( 參考研究小間提供之欄位)
   2. 需以Reactive Form實做
   3. 需要針對輸入欄位做驗證
   4. 送出儲存請求後，需提示成功與失敗
   5. 提供刪除功能
   6. 提供變更密碼功能
4. 帳號新增
   1. 於列表頁提供新增帳號連結
   2. 提供帳號、姓名、狀態、Email與密碼五個欄位供輸入
   3. 需以Reactive Form實做
   4. 需要對輸入欄位做驗證
   5. 送出儲存請求後，需提示成功與失敗
   6. 新增成功後，返回列表頁

5. 公告列表
   1. 取得公告列表
   2. 可依照條件查詢( 參考研究小間公告功能)
   3. 有分頁功能
   4. 點選標題後可進入檢視公告明細  
