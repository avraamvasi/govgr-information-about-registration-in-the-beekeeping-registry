var languageContent = {
    greek: {
      languageBtn: "EL",
      mainTitle: "Εγγραφή στο Μελισσοκομικό Μητρώο",
      pageTitle: "Εγγραφή στο Μελισσοκομικό Μητρώο",
      infoTitle: "Πληροφορίες για την Εγγραφή στο Μελισσοκομικό Μητρώο",
      subTitle1: "Αυτό το ερωτηματολόγιο μπορεί να σας βοηθήσει να διαπιστώσετε αν μπορείτε να εγγραφείτε στο μελισσοκομικό μητρώο και να βρείτε ποια δικαιολογητικά θα χρειαστείτε",
      subTitle2: "H συμπλήρωση του ερωτηματολογίου δεν απαιτεί παραπάνω από 5 λεπτά.",
      subTitle3: "Δεν θα αποθηκεύσουμε ούτε θα μοιραστούμε τις απαντήσεις σας.",
      backButton: "Πίσω",
      nextQuestion: "Επόμενη ερώτηση",
      biggerCursor: "Μεγαλύτερος Δρομέας",
      bigFontSize: "Μεγάλο Κείμενο",
      readAloud: "Ανάγνωση",
      changeContrast: "Αντίθεση",
      readingMask: "Μάσκα Ανάγνωσης",
      footerText: "Αυτό το έργο δημιουργήθηκε για τις ανάγκες του μαθήματος ''Συστήματα Ηλεκτρονικής Διακυβέρνσης'' κατά τη διάρκεια μεταπτυχιακών σπουδών στο Πανεπιστήμιο Μακεδονίας. Η υλοποίηση έγινε από τον κάτωθι φοιτητή της Εφαρμοσμένης Πληροφορικής:",
      and: "και",
      student1: "Βασιλειάδης Αβραάμ-Αντώνιος",
      startBtn:"Ας ξεκινήσουμε",
      chooseAnswer: "Επιλέξτε την απάντησή σας",
      oneAnswer: "Μπορείτε να επιλέξετε μόνο μία επιλογή.",
      errorAn: "Λάθος:",
      choose: "Πρέπει να επιλέξετε μια απάντηση",
    },
    english: {
      languageBtn: "EN",
      mainTitle: "Registration in the Beekeeping Registry",
      pageTitle: "Registration in the Beekeeping Registry",
      infoTitle: "Information about Registration in the Beekeeping Registry",
      subTitle1: "This questionnaire can help you determine if you can register with the beekeeping registry and find out what supporting documents you will need.",
      subTitle2: "Completing the questionnaire should not take more than 5 minutes.",
      subTitle3: "We will neither store nor share your answers.",
      backButton: "Βack",
      nextQuestion: "Next Question",
      biggerCursor: "Bigger Cursor",
      bigFontSize:" Big Font Size",
      readAloud: "Read Aloud",
      changeContrast:" Change Contrast",
      readingMask:" Reading Mask",
      footerText: "This project was created for the needs of the course ''Electronic Government Systems'' during postgraduate studies at the University of Macedonia. The implementation was carried out by the following student of Applied Informatics;",
      and: "and",
      student1: "Vasileiadis Avraam-Antonios",
      startBtn:"Let's start",
      chooseAnswer: "Choose your answer",
      oneAnswer: "You can choose only one option.",
      errorAn: "Error:",
      choose: "You must choose one option",
    }
};
  
// Retrieve the selected language from localStorage or set default to "greek"
var currentLanguage = localStorage.getItem("preferredLanguage") || "greek";

function toggleLanguage() {
    currentLanguage = currentLanguage === "greek" ? "english" : "greek";
    localStorage.setItem("preferredLanguage", currentLanguage);
    updateContent();
}

function updateContent() {
    var components = document.querySelectorAll(".language-component");
     
    components.forEach(function (component) {
        var componentName = component.dataset.component;
        component.textContent = languageContent[currentLanguage][componentName];
    });
}

// Initialize the content based on the selected language
updateContent();
