let participantCount = 1;

function participantTemplate(count) {
  return `
    <section class="participant${count}">
      <p>Participant ${count}</p>
      <div class="item">
        <label for="fname${count}">First Name<span>*</span></label>
        <input id="fname${count}" type="text" name="fname${count}" required />
      </div>
      <div class="item activities">
        <label for="activity${count}">Activity #<span>*</span></label>
        <input id="activity${count}" type="text" name="activity${count}" required />
      </div>
      <div class="item">
        <label for="fee${count}">Fee ($)<span>*</span></label>
        <input id="fee${count}" type="number" name="fee${count}" required />
      </div>
      <div class="item">
        <label for="date${count}">Desired Date <span>*</span></label>
        <input id="date${count}" type="date" name="date${count}" required />
      </div>
      <div class="item">
        <p>Grade</p>
        <select name="grade${count}" required>
          <option value="" disabled selected></option>
          <option value="1">1st</option>
          <option value="2">2nd</option>
          <option value="3">3rd</option>
          <option value="4">4th</option>
          <option value="5">5th</option>
          <option value="6">6th</option>
          <option value="7">7th</option>
          <option value="8">8th</option>
          <option value="9">9th</option>
          <option value="10">10th</option>
          <option value="11">11th</option>
          <option value="12">12th</option>
        </select>
      </div>
    </section>
  `;
}

document.getElementById("add").addEventListener("click", function () {
  participantCount++;
  const newParticipant = participantTemplate(participantCount); 
  const participantSection = document.querySelector(".participants");
  participantSection.insertAdjacentHTML("beforeend", newParticipant);
});

document.getElementById("registrationForm").addEventListener("submit", function (event) {
  event.preventDefault();
  
  const summarySection = document.getElementById("summary");
  summarySection.innerHTML = "<h2>Registration Summary</h2>"; 

  let totalFees = 0;
  const adultName = document.getElementById("adult_name").value; // Get the adult name

  for (let i = 1; i <= participantCount; i++) {
    const fname = document.getElementById(`fname${i}`).value;
    const activity = document.getElementById(`activity${i}`).value;
    const fee = parseFloat(document.getElementById(`fee${i}`).value) || 0; // Ensure fee is a number
    const date = document.getElementById(`date${i}`).value;
    const grade = document.getElementById(`grade${i}`).value;

    totalFees += fee;

    summarySection.innerHTML += `
      <p>Participant ${i}: ${fname}, Activity: ${activity}, Fee: $${fee.toFixed(2)}, Date: ${date}, Grade: ${grade}</p>
    `;
  }

  summarySection.innerHTML += `
    <h3>Thank you ${adultName} for registering. You have registered ${participantCount} participants and owe $${totalFees.toFixed(2)} in fees.</h3>
  `;

  document.getElementById("registrationForm").style.display = "none";
  summarySection.style.display = "block";
});
