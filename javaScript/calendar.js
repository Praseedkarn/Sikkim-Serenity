// Cultural Calendar
function initCalendar() {
    const currentMonthElement = document.getElementById('current-month');
    const calendarGrid = document.getElementById('calendar-grid');
    const prevMonthBtn = document.getElementById('prev-month');
    const nextMonthBtn = document.getElementById('next-month');
    
    // Event filters
    const eventFilters = document.querySelectorAll('.event-filters .filter-btn');
    
    // Set current date
    let currentDate = new Date();
    
    // Render calendar
    renderCalendar(currentDate);
    
    // Month navigation
    if (prevMonthBtn && nextMonthBtn) {
        prevMonthBtn.addEventListener('click', function() {
            currentDate.setMonth(currentDate.getMonth() - 1);
            renderCalendar(currentDate);
        });
        
        nextMonthBtn.addEventListener('click', function() {
            currentDate.setMonth(currentDate.getMonth() + 1);
            renderCalendar(currentDate);
        });
    }
    
    // Event filters
    if (eventFilters) {
        eventFilters.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                eventFilters.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Get event type
                const eventType = this.getAttribute('data-type');
                
                // Filter events (in a real implementation)
                console.log(`Filtering events by: ${eventType}`);
            });
        });
    }
    
    // Render calendar function
    function renderCalendar(date) {
        const year = date.getFullYear();
        const month = date.getMonth();
        
        // Update current month display
        if (currentMonthElement) {
            currentMonthElement.textContent = `${date.toLocaleString('default', { month: 'long' })} ${year}`;
        }
        
        // Get first day of month and number of days
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        
        // Clear calendar grid
        if (calendarGrid) {
            calendarGrid.innerHTML = '';
            
            // Add empty cells for days before the first day of the month
            for (let i = 0; i < firstDay; i++) {
                const emptyCell = document.createElement('div');
                emptyCell.className = 'calendar-day empty';
                calendarGrid.appendChild(emptyCell);
            }
            
            // Add cells for each day of the month
            for (let day = 1; day <= daysInMonth; day++) {
                const dayCell = document.createElement('div');
                dayCell.className = 'calendar-day';
                
                // Day number
                const dayNumber = document.createElement('div');
                dayNumber.className = 'day-number';
                dayNumber.textContent = day;
                dayCell.appendChild(dayNumber);
                
                // Sample events (in a real app, this would come from an API)
                if (day === 15) {
                    const event = document.createElement('div');
                    event.className = 'day-events';
                    event.innerHTML = '<span class="event-indicator festival"></span> Bumchu Festival';
                    dayCell.appendChild(event);
                }
                
                if (day === 22) {
                    const event = document.createElement('div');
                    event.className = 'day-events';
                    event.innerHTML = '<span class="event-indicator ceremony"></span> Losar Festival';
                    dayCell.appendChild(event);
                }
                
                calendarGrid.appendChild(dayCell);
            }
        }
    }
}