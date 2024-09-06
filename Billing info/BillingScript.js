let entryId = 0;

document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value || '';
    const tuition = document.getElementById('tuition').value || 0;
    const miscellaneous = document.getElementById('miscellaneous').value || 0;
    const other = document.getElementById('other').value || 0;
    const totalBill = tuition + miscellaneous + other;

    const newEntry = `
        <div class="entry" id="entry-${entryId}">
            <h3>Student Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Tuition Fees:</strong> ₱${tuition.toFixed(2)}</p>
            <p><strong>Miscellaneous Fees:</strong> ₱${miscellaneous.toFixed(2)}</p>
            <p><strong>Other Fees:</strong> ₱${other.toFixed(2)}</p>
            <p><strong>Total Bill:</strong> ₱${totalBill.toFixed(2)}</p>
            <button onclick="deleteEntry(${entryId})">Delete</button>
        </div>
    `;

    document.getElementById('output').insertAdjacentHTML('beforeend', newEntry);
    entryId++;
});
document.getElementById('paymentForm').addEventListener('submit', function(event) {
    document.getElementById('output').insertAdjacentHTML('beforeend', newEntry);
    entryId++;
    document.getElementById('paymentForm').reset();
});

function editEntry(id) {
    const entry = document.getElementById(`entry-${id}`);

    const [name, tuition, miscellaneous, other] = [...entry.querySelectorAll('p strong + text')]
        .map(el => el.textContent.trim().replace('₱', ''));

    document.getElementById('name').value = name;
    document.getElementById('tuition').value = tuition;
    document.getElementById('miscellaneous').value = miscellaneous;
    document.getElementById('other').value = other;

    deleteEntry(id);
}

function deleteEntry(id) {
    document.getElementById(`entry-${id}`).remove();
}

