import { useCalendarStore } from "../../hooks";

export const FabDelete = () => {
  const { startDeletingEvent, hasEventSelected } = useCalendarStore();

  const handleClickDelete = () => {
    startDeletingEvent();
  };

  return (
    <button
      onClick={handleClickDelete}
      className="btn btn-danger fab-delete"
      style={{ display: hasEventSelected ? "" : "none" }}
    >
      <i className="fa-solid fa-trash"></i>
    </button>
  );
};
