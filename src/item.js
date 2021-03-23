const Item = ({handleRemoveItem, task, id}) => {
  return (
    <div className="item-container">
      <div className="row-task">{task}</div>
      <div id={id} className="row-action" onClick={() => handleRemoveItem(id)}>Eliminar</div>
    </div>
  );
};

export default Item;
