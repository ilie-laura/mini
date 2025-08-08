
export default function track() {
  const date = new Date(); // Capital D, gotta respect JS!

  console.log(date);

  const currentMonth = date.getMonth();
  const currentDay = date.getDay();
  const currentDate = date.getDate();
  const currentYear = date.getFullYear();

  console.log(currentDate);
  console.log(currentMonth);
  console.log(currentDay);
  console.log(currentYear);

  const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  const title = document.getElementById("title");
  const subtitle = document.getElementById("subtitle");

  if (title) {
    title.innerHTML = months[currentMonth];
  }

  if (subtitle) {
    subtitle.innerHTML = `Today is ${currentDate}-${currentMonth + 1}-${currentYear}`;
  }

}
