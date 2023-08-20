import React, { useState, useEffect } from "react";
import room from "../../../assest/room.png";
import "./ServiceBooking.css";

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
        <p>{count * 15}$</p>
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

const CleaningOption = ({ name, options, setOptions }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [service1Count, setService1Count] = useState(0);
  const [service2Count, setService2Count] = useState(0);

  React.useEffect(() => {
    const newOptions = options.filter((option) => option.name !== name);
    const newService1Option =
      service1Count > 0
        ? { count: service1Count, price: service1Count * 15 }
        : null;
    const newService2Option =
      service2Count > 0
        ? { count: service2Count, price: service2Count * 15 }
        : null;

    if (newService1Option || newService2Option) {
      const newOption = {
        name,
        services: {
          service1: newService1Option,
          service2: newService2Option,
        },
      };
      newOptions.push(newOption);
      setOptions(newOptions);

      localStorage.setItem(
        "selectedCleaningOptions",
        JSON.stringify(newOptions)
      );
    }
  }, [service1Count, service2Count]);

  const handleDetailsClick = () => {
    setShowDetails(!showDetails);
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
        <ServiceDetails
          name="غرفة النوم"
          count={service1Count}
          setCount={setService1Count}
        />
      )}
      {showDetails && (
        <ServiceDetails
          name="غرفة النوم"
          count={service2Count}
          setCount={setService2Count}
        />
      )}
    </div>
  );
};

export const ServicesClassification = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

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

// import React, { useState } from "react";
// import { Accordion, Card } from "react-bootstrap";
// import room from "../../../assest/room.png";
// import "./ServiceBooking.css";

// const CleaningOption = ({ name, options, setOptions }) => {
//   const [showDetails, setShowDetails] = useState(false);
//   const [showServiceDetails, setShowServiceDetails] = useState(false);
//   const [count, setCount] = useState(1);
//   const price = count * 15;
//   const [isChecked, setIsChecked] = useState(false);

//   const handleTextChange = () => {
//     setIsChecked(!isChecked);
//     setShowServiceDetails(!showServiceDetails);
//   };

//   const handleDetailsClick = () => {
//     setShowDetails(!showDetails);
//   };

//   const handleServiceDetailsClick = () => {
//     setShowServiceDetails(!showServiceDetails);
//   };

//   const handleIncrement = () => {
//     setCount(count + 1);
//   };

//   const handleDecrement = () => {
//     if (count > 1) {
//       setCount(count - 1);
//     }
//   };

//   const handleSelect = () => {
//     const newOption = {
//       name,
//       count,
//       price
//     };
//     setOptions([...options, newOption]);
//   };

//   return (
//     <Card>
//       <Accordion.Toggle as={Card.Header} eventKey={name}>
//         <div className="row service-container rounded-xl mr-2 py-2">
//           <div className="col-md-6 text-end">
//             <div className="font-medium text-lg ">{name}</div>
//           </div>
//           <div className="col-md-6 text-start">
//             <p
//               className="cursor-pointer text-tahiti"
//               onClick={() => {
//                 handleDetailsClick();
//                 handleTextChange();
//               }}
//             >
//               {isChecked ? "اخفاء الخدمات" : "رؤية الخدمات"}
//             </p>
//           </div>
//         </div>
//       </Accordion.Toggle>
//       <Accordion.Collapse eventKey={name}>
//         <Card.Body>
//           <div className="flex p-3 justify-between items-center service-container rounded-xl mr-2">
//             <div>
//               <input
//                 type="checkbox"
//                 id={`${name}-checkbox`}
//                 className="checkbox w-8 h-8 counter rounded-xl"
//                 onClick={handleSelect}
//               />
//             </div>
//             <img src={room} alt={name} className="w-20 h-20 rounded-xl" />
//             <p>غرفة النوم</p>
//             <p>{price}$</p>
//             <div className="flex justify-between w-28">
//              <button
//               className="w-8 h-8 flex justify-center items-center btn-increment rounded-xl"
//               onClick={handleIncrement}
//             >
//               +
//             </button>
//             <p className="w-8 h-8 flex justify-center items-center counter rounded-xl">
//               {count}
//             </p>
//             <button
//               className="w-8 h-8 flex justify-center items-center btn-decrement rounded-xl"
//               onClick={handleDecrement}
//             >
//               -
//             </button>
//           </div>

//           <div
//             className="flex justify-center items-center text-tahiti"
//             onClick={handleServiceDetailsClick}
//           >
//             <p className="cursor-pointer" onClick={handleTextChange}>
//               {isChecked ? "اخفاء التفاصيل" : "رؤية التفاصيل"}
//             </p>
//           </div>

//           {showServiceDetails && (
//             <div className="px-5 pt-2">
//               <div className="text-color text-sm font-normal">
//                 العناصر التي سيتم تنظيفها في هذه الغرفة
//               </div>

//               <ul className=" list-disc list-inside mt-3">
//                 <li>العناصر المختارة</li>
//                 <li>العناصر المختارة</li>
//                 <li>العناصر المختارة</li>
//               </ul>
//             </div>
//           )}
//          </div>
//         </Card.Body>
//       </Accordion.Collapse>
//     </Card>
//   );
// };

// export const ServicesClassification = () => {
//   const [selectedOptions, setSelectedOptions] = useState([]);

//   const handleSaveAll = () => {
//     localStorage.setItem(
//       "selectedCleaningOptions",
//       JSON.stringify(selectedOptions)
//     );
//   };

//   return (
//     <div className="booking-list p-4">
//       <div className="font-medium xl:text-xl sm:text-base h-8 mb-6">
//         اختر الخدمات التي تحتاج تنظيفها من أي تصنيف تريده
//       </div>
//       <Accordion>
//         <CleaningOption
//           name="تنظيف المنازل"
//           options={selectedOptions}
//           setOptions={setSelectedOptions}
//         />
//         <CleaningOption
//           name="التنظيف التجاري"
//           options={selectedOptions}
//           setOptions={setSelectedOptions}
//         />
//         <CleaningOption
//           name="تنظيف النوافذ"
//           options={selectedOptions}
//           setOptions={setSelectedOptions}
//         />
//         <CleaningOption
//           name="تنظيف السجاد"
//           options={selectedOptions}
//           setOptions={setSelectedOptions}
//         />
//       </Accordion>
//       <button onClick={handleSaveAll}>Save All to Local Storage</button>
//     </div>
//   );
// };
