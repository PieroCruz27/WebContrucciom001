// WhatsApp service buttons
const serviceCards = document.querySelectorAll('.service-card');
const whatsappNumber = '51912345678'; // Replace with actual number

// Add click event to service cards
serviceCards.forEach(card => {
  const serviceName = card.getAttribute('data-service');
  const whatsappBtn = card.querySelector('.whatsapp-btn');
  
  whatsappBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent card click event
    
    // Create pre-filled WhatsApp message
    const message = encodeURIComponent(`Hola, estoy interesado en el servicio de ${serviceName} que vi en su página web.`);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
  });
});