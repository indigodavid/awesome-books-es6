const clearClasses = (element1, element2) => {
  element1.classList.remove('active');
  element1.classList.add('hide-class');

  element2.classList.remove('active');
  element2.classList.add('hide-class');
};

export default clearClasses;