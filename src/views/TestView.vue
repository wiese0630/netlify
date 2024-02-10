<template>
  <div class="wrapper">
    <form id="todo-form" class="form">
      <input required maxlength="10" type="text" placeholder="SEARCH">
      <button type="submit">제출하기</button>
    </form>
    <div class="todo-inner">
      <div class="allDelete off">
        <h2 class="tit">최근 검색어</h2>
        <span class="btn" @click="allDeleteToDo">모두 지우기 ❌</span>
      </div>
      <p class="txt">{{ noRecentSearchesMessage }}</p>
      <ul id="todo-list"></ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const toDoList = document.querySelector('#todo-list');
const allDelete = document.querySelector('.allDelete');
const txt = document.querySelector('.txt');
const TODOS_KEY = "todos";
let toDos = new Array();

const noRecentSearchesMessage = ref('');

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function allDeleteToDo() {
  localStorage.clear(toDos);
  toDoList.innerText = '최근검색어 내역이 없습니다.';
  noRecentSearchesMessage.value = '최근검색어 내역이 없습니다.';
}

function deleteToDo(e) {
  const li = e.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  if (toDos.length === 0) {
    noRecentSearchesMessage.value = '최근검색어 내역이 없습니다.';
  }
  saveToDos();
}

function paintToDo(newTodo) {
  const { id, text } = newTodo;
  const item = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  item.id = id;
  span.innerText = text;
  button.innerText = '❌';
  button.addEventListener("click", deleteToDo);
  allDelete.addEventListener("click", allDeleteToDo);
  item.appendChild(span);
  item.appendChild(button);
  toDoList.appendChild(item);
  if (newTodo !== null) {
    allDelete.classList.remove('off');
    noRecentSearchesMessage.value = '';
  }
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const toDoForm = document.querySelector('#todo-form');
  const toDoInput = toDoForm.querySelector('input');
  const newTodoItem = toDoInput.value;
  toDoInput.value = '';
  const newTodoObj = {
    id: Date.now(),
    text: newTodoItem
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

onMounted(() => {
  const savedToDos = JSON.parse(localStorage.getItem(TODOS_KEY));
  if (savedToDos !== null) {
    toDos = savedToDos;
    savedToDos.forEach(paintToDo);
  }
});
</script>

<style scoped>

</style>