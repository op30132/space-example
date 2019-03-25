

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
   2. 未登入成功前無法進入會員帳號頁面
   3. 帳號與密碼為必填
   4. 使用者點擊過的輸入欄位，有違反驗證規則的情況必須提示使用者，呈現於畫面上
   5. 成功登入後，需要儲存取回之AuthToken於 AuthTokenService
   6. 取回AuthToken後，接著抓取人員帳號資料，並將資料存於UserProfileService中
   7. 登入失敗需要提示使用者
2. 會員帳號清單

   1. 會員帳號清單
   2. 上方提供查詢欄位，以帳號、姓名、卡號、Email查詢
   3. 點選帳號可將畫面重導到帳號編輯維護畫面
   4. 實做分頁功能，於每頁資料筆數與頁碼變換時重新抓取資料
   5. 提供新增帳號按鈕，將畫面重導至新增帳號畫面
   6. 狀態目前以 Y/N 顯示，調整為Y：啟用；N:停用
3. 帳號維護

   1. 提供基本資料維護功能，可編輯：姓名、狀態、Email與電話，不可編輯：帳號、建立日期與修改日期
   2. 需以Reactive Form實做
   3. 需要針對輸入欄位做驗證，姓名與狀態欄位必填
   4. 送出儲存請求後，需提示成功與失敗，並於儲存成功後將畫面導向帳號清單畫面
   5. 提供刪除功能，刪除前需要詢問使用者是否確定要刪除，使用者點擊確定後才可真正刪除
   6. 額外提供密碼變更功能，需檢查密碼是否一致，不可使用空密碼
4. 帳號新增

   1. 提供帳號、姓名、狀態、Email與電話與密碼六個欄位供輸入
   2. 需以Reactive Form實做
   3. 需要對輸入欄位做驗證，帳號、姓名、密碼與狀態必填
   4. 送出儲存請求後，需提示成功與失敗
   5. 新增成功後，返回列表頁，失敗時需要提示使用者新增失敗

5. 公告列表 - [參考畫面](https://spaceadmin.hyweb.com.tw/announcement/#/listAnnouncements)
   1. 取得公告列表，並呈現標題、建立日期、有效日期與狀態欄位
   2. 可依照標題、有效日期區間查詢
   3. 必須實作分頁功能
   4. 點選標題後可進入檢視公告明細，依序為標題、公告時間與內文[參考畫面](https://space.hyweb.com.tw/#/listAnnouncements/2c9191c351477f860151479fc7570002)
