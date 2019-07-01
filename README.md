

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
  * DIRECTIVE
  * SERVICE
  * MODULE
  * ROUTING
  * ROUTING - LAZY LOAD
  * HTTP CLIENT
  * REACTIVE FORM
  * PIPE
* RXJS
  * [希望是最淺顯易懂的 RxJS 教學](https://blog.techbridge.cc/2017/12/08/rxjs/)
  * [30 天精通 RxJS (01)：認識 RxJS ](https://ithelp.ithome.com.tw/articles/10186104)
  * [Marble Diagram](https://rxmarbles.com/)

### TODO

功能開發不考慮支援IE。
實做研究小間後台功能，需滿足下列功能：

1. 會員帳號清單(/pages/member)

   1. 上方提供查詢欄位，以帳號、姓名、卡號、Email查詢
   2. 點選帳號可將畫面重導到帳號編輯維護畫面
   3. 實做分頁功能，於每頁資料筆數與頁碼變換時重新抓取資料
   4. 提供新增帳號按鈕，將畫面重導至新增帳號畫面
   5. 狀態目前以 Y/N/D 顯示，調整為Y：啟用；N:停用；D:註銷
   6. (optional)嘗試將分頁頁籤、筆數設定與總筆數功能畫面設計為一個獨立的component，並用於member-list component。
   7. (optional)嘗試於送出查詢時加入loading效果。

2. 帳號維護

   1. 提供基本資料維護功能，可編輯：姓名、狀態、Email與電話，不可編輯：帳號、建立日期與修改日期
   2. 需要針對輸入欄位做驗證，姓名與狀態欄位必填
   3. 送出儲存請求後，需提示成功與失敗，並於儲存成功後將畫面導向帳號清單畫面
   4. 提供刪除功能，刪除前需要詢問使用者是否確定要刪除，使用者點擊確定後才可真正刪除
   5. 額外提供密碼變更功能(需與帳號維護功能分開)，需檢查密碼是否一致，不可使用空密碼[測試網址](https://space.hyweb.com.tw/#/)
   6. 需檢查使用者輸入帳號是否為合法Email格式
   7. (optional) 抓資料或更新資料時，嘗試加入 loading或是有助於改善UX之效果。
   8. (optional)以Reactive Form實做各功能

3. 帳號新增

   1. 提供帳號、姓名、狀態、Email與電話與密碼六個欄位供輸入
   2. 需檢查欲新增之帳號是否已存在(搭配https://spaceadmin.hyweb.com.tw/rest/member/admin/accounts/pager 來檢查)
   3. 需要對輸入欄位做驗證，帳號、姓名、密碼與狀態必填
   4. 新增成功後，返回列表頁，失敗時需要提示使用者新增失敗
   5. 需檢查使用者輸入帳號是否為合法Email格式
   6. (optional) 避免使用者連續輸入帳號時，送出過多的檢查請求。
   7. (optional) 抓資料或更新資料時，嘗試加入 loading或是有助於改善UX之效果。
   8. (optional)以Reactive Form實做各功能
4. 登入功能

   1. 透過Angular Reactive Form實做
   2. 未登入成功前無法進入會員帳號頁面。在未登入時透過輸入URL繞過Login機制，需要將畫面重導回登入頁。(關鍵字：CanActivate、CanActivateChild)
   3. 帳號與密碼為必填，未填寫完整前必須將登入按鈕 disable。
   4. 使用者點擊過的輸入欄位，有違反驗證規則的情況必須提示使用者，呈現於畫面上 
   5. 登入失敗需要提示使用者
   6. (optional)若使用者已登入過，則不再進入登入畫面

5. 公告列表 - [參考畫面](https://spaceadmin.hyweb.com.tw/announcement/#/listAnnouncements)
   1. 取得公告列表，並呈現標題、建立日期、有效日期與狀態欄位
   2. 可依照標題與內文查詢資料
   3. 必須實作分頁功能
   4. 點選標題後可進入檢視公告明細，依序為標題、公告時間與內文[參考畫面](https://space.hyweb.com.tw/#/listAnnouncements/2c9191c351477f860151479fc7570002)
