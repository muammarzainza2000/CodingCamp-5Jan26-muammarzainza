let todos = [];

function add_todo() {

  const input_activity = document.getElementById('activity');
  const input_date = document.getElementById('date');

  // Validasi
  if (input_activity.value === '' || input_date.value === '') {
    alert("Kolom tidak boleh ada yang kosong!");
  } else {
    const new_add = {
      act: input_activity.value,
      date: input_date.value 
    };
    
    todos.push(new_add);
    rendertodo();
    
    input_activity.value = '';
    input_date.value = '';
  }
} 

function rendertodo() {
  const todolist = document.getElementById('list');
  const filterValue = document.getElementById('filterTime').value;
  
  // Ambil tanggal hari ini dalam format YYYY-MM-DD
  const today = new Date().toISOString().split('T')[0];
  
  todolist.innerHTML = '';

  // Logika Filter
  let filteredTodos = todos.filter(item => {
    if (filterValue === 'today') {
      return item.date === today;
    } else if (filterValue === 'upcoming') {
      return item.date > today;
    } else if (filterValue === 'past') {
      return item.date < today;
    }
    return true; 
  });

 
  if (filteredTodos.length === 0) {
    todolist.innerHTML = '<li>Tidak ada tugas untuk kategori ini.</li>';
  } else {
    filteredTodos.forEach((item) => {
      todolist.innerHTML += `<li>${item.act} - <b>(${item.date})</b></li>`;
    });
  }
}
function deleteall() {
  todos = [];
  rendertodo();
}