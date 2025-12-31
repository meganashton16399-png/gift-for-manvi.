const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const yesWrapper = document.getElementById('yes-wrapper');
const introScreen = document.getElementById('intro-screen');
const surpriseScreen = document.getElementById('surprise-screen');
const introImg = document.getElementById('intro-img');
const introText = document.getElementById('intro-text');

// NO Button: Hide Yes, Show Try Again, Show Gangster
noBtn.addEventListener('click', () => {
    introText.innerHTML = "How dare you say no to me?<br>TRY AGAIN";
    introImg.src = "assets/gangster_cat.png";
    introImg.style.display = "block";
    yesWrapper.classList.add('hidden'); // Hide YES button
    noBtn.innerHTML = "TRY AGAIN";
    noBtn.onclick = () => { location.reload(); };
});

// YES Button: Show Screen 2
yesBtn.addEventListener('click', () => {
    introScreen.classList.add('hidden');
    surpriseScreen.classList.remove('hidden');
});

// Gift Click: Reveal 3 Items
function revealItems() {
    document.getElementById('revealed-items').classList.add('show-items');
    document.getElementById('surprise-title').innerHTML = "EHEHEHE GOOD<br>NOW SEE YOUR GIFTS";
}

// Modal Functions
function openModal(type) {
    document.getElementById('modal-overlay').classList.remove('hidden');
    document.getElementById(`modal-${type}`).classList.remove('hidden');
}

function closeModal() {
    document.getElementById('modal-overlay').classList.add('hidden');
    document.querySelectorAll('.modal').forEach(m => m.classList.add('hidden'));
}
