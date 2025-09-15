const students = [
      { roll: "17", name: "ABHIJEET DAS" },
      { roll: "18", name: "ABHIJIT KUMAR SAMAL" },
      { roll: "19", name: "ABHINAB DUTTA" },
      { roll: "20", name: "ABHISEK BASTIA" },
      { roll: "21", name: "ADITYA MALLICK" },
      { roll: "22", name: "ADWEITA PRASAD SAMAL" },
      { roll: "23", name: "AKHILESH TARAI" },
      { roll: "24", name: "ALOCHIKA SAHOO" },
      { roll: "25", name: "AMIT KUMAR SAHOO" },
      { roll: "26", name: "AMIYA RANJAN DAS" },
      { roll: "27", name: "ANANNYA MISHRA" },
      { roll: "28", name: "ANKITA PRADHAN" },
      { roll: "29", name: "ANKITA ROUT" },
      { roll: "30", name: "ANNAPURNA PORIA" },
      { roll: "31", name: "ANUBHAV LENKA" },
      { roll: "32", name: "ARPAN PRIYADASHI" },
      { roll: "33", name: "ARPITA HAZARA" },
      { roll: "34", name: "ARPITA PRIYADARSHINI PARIDA" },
      { roll: "35", name: "ARYAN AURAV SAHOO" },
      { roll: "36", name: "ASISH KUMAR ROUT" },
      { roll: "37", name: "ASUTOSH DASH" },
      { roll: "38", name: "AYUSH SENAPATI" },
      { roll: "39", name: "BAISAKHI PRIYADARSHANI PATI" },
      { roll: "40", name: "BAISHAKHI BEHERA" },
      { roll: "41", name: "BARSHA MOHANTY" },
      { roll: "42", name: "BARSHA PRIYADARSANI DAS" },
      { roll: "43", name: "BHAGABAT PRASAD MISHRA" },
      { roll: "44", name: "BIBHUTI BHUSAN BARIK" },
      { roll: "45", name: "BISHAL SWAIN" },
      { roll: "46", name: "BISHNUPRIYA PRADHAN" },
      { roll: "47", name: "BISWAJIT KATUAL" },
      { roll: "48", name: "BISWAJIT NATH" },
      { roll: "49", name: "CHANNDAN KUMAR SWAIN" },
      { roll: "50", name: "CHANDRAKANTA MANDAL" },
      { roll: "51", name: "CHINMAYA KABI" },
      { roll: "52", name: "DEBABRATA MOHANTY" },
      { roll: "53", name: "DEBASHISH SAHOO" },
      { roll: "54", name: "DEBASISH MALLICK" },
      { roll: "55", name: "DEEPAK KUMAR BEHERA" },
      { roll: "56", name: "DEEPANJALI BHOL" },
      { roll: "57", name: "DHANANJAYA SAHOO" },
      { roll: "58", name: "DIPTIMAYEE BISWAL" },
      { roll: "59", name: "DIPTIMAYEE PRIYADARSINI BEHERA" },
      { roll: "60", name: "DIVYA PRAKASH PRADHAN" },
      { roll: "61", name: "GITISH RANJAN ROUT" },
      { roll: "62", name: "GUNGUN DAS" },
      { roll: "63", name: "HARIHAR ROUT" },
      { roll: "64", name: "HIMANSHU KUMAR ROUT" },
      { roll: "65", name: "INSAIPSITA PANDA" },
      { roll: "66", name: "INTEKHAB ALI KHAN" },
      { roll: "67", name: "IPSITA BARIK" },
      { roll: "68", name: "ITISHREE SAHOO" },
      { roll: "69", name: "JAGAN PRIYADARSHI" },
      { roll: "70", name: "JAYASHREE SAHOO" },
      { roll: "71", name: "JEEBAN KUMAR GACHHAYAT" },
      { roll: "72", name: "KALAKANHU SWAIN" },
      { roll: "73", name: "KOEL PRADHAN" }
    ];
    
    const studentList = document.getElementById("studentList");
    const presentList = document.getElementById("presentList");
    const absentList = document.getElementById("absentList");

    let attendance = {};

    
    students.forEach(s => {
      attendance[s.roll] = false; 
      let div = document.createElement("div");
      div.className = "student-card";
      div.innerHTML = `
        <span class="student-name">${s.roll}. ${s.name}</span>
        <button class="toggleBtn btn-absent" onclick="toggleStatus(this, '${s.roll}')">Absent</button>
        `;
      studentList.appendChild(div);
    });

    
    function toggleStatus(button, roll) {
      attendance[roll] = !attendance[roll];
      if (attendance[roll]) {
        button.textContent = "Present";
        button.className = "toggleBtn btn-present";
      } else {
        button.textContent = "Absent";
        button.className = "toggleBtn btn-absent";
      }
      updateLists();
    }

    
    function updateLists() {
  const date = document.getElementById("dateInput").value || "Not Selected";
  const className = document.getElementById("classInput").value || "Unknown Class";

  let present = `Date: ${date}\nClass: ${className}\n\n`;
  let absent = `Date: ${date}\nClass: ${className}\n\n`;

  students.forEach(s => {
    if (attendance[s.roll]) {
      present += `${s.roll}. ${s.name}\n`;
    } else {
      absent += `${s.roll}. ${s.name}\n`;
    }
  });

  presentList.textContent = present;
  absentList.textContent = absent;
}


    
    function copyText(id) {
      const text = document.getElementById(id).textContent;

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
          alert("Copied to clipboard ✅");
        }).catch(() => fallbackCopy(text));
      } else {
        fallbackCopy(text);
      }
    }

    function fallbackCopy(text) {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();

      try {
        document.execCommand("copy");
        alert("Copied to clipboard ✅");
      } catch (err) {
        alert("Copy failed ❌. Please copy manually.");
      }

      document.body.removeChild(textarea);
    }
    updateLists();