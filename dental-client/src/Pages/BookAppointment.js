import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  MessageSquare,
  ChevronRight,
  ChevronLeft,
  CalendarCheck,
  Heart,
  Shield,
  Stethoscope,
  Activity,
  CheckCircle, 
  Sparkles,
  Check // Add this line to import Check
} from 'lucide-react';



const BookAppointment = () => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: ''
  });

  const currentStep = step; // Define currentStep

  const services = [
    {
      id: 1,
      name: 'General Consultation',
      duration: '30 min',
      price: '$100',
      icon: <Stethoscope className="w-6 h-6" />,
      color: 'blue'
    },
    {
      id: 2,
      name: 'Specialist Visit',
      duration: '45 min',
      price: '$150',
      icon: <Activity className="w-6 h-6" />,
      color: 'purple'
    },
    {
      id: 3,
      name: 'Health Check-up',
      duration: '60 min',
      price: '$200',
      icon: <Heart className="w-6 h-6" />,
      color: 'rose'
    },
    {
      id: 4,
      name: 'Emergency Care',
      duration: '90 min',
      price: '$300',
      icon: <Shield className="w-6 h-6" />,
      color: 'red'
    }
  ];

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '02:00 PM', '02:30 PM',
    '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'
  ];

  const renderServiceCard = (service) => {
    const colorClasses = {
      blue: 'bg-blue-50 border-blue-200 text-blue-600',
      purple: 'bg-purple-50 border-purple-200 text-purple-600',
      rose: 'bg-rose-50 border-rose-200 text-rose-600',
      red: 'bg-red-50 border-red-200 text-red-600'
    };

    return (
      <div
        key={service.id}
        onClick={() => setSelectedService(service.name)}
        className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
          selectedService === service.name
            ? `border-2 ${colorClasses[service.color]} transform scale-[1.02]`
            : 'border border-gray-100 hover:border-gray-200 bg-white hover:shadow-lg'
        }`}
      >
        <div className={`inline-flex p-3 rounded-xl ${colorClasses[service.color]}`}>
          {service.icon}
        </div>
        
        <h3 className="text-lg font-semibold mt-4 text-gray-900">{service.name}</h3>
        
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center text-gray-500 text-sm">
            <Clock className="w-4 h-4 mr-1" />
            {service.duration}
          </div>
          <span className="font-semibold text-gray-900">{service.price}</span>
        </div>
      </div>
    );
  };

  const renderDatePicker = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date);
    }

    return (
      <div className="grid grid-cols-7 gap-2">
        {dates.map((date, index) => (
          <div
            key={index}
            onClick={() => setSelectedDate(date.toISOString().split('T')[0])}
            className={`flex flex-col items-center p-4 rounded-xl cursor-pointer transition-all ${
              selectedDate === date.toISOString().split('T')[0]
                ? 'bg-blue-500 text-white'
                : 'hover:bg-blue-50'
            }`}
          >
            <span className="text-xs font-medium">
              {date.toLocaleString('default', { weekday: 'short' })}
            </span>
            <span className="text-xl font-bold my-1">{date.getDate()}</span>
            <span className="text-xs">
              {date.toLocaleString('default', { month: 'short' })}
            </span>
          </div>
        ))}
      </div>
    );
  };

  const renderTimeSlots = () => (
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 mt-6">
      {timeSlots.map((time, index) => (
        <div
          key={index}
          onClick={() => setSelectedTime(time)}
          className={`p-3 rounded-xl text-center cursor-pointer transition-all ${
            selectedTime === time
              ? 'bg-blue-500 text-white'
              : 'hover:bg-blue-50 border border-gray-100'
          }`}
        >
          <span className="text-sm font-medium">{time}</span>
        </div>
      ))}
    </div>
  );

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900">Choose Service</h2>
              <p className="text-gray-500 mt-2">Select the type of appointment you need</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map(renderServiceCard)}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900">Select Date & Time</h2>
              <p className="text-gray-500 mt-2">Choose your preferred appointment slot</p>
            </div>
            
            {renderDatePicker()}
            {renderTimeSlots()}
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900">Your Information</h2>
              <p className="text-gray-500 mt-2">Please provide your contact details</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="email"
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="tel"
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 text-gray-400" size={20} />
                  <textarea
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows={4}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900">Confirm Booking</h2>
              <p className="text-gray-500 mt-2">Review your appointment details</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-gray-100">
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b">
                  <span className="text-gray-600">Service</span>
                  <span className="font-medium">{selectedService}</span>
                </div>
                
                <div className="flex justify-between items-center pb-4 border-b">
                  <span className="text-gray-600">Date</span>
                  <span className="font-medium">
                    {selectedDate && new Date(selectedDate).toLocaleDateString()}
                  </span>
                </div>
                
                <div className="flex justify-between items-center pb-4 border-b">
                  <span className="text-gray-600">Time</span>
                  <span className="font-medium">{selectedTime}</span>
                </div>
                
                <div className="flex justify-between items-center pb-4 border-b">
                  <span className="text-gray-600">Name</span>
                  <span className="font-medium">{formData.name}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Email</span>
                  <span className="font-medium">{formData.email}</span>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const renderProgress = () => {
    const steps = [
      { id: 1, label: 'Choose Service', icon: <Sparkles size={16} /> },
      { id: 2, label: 'Pick Time', icon: <Clock size={16} /> },
      { id: 3, label: 'Your Details', icon: <User size={16} /> },
      { id: 4, label: 'Confirmation', icon: <CheckCircle size={16} /> }
    ];
  
    return (
      <div className="max-w-2xl mx-auto p-6">
        <div className="relative">
          {/* Connection Lines */}
          <div className="absolute top-[1.5rem] left-[10%] right-[10%] h-0.5 bg-gray-100" />
          <div 
            className="absolute top-[1.5rem] left-[10%] h-0.5 bg-blue-500 transition-all duration-500"
            style={{ 
              width: `${((currentStep - 1) / (steps.length - 1)) * 80}%`,
              background: 'linear-gradient(90deg, #60A5FA, #3B82F6)'
            }}
          />
  
          {/* Steps */}
          <div className="relative flex justify-between">
            {steps.map((step, idx) => (
              <div key={step.id} className="flex flex-col items-center">
                {/* Step Circle with Pulse Effect */}
                <div className="relative">
                  <div
                    className={`
                      w-12 h-12 rounded-full flex items-center justify-center
                      transition-all duration-500 transform
                      ${currentStep === step.id 
                        ? 'bg-blue-500 scale-110' 
                        : currentStep > step.id 
                        ? 'bg-blue-500'
                        : 'bg-white border-2 border-gray-200'
                      }
                    `}
                  >
                    {/* Inner Circle with Icon */}
                    <div
                      className={`
                        w-10 h-10 rounded-full flex items-center justify-center
                        ${currentStep >= step.id ? 'text-white' : 'text-gray-400'}
                        ${currentStep === step.id ? 'animate-pulse' : ''}
                      `}
                    >
                      {currentStep > step.id ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        <div className="flex flex-col items-center">
                          {step.icon}
                          <span className="text-[10px] mt-0.5">{step.id}</span>
                        </div>
                      )}
                    </div>
                  </div>
  
                  {/* Pulse Effect for Current Step */}
                  {currentStep === step.id && (
                    <>
                      <div className="absolute top-0 left-0 w-12 h-12 rounded-full bg-blue-500 opacity-20 animate-ping" />
                      <div className="absolute top-0 left-0 w-12 h-12 rounded-full bg-blue-400 opacity-30 animate-pulse" />
                    </>
                  )}
                </div>
  
                {/* Label */}
                <span
                  className={`
                    mt-2 text-xs font-medium
                    ${currentStep === step.id 
                      ? 'text-blue-600' 
                      : currentStep > step.id 
                      ? 'text-blue-500'
                      : 'text-gray-400'
                    }
                  `}
                >
                  {step.label}
                </span>
  
                {/* Active Step Dots */}
                {currentStep === step.id && (
                  <div className="mt-1 flex space-x-0.5">
                    <div className="w-1 h-1 rounded-full bg-blue-500 animate-bounce" 
                         style={{ animationDelay: '0ms' }} />
                    <div className="w-1 h-1 rounded-full bg-blue-500 animate-bounce" 
                         style={{ animationDelay: '150ms' }} />
                    <div className="w-1 h-1 rounded-full bg-blue-500 animate-bounce" 
                         style={{ animationDelay: '300ms' }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {renderProgress()}
        
        <div className="bg-white rounded-2xl shadow-sm p-8">
          {renderStepContent()}
          
          <div className="flex justify-between mt-8 pt-6 border-t">
            <button
              onClick={() => setStep(Math.max(1, step - 1))}
              className={`flex items-center px-6 py-3 rounded-xl border border-gray-200 ${
                step === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
              }`}
              disabled={step === 1}
            >
              <ChevronLeft size={20} className="mr-2" />
              Back
            </button>
            
            <button
              onClick={() => step < 4 ? setStep(step + 1) : console.log('Submit')}
              className="flex items-center px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600"
            >
              {step === 4 ? 'Confirm Booking' : 'Continue'}
              {step < 4 && <ChevronRight size={20} className="ml-2" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;