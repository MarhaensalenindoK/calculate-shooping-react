import React from "react";

function PurchaseList({ data, discount, driver, calculateTotal }) {
  return (
    <>
      {data.map((person, index) => (
        <div key={index} className="mb-4 p-4 border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">{person.name}</h2>
          <ul className="list-disc list-inside mb-2">
            {person.items.map((item, idx) => (
              <li key={idx}>
                {item.name}: Rp{item.price}
              </li>
            ))}
          </ul>
          <p className="font-bold">
            Total setelah diskon {discount ?? 0}% dan ongkir(Rp {driver}): Rp
            {calculateTotal(person.items, data.length).toFixed(2)}
          </p>
        </div>
      ))}
    </>
  );
}

export default PurchaseList;
