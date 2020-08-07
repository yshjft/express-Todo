document.querySelectorAll("#edit").forEach(function(edit){
    edit.addEventListener("click", function(e){
        let address="/edit/"+e.target.name;
        location.href=address;
    });
});

document.querySelectorAll("#delete").forEach(function(edit){
    edit.addEventListener("click", function(e){
        let _id=e.target.name;
        if(confirm('really?')){
            let data={
              id : _id
            }
    
            const xhr= new XMLHttpRequest();
            xhr.onload=function(){
              location.href='/todos';
            }
            xhr.onerror=function(){
              console.error(xhr.responseText);
            }
    
            xhr.open('DELETE', '/todo/delete')
            xhr.setRequestHeader('Content-Type','application/json');
            xhr.send(JSON.stringify(data));
          }
    });
});

document.querySelectorAll("#changePriority").forEach(function(edit){
    edit.addEventListener("click", function(e){
        let params=e.target.name.split(' ');
        let _event=params[0];
        let _id=params[1];
        let _priority=params[2];
        
        if(_event === 'up'){
            if(_priority === '1'){
              _priority =2;
            }
            if(_priority === '2'){
              return ;
            }
          }
    
          if(_event === 'down'){
            if(_priority === '1'){
              return;  
            }
            if(_priority === '2'){
              _priority=1;
            }
          }
    
          let data={
            id : _id,
            priority : _priority,
          }
    
          const xhr= new XMLHttpRequest();
          xhr.onload=function(){
            location.href='/todos';
          }
          xhr.onerror=function(){
            console.error(xhr.responseText);
          }
    
          xhr.open('PATCH', '/todo/priority')
          xhr.setRequestHeader('Content-Type','application/json');
          xhr.send(JSON.stringify(data));
    });
});