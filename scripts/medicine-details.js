// Medicine details page functionality
document.addEventListener('DOMContentLoaded', function() {
    initializeMedicineDetailsPage();
});

function initializeMedicineDetailsPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const medicineId = urlParams.get('id');
    
    if (!medicineId) {
        window.location.href = 'medicines.html';
        return;
    }
    
    // Find medicine by ID
    const medicine = medicinesData.find(m => m.id === parseInt(medicineId));
    
    if (!medicine) {
        window.location.href = 'medicines.html';
        return;
    }
    
    // Populate page with medicine details
    populateMedicineDetails(medicine);
    
    // Populate related medicines
    populateRelatedMedicines(medicine);
    
    // Add event listeners for action buttons
    setupActionButtons(medicine);
}

function populateMedicineDetails(medicine) {
    // Update page title
    document.title = `${medicine.name} - We Care`;
    
    // Update breadcrumb
    const breadcrumbCurrent = document.getElementById('breadcrumb-current');
    if (breadcrumbCurrent) {
        breadcrumbCurrent.textContent = medicine.name;
    }
    
    // Update main title and generic name
    const medicineTitle = document.getElementById('medicine-title');
    const medicineGeneric = document.getElementById('medicine-generic');
    
    if (medicineTitle) medicineTitle.textContent = medicine.name;
    if (medicineGeneric) medicineGeneric.textContent = medicine.genericName;
    
    // Update status and priority badges
    const medicineStatus = document.getElementById('medicine-status');
    const medicinePriority = document.getElementById('medicine-priority');
    
    if (medicineStatus) {
        medicineStatus.textContent = formatStatus(medicine.status);
        medicineStatus.className = `status-badge status-badge--${medicine.status}`;
    }
    
    if (medicinePriority) {
        medicinePriority.textContent = formatPriority(medicine.priority);
        medicinePriority.className = `priority-badge priority-badge--${medicine.priority}`;
    }
    
    // Update description
    const medicineDescription = document.getElementById('medicine-description');
    if (medicineDescription) {
        medicineDescription.textContent = medicine.description;
    }
    
    // Update status information
    const stockLevel = document.getElementById('stock-level');
    const expectedAvailability = document.getElementById('expected-availability');
    const lastUpdated = document.getElementById('last-updated');
    
    if (stockLevel) stockLevel.textContent = medicine.stockLevel;
    if (expectedAvailability) expectedAvailability.textContent = medicine.expectedAvailability;
    if (lastUpdated) lastUpdated.textContent = formatDate(medicine.lastUpdated);
    
    // Update usage instructions
    const usageInstructions = document.getElementById('usage-instructions');
    if (usageInstructions && medicine.usageInstructions) {
        usageInstructions.innerHTML = `
            <ul>
                ${medicine.usageInstructions.map(instruction => `<li>${instruction}</li>`).join('')}
            </ul>
        `;
    }
    
    // Update manufacturing details
    const manufacturer = document.getElementById('manufacturer');
    const batchNumber = document.getElementById('batch-number');
    const expiryDate = document.getElementById('expiry-date');
    
    if (manufacturer) manufacturer.textContent = medicine.manufacturer;
    if (batchNumber) batchNumber.textContent = medicine.batchNumber;
    if (expiryDate) expiryDate.textContent = formatDate(medicine.expiryDate);
    
    // Update alternatives
    const alternatives = document.getElementById('alternatives');
    if (alternatives && medicine.alternatives) {
        alternatives.innerHTML = medicine.alternatives.map(alt => `
            <div class="alternative-item">
                <span class="alternative-item__name">${alt.name}</span>
                <span class="alternative-item__info">${alt.info}</span>
            </div>
        `).join('');
    }
    
    // Update quick info
    const medicineCategory = document.getElementById('medicine-category');
    const dosageForm = document.getElementById('dosage-form');
    const strength = document.getElementById('strength');
    const ndcNumber = document.getElementById('ndc-number');
    
    if (medicineCategory) medicineCategory.textContent = formatCategory(medicine.category);
    if (dosageForm) dosageForm.textContent = medicine.dosageForm;
    if (strength) strength.textContent = medicine.strength;
    if (ndcNumber) ndcNumber.textContent = medicine.ndcNumber;
}

