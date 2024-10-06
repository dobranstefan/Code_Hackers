// Daily Challenge
document.addEventListener('DOMContentLoaded', () => {
    const challenges = [
        "Pick up 10 pieces of trash today!",
        "Plant a tree or a flower in your garden.",
        "Use public transportation instead of driving.",
        "Unplug devices when not in use.",
        "Reduce water usage during your shower.",
    ];
    const dailyChallenge = document.getElementById('challengeText');
    dailyChallenge.textContent = challenges[Math.floor(Math.random() * challenges.length)];

    // Sample Leaderboard
    const leaderboard = [
        { rank: 1, username: 'EcoWarrior', score: 150 },
        { rank: 2, username: 'GreenThumb', score: 120 },
        { rank: 3, username: 'PlanetSaver', score: 100 },
    ];

    const leaderboardBody = document.querySelector('.leaderboard-table tbody');
    leaderboard.forEach(player => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${player.rank}</td><td>${player.username}</td><td>${player.score}</td>`;
        leaderboardBody.appendChild(row);
    });
});

// Close Modal Function
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Ocean Defender Game
function startOceanDefender() {
    document.getElementById('oceanDefenderModal').style.display = 'block';
    const canvas = document.getElementById('oceanCanvas');
    canvas.innerHTML = '<canvas id="oceanCanvasElement" width="400" height="300"></canvas>';
    setupOceanDefenderGame();
}

function setupOceanDefenderGame() {
    const canvas = document.getElementById('oceanCanvasElement');
    const ctx = canvas.getContext('2d');
    let score = 0;
    const fishImage = new Image();
    fishImage.src = 'https://via.placeholder.com/40x20.png?text=Fish'; // Placeholder fish image
    const fish = { x: Math.random() * 360, y: Math.random() * 260, width: 40, height: 20 };

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#b2ebf2'; // Ocean background
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(fishImage, fish.x, fish.y, fish.width, fish.height);
        ctx.fillStyle = 'white';
        ctx.font = '20px Arial';
        ctx.fillText(`Score: ${score}`, 10, 30);
    }

    function handleMouseClick(event) {
        const x = event.clientX - canvas.getBoundingClientRect().left;
        const y = event.clientY - canvas.getBoundingClientRect().top;
        if (x >= fish.x && x <= fish.x + fish.width && y >= fish.y && y <= fish.y + fish.height) {
            score += 10;
            fish.x = Math.random() * (canvas.width - fish.width);
            fish.y = Math.random() * (canvas.height - fish.height);
            draw();
        }
    }

    canvas.addEventListener('click', handleMouseClick);
    fishImage.onload = draw;
}

// Forest Guardian Game
function startForestGuardian() {
    document.getElementById('forestGuardianModal').style.display = 'block';
    const canvas = document.getElementById('forestCanvas');
    canvas.innerHTML = '<canvas id="forestCanvasElement" width="400" height="300"></canvas>';
    setupForestGuardianGame();
}

function setupForestGuardianGame() {
    const canvas = document.getElementById('forestCanvasElement');
    const ctx = canvas.getContext('2d');
    const treeImage = new Image();
    treeImage.src = 'https://via.placeholder.com/20x40.png?text=Tree'; // Placeholder tree image
    let treesPlanted = 0;

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#8bc34a'; // Forest background
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'white';
        ctx.font = '20px Arial';
        ctx.fillText(`Trees Planted: ${treesPlanted}`, 10, 30);
    }

    function handleMouseClick(event) {
        const x = event.clientX - canvas.getBoundingClientRect().left;
        const y = event.clientY - canvas.getBoundingClientRect().top;
        if (y >= canvas.height - 40) { // Simulate planting at the bottom
            treesPlanted += 1;
            draw();
        }
    }

    canvas.addEventListener('click', handleMouseClick);
    treeImage.onload = draw;
}

// Carbon Footprint Tracker Game
function startCarbonFootprint() {
    document.getElementById('carbonFootprintModal').style.display = 'block';
    const canvas = document.getElementById('carbonCanvas');
    canvas.innerHTML = '<canvas id="carbonCanvasElement" width="400" height="300"></canvas>';
    setupCarbonFootprintGame();
}

function setupCarbonFootprintGame() {
    const canvas = document.getElementById('carbonCanvasElement');
    const ctx = canvas.getContext('2d');
    let score = 0;

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#ffccbc'; // Background for carbon footprint game
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'white';
        ctx.font = '20px Arial';
        ctx.fillText(`Score: ${score}`, 10, 30);
        ctx.fillText('Click to choose eco-friendly options!', 10, 60);
    }

    canvas.addEventListener('click', () => {
        score += 10; // Increase score for choosing an option
        draw();
    });

    draw();
}
