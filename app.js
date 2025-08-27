/*
  Qwak frontend interactions and analytics stub
  Handles waitlist form submission, simple event tracking and section observation.
*/

document.addEventListener('DOMContentLoaded', () => {
  // Utility to send analytics event (logs to console for now)
  function track(eventName) {
    const payload = {
      event: eventName,
      timestamp: new Date().toISOString(),
    };
    console.log('analytics', payload);
  }

  // Attach click event to all primary CTA buttons
  document.querySelectorAll('.btn-primary, .cta-band a').forEach(btn => {
    btn.addEventListener('click', () => track('cta_click'));
  });

  // Waitlist form submission
  const waitlistForm = document.getElementById('waitlist-form');
  if (waitlistForm) {
    waitlistForm.addEventListener('submit', e => {
      e.preventDefault();
      track('waitlist_submit');
      // Pretend success
      const formContainer = waitlistForm.parentElement;
      formContainer.innerHTML = '<p>All set—nice and tidy. Thank you for joining our waitlist!</p>';
    });
  }

  // Section view tracking using IntersectionObserver
  // Map section IDs to event names that fire when the section enters the viewport.
  const sectionMap = {
    'how-it-works': 'how_it_works_view',
    'why-qwak': 'why_view',
    'security': 'security_view',
  };
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        const event = sectionMap[id];
        if (event) {
          track(event);
          // Unobserve after first trigger to avoid repeated events
          observer.unobserve(entry.target);
        }
      }
    });
  }, { threshold: 0.5 });
  // Start observing each section defined in sectionMap
  Object.keys(sectionMap).forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });

  // Track clicks on feature cards
  document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('click', () => track('feature_card_click'));
  });

  // Track when a FAQ item is opened
  document.querySelectorAll('#faq details').forEach(detail => {
    detail.addEventListener('toggle', () => {
      if (detail.open) {
        track('faq_open');
      }
    });
  });
});