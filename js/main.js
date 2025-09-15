//Dynamic JS array that adds list items.
const link =[
    {
        label: "Week 1 Notes",
        url: "lesson1/index.html"
    }
    //add more for each week.
];

//Selects the ordered lists tag from index.html
const toc= document.getElementById("toc");

//Loop function that loops through links and adds them to the list
link.forEach(link=> {
const li = document.createElement("li");
const a = document.createElement("a");

a.textContent = link.label;
a.href = link.url;

li.appendChild(a);
toc.appendChild(li);
});