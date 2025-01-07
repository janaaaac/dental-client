import React from 'react';

const LandingPage = () => {
  const styles = {
    container: {
      width: '100%',
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    hero: {
      height: '600px',
      background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2000&auto=format&fit=crop")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 120px',
      color: 'white'
    },
    heroTitle: {
      fontSize: '48px',
      fontWeight: '600',
      marginBottom: '16px'
    },
    heroSubtitle: {
      fontSize: '18px',
      marginBottom: '32px',
      opacity: '0.9'
    },
    buttonGroup: {
      display: 'flex',
      gap: '16px'
    },
    primaryButton: {
      backgroundColor: '#3B82F6',
      color: 'white',
      padding: '12px 24px',
      borderRadius: '6px',
      border: 'none',
      fontSize: '16px',
      cursor: 'pointer'
    },
    secondaryButton: {
      backgroundColor: 'transparent',
      color: 'white',
      padding: '12px 24px',
      borderRadius: '6px',
      border: '1px solid white',
      fontSize: '16px',
      cursor: 'pointer'
    },
    section: {
      padding: '80px 120px'
    },
    aboutSection: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '48px',
      alignItems: 'center'
    },
    sectionTitle: {
      color: '#1E3A8A',
      fontSize: '32px',
      fontWeight: '600',
      marginBottom: '16px'
    },
    sectionText: {
      color: '#64748B',
      fontSize: '16px',
      lineHeight: '1.6',
      marginBottom: '24px'
    },
    aboutImage: {
      width: '100%',
      height: '400px',
      objectFit: 'cover',
      borderRadius: '8px'
    },
    servicesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '32px',
      marginTop: '48px'
    },
    serviceCard: {
      backgroundColor: 'white',
      padding: '32px',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
      textAlign: 'center'
    },
    serviceIcon: {
      width: '64px',
      height: '64px',
      margin: '0 auto 24px',
      filter: 'invert(55%) sepia(95%) saturate(1000%) hue-rotate(165deg)'
    },
    serviceTitle: {
      fontSize: '20px',
      fontWeight: '500',
      color: '#1E3A8A',
      marginBottom: '16px'
    },
    serviceText: {
      color: '#64748B',
      fontSize: '14px',
      lineHeight: '1.6',
      marginBottom: '24px'
    },
    learnMore: {
      color: '#3B82F6',
      textDecoration: 'none',
      fontSize: '14px',
      fontWeight: '500'
    }
  };

  return (
    <div style={styles.container}>
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>"Your Trusted Dental Care Partner."</h1>
        <p style={styles.heroSubtitle}>Providing the best dental care services for your family.</p>
        <div style={styles.buttonGroup}>
          <button style={styles.primaryButton}>Book Appointment</button>
          <button style={styles.secondaryButton}>View Doctors</button>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.aboutSection}>
          <div>
            <h2 style={styles.sectionTitle}>About Us</h2>
            <p style={styles.sectionText}>
              "At DentalNet, we're committed to offering exceptional dental care with our team of 
              skilled professionals. Your smile is our priority!"
            </p>
            <button style={styles.primaryButton}>See more</button>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=2000&auto=format&fit=crop" 
            alt="Dental Care" 
            style={styles.aboutImage}
          />
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>What We Offer</h2>
        <p style={styles.sectionText}>"We provide comprehensive dental care for all your needs."</p>
        
        <div style={styles.servicesGrid}>
          {[
            {
              title: 'Teeth Cleaning',
              description: 'Regular checkup and care to keep your teeth healthy and bright.',
              icon: 'https://www.svgrepo.com/show/494278/tooth.svg'
            },
            {
              title: 'Dental Implants',
              description: 'Replace missing teeth with natural-looking, durable implants.',
              icon: 'https://www.svgrepo.com/show/494278/tooth.svg'
            },
            {
              title: 'Orthodontics',
              description: 'Achieve a straight and perfect smile with orthodontic treatment.',
              icon: 'https://www.svgrepo.com/show/494278/tooth.svg'
            }
          ].map((service, index) => (
            <div key={index} style={styles.serviceCard}>
              <img src={service.icon} alt={service.title} style={styles.serviceIcon} />
              <h3 style={styles.serviceTitle}>{service.title}</h3>
              <p style={styles.serviceText}>{service.description}</p>
              <a href="#" style={styles.learnMore}>Learn More →</a>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.section}>
        <div style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto'}}>
          <h2 style={styles.sectionTitle}>
            At DentalNet, we're committed to offering exceptional dental care with our team of skilled professionals.
          </h2>
          <p style={styles.sectionText}>
            "We offer a comprehensive range of dental services to help you achieve optimal 
            oral health and a beautiful smile. Our team of experienced and friendly dental 
            professionals is committed to providing care in a comfortable."
          </p>
          <button style={styles.primaryButton}>Meet Doctors</button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;