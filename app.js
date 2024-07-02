
function updateTime() {
            const now = new Date();
            const utcTime = now.toUTCString().split(' ')[4];
            const utcDay = now.toUTCString().split(',')[0];
            const utcDateArray = now.toUTCString().split(' ');
            const utcDate = `${utcDateArray[1]} ${utcDateArray[2]} ${utcDateArray[3]}`;  // Format as 'Date Month Year'

            document.getElementById('time').textContent = utcTime;
            document.getElementById('day').textContent = utcDay;
            document.getElementById('date').textContent = utcDate;
        }

        updateTime();
        setInterval(updateTime, 1000);  // Update every second