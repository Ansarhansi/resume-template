document.getElementById('updateResumeButton').addEventListener('click', function() {
    document.getElementById('profileImage').src = document.getElementById('profileImageInput').value;
    document.getElementById('name').textContent = document.getElementById('nameInput').value;
    document.getElementById('jobTitle').textContent = document.getElementById('jobTitleInput').value;
    document.getElementById('address').textContent = document.getElementById('addressInput').value;
    document.getElementById('phone').textContent = document.getElementById('phoneInput').value;
    document.getElementById('email').textContent = document.getElementById('emailInput').value;
    document.getElementById('website').textContent = document.getElementById('websiteInput').value;
    document.getElementById('about').textContent = document.getElementById('aboutInput').value;
});
