import { Container, Row, Col, Button } from 'react-bootstrap';

const Banner = () => {
  const heroStyles = {
    background: `linear-gradient(rgba(220, 38, 38, 0.8), rgba(153, 27, 27, 0.9)), url("https://html.tonatheme.com/2025/marketex/assets/images/banner/banner__image_1.png")`,
    // background: `linear-gradient(#d32f2f, #3e0c0c, url("https://html.tonatheme.com/2025/marketex/assets/images/banner/banner__image_1.png")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden'
  };

  const iconStyle = {
    position: 'absolute',
    color: 'rgba(255, 255, 255, 0.3)',
    fontSize: '3rem',
    zIndex: 1
  };

  return (
    <section style={heroStyles} id='home'>
      <div style={{...iconStyle, top: '5rem', left: '5rem', fontSize: '4rem'}}>📧</div>
      <div style={{...iconStyle, top: '10rem', right: '8rem', fontSize: '3.5rem'}}>📊</div>
      <div style={{...iconStyle, bottom: '10rem', left: '8rem', fontSize: '3rem'}}>💡</div>
      <div style={{...iconStyle, bottom: '5rem', right: '5rem', fontSize: '3.5rem'}}>📱</div>
      <div style={{...iconStyle, top: '15rem', left: '25%', fontSize: '2.5rem'}}>🎯</div>
      <div style={{...iconStyle, bottom: '15rem', right: '25%', fontSize: '3rem'}}>📈</div>

      <Container style={{ position: 'relative', zIndex: 10 }}>
        <Row className="justify-content-center text-center">
          <Col lg={10}>
            <h1 
              className="display-1 fw-bold text-white mb-4"
              style={{ lineHeight: '1.2' }}
            >
              Grow Your Small
              <br />
              <span style={{ color: '#fbbf24' }}>Business Online</span>
            </h1>
            
            <p 
              className="lead text-white mb-5"
              style={{ 
                fontSize: '1.5rem',
                opacity: 0.9,
                maxWidth: '800px',
                margin: '0 auto 3rem auto'
              }}
            >
              Ragency helps small businesses dominate their market with expert SEO, 
              targeted advertising, and stunning web development.
            </p>
            
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center align-items-center">
              <Button 
                variant="light"
                size="lg"
                className="fw-semibold px-4 py-3"
                style={{
                  minWidth: '200px',
                  backgroundColor: '#dc2626',
                  borderColor: '#dc2626',
                  color: 'white',
                  fontSize: '1.1rem',
                  transition: 'all 0.2s',
                  boxShadow: '0 4px 15px rgba(220, 38, 38, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.backgroundColor = '#b91c1c';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.backgroundColor = '#dc2626';
                }}
              >
                Start Growing Today
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;