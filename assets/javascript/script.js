// 去取得 DOM 上面 class 名稱是 todo-list 的節點
const todoList = document.querySelector('.todo-list');

// 去取得 todoList 中 class 名稱是 todo-list__form 的節點
const todoListFrom = todoList.querySelector('#create-todo-list');
// 去取得 todoListFrom 中的第一個 button 節點
const todoListFromButton = todoListFrom.querySelector('button');
// 去取得 todoListFrom 中的第一個 input 節點
const todoListFromInput = todoListFrom.querySelector('input');

// 去取得 todoList 中 id 名稱是 search-todo-list 的節點
const todoListSearch = todoList.querySelector('#search-todo-list');
// 去取得 todoListSearch 中的第一個 button 節點
const todoListSearchButton = todoListSearch.querySelector('button');
// 去取得 todoListSearch 中的第一個 input 節點
const todoListSearchInput = todoListSearch.querySelector('input');

// 去取得 todoList 中 class 名稱是 todo-list__tabs 底下的 li 節點
const todoListTabs = todoList.querySelectorAll('.todo-list__tabs li');

// 去取得 todoList 中 class 名稱是 todo-list__items 的節點
const todoListItems = todoList.querySelector('.todo-list__items');

// 去取得 todoList 中 class 名稱是 todo-list__info 的節點
const todoListInfo = todoList.querySelector('.todo-list__info');

// 去取得 localStorage 上方的資料，若沒有結果的話會回傳結果 null
// 使用短路求值的技巧做操作
let todoListData = JSON.parse(localStorage.getItem('todoList')) || [];

// 定義整個 todo list 的初始狀態
let currentStatus = '全部';

// 定義一個關鍵字
let keyword = '';

// 建立一個協助我們宣染頁面 todo list 的函式
const renderTodoList = () => {
  // 在此處先宣告一個將要被宣染到 html 的變數，沒有跟賦值一起操作是為了讓過程比較好修改與理解
  let todoListUI;

  todoListUI =
    currentStatus === '全部'
      ? todoListData
      : todoListData.filter((element) => element.status === currentStatus);

  todoListUI = todoListUI.filter((element) => element.title.includes(keyword));

  // 讓要被宣染到 html 的物件，指定成一個 map 出來的新陣列，此處將會回傳一個 html 模板
  todoListUI = todoListUI.map(
    (element, index) =>
      `<li>
        <label for="check_${index}">
          <input type="checkbox"
            onclick="editTodoItemStatus(${element.id})"
            ${element.status !== '代辦' ? 'checked' : ''}
            id="check_${index}">
          <h2>${element.title}</h2>
        </label>
        <span>${element.status}</span>
        <span class="material-symbols-outlined"
              onclick="deleteTodoItem(${element.id})">
            delete
        </span>
      </li>`,
  );

  // 這裡可以個別將 todoListUI 與 todoListData 列印出來，並觀察其中的差異
  console.log(todoListData); // 陣列資料
  console.log(todoListUI.join('')); // 要被宣染到 html 的內容

  // 這裡會將 todoListItems 這個 node 節點所在的 html，置換為下方的其中一種方式
  // 這裡藉由三元運算`式的方式，去判斷目前陣列是否有內容（用長度判斷），若沒有內容的話新增一個提示區塊
  todoListItems.innerHTML = todoListUI.length
    ? todoListUI.join('')
    : '<div class="todo-list__not-found">目前沒有內容</div>';

  todoListInfo.innerHTML = `${
    keyword ? '關鍵字：' + keyword : ''
  }目前的${currentStatus}共： ${todoListUI.length} 筆`;
};

const updateLocalStorage = () => {
  // 將已經新增資料的陣列，轉成 JSON 格式之後上傳到 localStorage 上面，這裡的機碼(儲存位子)使用 todoList
  localStorage.setItem('todoList', JSON.stringify(todoListData));
};

const editTodoItemStatus = (id) => {
  // 對原始資料的陣列進行搜尋，並取得符合輸入 id 的資料結果
  const itemData = todoListData.find((element) => element.id === id);

  // 對資料的狀態進行狀態上的判斷，隨後再將判斷出的結果進行賦值操作
  itemData.status = itemData.status !== '代辦' ? '代辦' : '已完成';

  // 觸發畫面繪製的函式
  renderTodoList();

  // 觸發 updateLocalStorage 的函式操作
  updateLocalStorage();
};

const deleteTodoItem = (id) => {
  // 將 todoListData 重新給予一個沒有包括傳入 id 物件的陣列
  todoListData = todoListData.filter((element) => element.id !== id);

  // 觸發畫面繪製的函式
  renderTodoList();

  // 觸發 updateLocalStorage 的函式操作
  updateLocalStorage();
};

// 幫 todoListFromButton 這個節點新增按鈕點擊事件
todoListFromButton.addEventListener('click', function (event) {
  // 因為我們的 button 是放在 form 中，因此點擊時會直接觸發表單送出操作，這裡是將這一預設操作給停止
  event.preventDefault();

  // 從 todoListFormInput 上方取得他的數值
  const inputValue = todoListFromInput.value;

  // 判斷 inputValue 在被剪裁去空格之後，是否還有內容值，若變為空字串則會被轉換為 false
  if (!inputValue.trim()) {
    // 將 todoListFromInput 的數值改為空字串
    todoListFromInput.value = '';
    // 將函示進行返回操作，當一個函式 return 時後面的程式將不會運作
    return;
  }

  // 將 todoListFromInput 的數值改為空字串
  todoListFromInput.value = '';

  // 新增一筆資料到我們的 todoListData 這個 array 上面
  todoListData.push({
    // 幫資料使用目前時間建立一個 id
    id: new Date().getTime(),
    title: inputValue,
    status: '代辦',
  });

  // 觸發 updateLocalStorage 的函式操作
  updateLocalStorage();

  // 觸發畫面更新的函式，因為此時他所倚賴的陣列已經更新了內容，因此會在畫面上增加一筆項目
  renderTodoList();
});

// 幫 todoListFromButton 這個節點新增按鈕點擊事件
todoListSearchButton.addEventListener('click', function (event) {
  // 因為我們的 button 是放在 form 中，因此點擊時會直接觸發表單送出操作，這裡是將這一預設操作給停止
  event.preventDefault();

  // 設定關鍵字為 input 的 value
  keyword = todoListSearchInput.value;

  // 觸發畫面更新的函式，因為此時他所倚賴的陣列已經更新了內容，因此會在畫面上增加一筆項目
  renderTodoList();
});

// 對 todoListTabs 進行迴圈操作，幫每一個項目都執行一次函式
todoListTabs.forEach((element) => {
  // 對目前被執行的項目新增一個點擊事件
  element.addEventListener('click', () => {
    // 對 todoListTabs 進行迴圈操作，將每一個項目的 class 上的 active 做刪除
    todoListTabs.forEach((element) => element.classList.remove('active'));
    // 對目前被點擊的項目新增一個 active 的 class
    element.classList.add('active');
    // 將當前的定義設定為點擊的文字內容
    currentStatus = element.innerHTML;

    // 觸發畫面更新的函式，
    renderTodoList();
  });
});

// 此處算是初始化的操作，沒有執行的話畫面預設會是空的內容
renderTodoList();
