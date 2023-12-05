// Dynamic content generation

// Service Section
const serviceGrid = document.querySelector('.service-grid');
const services = ['Marketing', 'Service 2', 'Service 3', 'Service 4', 'Service 5', 'Service 6'];

services.forEach(service => {
    const serviceItem = document.createElement('div');
    serviceItem.textContent = service;
    serviceGrid.appendChild(serviceItem);
});

// Array of partner images
const partnerImages = ['gorilla.jpg', 'partner2.jpg', 'partner3.jpg', 'partner4.jpg', 'partner5.jpg', 'partner6.jpg', 'partner7.jpg', 'partner8.jpg', 'partner9.jpg', 'partner10.jpg'];

// Function to populate the partners section
function populatePartnersSection() {
    const partnersContainer = document.getElementById('partners-container');

    // Loop through partner images and append HTML to the partners container
    partnerImages.forEach(image => {
        const imageHTML = `<img src="${image}" alt="Partner">`;
        partnersContainer.innerHTML += imageHTML;
    });
}

// Call the function to populate the partners section
populatePartnersSection();


// Team Section
const teamSection = document.querySelector('.team');
const teamMembers = [
    { name: 'Team Member 1', role: 'Developer', socialMedia: ['facebook', 'twitter', 'instagram'] },
    { name: 'Team Member 2', role: 'Designer', socialMedia: ['facebook', 'twitter', 'instagram'] },
    { name: 'Team Member 2', role: 'Designer', socialMedia: ['facebook', 'twitter', 'instagram'] },
    { name: 'Team Member 2', role: 'Designer', socialMedia: ['facebook', 'twitter', 'instagram'] },
    { name: 'Team Member 2', role: 'Designer', socialMedia: ['facebook', 'twitter', 'instagram'] },
    { name: 'Team Member 2', role: 'Designer', socialMedia: ['facebook', 'twitter', 'instagram'] },
    { name: 'Team Member 2', role: 'Designer', socialMedia: ['facebook', 'twitter', 'instagram'] },
    { name: 'Team Member 2', role: 'Designer', socialMedia: ['facebook', 'twitter', 'instagram'] },
    // Add more team members as needed
];

teamMembers.forEach(member => {
    const teamCard = document.createElement('div');
    teamCard.classList.add('team-card');

    const memberImage = document.createElement('img');
    memberImage.src = 'g'; // Replace with actual image URL
    memberImage.alt = member.name;

    const memberName = document.createElement('h3');
    memberName.textContent = member.name;

    const memberRole = document.createElement('p');
    memberRole.textContent = `Role: ${member.role}`;

    const socialIcons = document.createElement('div');
    socialIcons.classList.add('social-icons');

    member.socialMedia.forEach(platform => {
        const socialIcon = document.createElement('i');
        socialIcon.classList.add('fab', `fa-${platform}`);
        socialIcons.appendChild(socialIcon);
    });

    teamCard.appendChild(memberImage);
    teamCard.appendChild(memberName);
    teamCard.appendChild(memberRole);
    teamCard.appendChild(socialIcons);

    teamSection.appendChild(teamCard);
});

// Roadmap Section
const roadmapSection = document.querySelector('.roadmap');
const phases = [
    { phase: 'Phase 1', points: ['Point 1', 'Point 2', 'Point 3', 'Point 4'] },
    { phase: 'Phase 2', points: ['Point 1', 'Point 2', 'Point 3', 'Point 4'] },
    { phase: 'Phase 3', points: ['Point 1', 'Point 2', 'Point 3', 'Point 4'] },
];

phases.forEach(phase => {
    const phaseDiv = document.createElement('div');
    phaseDiv.classList.add('roadmap-phase');

    const phaseTitle = document.createElement('h3');
    phaseTitle.textContent = phase.phase;

    const pointsList = document.createElement('ul');
    phase.points.forEach(point => {
        const pointItem = document.createElement('li');
        pointItem.textContent = point;
        pointsList.appendChild(pointItem);
    });

    phaseDiv.appendChild(phaseTitle);
    phaseDiv.appendChild(pointsList);

    roadmapSection.appendChild(phaseDiv);
});