function populateRelatedMedicines(currentMedicine) {
    const relatedMedicinesGrid = document.getElementById('related-medicines-grid');
    if (!relatedMedicinesGrid) return;
    
    // Find related medicines (same category, excluding current medicine)
    const relatedMedicines = medicinesData
        .filter(medicine => 
            medicine.category === currentMedicine.category && 
            medicine.id !== currentMedicine.id
        )
        .slice(0, 3); // Show only 3 related medicines
    
    if (relatedMedicines.length === 0) {
        relatedMedicinesGrid.innerHTML = '<p>No related medicines found.</p>';
        return;
    }
    
    relatedMedicinesGrid.innerHTML = relatedMedicines.map(medicine => `
        <div class="medicine-card" data-id="${medicine.id}">
            <div class="medicine-card__header">
                <div class="medicine-card__title-group">
                    <h3 class="medicine-card__title">${medicine.name}</h3>
                    <p class="medicine-card__generic">${medicine.genericName}</p>
                </div>
                <div class="medicine-card__badges">
                    <span class="status-badge status-badge--${medicine.status}">${formatStatus(medicine.status)}</span>
                    <span class="priority-badge priority-badge--${medicine.priority}">${formatPriority(medicine.priority)}</span>
                </div>
            </div>
            
            <p class="medicine-card__description">
                ${medicine.description}
            </p>
            
            <div class="medicine-card__meta">
                <span class="medicine-card__category">${formatCategory(medicine.category)}</span>
                <span class="medicine-card__updated">Updated ${formatDate(medicine.lastUpdated)}</span>
            </div>
        </div>
    `).join('');
    
    // Add click event listeners to related medicine cards
    const relatedCards = relatedMedicinesGrid.querySelectorAll('.medicine-card');
    relatedCards.forEach(card => {
        card.addEventListener('click', function() {
            const medicineId = this.dataset.id;
            window.location.href = `medicine-details.html?id=${medicineId}`;
        });
    });
}

function setupActionButtons(medicine) {
    const notifyBtn = document.getElementById('notify-btn');
    const reportBtn = document.getElementById('report-btn');
    
    if (notifyBtn) {
        notifyBtn.addEventListener('click', function() {
            handleNotificationRequest(medicine);
        });
    }
    
    if (reportBtn) {
        reportBtn.addEventListener('click', function() {
            handleReportIssue(medicine);
        });
    }
}

