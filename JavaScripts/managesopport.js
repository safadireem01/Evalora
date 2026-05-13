let opportunities = [
            {
                id: 1,
                title: 'Software Engineering Internship',
                provider: 'TechCorp',
                type: 'Internship',
                location: 'Amman',
                deadline: '2026-05-13',
                status: 'ON-SITE',
                description: 'Join our team as a software engineering intern.'
            },
            {
                id: 2,
                title: 'Software Engineering Internship',
                provider: 'TechCorp',
                type: 'Internship',
                location: 'Amman',
                deadline: '2026-05-13',
                status: 'ON-SITE',
                description: 'Join our team as a software engineering intern.'
            },
            {
                id: 3,
                title: 'Software Engineering Internship',
                provider: 'TechCorp',
                type: 'Internship',
                location: 'Irbid',
                deadline: '2026-05-13',
                status: 'ON-SITE',
                description: 'Join our team as a software engineering intern.'
            },
            {
                id: 4,
                title: 'Software Engineering Internship',
                provider: 'TechCorp',
                type: 'Internship',
                location: 'Balqaa',
                deadline: '2026-05-13',
                status: 'ON-SITE',
                description: 'Join our team as a software engineering intern.'
            },
            {
                id: 5,
                title: 'Software Engineering Internship',
                provider: 'TechCorp',
                type: 'Internship',
                location: 'Amman',
                deadline: '2026-05-13',
                status: 'ON-SITE',
                description: 'Join our team as a software engineering intern.'
            },
            {
                id: 6,
                title: 'Software Engineering Internship',
                provider: 'TechCorp',
                type: 'Internship',
                location: 'Irbid',
                deadline: '2026-05-13',
                status: 'ON-SITE',
                description: 'Join our team as a software engineering intern.'
            }
        ];

        let nextId = 7;
        let editingId = null;

        function formatDate(dateString) {
            const date = new Date(dateString);
            const options = { year: 'numeric', month: 'short', day: 'numeric' };
            return date.toLocaleDateString('en-US', options).replace(',', '');
        }

        function renderOpportunities(data = opportunities) {
            const tbody = document.getElementById('opportunitiesTable');
            tbody.innerHTML = '';

            data.forEach(opp => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${opp.title}</td>
                    <td>${opp.provider}</td>
                    <td>${opp.type}</td>
                    <td>${opp.location}</td>
                    <td>${formatDate(opp.deadline)}</td>
                    <td><span class="status-badge">${opp.status}</span></td>
                    <td>
                        <div class="action-buttons">
                            <button class="action-btn" onclick="duplicateOpportunity(${opp.id})" title="Duplicate">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                            </button>
                            <button class="action-btn" onclick="editOpportunity(${opp.id})" title="Edit">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                            </button>
                            <button class="action-btn" onclick="deleteOpportunity(${opp.id})" title="Delete">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                        </div>
                    </td>
                `;
                tbody.appendChild(row);
            });
        }

        function openModal(isEdit = false) {
            const modal = document.getElementById('opportunityModal');
            const modalTitle = document.getElementById('modalTitle');
            
            if (isEdit) {
                modalTitle.textContent = 'Edit Opportunity';
            } else {
                modalTitle.textContent = 'Add Opportunity';
                document.getElementById('opportunityForm').reset();
                document.getElementById('opportunityId').value = '';
                editingId = null;
            }
            
            modal.classList.add('active');
        }

        function closeModal() {
            const modal = document.getElementById('opportunityModal');
            modal.classList.remove('active');
            document.getElementById('opportunityForm').reset();
            editingId = null;
        }

        function editOpportunity(id) {
            const opp = opportunities.find(o => o.id === id);
            if (!opp) return;

            editingId = id;
            document.getElementById('opportunityId').value = id;
            document.getElementById('title').value = opp.title;
            document.getElementById('provider').value = opp.provider;
            document.getElementById('type').value = opp.type;
            document.getElementById('location').value = opp.location;
            document.getElementById('deadline').value = opp.deadline;
            document.getElementById('status').value = opp.status;
            document.getElementById('description').value = opp.description || '';

            openModal(true);
        }

        function duplicateOpportunity(id) {
            const opp = opportunities.find(o => o.id === id);
            if (!opp) return;

            const newOpp = {
                ...opp,
                id: nextId++,
                title: opp.title + ' (Copy)'
            };

            opportunities.push(newOpp);
            renderOpportunities();
        }

        function deleteOpportunity(id) {
            if (confirm('Are you sure you want to delete this opportunity?')) {
                opportunities = opportunities.filter(o => o.id !== id);
                renderOpportunities();
            }
        }

        function applyFilters() {
            const typeFilter = document.getElementById('filterType').value;
            const providerFilter = document.getElementById('filterProvider').value;
            const locationFilter = document.getElementById('filterLocation').value;
            const statusFilter = document.getElementById('filterStatus').value;

            let filtered = opportunities;

            if (typeFilter) {
                filtered = filtered.filter(opp => opp.type === typeFilter);
            }
            if (providerFilter) {
                filtered = filtered.filter(opp => opp.provider === providerFilter);
            }
            if (locationFilter) {
                filtered = filtered.filter(opp => opp.location === locationFilter);
            }
            if (statusFilter) {
                filtered = filtered.filter(opp => opp.status === statusFilter);
            }

            renderOpportunities(filtered);
        }

        document.getElementById('opportunityForm').addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = {
                title: document.getElementById('title').value,
                provider: document.getElementById('provider').value,
                type: document.getElementById('type').value,
                location: document.getElementById('location').value,
                deadline: document.getElementById('deadline').value,
                status: document.getElementById('status').value,
                description: document.getElementById('description').value
            };

            if (editingId) {
                const index = opportunities.findIndex(o => o.id === editingId);
                if (index !== -1) {
                    opportunities[index] = { ...opportunities[index], ...formData };
                }
            } else {
                opportunities.push({
                    id: nextId++,
                    ...formData
                });
            }

            renderOpportunities();
            closeModal();
        });

        // Close modal when clicking outside
        document.getElementById('opportunityModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });

        // Initial render
        renderOpportunities();