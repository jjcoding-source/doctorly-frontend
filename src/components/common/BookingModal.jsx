import { useState } from 'react';
import Button from './Button';

const BookingModal = ({ isOpen, onClose, doctor, selectedDate, selectedTime, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden">
        <div className="p-8">
          <h2 className="text-2xl font-semibold mb-2">Confirm Appointment</h2>
          <p className="text-gray-600">Please review your booking details</p>

          <div className="mt-8 space-y-6">
            <div className="flex gap-4">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex-shrink-0" />
              <div>
                <h3 className="font-semibold">{doctor.name}</h3>
                <p className="text-sm text-gray-600">{doctor.specialty}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 text-sm">
              <div>
                <p className="text-gray-500">Date</p>
                <p className="font-medium">{selectedDate}</p>
              </div>
              <div>
                <p className="text-gray-500">Time</p>
                <p className="font-medium">{selectedTime}</p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Reason for Visit</label>
              <textarea 
                className="w-full h-24 border border-gray-300 rounded-2xl p-4 resize-y"
                placeholder="Briefly describe your symptoms or reason..."
              />
            </div>
          </div>
        </div>

        <div className="border-t p-6 flex gap-4">
          <Button variant="outline" onClick={onClose} className="flex-1">
            Cancel
          </Button>
          <Button onClick={onConfirm} className="flex-1">
            Confirm Booking
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;