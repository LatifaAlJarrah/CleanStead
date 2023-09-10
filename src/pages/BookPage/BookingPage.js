import React from "react";

import { PageContainer } from "../../component/PageContainer";

import { ServiceBooking } from "./components/ServiceBooking";
import { BookingProvider } from "../../Context/BookingContext";

const BookingPage = () => {
  return (
    <BookingProvider>
      <PageContainer>
        <ServiceBooking />
      </PageContainer>
    </BookingProvider>
  );
};

export default BookingPage;
