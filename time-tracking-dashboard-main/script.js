const body = document.querySelector('body');

const statWindow = document.querySelectorAll('.stat');
let timeSelected = 'weekly';

// TIME LISTENERS
const timeOptions = document.querySelectorAll('.time');

timeOptions.forEach((el) =>
  el.addEventListener('click', function (e) {
    timeOptions.forEach((el) => {
      el.classList.remove('active');
    });
    e.target.classList.add('active');

    timeSelected = e.target.innerText.toLowerCase();

    getObj();
  })
);

// SETTING COLORS AND IMGS

let statIcons = [];

statWindow.forEach((el) => {
  statIcons.push(el.previousElementSibling);
});

let colors = {
  Work: 'hsl(15, 100%, 70%)',
  Play: 'hsl(195, 74%, 62%)',
  Study: 'hsl(348, 100%, 68%)',
  Exercise: 'hsl(145, 58%, 55%)',
  Social: 'hsl(264, 64%, 52%)',
  Selfcare: 'hsl(43, 84%, 65%)',
};

//FILLING STATS WINDOWS

const getObj = async () => {
  const data = await fetch(`./data.json`);

  stats = await data.json();

  statWindow.forEach((el, i) => {
    [el.children].forEach((child) => {
      child[0].innerText = stats[i].title;
      child[2].innerText = `${stats[i].timeframes[timeSelected].current}hrs`;
      if (timeSelected === 'daily') {
        child[3].children[0].innerText = `Yesterday`;
      } else {
        child[3].children[0].innerText = `Last ${timeSelected.slice(0, -2)}`;
      }
      child[3].children[1].innerText = `${stats[i].timeframes[timeSelected].previous}hrs`;

      statIcons[i].style.backgroundImage = `url(./images/icon-${stats[
        i
      ].title.toLowerCase()}.svg)`;

      console.log(colors[stats[i].title]);
      statIcons[i].style.backgroundColor = colors[stats[i].title];
    });
  });

  body.style.opacity = 1;
};

getObj();
