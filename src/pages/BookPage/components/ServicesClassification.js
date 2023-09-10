import React, { useState, useMemo } from "react";
import { useFormik } from "formik";
import "./ServiceBooking.css";
import room from "../../../assest/room.png";
import { useBookingContext } from "../../../Context/BookingContext";

const services = [
  {
    id: 1,
    name: "تنظيف المنازل",
    subServices: [
      {
        id: 1,
        name: "الغرفة ١",
        count: 1,
        price: 100,
      },
    ],
  },
];

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

  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {},
  });

  return (
    <form onSubmit={formik.handleSubmit}>
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
    </form>
  );
};

const CleaningOption = ({ id, name, subServices = [] }) => {
  const [showDetails, setShowDetails] = useState(false);
  const { selectedServices, setSelectedServices } = useBookingContext();

  const handleDetailsClick = () => {
    setShowDetails(!showDetails);
  };

  const isItemInArray = (array, id) => {
    return array.some((item) => item.id === id);
  };

  const updateOrAddItem = (array, newItem) => {
    const newList = array.map((item) => {
      return {
        ...item,
        count: item.id === newItem.id ? newItem.count : item.count,
      };
    });
    setSelectedServices(newList.filter((service) => service.count !== 0));
  };

  const onChangeCount = (count) => {
    const newValue = { id, count, name };
    if (isItemInArray(selectedServices, id)) {
      updateOrAddItem(selectedServices, newValue);
    } else {
      setSelectedServices([...selectedServices, newValue]);
    }
  };

  const subServiceCount = useMemo(() => {
    return (
      selectedServices.find((subservice) => subservice.id === id)?.count || 0
    );
  }, [selectedServices]);

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
          {subServices.map((subservice) => {
            return (
              <ServiceDetails
                name={subservice.name}
                count={subServiceCount}
                setCount={onChangeCount}
                key={subservice.id}
              />
            );
          })}
        </>
      )}
    </div>
  );
};

export const ServicesClassification = () => {
  return (
    <div className="booking-list p-4">
      <div className="font-medium xl:text-xl sm:text-base h-8 mb-6">
        اختر الخدمات التي تحتاج تنظيفها من أي تصنيف تريده
      </div>
      {services.map((service) => {
        return (
          <CleaningOption
            name={service.name}
            subServices={service.subServices}
            id={service.id}
            key={service.id}
          />
        );
      })}
    </div>
  );
};