function handleNotificationRequest(medicine) {
    // Create notification modal
    const modal = document.createElement('div');
    modal.className = 'notification-modal';
    modal.innerHTML = `
        <div class="notification-modal__overlay"></div>
        <div class="notification-modal__content">
            <h3>Get Notifications for ${medicine.name}</h3>
            <p>Stay updated on availability changes for this medicine.</p>
            
            <form id="notification-form">
                <div class="form__group">
                    <input type="email" class="form__input" id="notification-email" required>
                    <label for="notification-email" class="form__label">Email Address</label>
                </div>
                
                <div class="form__group">
                    <label class="checkbox-label">
                        <input type="checkbox" id="sms-notifications">
                        <span class="checkmark"></span>
                        Also send SMS notifications
                    </label>
                </div>
                
                <div class="form__group" id="phone-group" style="display: none;">
                    <input type="tel" class="form__input" id="notification-phone">
                    <label for="notification-phone" class="form__label">Phone Number</label>
                </div>
                
                <div class="form__actions">
                    <button type="submit" class="btn btn--primary">Subscribe</button>
                    <button type="button" class="btn btn--secondary" id="cancel-notification">Cancel</button>
                </div>
            </form>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add event listeners
    const notificationForm = document.getElementById('notification-form');
    const cancelBtn = document.getElementById('cancel-notification');
    const smsCheckbox = document.getElementById('sms-notifications');
    const phoneGroup = document.getElementById('phone-group');
    
    smsCheckbox.addEventListener('change', function() {
        phoneGroup.style.display = this.checked ? 'block' : 'none';
    });
    
    cancelBtn.addEventListener('click', function() {
        document.body.removeChild(modal);
    });
    
    notificationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('notification-email').value;
        const phone = document.getElementById('notification-phone').value;
        const smsEnabled = smsCheckbox.checked;
        
        if (!email) {
            alert('Please enter your email address.');
            return;
        }
        
        if (smsEnabled && !phone) {
            alert('Please enter your phone number for SMS notifications.');
            return;
        }
        
        // Simulate subscription
        alert(`You will receive notifications about ${medicine.name} at ${email}${smsEnabled ? ' and ' + phone : ''}.`);
        document.body.removeChild(modal);
    });
    
    // Close modal when clicking overlay
    modal.querySelector('.notification-modal__overlay').addEventListener('click', function() {
        document.body.removeChild(modal);
    });
}

function handleReportIssue(medicine) {
    // Create report modal
    const modal = document.createElement('div');
    modal.className = 'report-modal';
    modal.innerHTML = `
        <div class="report-modal__overlay"></div>
        <div class="report-modal__content">
            <h3>Report Issue for ${medicine.name}</h3>
            <p>Help us improve by reporting any issues with this medicine information.</p>
            
            <form id="report-form">
                <div class="form__group">
                    <select class="form__input" id="issue-type" required>
                        <option value="">Select issue type</option>
                        <option value="incorrect-info">Incorrect information</option>
                        <option value="outdated-info">Outdated information</option>
                        <option value="availability-error">Availability error</option>
                        <option value="other">Other</option>
                    </select>
                    <label for="issue-type" class="form__label">Issue Type</label>
                </div>
                
                <div class="form__group">
                    <textarea class="form__input form__textarea" id="issue-description" rows="4" required></textarea>
                    <label for="issue-description" class="form__label">Description</label>
                </div>
                
                <div class="form__group">
                    <input type="email" class="form__input" id="reporter-email" required>
                    <label for="reporter-email" class="form__label">Your Email</label>
                </div>
                
                <div class="form__actions">
                    <button type="submit" class="btn btn--primary">Submit Report</button>
                    <button type="button" class="btn btn--secondary" id="cancel-report">Cancel</button>
                </div>
            </form>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add event listeners
    const reportForm = document.getElementById('report-form');
    const cancelBtn = document.getElementById('cancel-report');
    
    cancelBtn.addEventListener('click', function() {
        document.body.removeChild(modal);
    });
    
    reportForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const issueType = document.getElementById('issue-type').value;
        const description = document.getElementById('issue-description').value;
        const email = document.getElementById('reporter-email').value;
        
        if (!issueType || !description || !email) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Simulate report submission
        alert('Thank you for your report. We will review it and take appropriate action.');
        document.body.removeChild(modal);
    });
    
    // Close modal when clicking overlay
    modal.querySelector('.report-modal__overlay').addEventListener('click', function() {
        document.body.removeChild(modal);
    });
}

// Utility functions (if not already defined in main.js)
function formatStatus(status) {
    switch (status) {
        case 'available':
            return 'Available';
        case 'low-stock':
            return 'Low Stock';
        case 'out-of-stock':
            return 'Out of Stock';
        default:
            return status;
    }
}

function formatPriority(priority) {
    switch (priority) {
        case 'critical':
            return 'Critical';
        case 'high':
            return 'High';
        case 'medium':
            return 'Medium';
        case 'low':
            return 'Low';
        default:
            return priority;
    }
}

function formatCategory(category) {
    switch (category) {
        case 'antibiotic':
            return 'Antibiotic';
        case 'painkiller':
            return 'Pain Relief';
        case 'cardiovascular':
            return 'Cardiovascular';
        case 'diabetes':
            return 'Diabetes';
        case 'respiratory':
            return 'Respiratory';
        case 'mental-health':
            return 'Mental Health';
        case 'gastrointestinal':
            return 'Gastrointestinal';
        default:
            return category;
    }
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

// Modal styles (add to main.css or include here)
const modalStyles = `
    .notification-modal,
    .report-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .notification-modal__overlay,
    .report-modal__overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(2px);
    }
    
    .notification-modal__content,
    .report-modal__content {
        position: relative;
        background-color: white;
        padding: 2rem;
        border-radius: 1rem;
        max-width: 500px;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }
    
    .notification-modal__content h3,
    .report-modal__content h3 {
        margin-bottom: 1rem;
        color: var(--text-primary);
    }
    
    .notification-modal__content p,
    .report-modal__content p {
        margin-bottom: 1.5rem;
        color: var(--text-secondary);
    }
    
    .form__actions {
        display: flex;
        gap: 1rem;
        margin-top: 1.5rem;
    }
    
    .checkbox-label {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;
        color: var(--text-secondary);
    }
    
    .checkbox-label input[type="checkbox"] {
        width: auto;
        margin: 0;
    }
`;

// Inject modal styles
const styleSheet = document.createElement('style');
styleSheet.textContent = modalStyles;
document.head.appendChild(styleSheet);