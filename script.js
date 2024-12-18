document.addEventListener("DOMContentLoaded", () => {
    // Simulasi data printer
    const brands = ["HP", "Canon", "Epson"];
    const printerBrand = document.getElementById("printer-brand");

    // Isi dropdown printer brand
    brands.forEach((brand) => {
        const option = document.createElement("option");
        option.value = brand;
        option.textContent = brand;
        printerBrand.appendChild(option);
    });

    // Tombol FIND CARTRIDGES
    document.getElementById("find-button").addEventListener("click", () => {
        alert("Searching for cartridges...");
    });
});
