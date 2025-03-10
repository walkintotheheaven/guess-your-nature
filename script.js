function tebakSifat() {
      const nama = document.getElementById("namaInput").value.trim().toLowerCase();
      const tabelBody = document.getElementById("tabelHasil").getElementsByTagName("tbody")[0];

      // TAKE THE MIDDLE LETTER FROM NAME
      const panjangNama = nama.length;
      let hurufTengah = "";

      if (panjangNama % 2 === 1) {
            hurufTengah = nama.charAt(Math.floor(panjangNama / 2));
      } else {
            hurufTengah = nama.charAt(Math.floor(panjangNama / 2) - 1);
      }

      // LIST OF CHARACTERISTIC
      let sifat = "";
      const sifatList = {
            "a": "Kamu sangat kreatif dan penuh ide brillian.",
            "b": "Kamu sangat analitis dan suka berpikir mendalam.",
            "c": "Kamu ramah dan senang berinteraksi dengan banyak orang.",
            "d": "Kamu tegas dan berprinsip dalam segala hal.",
            "e": "Kamu penuh perhatian dan selalu peduli dengan orang lain.",
            "f": "Kamu kreatif dan memiliki daya cipta yang luar biasa.",
            "g": "Kamu sabar dan mampu mengatasi masalah dengan tenang.",
            "h": "Kamu penuh semangat dan energik.",
            "i": "Kamu sangat penyayang dan peduli dengan orang sekitar.",
            "j": "Kamu suka belajar hal baru dan penuh rasa ingin tahu.",
            "k": "Kamu mandiri dan memiliki visi yang jelas untuk masa depan.",
            "l": "Kamu sangat perhatian dan selalu mendengarkan orang lain.",
            "m": "Kamu sangat bertanggung jawab dan bisa diandalkan.",
            "n": "Kamu sangat empatik dan peduli dengan perasaan orang lain.",
            "o": "Kamu berani mengambil langkah baru dan tidak takut gagal.",
            "p": "Kamu sangat teliti dan suka dengan detail.",
            "q": "Kamu memiliki kemampuan luar biasa untuk berpikir kritis.",
            "r": "Kamu sangat bersemangat dan penuh gairah dalam segala hal.",
            "s": "Kamu suka menjaga kedamaian dan menghindari konflik.",
            "t": "Kamu pekerja keras dan selalu berusaha memberi yang terbaik.",
            "u": "Kamu kreatif dan selalu memiliki cara baru untuk menyelesaikan masalah.",
            "v": "Kamu percaya diri dan memiliki aura yang sangat positif.",
            "w": "Kamu sangat perhatian dan selalu siap membantu orang lain.",
            "x": "Kamu sangat cerdas dan berpikir tajam.",
            "y": "Kamu penuh semangat dan selalu mencari kebahagiaan dalam hidup.",
            "z": "Kamu bijaksana dan memiliki ide-ide cemerlang.",
      };

      // DETERMINE THE NATURE BASED ON THE MIDDLE LETTER
      sifat = sifatList[hurufTengah] || "Nama ini sangat unik, sifat kamu juga luar biasa";

      // ADD NEW LINE TO TABLE
      const row = tabelBody.insertRow();
      const cellNama = row.insertCell(0);
      const cellSifat = row.insertCell(1);
      const cellHapus = row.insertCell(2);

      cellNama.textContent = nama.charAt(0).toUpperCase() + nama.slice(1); //CHANGE THE FIRST LETTER TO CAPITAL
      cellSifat.textContent = sifat;

      // ADD DELETE BUTTON
      const hapusButton = document.createElement("button");
      hapusButton.textContent = "Hapus";
      hapusButton.classList.add("hapusBtn");
      hapusButton.onclick = function () {
            tabelBody.deleteRow(row.rowIndex - 1); //DELETE LINE WHEN ONCLICK

      };

      cellHapus.appendChild(hapusButton);
}