import React, { useState } from 'react';

const BookAppointment = () => {
  const [selectedDay, setSelectedDay] = useState('5'); // Default selected day
  const [selectedTime, setSelectedTime] = useState('02:00 pm'); // Default selected time

  const styles = {
    container: {
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#fff',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    hero: {
      height: '300px',
      background: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1800&auto=format&fit=crop")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      padding: '0 48px'
    },
    heroTitle: {
      color: '#fff',
      fontSize: '42px',
      fontWeight: '600'
    },
    content: {
      maxWidth: '1200px',
      margin: '-50px auto 0',
      padding: '24px 48px',
      position: 'relative'
    },
    header: {
      backgroundColor: '#52b4ed',
      color: '#fff',
      padding: '16px 24px',
      borderRadius: '8px 8px 0 0',
      fontSize: '18px',
      fontWeight: '500'
    },
    form: {
      backgroundColor: '#fff',
      padding: '32px',
      borderRadius: '0 0 8px 8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '48px'
    },
    inputGroup: {
      marginBottom: '24px'
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      color: '#334155',
      fontSize: '15px'
    },
    input: {
      width: '100%',
      padding: '10px 16px',
      border: '1px solid #e2e8f0',
      borderRadius: '6px',
      fontSize: '14px'
    },
    select: {
      width: '100%',
      padding: '10px 16px',
      border: '1px solid #e2e8f0',
      borderRadius: '6px',
      fontSize: '14px',
      backgroundColor: '#fff'
    },
    calendar: {
      marginBottom: '24px'
    },
    weekDays: {
      display: 'flex',
      gap: '8px',
      marginBottom: '24px'
    },
    dayButton: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      border: '1px solid #e2e8f0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      backgroundColor: '#fff'
    },
    activeDay: {
      backgroundColor: '#52b4ed',
      color: '#fff',
      border: 'none'
    },
    dayText: {
      fontSize: '11px',
      color: 'inherit'
    },
    dayNumber: {
      fontSize: '14px',
      fontWeight: '500'
    },
    timeSlots: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
      gap: '8px',
      marginTop: '16px'
    },
    timeSlot: {
      padding: '8px 16px',
      border: '1px solid #e2e8f0',
      borderRadius: '20px',
      fontSize: '14px',
      textAlign: 'center',
      color: '#64748b',
      cursor: 'pointer'
    },
    activeTimeSlot: {
      backgroundColor: '#52b4ed',
      color: '#fff',
      border: 'none'
    },
    doctorsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))',
      gap: '24px',
      marginTop: '24px'
    },
    doctorCard: {
      backgroundColor: '#fff',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      cursor: 'pointer'
    },
    doctorImage: {
      width: '100%',
      height: '160px',
      objectFit: 'cover'
    },
    doctorInfo: {
      padding: '16px'
    },
    availableTag: {
      display: 'inline-block',
      padding: '4px 8px',
      backgroundColor: '#dcfce7',
      color: '#16a34a',
      borderRadius: '4px',
      fontSize: '12px',
      marginBottom: '8px'
    },
    doctorName: {
      fontSize: '16px',
      fontWeight: '500',
      color: '#334155',
      marginBottom: '4px'
    },
    doctorSpecialty: {
      fontSize: '14px',
      color: '#64748b'
    },
    textarea: {
      width: '100%',
      padding: '12px 16px',
      border: '1px solid #e2e8f0',
      borderRadius: '6px',
      height: '120px',
      resize: 'none',
      fontSize: '14px'
    },
    bookButton: {
      backgroundColor: '#52b4ed',
      color: '#fff',
      padding: '12px 24px',
      borderRadius: '6px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: '500',
      width: 'fit-content',
      marginLeft: 'auto'
    }
  };

  const doctors = [
    {
      name: 'Dr. Chathuri De Silva',
      specialty: 'General Dentist',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop'
    },
    {
      name: 'Dr. Dasun Shanaka',
      specialty: 'General Dentist',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&auto=format&fit=crop'
    }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>Book an appointment.</h1>
      </div>

      <div style={styles.content}>
        <div style={styles.header}>Book an Appointment</div>
        
        <div style={styles.form}>
          <div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Full name</label>
              <input type="text" style={styles.input} />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Phone Number</label>
              <input type="tel" style={styles.input} />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Services</label>
              <select style={styles.select}>
                <option>Tooth Cleaning</option>
                <option>Root Canal</option>
                <option>Braces</option>
              </select>
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Available Doctors for selected date</label>
              <div style={styles.doctorsGrid}>
                {doctors.map((doctor, index) => (
                  <div key={index} style={styles.doctorCard}>
                    <img src={doctor.image} alt={doctor.name} style={styles.doctorImage} />
                    <div style={styles.doctorInfo}>
                      <div style={styles.availableTag}>Available</div>
                      <h3 style={styles.doctorName}>{doctor.name}</h3>
                      <p style={styles.doctorSpecialty}>{doctor.specialty}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Message</label>
              <textarea style={styles.textarea} />
            </div>
          </div>

          <div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Select Your Session Date</label>
              <div style={styles.weekDays}>
                {[
                  { day: 'WED', num: '5' },
                  { day: 'THU', num: '6' },
                  { day: 'FRI', num: '7' },
                  { day: 'SAT', num: '8' },
                  { day: 'SUN', num: '9' },
                  { day: 'MON', num: '10' },
                  { day: 'TUE', num: '11' }
                ].map((item) => (
                  <div
                    key={item.day}
                    style={{
                      ...styles.dayButton,
                      ...(item.num === selectedDay ? styles.activeDay : {})
                    }}
                    onClick={() => setSelectedDay(item.num)}
                  >
                    <span style={styles.dayText}>{item.day}</span>
                    <span style={styles.dayNumber}>{item.num}</span>
                  </div>
                ))}
              </div>

              <label style={styles.label}>Available slots for the selected Doctor</label>
              <div style={styles.timeSlots}>
                {['02:00 pm', '03:00 pm', '04:00 pm', '05:00 pm', '06:00 pm', '07:00 pm'].map((time, index) => (
                  <div
                    key={index}
                    style={{
                      ...styles.timeSlot,
                      ...(time === selectedTime ? styles.activeTimeSlot : {})
                    }}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </div>
                ))}
              </div>
            </div>

            <button style={styles.bookButton}>Book Appointment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
