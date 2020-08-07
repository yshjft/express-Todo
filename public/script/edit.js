document.getElementById("submit").addEventListener("click", function(e){
    let _title=document.getElementById('title').value;
    let _date=document.getElementById('date').value;
    let _text=document.getElementById('text').value;
    let _id=document.getElementById('id').value;

    let data={
        id : _id,
        title : _title,
        date : _date,
        text : _text,
      }

    const xhr=new XMLHttpRequest();
    xhr.onload=function(){
      location.href='/todos';
    }

    xhr.onerror=function(){
      console.error(xhr.responseText);
    }

    xhr.open('PATCH', '/todo/edit');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));

});