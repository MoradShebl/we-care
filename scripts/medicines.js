// Medicines data
const medicinesData = [
    {
        id: 1,
        name: "Amoxicillin",
        genericName: "Amoxicillin Trihydrate",
        category: "antibiotic",
        status: "low-stock",
        priority: "high",
        description: "Broad-spectrum antibiotic used to treat bacterial infections including respiratory, urinary, and skin infections.",
        dosageForm: "Capsules",
        strength: "500mg",
        lastUpdated: "2024-01-15",
        manufacturer: "Generic Pharmaceuticals Inc.",
        batchNumber: "AMX-2024-001",
        expiryDate: "2025-12-31",
        ndcNumber: "12345-678-90",
        expectedAvailability: "2024-02-01",
        stockLevel: "25% remaining",
        usageInstructions: [
            "Take as directed by your healthcare provider",
            "Complete the full course even if symptoms improve",
            "Take with food to reduce stomach upset",
            "Do not share with others"
        ],
        alternatives: [
            { name: "Cephalexin", info: "Similar antibiotic, available" },
            { name: "Doxycycline", info: "Alternative antibiotic, low stock" }
        ]
    },
    {
        id: 2,
        name: "Metformin",
        genericName: "Metformin Hydrochloride",
        category: "diabetes",
        status: "available",
        priority: "critical",
        description: "First-line medication for type 2 diabetes that helps control blood sugar levels by improving insulin sensitivity.",
        dosageForm: "Tablets",
        strength: "500mg",
        lastUpdated: "2024-01-14",
        manufacturer: "Diabetes Care Corp.",
        batchNumber: "MET-2024-002",
        expiryDate: "2026-06-30",
        ndcNumber: "23456-789-01",
        expectedAvailability: "Available",
        stockLevel: "95% remaining",
        usageInstructions: [
            "Take with meals to reduce gastrointestinal side effects",
            "Monitor blood glucose levels regularly",
            "Stay hydrated while taking this medication",
            "Report any unusual symptoms to your doctor"
        ],
        alternatives: [
            { name: "Glipizide", info: "Alternative diabetes medication, available" },
            { name: "Sitagliptin", info: "DPP-4 inhibitor, available" }
        ]
    },
    {
        id: 3,
        name: "Lisinopril",
        genericName: "Lisinopril",
        category: "cardiovascular",
        status: "out-of-stock",
        priority: "critical",
        description: "ACE inhibitor used to treat high blood pressure and heart failure, helps prevent strokes and kidney problems.",
        dosageForm: "Tablets",
        strength: "10mg",
        lastUpdated: "2024-01-13",
        manufacturer: "CardioMed Solutions",
        batchNumber: "LIS-2024-003",
        expiryDate: "2025-09-15",
        ndcNumber: "34567-890-12",
        expectedAvailability: "2024-02-15",
        stockLevel: "0% remaining",
        usageInstructions: [
            "Take at the same time each day",
            "Do not stop suddenly without consulting your doctor",
            "Monitor blood pressure regularly",
            "Avoid potassium supplements unless directed"
        ],
        alternatives: [
            { name: "Enalapril", info: "Similar ACE inhibitor, available" },
            { name: "Losartan", info: "ARB alternative, available" }
        ]
    },
    {
        id: 4,
        name: "Ibuprofen",
        genericName: "Ibuprofen",
        category: "painkiller",
        status: "available",
        priority: "medium",
        description: "Nonsteroidal anti-inflammatory drug (NSAID) used to reduce pain, fever, and inflammation.",
        dosageForm: "Tablets",
        strength: "200mg",
        lastUpdated: "2024-01-16",
        manufacturer: "Pain Relief Pharmaceuticals",
        batchNumber: "IBU-2024-004",
        expiryDate: "2026-03-20",
        ndcNumber: "45678-901-23",
        expectedAvailability: "Available",
        stockLevel: "80% remaining",
        usageInstructions: [
            "Take with food or milk to prevent stomach irritation",
            "Do not exceed recommended dose",
            "Use for shortest duration necessary",
            "Avoid alcohol while taking this medication"
        ],
        alternatives: [
            { name: "Naproxen", info: "Longer-acting NSAID, available" },
            { name: "Acetaminophen", info: "Non-NSAID pain reliever, available" }
        ]
    },
    {
        id: 5,
        name: "Albuterol",
        genericName: "Albuterol Sulfate",
        category: "respiratory",
        status: "low-stock",
        priority: "high",
        description: "Bronchodilator used to treat asthma and COPD by opening airways and improving breathing.",
        dosageForm: "Inhaler",
        strength: "90mcg/spray",
        lastUpdated: "2024-01-12",
        manufacturer: "Respiratory Care Inc.",
        batchNumber: "ALB-2024-005",
        expiryDate: "2025-11-30",
        ndcNumber: "56789-012-34",
        expectedAvailability: "2024-01-25",
        stockLevel: "15% remaining",
        usageInstructions: [
            "Shake well before each use",
            "Use spacer device if recommended",
            "Rinse mouth after use",
            "Prime inhaler before first use"
        ],
        alternatives: [
            { name: "Levalbuterol", info: "Similar bronchodilator, available" },
            { name: "Ipratropium", info: "Different mechanism, available" }
        ]
    },
    {
        id: 6,
        name: "Sertraline",
        genericName: "Sertraline Hydrochloride",
        category: "mental-health",
        status: "available",
        priority: "medium",
        description: "Selective serotonin reuptake inhibitor (SSRI) used to treat depression, anxiety, and other mood disorders.",
        dosageForm: "Tablets",
        strength: "50mg",
        lastUpdated: "2024-01-11",
        manufacturer: "Mental Health Pharmaceuticals",
        batchNumber: "SER-2024-006",
        expiryDate: "2026-08-15",
        ndcNumber: "67890-123-45",
        expectedAvailability: "Available",
        stockLevel: "70% remaining",
        usageInstructions: [
            "Take at the same time each day",
            "May take 4-6 weeks to see full effect",
            "Do not stop suddenly without medical supervision",
            "Avoid alcohol while taking this medication"
        ],
        alternatives: [
            { name: "Fluoxetine", info: "Similar SSRI, available" },
            { name: "Citalopram", info: "Alternative SSRI, available" }
        ]
    },
    {
        id: 7,
        name: "Omeprazole",
        genericName: "Omeprazole",
        category: "gastrointestinal",
        status: "available",
        priority: "low",
        description: "Proton pump inhibitor used to treat acid reflux, GERD, and stomach ulcers by reducing acid production.",
        dosageForm: "Capsules",
        strength: "20mg",
        lastUpdated: "2024-01-10",
        manufacturer: "Gastro Health Corp.",
        batchNumber: "OME-2024-007",
        expiryDate: "2025-07-31",
        ndcNumber: "78901-234-56",
        expectedAvailability: "Available",
        stockLevel: "85% remaining",
        usageInstructions: [
            "Take before meals, preferably in the morning",
            "Swallow whole, do not crush or chew",
            "Use for prescribed duration only",
            "May take 1-4 days to see full effect"
        ],
        alternatives: [
            { name: "Lansoprazole", info: "Similar PPI, available" },
            { name: "Ranitidine", info: "H2 blocker alternative, available" }
        ]
    },
    {
        id: 8,
        name: "Atorvastatin",
        genericName: "Atorvastatin Calcium",
        category: "cardiovascular",
        status: "low-stock",
        priority: "medium",
        description: "Statin medication used to lower cholesterol levels and reduce risk of heart disease and stroke.",
        dosageForm: "Tablets",
        strength: "20mg",
        lastUpdated: "2024-01-09",
        manufacturer: "CardioMed Solutions",
        batchNumber: "ATO-2024-008",
        expiryDate: "2026-01-15",
        ndcNumber: "89012-345-67",
        expectedAvailability: "2024-01-30",
        stockLevel: "30% remaining",
        usageInstructions: [
            "Take at the same time each day",
            "Can be taken with or without food",
            "Avoid grapefruit juice while taking",
            "Regular lab monitoring required"
        ],
        alternatives: [
            { name: "Simvastatin", info: "Similar statin, available" },
            { name: "Rosuvastatin", info: "Alternative statin, available" }
        ]
    }
];

