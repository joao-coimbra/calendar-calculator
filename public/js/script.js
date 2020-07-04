    let locale = "en";
        now = new Date();
        minus = document.querySelector(".minus");
        plus = document.querySelector(".plus");
        reset = document.querySelector(".reset-date");
        displayMonth = document.querySelector(".month");
        displayDayName = document.querySelector(".day-name");
        displayDay = document.querySelector(".day");
        displayYear = document.querySelector(".year");
        year = now.getFullYear();
        month = now.getMonth();
        day = now.toLocaleDateString(locale, {
            day: "2-digit"
        });
        dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        dayName = dayNames[now.getDay()];

        displayInput = document.querySelector("#number");
        displayInput.value = 0;

        newDate = new Date(year, month, day);
        newYear = newDate.getFullYear();
        newMonth = newDate.getMonth();
        newDay = newDate.toLocaleDateString(locale, {
            day: "2-digit"
        });

        inputValue = 0;
        maxValue = 4500000;

    function updateData(value) {

        if (value == "reset") {

            newDate = new Date(year, month, day);
            newYear = newDate.getFullYear();
            newMonth = newDate.getMonth();
            newDay = newDate.toLocaleDateString(locale, {
                day: "2-digit"
            });

        } else {

            newYear = newDate.getFullYear();
            newMonth = newDate.getMonth();
            newDay = newDate.toLocaleDateString(locale, {
                day: "2-digit"
            });

        }
        
    }

    function updateDate(value) {

        if (value == "reset") {

            dayName = dayNames[now.getDay()];

            displayMonth.innerHTML = now.toLocaleDateString(locale, {
                month: "long"
            });;
            displayDayName.innerHTML = dayName;
            displayDay.innerHTML = day;
            displayYear.innerHTML = year;

        } else {

            dayName = dayNames[newDate.getDay()];

            displayMonth.innerHTML = newDate.toLocaleDateString(locale, {
                month: "long"
            });
            displayDayName.innerHTML = dayName;
            displayDay.innerHTML = newDate.toLocaleDateString(locale, {
                day: "2-digit"
            });
            displayYear.innerHTML = newDate.toLocaleDateString(locale, {
                year: "numeric"
            });

        }

        
    }

    function checkValue() {
        if (displayInput.value < 0) {

            displayInput.value = 0;
            inputValue = 0;

            alert("Don't put a value that is below 0");

        } else if (displayInput.value > maxValue) {

            displayInput.value = maxValue;
            inputValue = 0;

            alert(`Don't put a value that is above ${maxValue}`);

        } else {

            inputValue = displayInput.value;

        }
    }

    minus.addEventListener("click", e => {

        checkValue();

        newDay -= inputValue;

        newDate = new Date(newYear, newMonth, newDay);

        updateDate();
        updateData();

        console.log(newDate.toLocaleDateString(locale));

    });

    plus.addEventListener("click", e => {

        checkValue();

        for (let i = 0; i < inputValue; i++) {

            newDay++;

        }

        newDate = new Date(newYear, newMonth, newDay);

        updateData();
        updateDate();

        console.log(newDate.toLocaleDateString(locale));

    });

    reset.addEventListener("click", e => {

        newDate = new Date(year, month, day);

        updateDate("reset");
        updateData("reset");

    })

    displayMonth.innerHTML = newDate.toLocaleDateString(locale, {
        month: "long"
    });;
    displayDayName.innerHTML = dayName;
    displayDay.innerHTML = day;
    displayYear.innerHTML = year;

    console.log(now.toLocaleDateString(locale));