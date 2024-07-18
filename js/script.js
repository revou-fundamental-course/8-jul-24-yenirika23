// JavaScript for Kalkulator BMI

document.getElementById('bmi-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get input values
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const age = parseFloat(document.getElementById('age').value);
    
    // Validate inputs
    if (!gender || !weight || !height || !age || weight <= 0 || height <= 0 || age <= 0) {
        alert('Semua kolom harus diisi dengan benar.');
        return;
    }

    // Calculate BMI
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    
    // Display BMI Result
    const bmiResultElement = document.getElementById('bmi-result');
    bmiResultElement.textContent = bmi.toFixed(1);
    
    // Display BMI Explanation
    const bmiExplanationElement = document.getElementById('bmi-explanation');
    let explanation = '';
    let advice = '';
    
    if (bmi < 18.5) {
        explanation = 'Anda memiliki berat badan kurang';
        advice = 'Anda perlu meningkatkan berat badan Anda melalui pola makan yang seimbang dan latihan fisik yang teratur.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        explanation = 'Anda memiliki berat badan normal';
        advice = 'Pertahankan pola makan dan gaya hidup sehat Anda.';
    } else if (bmi >= 25 && bmi < 29.9) {
        explanation = 'Anda memiliki berat badan berlebih';
        advice = 'Anda dianjurkan untuk menurunkan berat badan melalui pola makan yang sehat dan olahraga teratur.';
    } else {
        explanation = 'Anda memiliki obesitas';
        advice = 'Anda sangat dianjurkan untuk menurunkan berat badan dan berkonsultasi dengan ahli gizi atau dokter.';
    }
    
    bmiExplanationElement.textContent = explanation;

    // Update detailed information
    document.getElementById('bmi-range').textContent = `Hasil BMI diantara ${bmi.toFixed(1)}`;
    document.getElementById('bmi-advice').textContent = advice;
});

// Reset the form and result section
document.getElementById('reset-button').addEventListener('click', function() {
    document.getElementById('bmi-result').textContent = '';
    document.getElementById('bmi-explanation').textContent = '';
    document.getElementById('bmi-range').textContent = '';
    document.getElementById('bmi-advice').textContent = '';
});

// Placeholder functionalities for buttons
document.getElementById('download-result').addEventListener('click', function() {
    alert('Fungsi unduh belum diimplementasikan.');
});

document.getElementById('consultation').addEventListener('click', function() {
    alert('Fungsi konsultasi belum diimplementasikan.');
});

document.getElementById('registration').addEventListener('click', function() {
    alert('Fungsi registrasi belum diimplementasikan.');
});
