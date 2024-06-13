import React from "react";
import ItemList from "./ItemList";

function AddPurchase({
  name,
  setName,
  items,
  addItemField,
  handleItemChange,
  handleRemoveItem,
  addPurchase,
}) {
  return (
    <div className="mb-4 p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">Add Purchase</h2>
      <input
        type="text"
        placeholder="Namanya siapa?"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mb-2 w-full text-black rounded-lg"
      />
      <ItemList
        items={items}
        handleItemChange={handleItemChange}
        handleRemoveItem={handleRemoveItem}
      />
      <div className="flex gap-2">
        <button
          onClick={addItemField}
          className="bg-blue-400 text-white p-2 rounded "
        >
          ➕ Items
        </button>
        <button
          onClick={addPurchase}
          className="bg-green-500 text-white p-2 rounded"
        >
          Add Purchase
        </button>
      </div>
    </div>
  );
}

export default AddPurchase;
