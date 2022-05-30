const getLi = (title, author, id) => {
  const div = document.createElement('div');
  const removeButton = document.createElement('button');
  const li = document.createElement('li');

  div.classList.add('book-info');
  removeButton.classList.add('remove');
  removeButton.setAttribute('id', id);
  li.classList.add('book');
  li.setAttribute('id', `book${id}`);

  div.innerHTML = `${title} by ${author}`;
  removeButton.innerText = 'Remove';
  removeButton.type = 'button';

  li.appendChild(div);
  li.appendChild(removeButton);

  return li;
};

export default getLi;