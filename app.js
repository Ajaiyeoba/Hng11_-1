function updateTime() {
    const now = new Date();
    const utcTime = now.toUTCString().split(' ')[4];
    const day = now.toLocaleDateString('en-US', { weekday: 'long' });

    document.getElementById('time').textContent = utcTime;
    document.getElementById('day').textContent = day;
}

updateTime();
setInterval(updateTime, 1000);  // Update every second