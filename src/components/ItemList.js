import React from "react";

function ItemList({ items, handleItemChange, handleRemoveItem }) {
  return (
    <>
      {items.map((item, index) => (
        <div key={index} className="lg:flex lg:gap-2 block mb-2">
          <input
            type="text"
            placeholder="Apa yang dibeli?"
            value={item.itemName}
            onChange={(e) => {
              if (e.target.value >= 0) {
                let number = parseFloat(e.target.value);
                e.target.value = number;
              } else if (e.target.value < 0) {
                e.target.value = 0;
              }

              handleItemChange(index, "itemName", e.target.value);
            }}
            className="border p-2 w-full mb-2 lg:mb-0 lg:w-5/12 text-black rounded-lg"
          />
          <input
            type="number"
            placeholder="harganya berapa?"
            value={item.itemPrice}
            onChange={(e) => {
              if (e.target.value >= 0) {
                let number = parseFloat(e.target.value);
                e.target.value = number;
              } else if (e.target.value < 0) {
                e.target.value = 0;
              }

              handleItemChange(index, "itemPrice", e.target.value);
            }}
            className="border p-2 w-full mb-2 lg:mb-0 lg:w-5/12 text-black rounded-lg"
          />
          <button
            onClick={handleRemoveItem(index)}
            className="bg-red-500 w-full mb-2 lg:mb-0 text-white p-2 rounded lg:w-2/12"
          >
            ✖️Remove
          </button>
        </div>
      ))}
    </>
  );
}

export default ItemList;
