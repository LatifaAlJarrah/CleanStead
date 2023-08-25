import React, { useState, useEffect, useMemo } from "react";

import { useTotalPriceContext } from "./TotalPriceContext";
import { useCleaningOptionsContext } from "./CleaningOptionsContext";

import "./ServiceBooking.css";
import room from "../../../assest/room.png";

const DetailsSection = ({ name, count, price }) => {
  return (
    <div className="px-5 pt-2">
      <div className="text-color text-sm font-normal">
        العناصر التي سيتم تنظيفها في هذه الغرفة
      </div>
      <ul className="list-disc list-inside mt-3">
        <li>
          {count} عنصر ({name}) بسعر إجمالي: {price}$
        </li>
        <li>
          {count} عنصر ({name}) بسعر إجمالي: {price}$
        </li>
        <li>
          {count} عنصر ({name}) بسعر إجمالي: {price}$
        </li>
      </ul>
    </div>
  );
};

const ServiceDetails = ({ name, count, setCount }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const price = count * 15;
  return (
    <div className="mt-2">
      <div className="flex p-3 justify-between items-center service-container rounded-xl mr-2">
        <div>
          <input
            type="checkbox"
            className="checkbox w-8 h-8 counter rounded-xl"
            checked={count > 0}
            readOnly
          />
        </div>
        <img src={room} alt={name} className="w-20 h-20 rounded-xl" />
        <p>{name}</p>
        <p>{price}$</p>
        <div className="flex justify-between w-28">
          <button
            className="w-8 h-8 flex justify-center items-center btn-increment rounded-xl"
            onClick={handleIncrement}
          >
            +
          </button>
          <p className="w-8 h-8 flex justify-center items-center counter rounded-xl">
            {count}
          </p>
          <button
            className="w-8 h-8 flex justify-center items-center btn-decrement rounded-xl"
            onClick={handleDecrement}
          >
            -
          </button>
        </div>
        <div
          className="flex justify-center items-center text-tahiti"
          onClick={() => setShowDetails(!showDetails)}
        >
          <p className="cursor-pointer">
            {showDetails ? "اخفاء التفاصيل" : "رؤية التفاصيل"}
          </p>
        </div>
      </div>
      {showDetails && (
        <DetailsSection name={name} count={count} price={count * 15} />
      )}
    </div>
  );
};

const CleaningOption = ({ name }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [serviceCounts, setServiceCounts] = useState({
    service1: 0,
    service2: 0,
  });

  const { dispatch } = useCleaningOptionsContext();
  const { setService1Total, setService2Total } = useTotalPriceContext();

  const memoizedServiceCounts = useMemo(() => serviceCounts, [serviceCounts]);

  useEffect(() => {
    const newService1Option =
      memoizedServiceCounts.service1 > 0
        ? {
            count: memoizedServiceCounts.service1,
            price: memoizedServiceCounts.service1 * 15,
            totalPrice: memoizedServiceCounts.service1 * 15,
          }
        : null;

    const newService2Option =
      memoizedServiceCounts.service2 > 0
        ? {
            count: memoizedServiceCounts.service2,
            price: memoizedServiceCounts.service2 * 15,
            totalPrice: memoizedServiceCounts.service2 * 15,
          }
        : null;

    const newOption = {
      name,
      services: {
        service1: newService1Option,
        service2: newService2Option,
      },
    };

    dispatch({ type: "ADD_OPTION", payload: newOption });

    if (newService1Option) {
      setService1Total(newService1Option.totalPrice);
    }
    if (newService2Option) {
      setService2Total(newService2Option.totalPrice);
    }
  }, [
    memoizedServiceCounts,
    dispatch,
    name,
    setService1Total,
    setService2Total,
  ]);

  const handleDetailsClick = () => {
    setShowDetails(!showDetails);
  };

  const handleServiceCountChange = (service, value) => {
    setServiceCounts((prevCounts) => ({
      ...prevCounts,
      [service]: value,
    }));
  };

  return (
    <div className="my-3">
      <div className="row service-container rounded-xl mr-2 py-2">
        <div className="col-md-6 text-end">
          <div className="font-medium text-lg ">{name}</div>
        </div>
        <div className="col-md-6 text-start">
          <p
            className="cursor-pointer text-tahiti"
            onClick={handleDetailsClick}
          >
            {showDetails ? "اخفاء الخدمات" : "رؤية الخدمات"}
          </p>
        </div>
      </div>
      {showDetails && (
        <>
          <ServiceDetails
            name={name}
            count={serviceCounts.service1}
            setCount={(count) => handleServiceCountChange("service1", count)}
          />
          <ServiceDetails
            name={name}
            count={serviceCounts.service2}
            setCount={(count) => handleServiceCountChange("service2", count)}
          />
        </>
      )}
    </div>
  );
};

export const ServicesClassification = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const { cleaningOptions } = useCleaningOptionsContext();

  console.log("Stored Data:", cleaningOptions.options);

  return (
    <div className="booking-list p-4">
      <div className="font-medium xl:text-xl sm:text-base h-8 mb-6">
        اختر الخدمات التي تحتاج تنظيفها من أي تصنيف تريده
      </div>
      <CleaningOption
        name="تنظيف المنازل"
        options={selectedOptions}
        setOptions={setSelectedOptions}
      />
      <CleaningOption
        name="التنظيف التجاري"
        options={selectedOptions}
        setOptions={setSelectedOptions}
      />
      <CleaningOption
        name="تنظيف النوافذ"
        options={selectedOptions}
        setOptions={setSelectedOptions}
      />
      <CleaningOption
        name="تنظيف السجاد"
        options={selectedOptions}
        setOptions={setSelectedOptions}
      />
    </div>
  );
};
