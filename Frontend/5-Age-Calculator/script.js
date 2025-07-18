const { DateTime } = luxon;

document.addEventListener('DOMContentLoaded', () => {
    
    const dateInput = document.getElementById('date');
    const calculateButton = document.getElementById('button');
    const messageParagraph = document.getElementById('message');

    const picker = datepicker(dateInput, {
        formatter: (input, date, instance) => {
            const year = date.getFullYear();
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const day = date.getDate().toString().padStart(2, '0');
            input.value = `${year}-${month}-${day}`;
        },
        maxDate: new Date(),
    });

    calculateButton.addEventListener('click', () => {
        const birthDateString = dateInput.value;

        if (!birthDateString) {
            messageParagraph.textContent = "Please select your birth date.";
            messageParagraph.classList.remove('hidden');
            messageParagraph.style.color = 'red';
            return;
        }

        const birthDate = DateTime.fromISO(birthDateString);
        const today = DateTime.now();

        if (!birthDate.isValid) {
            messageParagraph.textContent = "Invalid birth date. Please use YYYY-MM-DD format.";
            messageParagraph.classList.remove('hidden');
            messageParagraph.style.color = 'red';
            return;
        }

        if (birthDate > today) {
            messageParagraph.textContent = "Please select a past birth date.";
            messageParagraph.classList.remove('hidden');
            messageParagraph.style.color = 'red';
            return;
        }

        const diff = today.diff(birthDate, ['years', 'months', 'days']).toObject();

        let years = Math.floor(diff.years || 0);
        let months = Math.floor(diff.months || 0);
        let days = Math.floor(diff.days || 0);

        let resultMessage = "You are ";

        if (years > 0) {
            resultMessage += `${years} year${years !== 1 ? 's' : ''}`;
            if (months > 0) {
                resultMessage += ` ${months} month${months !== 1 ? 's' : ''}`;
            }
            if (days > 0) {
                resultMessage += ` ${days} day${days !== 1 ? 's' : ''}`;
            }
        } else if (months > 0) {
            resultMessage += `${months} month${months !== 1 ? 's' : ''}`;
            if (days > 0) {
                resultMessage += ` ${days} day${days !== 1 ? 's' : ''}`;
            }
        } else if (days >= 0) {
            resultMessage += `${days} day${days !== 1 ? 's' : ''}`;
        }

        resultMessage += " old.";

        messageParagraph.textContent = resultMessage;
        messageParagraph.classList.remove('hidden');
        messageParagraph.style.color = 'black';
    });
});