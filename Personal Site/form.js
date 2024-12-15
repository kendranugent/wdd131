document.addEventListener("DOMContentLoaded", function () {
    var currentYear = new Date().getFullYear();
    var yearSelect = document.getElementById("year");

    // Generate year options from the last 100 years to the current year
    for (var i = 0; i < 100; i++) {
        var yearOption = document.createElement("option");
        yearOption.value = currentYear - i;
        yearOption.text = currentYear - i;
        yearSelect.appendChild(yearOption);
    }

    // Set the current year as the first selected option
    yearSelect.options[0].selected = true;
});

document.getElementById("movieForm").addEventListener("submit", function (event) {
    event.preventDefault();
    
    var summarySection = document.getElementById("summary");
    summarySection.innerHTML = "<h2>Movie Summary</h2>"; 

    var title = document.getElementById("title").value;
    var year = document.getElementById("year").value;
    var genre1 = document.getElementById("genre1").value;
    var genre2 = document.getElementById("genre2").value;
    var rating = document.getElementById("rating").value;

    summarySection.innerHTML += `
        <p>Title: ${title}</p>
        <p>Year: ${year}</p>
        <p>Genre 1: ${genre1}</p>
        <p>Genre 2: ${genre2}</p>
        <p>Rating: ${rating}</p>
        <button id="backButton">Add Another Movie</button>
    `;

    document.getElementById("movieForm").style.display = "none";
    summarySection.style.display = "block";

    document.getElementById("backButton").addEventListener("click", function () {
        summarySection.style.display = "none";
        document.getElementById("movieForm").reset();
        document.getElementById("movieForm").style.display = "block";
    });
});
