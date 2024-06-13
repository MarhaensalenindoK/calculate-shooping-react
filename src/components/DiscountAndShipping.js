import React from "react";

function DiscountAndShipping({ discount, setDiscount, driver, setDriver }) {
  return (
    <div className="mb-4 p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">Ada ongkir?, berapa?</h2>
      <input
        type="number"
        placeholder="Ongkirnya?"
        value={driver}
        onChange={(e) => {
          if (e.target.value === "") {
            setDriver(0);
            return;
          }

          if (e.target.value >= 0) {
            let number = parseFloat(e.target.value);
            e.target.value = number;

            setDriver(number);
          } else if (e.target.value < 0) {
            setDriver(0);
          }
        }}
        className="border p-2 mb-2 w-full text-black rounded-lg"
      />
      <h2 className="text-xl font-semibold mb-2">
        Ada diskon?, berapa persen?
      </h2>
      <input
        type="number"
        placeholder="Ada diskon?"
        value={discount}
        onChange={(e) => {
          if (e.target.value === "") {
            setDiscount(0);
            return;
          }

          if (e.target.value >= 0 && e.target.value <= 100) {
            let number = parseFloat(e.target.value);
            e.target.value = number;

            setDiscount(number);
          } else if (e.target.value < 0) {
            setDiscount(0);
          }
        }}
        className="border p-2 mb-2 w-full text-black rounded-lg"
      />
    </div>
  );
}

export default DiscountAndShipping;
