import "../styles/Information.css";

export default function Information() {
  return (
    <div className="information-container">
      <span className="information-title">
        <div className="information-title-list">Title :</div>
        <div className="information-title-list">Date :</div>
        <div className="information-title-list">Location :</div>
        <div className="information-title-list">Comments :</div>
      </span>
      <form className="information-contents">
        <input className="information-contents-input"></input>

        <input className="information-contents-input"></input>

        <input className="information-contents-input"></input>

        <input className="information-contents-input"></input>
      </form>
    </div>
  );
}
