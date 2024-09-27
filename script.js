// Initialize Telegram Web App
Telegram.WebApp.ready();

let balance = 0;
let lastCollectedTime = null;

// Function to collect coins
function collectCoins() {
    const now = new Date();

    // Check if 3 hours have passed since the last collection
    if (!lastCollectedTime || (now - lastCollectedTime) >= 3 * 60 * 60 * 1000) {
        balance += 33;
        lastCollectedTime = now;
        document.getElementById('balance').innerText = `Your balance: ${balance} coins`;
        document.getElementById('message').innerText = 'You have collected 33 coins!';
    } else {
        const hoursLeft = 3 - Math.floor((now - lastCollectedTime) / (60 * 60 * 1000));
        document.getElementById('message').innerText = `You can collect coins again in ${hoursLeft} hour(s).`;
    }
}

// Function to get the invite link
function getInviteLink() {
    const userId = Telegram.WebApp.initDataUnsafe.user.id; // Get the Telegram user's ID
    const inviteLink = `https://t.me/panda_dubu_bot?start=${userId}`; // Use their Telegram ID for the link
    alert(`Invite your friends using this link: ${inviteLink}`);
}

// Event listeners for buttons
document.getElementById('collectBtn').addEventListener('click', collectCoins);
document.getElementById('inviteBtn').addEventListener('click', getInviteLink);
