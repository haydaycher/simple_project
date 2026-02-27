import css from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return <div className={css.backdrop} onClick={props.onCloseModal}></div>;
};
export default Backdrop;
