document.addEventListener("DOMContentLoaded", function () {
    const inputText = document.getElementById("inputText");
    const clearButton = document.getElementById("clearButton");
    const countButton = document.getElementById("countButton");
    const resultParagraph = document.getElementById("resultParagraph");


    // Обработчик события клика на кнопку "Очистить"
    clearButton.addEventListener("click", function () {
        inputText.value = "";
        resultParagraph.textContent = "";
        charsStatsContainer.style.display = "none";
        statsContainer.style.display = "none";
                while (statsList.firstChild) {
                    statsList.removeChild(statsList.firstChild);
                }
        while (charsStatsList.firstChild) {
            charsStatsList.removeChild(charsStatsList.firstChild);
        }
    });


    // Функция для подсчёта слов
    function countWords(text) {
        let words = text.trim().split(/\s+/).filter((word) => word !== "");
        return words.length;
    }


    // Обработчик события клика на кнопку подсчёта слов
    countButton.addEventListener("click", function () {
        let text = inputText.value;
        let wordCount = countWords(text);
        resultParagraph.textContent = `Количество слов: ${wordCount}`;
    });




});