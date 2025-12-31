const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const yesWrapper = document.getElementById('yes-wrapper');
const introScreen = document.getElementById('intro-screen');
const surpriseScreen = document.getElementById('surprise-screen');
const introImg = document.getElementById('intro-img');
const introText = document.getElementById('intro-text');

// NO Button: Gangster Cat and Remove YES
noBtn.addEventListener('click', () => {
    introText.innerHTML = "How dare you say no to me?<br>TRY AGAIN";
    introImg.src = "assets/gangster_cat.png";
    introImg.style.display = "block";
    yesWrapper.classList.add('hidden'); // YES ko hide kiya
    noBtn.innerHTML = "TRY AGAIN";
    noBtn.onclick = () => { location.reload(); }; // Wapas home par
});

// YES Button: Page Change
yesBtn.addEventListener('click', () => {
    introScreen.classList.add('hidden');
    surpriseScreen.classList.remove('hidden');
});

// Gift Click: HIDE Cat/Box and SHOW 3 Gifts
function revealItems() {
    document.getElementById('surprise-cat').classList.add('hidden');
    document.getElementById('gift-box-container').classList.add('hidden');
    
    document.getElementById('revealed-items').classList.add('show-items');
    document.getElementById('surprise-title').innerHTML = "HERE ARE YOUR GIFTS! 🎀";
}

// Modals
function openModal(type) {
    document.getElementById('modal-overlay').classList.remove('hidden');
    document.getElementById(`modal-${type}`).classList.remove('hidden');
}

function closeModal() {
    document.getElementById('modal-overlay').classList.add('hidden');
    document.querySelectorAll('.modal').forEach(m => m.classList.add('hidden'));
}
