// 当前显示的年月
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();

// 初始化日历
function initCalendar() {
    renderCalendar();
    setupEventListeners();
}

// 渲染日历
function renderCalendar() {
    // 更新当前日期显示
    const monthNames = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
    document.getElementById('current-date').textContent = `${currentYear}年 ${monthNames[currentMonth]}`;
    
    // 清空日期网格
    const daysGrid = document.getElementById('days-grid');
    daysGrid.innerHTML = '';
    
    // 获取当月第一天
    const firstDay = new Date(currentYear, currentMonth, 1);
    
    // 获取当月第一天是星期几（0-6，0是星期日）
    // 调整为从周一开始计算
    let firstDayIndex = firstDay.getDay();
    if (firstDayIndex === 0) firstDayIndex = 7; // 星期日调整为7
    firstDayIndex -= 1; // 减1使得周一为0
    
    // 获取当月的天数
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    
    // 获取上个月的天数
    const prevMonthDays = new Date(currentYear, currentMonth, 0).getDate();
    
    // 生成上个月的日期
    for (let i = firstDayIndex - 1; i >= 0; i--) {
        const dayDate = new Date(currentYear, currentMonth, -i);
        const dayDiv = createDayElement(dayDate, false);
        daysGrid.appendChild(dayDiv);
    }
    
    // 生成当月的日期
    for (let i = 1; i <= daysInMonth; i++) {
        const dayDate = new Date(currentYear, currentMonth, i);
        const dayDiv = createDayElement(dayDate, true);
        daysGrid.appendChild(dayDiv);
    }
    
    // 生成下个月的日期，补齐网格
    const remainingDays = 42 - (firstDayIndex + daysInMonth); // 6行7列共42个单元格
    for (let i = 1; i <= remainingDays; i++) {
        const dayDate = new Date(currentYear, currentMonth + 1, i);
        const dayDiv = createDayElement(dayDate, false);
        daysGrid.appendChild(dayDiv);
    }
}

// 创建日期元素
function createDayElement(date, isCurrentMonth) {
    const dayDiv = document.createElement('div');
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    
    // 添加基本样式
    dayDiv.classList.add('day');
    if (!isCurrentMonth) {
        dayDiv.classList.add('other-month');
    }
    
    // 检查是否为周末
    const dayOfWeek = date.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) {
        dayDiv.classList.add('weekend');
    }
    
    // 检查是否为今天
    const today = new Date();
    if (day === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
        dayDiv.classList.add('today');
    }
    
    // 获取农历信息
    const lunarInfo = solarToLunar(date);
    
    // 创建日期数字
    const dayNumberSpan = document.createElement('span');
    dayNumberSpan.classList.add('day-number');
    dayNumberSpan.textContent = day;
    
    // 创建农历日期
    const lunarDateSpan = document.createElement('span');
    lunarDateSpan.classList.add('lunar-date');
    
    // 如果有节日，显示节日名称
    if (lunarInfo.festival) {
        lunarDateSpan.textContent = lunarInfo.festival;
        lunarDateSpan.classList.add('festival');
    } else {
        lunarDateSpan.textContent = lunarInfo.lunarDayCn;
    }
    
    // 添加到日期元素
    dayDiv.appendChild(dayNumberSpan);
    dayDiv.appendChild(lunarDateSpan);
    
    return dayDiv;
}

// 设置事件监听器
function setupEventListeners() {
    // 上个月按钮
    document.getElementById('prev-month').addEventListener('click', () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderCalendar();
    });
    
    // 下个月按钮
    document.getElementById('next-month').addEventListener('click', () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar();
    });
    
    // 今天按钮
    document.getElementById('today-btn').addEventListener('click', () => {
        currentDate = new Date();
        currentYear = currentDate.getFullYear();
        currentMonth = currentDate.getMonth();
        renderCalendar();
    });
}

// 窗口大小变化时重新渲染日历
window.addEventListener('resize', renderCalendar);

// 初始化日历
initCalendar();