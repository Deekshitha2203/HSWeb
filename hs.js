window.addEventListener('scroll', function() {
    var header = document.getElementById('main-header');
    var sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }

    // Squeeze header based on scroll position
    var squeezeFactor = 1 - (window.pageYOffset / (window.innerHeight + document.getElementById('sec2').offsetHeight));
    header.style.padding = (20 * squeezeFactor) + 'px';
});

function toggleSize() {
    var homeDiv = document.getElementById('sec1');
    homeDiv.classList.toggle('enlarged'); // Toggle the 'enlarged' class
}


document.querySelector('#scroll-down-arrow a').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#content').scrollIntoView({
        behavior: 'smooth'
    });
});

function openModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
}


function openResearchPapersModal() {
    document.getElementById('researchPapersModal').style.display = 'block';
}

function closeResearchPapersModal() {
    document.getElementById('researchPapersModal').style.display = 'none';
}
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
}

// Function to close the modal for internships
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Function to open the SOPs & LORs modal
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
}

// Function to close the SOPs & LORs modal
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    var modals = document.getElementsByClassName("modal");
    for (var i = 0; i < modals.length; i++) {
        var modal = modals[i];
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

// Function to open the modal for graduate exams
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
}

// Function to close the modal for graduate exams
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Function to close the modal when clicking outside the modal content
window.onclick = function(event) {
    var modals = document.getElementsByClassName('modal');
    for (var i = 0; i < modals.length; i++) {
        var modal = modals[i];
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
