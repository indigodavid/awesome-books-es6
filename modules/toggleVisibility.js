const toggleVisbility = (activeEle) => {
  activeEle.classList.toggle('active');
  activeEle.classList.remove('hide-class');
};

export default toggleVisbility;