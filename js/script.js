window.onload = () => {
    const hourSelect = document.getElementById("hourSelect");
    const minuteSelect = document.getElementById("minuteSelect");
  
    for (let h = 0; h < 24; h++) {
      const option = document.createElement("option");
      option.value = h;
      option.text = h.toString().padStart(2, "0");
      hourSelect.appendChild(option);
    }
  
    for (let m = 0; m < 60; m += 5) {
      const option = document.createElement("option");
      option.value = m;
      option.text = m.toString().padStart(2, "0");
      minuteSelect.appendChild(option);
    }
  };
  
  function calculateSleepTimes() {
    const hour = parseInt(document.getElementById("hourSelect").value);
    const minute = parseInt(document.getElementById("minuteSelect").value);
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";
  
    const wakeDate = new Date();
    wakeDate.setHours(hour);
    wakeDate.setMinutes(minute);
  
    const sleepCycles = [6, 5, 4, 3];
    const results = sleepCycles.map(cycle => {
      const sleepTime = new Date(wakeDate.getTime() - cycle * 90 * 60000);
      const h = sleepTime.getHours().toString().padStart(2, '0');
      const m = sleepTime.getMinutes().toString().padStart(2, '0');
      return `${h}:${m}`;
    });
  
    results.forEach(time => {
      const card = document.createElement("div");
      card.className = "time-card";
      card.textContent = time;
      resultsContainer.appendChild(card);
    });
  }