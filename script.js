const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const introScreen = document.getElementById('intro-screen');
const menuScreen = document.getElementById('menu-screen');
const introImg = document.getElementById('intro-img');
const introText = document.getElementById('intro-text');

// NO BUTTON LOGIC
noBtn.addEventListener('click', () => {
    introText.innerHTML = "How dare you say no to me?<br>TRY AGAIN";
    introImg.src = "assets/gangster_cat.png";
    introImg.style.display = "block";
    noBtn.innerHTML = "TRY AGAIN";
    noBtn.onclick = () => { location.reload(); };
});

// YES BUTTON LOGIC
yesBtn.addEventListener('click', () => {
    introScreen.classList.add('hidden');
    menuScreen.classList.remove('hidden');
});

// MODAL CONTROLS
function openModal(type) {
    document.getElementById('modal-overlay').classList.remove('hidden');
    document.getElementById(`modal-${type}`).classList.remove('hidden');
}

function closeModal() {
    document.getElementById('modal-overlay').classList.add('hidden');
    const modals = document.querySelectorAll('.modal');
    modals.forEach(m => m.classList.add('hidden'));
}
