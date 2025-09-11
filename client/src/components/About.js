function About () {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            // margin: '5em',
        }}>
        <img src="https://media.istockphoto.com/id/2162645329/photo/teamwork-meeting-and-ideas-for-solution-or-decision-for-business-workplace-or-company-group.jpg?s=612x612&w=0&k=20&c=GTm_8uuh-QYmJQrWh2eNiQxVxaw-Vq7tN36GtjH44hc="
        style={{borderRadius: '1em', margin: '2em'}}
        />
        <p style={{
            width: '500px',
            margin: '5em',
            fontSize: '1.2em',
            lineHeight: '30px'
        }}>
            At <span style={{fontWeight: 'bold'}}><span style={{color: 'red'}}>R</span>AGENCY</span>, we believe that less is more. We are a small and focused digital marketing agency that offers just a few essential services  but we do them exceptionally well. Our mission is to help startups and small businesses grow by delivering targeted, creative, and cost-effective marketing strategies. 

Whether it’s social media content, branding, or basic digital promotion, we put quality, clarity, and creativity at the heart of everything we do. With RAGENCY, you’re not just getting a service ,  you’re getting a committed partner for your brand’s success.
        </p>
        
        </div>

    )
}

export default About;