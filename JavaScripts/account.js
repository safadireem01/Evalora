// Get elements
        const logoutBtn = document.getElementById('logoutBtn');
        const logoutModal = document.getElementById('logoutModal');
        const cancelBtn = document.getElementById('cancelBtn');
        const confirmBtn = document.getElementById('confirmBtn');

        // Show modal when logout is clicked
        logoutBtn.addEventListener('click', function() {
            logoutModal.classList.add('active');
        });

        // Hide modal when cancel is clicked
        cancelBtn.addEventListener('click', function() {
            logoutModal.classList.remove('active');
        });

        // Handle logout confirmation
        confirmBtn.addEventListener('click', function() {
            // Add your logout logic here
            alert('Logging out...');
            logoutModal.classList.remove('active');
            // Example: window.location.href = '/login';
        });

        // Close modal when clicking outside
        logoutModal.addEventListener('click', function(e) {
            if (e.target === logoutModal) {
                logoutModal.classList.remove('active');
            }
        });

         // Change Phone functionality
        const changePhoneBtns = document.querySelectorAll('.btn-change');
        const phoneBtn = changePhoneBtns[0];
        const changePhoneModal = document.getElementById('changePhoneModal');
        const cancelPhoneBtn = document.getElementById('cancelPhoneBtn');
        const confirmPhoneBtn = document.getElementById('confirmPhoneBtn');
        const newPhoneInput = document.getElementById('newPhoneInput');
        const phoneInput = document.querySelector('input[type="tel"]');

        phoneBtn.addEventListener('click', function() {
            newPhoneInput.value = phoneInput.value;
            changePhoneModal.classList.add('active');
        });

        cancelPhoneBtn.addEventListener('click', function() {
            changePhoneModal.classList.remove('active');
        });

        confirmPhoneBtn.addEventListener('click', function() {
            if (newPhoneInput.value.trim()) {
                phoneInput.value = newPhoneInput.value;
                alert('Phone number updated successfully!');
                changePhoneModal.classList.remove('active');
                // Add your API call here to update phone number on server
            } else {
                alert('Please enter a valid phone number');
            }
        });

        changePhoneModal.addEventListener('click', function(e) {
            if (e.target === changePhoneModal) {
                changePhoneModal.classList.remove('active');
            }
        });

        // Delete Account functionality
        const deleteBtn = document.querySelector('.btn-delete');
        const deleteModal = document.getElementById('deleteModal');
        const cancelDeleteBtn = document.getElementById('cancelDeleteBtn');
        const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');

        deleteBtn.addEventListener('click', function() {
            deleteModal.classList.add('active');
        });

        cancelDeleteBtn.addEventListener('click', function() {
            deleteModal.classList.remove('active');
        });

        confirmDeleteBtn.addEventListener('click', function() {
            alert('Account deleted successfully!');
            deleteModal.classList.remove('active');
            // Add your account deletion logic here (e.g., API call and redirect to homepage)
        });

        deleteModal.addEventListener('click', function(e) {
            if (e.target === deleteModal) {
                deleteModal.classList.remove('active');
            }
        });