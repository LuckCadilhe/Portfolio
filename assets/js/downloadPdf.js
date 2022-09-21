const downloadPdf = document.querySelector("#download-pdf");

downloadPdf.addEventListener("click", () => {

    let element = document.createElement("a");

    element.href = "./assets/pdf/cv.pdf";
    element.download = "CV.pdf";

    document.documentElement.appendChild(element);

    element.click();

    document.documentElement.removeChild(element);
})