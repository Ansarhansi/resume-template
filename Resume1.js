
function printpdf() {
    var element = document.getElementById('print');
    html2pdf(element, {
        margin: 10,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    });
}

function addSection(sectionId, className, defaultContent) {
    var section = document.getElementById(sectionId);
    var div = document.createElement('div');
    div.className = className;
    div.innerHTML = defaultContent;
    section.appendChild(div);
}

function removeSection(event, sectionId) {
    var section = document.getElementById(sectionId);
    var children = section.getElementsByClassName(sectionId.slice(0, -1) + 'block');
    if (children.length > 1) {
        section.removeChild(children[children.length - 1]);
    }
}

function addSkill() {
    addSection('skills', 'skill', `<span><input type="checkbox" class="input-checkbox"></span><span><i class="fas fa-chevron-circle-right"></i></span><span contenteditable="true">Write your skill here</span>`);
}

function remSkill(event) {
    removeSection(event, 'skills');
}

function addLang() {
    addSection('languages', 'language', `<span><input type="checkbox" class="input-checkbox"></span><span contenteditable="true">LANGNAME</span> - <span contenteditable="true">level you know</span>`);
}

function remLang(event) {
    removeSection(event, 'languages');
}

function addAch() {
    addSection('achievement', 'achieve', `<span><input type="checkbox" class="input-checkbox"></span><span contenteditable="true">Write your achievement</span>`);
}

function remAch(event) {
    removeSection(event, 'achievement');
}

function addInt() {
    addSection('interest', 'achieve', `<span><input type="checkbox" class="input-checkbox"></span><span contenteditable="true">Write interest</span>`);
}

function remInt(event) {
    removeSection(event, 'interest');
}

function addEdu() {
    addSection('education', 'edublock', `<span><input type="checkbox" class="input-checkbox"></span><span class="education-head" contenteditable="true">YOUR DEGREE</span><div><span contenteditable="true">Institute name</span> - <span contenteditable="true">Passing Year</span></div>`);
}

function remEdu(event) {
    removeSection(event, 'education');
}

function addExp() {
    addSection('experience', 'expblock', `<span><input type="checkbox" class="input-checkbox"></span><span class="experience-head" contenteditable="true">Job Title</span><div><span contenteditable="true">Company Name</span> - <span contenteditable="true">Duration</span></div><div contenteditable="true">Description of your responsibilities and achievements.</div>`);
}

function remExp(event) {
    removeSection(event, 'experience');
}

function addProj() {
    addSection('projects', 'projblock', `<span><input type="checkbox" class="input-checkbox"></span><span class="project-head" contenteditable="true">Project Title</span><div><span contenteditable="true">Project Duration</span></div><div contenteditable="true">Description of the project.</div>`);
}

function remProj(event) {
    removeSection(event, 'projects');
}
