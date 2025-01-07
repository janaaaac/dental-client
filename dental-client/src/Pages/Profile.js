
import React from 'react';

const ProfilePage = () => {
  const styles = {
    container: {
      padding: '40px 20px',
      maxWidth: '800px',
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif'
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '24px',
      paddingBottom: '16px',
      borderBottom: '1px solid #E6E6E6'
    },
    title: {
      fontSize: '24px',
      color: '#333',
      fontWeight: '500'
    },
    editButton: {
      padding: '8px 24px',
      borderRadius: '50px',
      border: '1px solid #E6E6E6',
      background: 'transparent',
      color: '#333',
      cursor: 'pointer',
      fontSize: '14px'
    },
    sectionTitle: {
      fontSize: '16px',
      color: '#666',
      marginBottom: '24px',
      fontWeight: '500'
    },
    infoGrid: {
      display: 'grid',
      gridTemplateColumns: '120px 1fr',
      gap: '20px',
      alignItems: 'center'
    },
    label: {
      fontSize: '14px',
      color: '#666',
      fontWeight: '400'
    },
    value: {
      fontSize: '14px',
      color: '#333'
    },
    infoRow: {
      marginBottom: '16px'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Kavindu Deshan</h1>
        <button style={styles.editButton}>Edit</button>
      </div>
      
      <h2 style={styles.sectionTitle}>Personal Information</h2>
      
      <div>
        <div style={styles.infoRow}>
          <div style={styles.infoGrid}>
            <div style={styles.label}>Email</div>
            <div style={styles.value}>kavindudeshan@gmail.com</div>
          </div>
        </div>

        <div style={styles.infoRow}>
          <div style={styles.infoGrid}>
            <div style={styles.label}>Phone</div>
            <div style={styles.value}>076 123 4567</div>
          </div>
        </div>

        <div style={styles.infoRow}>
          <div style={styles.infoGrid}>
            <div style={styles.label}>Gender</div>
            <div style={styles.value}>Male</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;