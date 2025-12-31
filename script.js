function nextScreen(num) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(`screen-${num}`).classList.add('active');
}

function dodge() {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('screen-meme').classList.add('active');
}

function resetNo() { nextScreen(1); }

function showText(type) {
    const modal = document.getElementById('modal');
    const content = document.getElementById('modal-content');
    modal.style.display = 'flex';

    if(type === 'letter') {
        content.innerHTML = `
            <h3 style="color: #d14d72;">Hey Mancuuuu 🎀</h3>
            <p>I know this year was really hectic for us we went through so many ups and downs moments where things felt confusing or heavy ki chordne tk agye the 💔, but somehow we still chose each other every time and honestly that means a lot to me.</p>
            <p>I’m really proud of you for everything you achieved this year for the way you kept going even when it wasn’t easy and having so many people against you hating you, at the end of the day feels comforting like no matter how messy life gets you’re still my safe place home <3</p>
            <p>I love you so much, and I’m genuinely so proud of you. Happy new year more love, more wishes kisses mwah and us, always. 💗</p>
            <button class="pink-btn" onclick="closeModal()">Close</button>`;
    } 
    else if (type === 'camera') {
        content.innerHTML = `
            <h3 style="color: #d14d72;">Our Childhood 📸</h3>
            <img src="https://i.ibb.co/pW9W3X4/childhood-pic.jpg" style="width:100%; border-radius:15px; margin-bottom:10px;">
            <p>See Manvi look at us omfg So small and u kaali , so innocent, already looking this cute together imagine kar apne bache kese lagenge.</p>
            <p>This picture feels so soothing and cute ngl. It’s crazy how even here you look like the sweetest cutu. My heart actually melted seeing this. 💗</p>
            <button class="pink-btn" onclick="closeModal()">Close</button>`;
    } 
    else if (type === 'flowers') {
        content.innerHTML = `
            <div class="animate__animated animate__fadeInUp">
                <h3 style="color: #d14d72;">For You 💐</h3>
                <p style="font-size: 3rem;">🌸🌷🌹🌻</p>
                <p>Hey Manvi, sending you lots of love and a bunch of virtual flowers, just because you deserve them and more.</p>
            </div>
            <button class="pink-btn" onclick="closeModal()">Close</button>`;
    }
}

function closeModal() { document.getElementById('modal').style.display = 'none'; }