// DOM elements
let medicinesContainer;
let searchInput;
let categoryFilter;
let statusFilter;
let priorityFilter;
let sortSelect;
let medicinesCount;
let emptyState;

// Filtered medicines array
let filteredMedicines = [...medicinesData];

// Initialize medicines page
document.addEventListener('DOMContentLoaded', function() {
    initializeMedicinesPage();
});

function initializeMedicinesPage() {
    // Get DOM elements
    medicinesContainer = document.getElementById('medicines-container');
    searchInput = document.getElementById('medicine-search');
    categoryFilter = document.getElementById('category-filter');
    statusFilter = document.getElementById('status-filter');
    priorityFilter = document.getElementById('priority-filter');
    sortSelect = document.getElementById('sort-select');
    medicinesCount = document.getElementById('medicines-count');
    emptyState = document.getElementById('empty-state');
    
    if (!medicinesContainer) return;
    
    // Add event listeners
    if (searchInput) {
        searchInput.addEventListener('input', debounce(handleSearch, 300));
    }
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', handleFilter);
    }
    
    if (statusFilter) {
        statusFilter.addEventListener('change', handleFilter);
    }
    
    if (priorityFilter) {
        priorityFilter.addEventListener('change', handleFilter);
    }
    
    if (sortSelect) {
        sortSelect.addEventListener('change', handleSort);
    }
    
    // Initial render
    renderMedicines();
}

