import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useParams } from "react-router-dom";

const ReviewModal = ({ isOpen, setIsOpen, type, ...props }) => {
  const [reviewData, setReviewData] = useState({
    subject: "",
    reviewText: "",
    isRestaurantReview: false,
    isFoodReview: false,
    rating: 0,
  });

  const { id } = useParams();

  const handleChange = (event) => {
    setReviewData((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  const handleRating = (rating) => {
    setReviewData((prev) => ({ ...prev, rating }));
  };

  const toggleDining = () => {
    setReviewData((prev) => ({
      ...prev,
      isRestaurantReview: !prev.isRestaurantReview,
      isFoodReview: false,
    }));
  };

  const toggleDelivery = () => {
    setReviewData((prev) => ({
      ...prev,
      isRestaurantReview: false,
      isFoodReview: !prev.isFoodReview,
    }));
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const submit = () => {};

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Payment successful
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
export default ReviewModal;