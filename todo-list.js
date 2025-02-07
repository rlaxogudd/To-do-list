const todoList=JSON.parse(localStorage.getItem('todoList')) || [
{name:'make dinner', dueDate:'2024-11-23'},
{name:'wash dishes', dueDate:'2024-11-23'}
];
//todoList'teki her bir elemanı alır ve json.parse ile objecte çevirir
//sayfayı yüklerken localStorage'den yükleyecek

renderTodoList();

function renderTodoList() {
  let todoListHTML='';

  for (let i=0; i<todoList.length; i++) {
    const todoObject = todoList[i];
    // const name= todoObject.name;
    // const dueDate = todoObject.dueDate;
    //özellik ve kaydedilecek veri aynı isimde olmalı
    const {name,dueDate}=todoObject; //*todoobject objesinin name özelliğini alır ve 'name' isimli bir veriye aktarır
    

    const html= // html kodlarını js içinde yazar
      `<div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${i},1); 
        renderTodoList();
        saveToStorage(); 
      " class="delete-todo-button">Delete</button> `; //dizideki tıkladığımız butonun indexindeki elemanı siler ve listeyi yeniler
    //listede değişiklik yaptığımızda strorage'e kaydedecek
      todoListHTML+= html;
  }

  document.querySelector('.div').innerHTML= todoListHTML;
}


function addTodo() {
  const inputElement = document.querySelector('.text-box'); //html elemanını js içine koy
  const name=inputElement.value; // text box içindeki değeri name verisine kaydet

  const dateElement = document.querySelector('.js-date');
  const dueDate=dateElement.value;
  
  todoList.push({
   // name: name, 
   // dueDate: dueDate
   //property ismi ve variable ismi aynıysa tek sefer yazılabilir
    name,
    dueDate
  }); // name ve date verisini diziye ekle
  
  inputElement.value= ''; //listeye ekledikten sonra text box'ı temizleyecek

  renderTodoList();
  saveToStorage();
}

function saveToStorage(){
  localStorage.setItem('todoList', JSON.stringify(todoList));
}
//verileri LocalStorage'e yüklemeyi sağlayan fonksiyon