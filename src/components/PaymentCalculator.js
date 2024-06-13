import React, { useState } from "react";
import AddPurchase from "./AddPurchase";
import DiscountAndShipping from "./DiscountAndShipping";
import PurchaseList from "./PurchaseList";

function PaymentCalculator() {
  const [name, setName] = useState("");
  const [items, setItems] = useState([{ itemName: "", itemPrice: "" }]);
  const [discount, setDiscount] = useState(0);
  const [driver, setDriver] = useState(0);
  const [data, setData] = useState([]);

  const addItemField = () => {
    setItems([...items, { itemName: "", itemPrice: "" }]);
  };

  const handleRemoveItem = (index) => () => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  const addPurchase = () => {
    if (name && items.every((item) => item.itemName && item.itemPrice)) {
      setData((prevData) => {
        const personIndex = prevData.findIndex(
          (person) => person.name === name
        );
        if (personIndex !== -1) {
          const updatedData = [...prevData];
          updatedData[personIndex].items.push(
            ...items.map((item) => ({
              name: item.itemName,
              price: parseFloat(item.itemPrice),
            }))
          );
          return updatedData;
        } else {
          return [
            ...prevData,
            {
              name,
              items: items.map((item) => ({
                name: item.itemName,
                price: parseFloat(item.itemPrice),
              })),
            },
          ];
        }
      });
      setName("");
      setItems([{ itemName: "", itemPrice: "" }]);
    }
  };

  const calculateTotal = (items, personCount) => {
    const total = items.reduce((sum, item) => sum + item.price, 0);
    const discountPercentage = parseFloat(discount ?? 0) / 100;
    const totalAfterDiscount = total - total * discountPercentage;
    const shippingCostPerPerson = driver / personCount;
    return totalAfterDiscount + shippingCostPerPerson;
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        Males ngitung kalo lagi beli barengan?, pake kalkulator ini aja 😊😊
      </h1>
      <AddPurchase
        name={name}
        setName={setName}
        items={items}
        addItemField={addItemField}
        handleItemChange={handleItemChange}
        handleRemoveItem={handleRemoveItem}
        addPurchase={addPurchase}
      />
      <DiscountAndShipping
        discount={discount}
        setDiscount={setDiscount}
        driver={driver}
        setDriver={setDriver}
      />
      {data.length > 0 && (
        <button
          className="bg-red-500 w-full mb-4 text-white p-2 rounded"
          onClick={() => setData([])}
        >
          Reset
        </button>
      )}
      <PurchaseList
        data={data}
        discount={discount}
        driver={driver}
        calculateTotal={calculateTotal}
      />
    </div>
  );
}

export default PaymentCalculator;