function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        filteredMedicines = [...medicinesData];
    } else {
        filteredMedicines = medicinesData.filter(medicine =>
            medicine.name.toLowerCase().includes(searchTerm) ||
            medicine.genericName.toLowerCase().includes(searchTerm) ||
            medicine.description.toLowerCase().includes(searchTerm)
        );
    }
    
    applyFilters();
}

function handleFilter() {
    const category = categoryFilter.value;
    const status = statusFilter.value;
    const priority = priorityFilter.value;
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    filteredMedicines = medicinesData.filter(medicine => {
        const matchesSearch = searchTerm === '' || 
            medicine.name.toLowerCase().includes(searchTerm) ||
            medicine.genericName.toLowerCase().includes(searchTerm) ||
            medicine.description.toLowerCase().includes(searchTerm);
        
        const matchesCategory = category === '' || medicine.category === category;
        const matchesStatus = status === '' || medicine.status === status;
        const matchesPriority = priority === '' || medicine.priority === priority;
        
        return matchesSearch && matchesCategory && matchesStatus && matchesPriority;
    });
    
    handleSort();
}

function applyFilters() {
    const category = categoryFilter.value;
    const status = statusFilter.value;
    const priority = priorityFilter.value;
    
    if (category || status || priority) {
        filteredMedicines = filteredMedicines.filter(medicine => {
            const matchesCategory = category === '' || medicine.category === category;
            const matchesStatus = status === '' || medicine.status === status;
            const matchesPriority = priority === '' || medicine.priority === priority;
            
            return matchesCategory && matchesStatus && matchesPriority;
        });
    }
    
    handleSort();
}

function handleSort() {
    const sortBy = sortSelect.value;
    
    filteredMedicines.sort((a, b) => {
        switch (sortBy) {
            case 'name':
                return a.name.localeCompare(b.name);
            case 'availability':
                const statusOrder = { 'available': 1, 'low-stock': 2, 'out-of-stock': 3 };
                return statusOrder[a.status] - statusOrder[b.status];
            case 'priority':
                const priorityOrder = { 'critical': 1, 'high': 2, 'medium': 3, 'low': 4 };
                return priorityOrder[a.priority] - priorityOrder[b.priority];
            case 'updated':
                return new Date(b.lastUpdated) - new Date(a.lastUpdated);
            default:
                return 0;
        }
    });
    
    renderMedicines();
}

function renderMedicines() {
    if (!medicinesContainer) return;
    
    // Update count
    if (medicinesCount) {
        medicinesCount.textContent = filteredMedicines.length;
    }
    
    // Show/hide empty state
    if (filteredMedicines.length === 0) {
        medicinesContainer.style.display = 'none';
        emptyState.style.display = 'block';
        return;
    } else {
        medicinesContainer.style.display = 'grid';
        emptyState.style.display = 'none';
    }
    
    // Render medicine cards
    medicinesContainer.innerHTML = filteredMedicines.map(medicine => createMedicineCard(medicine)).join('');
    
    // Add click event listeners to cards
    const medicineCards = medicinesContainer.querySelectorAll('.medicine-card');
    medicineCards.forEach(card => {
        card.addEventListener('click', function() {
            const medicineId = this.dataset.id;
            window.location.href = `medicine-details.html?id=${medicineId}`;
        });
    });
}

function createMedicineCard(medicine) {
    const statusClass = `status-badge--${medicine.status}`;
    const priorityClass = `priority-badge--${medicine.priority}`;
    
    return `
        <div class="medicine-card" data-id="${medicine.id}">
            <div class="medicine-card__header">
                <div class="medicine-card__title-group">
                    <h3 class="medicine-card__title">${medicine.name}</h3>
                    <p class="medicine-card__generic">${medicine.genericName}</p>
                </div>
                <div class="medicine-card__badges">
                    <span class="status-badge ${statusClass}">${formatStatus(medicine.status)}</span>
                    <span class="priority-badge ${priorityClass}">${formatPriority(medicine.priority)}</span>
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
    `;
}

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