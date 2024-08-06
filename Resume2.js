function addCareerObjective() {
    const container = document.getElementById('careerObjectiveContainer');
    const textarea = document.createElement('textarea');
    textarea.className = 'careerObjective-entry';
    textarea.placeholder = 'Career Objective Description';
    container.appendChild(textarea);
}

function addAcademic() {
    const container = document.getElementById('academicContainer');
    const div = document.createElement('div');
    div.className = 'academic-entry';
    div.innerHTML = `
        <input type="text" class="academic-start" placeholder="Start Year" required>
        <input type="text" class="academic-end" placeholder="End Year" required>
        <input type="text" class="academic-course" placeholder="Course" required>
    `;
    container.appendChild(div);
}

function addExperience() {
    const container = document.getElementById('experienceContainer');
    const textarea = document.createElement('textarea');
    textarea.className = 'experience-entry';
    textarea.placeholder = 'Experience Description';
    container.appendChild(textarea);
}

function addSkill() {
    const container = document.getElementById('skillsContainer');
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'skill-entry';
    input.placeholder = 'Skill: level';
    container.appendChild(input);
}

function addLanguage() {
    const container = document.getElementById('languagesContainer');
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'language-entry';
    input.placeholder = 'Language';
    container.appendChild(input);
}

function addProject() {
    const container = document.getElementById('projectsContainer');
    const textarea = document.createElement('textarea');
    textarea.className = 'project-entry';
    textarea.placeholder = 'Project Description';
    container.appendChild(textarea);
}

function addInternship() {
    const container = document.getElementById('internshipsContainer');
    const div = document.createElement('div');
    div.className = 'internship-entry';
    div.innerHTML = `
        <input type="text" class="internship-year" placeholder="Year" required>
        <textarea class="internship-description" placeholder="Internship Description" required></textarea>
    `;
    container.appendChild(div);
}

function addHobby() {
    const container = document.getElementById('hobbiesContainer');
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'hobby-entry';
    input.placeholder = 'Hobby';
    container.appendChild(input);
}

function generateResume() {
    const profileImage = document.getElementById('photo').files[0];
    const reader = new FileReader();
    reader.onloadend = function () {
        document.getElementById('profileImage').innerHTML = `<img src="${reader.result}" alt="Profile Photo">`;
    };
    if (profileImage) {
        reader.readAsDataURL(profileImage);
    }

    document.getElementById('displayName').textContent = document.getElementById('name').value;
    document.getElementById('displayTitle').textContent = document.getElementById('title').value;
    document.getElementById('displayPhone').textContent = document.getElementById('phone').value;
    document.getElementById('displayEmail').textContent = document.getElementById('email').value;
    document.getElementById('displayLinkedIn').textContent = document.getElementById('linkedin').value;
    document.getElementById('displayAddress').textContent = document.getElementById('address').value;
    document.getElementById('displayAbout').textContent = document.getElementById('about').value;

    const careerObjectives = Array.from(document.getElementsByClassName('careerObjective-entry'));
    document.getElementById('displayCareerObjective').innerHTML = careerObjectives.map(obj => `<li>${obj.value}</li>`).join('');

    const academics = Array.from(document.getElementsByClassName('academic-entry'));
    document.getElementById('displayAcademic').innerHTML = academics.map(academic => `
        <li>${academic.querySelector('.academic-start').value} - ${academic.querySelector('.academic-end').value}: ${academic.querySelector('.academic-course').value}</li>
    `).join('');

    const experiences = Array.from(document.getElementsByClassName('experience-entry'));
    document.getElementById('displayExperience').innerHTML = experiences.map(exp => `<li>${exp.value}</li>`).join('');

    const skills = Array.from(document.getElementsByClassName('skill-entry'));
    document.getElementById('displaySkills').innerHTML = skills.map(skill => `<li>${skill.value}</li>`).join('');

    const languages = Array.from(document.getElementsByClassName('language-entry'));
    document.getElementById('displayLanguages').innerHTML = languages.map(lang => `<li>${lang.value}</li>`).join('');

    const hobbies = Array.from(document.getElementsByClassName('hobby-entry'));
    document.getElementById('displayHobbies').innerHTML = hobbies.map(hobby => `<li>${hobby.value}</li>`).join('');

    const projects = Array.from(document.getElementsByClassName('project-entry'));
    document.getElementById('displayProjects').innerHTML = projects.map(proj => `<li>${proj.value}</li>`).join('');

    const internships = Array.from(document.getElementsByClassName('internship-entry'));
    document.getElementById('displayInternships').innerHTML = internships.map(internship => `
        <li>${internship.querySelector('.internship-year').value}: ${internship.querySelector('.internship-description').value}</li>
    `).join('');
}

function downloadResume() {
    const element = document.getElementById('resumeContainer');
    const opt = {
        margin: 0,
        filename: 'Ansar_Hansi_Resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(element).set(opt).save();
}
