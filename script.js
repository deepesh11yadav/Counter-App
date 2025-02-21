let count = 0;
    const counter = document.getElementById('counter');

    document.getElementById('add').addEventListener('click', () => {
      count++;
      counter.textContent = count;
    });

    document.getElementById('subtract').addEventListener('click', () => {
      count--;
      counter.textContent = count;
    });