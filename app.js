
setInterval(updateTime, 1000);  // Update every second
function updateTime() {
            const now = new Date();
            const utcTime = now.toUTCString().split(' ')[4];
            const utcDate = now.toUTCString().split(' ').slice(0, 4).join(' ');  // Get the first four parts (day, month, date, and year)
            const day = now.toLocaleDateString('en-US', { weekday: 'long' });

            document.getElementById('time').textContent = utcTime;
            document.getElementById('day').textContent = day;
            document.getElementById('date').textContent = utcDate;
        }

        updateTime();
        setInterval(updateTime, 1000);  // Update every second