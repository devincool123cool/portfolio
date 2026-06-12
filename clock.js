function updateClock() {
    const estTime = new Date().toLocaleString('en-US', { 
        timeZone: 'America/New_York',
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    
    document.getElementById('estTime').textContent = estTime;
}

// Update clock immediately
updateClock();

// Update clock every second
setInterval(updateClock, 1000);