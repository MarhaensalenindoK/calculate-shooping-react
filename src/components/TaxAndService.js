import React from "react";

function TaxAndService({ tax, setTax, serviceCharge, setServiceCharge }) {
  return (
    <div className="mb-4 p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2 text-start">PPN</h2>
      <input
        type="number"
        placeholder="Tax (%)"
        value={tax}
        onChange={(e) => {
          if (e.target.value === "") {
            setTax(0);
            return;
          }

          if (e.target.value >= 0 && e.target.value <= 100) {
            let number = parseFloat(e.target.value);
            e.target.value = number;

            setTax(number);
          } else if (e.target.value < 0) {
            setTax(0);
          }
        }}
        className="border p-2 mb-2 w-full text-black rounded-lg"
      />

      <h2 className="text-xl font-semibold mb-2 text-start">
        Biaya servis (Kalo ada)
      </h2>
      <input
        type="number"
        placeholder="Service Charge (Rp)"
        value={serviceCharge}
        onChange={(e) => {
          if (e.target.value === "") {
            setServiceCharge(0);
            return;
          }

          if (e.target.value >= 0) {
            let number = parseFloat(e.target.value);
            e.target.value = number;

            setServiceCharge(number);
          } else if (e.target.value < 0) {
            setServiceCharge(0);
          }
        }}
        className="border p-2 mb-2 w-full text-black rounded-lg"
      />
    </div>
  );
}

export default TaxAndService;
