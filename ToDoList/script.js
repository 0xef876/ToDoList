var button = document.getElementById('button');
var input = document.getElementById('input');
var list = document.getElementById('list');
var cnt = 1;
button.addEventListener('click',clickButton);

// 입력버튼 누르면 생성해주는 함수
function clickButton(){
    var li = document.createElement('li');
    li.setAttribute("class", "list-group-item");
    li.setAttribute("id", "li"+cnt);
    li.innerHTML = input.value;
    li.style.color = "black";
    li.innerHTML += "<button style='float: right;' class='btn btn-outline-secondary' type='button' onclick='remove("+cnt+")'>X</button>";
    list.appendChild(li);
    cnt ++;
}
// 클릭했을때 삭제하는 함수
function remove(cnt){
    var clicked_li = document.getElementById('li'+cnt);
    list.removeChild(clicked_li);
}


