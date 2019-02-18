setInterval(() => {
  document.querySelectorAll('.player-timedtext span').forEach(line => {
    const time = document.querySelector('video').currentTime;
    const sub = line.textContent;
    console.log(`${time} - "${sub}"`);
  });
}, 200);