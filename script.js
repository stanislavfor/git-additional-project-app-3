document.addEventListener("DOMContentLoaded", function () {
    const inputText = document.getElementById("inputText");
    const clearButton = document.getElementById("clearButton");
    const countButton = document.getElementById("countButton");
    const charCountButton = document.getElementById("charCountButton");
    const resultParagraph = document.getElementById("resultParagraph");
    const charsStatsContainer = document.getElementById("charsStatsContainer");


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


    // Функция для подсчёта количества символов
        function getCharFrequency(text) {
            let chars = text.replace(/\s/g, "").split("");
            let frequencyMap = new Map();
            for (let char of chars) {
                if (frequencyMap.has(char)) {
                    frequencyMap.set(char, frequencyMap.get(char) + 1);
                } else {
                    frequencyMap.set(char, 1);
                }
            }
            return frequencyMap;
        }


    // Обработчик события клика на кнопку количества символов
        charCountButton.addEventListener("click", function () {
            let text = inputText.value;
            let charFrequencyMap = getCharFrequency(text);
            if (charFrequencyMap.size > 0) {
                charsStatsContainer.style.display = "block"; // Показываем блок статистики знаков
                charsStatsList.innerHTML = ""; // Очищаем предыдущий список
                const messageLi = document.createElement("li");
                messageLi.style.fontWeight = 'bold';
                messageLi.textContent = "Количество символов :";
                charsStatsList.appendChild(messageLi);
                // Формируем элементы списка для каждой записи в карте частот
                for (let [char, count] of charFrequencyMap.entries()) {
                    let listItem = document.createElement("li");
                    listItem.textContent = `${char} — ${count}`;
                    charsStatsList.appendChild(listItem);
                }
            } else {
                // Добавляем сообщение в список
                charsStatsContainer.style.display = "block";
                const messageLi = document.createElement("li");
                messageLi.textContent = "Нет символов для анализа!";
                charsStatsList.appendChild(messageLi);
            }
        });





});