const toggleBodyOverflow = () => {
  document.body.style.overflow
    ? (document.body.style.overflow = "")
    : (document.body.style.overflow = "hidden");
};

export default toggleBodyOverflow;
