import css from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";

const Modal = (props) => {
  return (
    <Card className={css.modal}>
      <header className={css.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={css.content}>
        <p>{props.message}</p>
      </div>
      <footer className={css.actions}>
        <Button onClick={props.onCloseModal}>Close</Button>
      </footer>
    </Card>
  );
};
export default Modal;
