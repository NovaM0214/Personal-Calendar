// 农历数据 - 1900-2100年间的农历信息
var lunarInfo = [0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2,
    0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977,
    0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970,
    0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950,
    0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557,
    0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5b0, 0x14573, 0x052b0, 0x0a9a8, 0x0e950, 0x06aa0,
    0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0,
    0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b6a0, 0x195a6,
    0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570,
    0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x05ac0, 0x0ab60, 0x096d5, 0x092e0,
    0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5,
    0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930,
    0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530,
    0x05aa0, 0x076a3, 0x096d0, 0x04afb, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45,
    0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0,
    0x14b63, 0x09370, 0x049f8, 0x04970, 0x064b0, 0x168a6, 0x0ea50, 0x06b20, 0x1a6c4, 0x0aae0,
    0x0a2e0, 0x0d2e3, 0x0c960, 0x0d557, 0x0d4a0, 0x0da50, 0x05d55, 0x056a0, 0x0a6d0, 0x055d4,
    0x052d0, 0x0a9b8, 0x0a950, 0x0b4a0, 0x0b6a6, 0x0ad50, 0x055a0, 0x0aba4, 0x0a5b0, 0x052b0,
    0x0b273, 0x06930, 0x07337, 0x06aa0, 0x0ad50, 0x14b55, 0x04b60, 0x0a570, 0x054e4, 0x0d160,
    0x0e968, 0x0d520, 0x0daa0, 0x16aa6, 0x056d0, 0x04ae0, 0x0a9d4, 0x0a2d0, 0x0d150, 0x0f252,
    0x0d520];

// 公历每月天数
var solarMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// 天干地支
var Gan = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
var Zhi = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
var Animals = ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪'];
var lunarTerm = ['小寒', '大寒', '立春', '雨水', '惊蛰', '春分', '清明', '谷雨', '立夏', '小满', '芒种', '夏至', '小暑', '大暑', '立秋', '处暑', '白露', '秋分', '寒露', '霜降', '立冬', '小雪', '大雪', '冬至'];
var nStr1 = ['日', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
var nStr2 = ['初', '十', '廿', '卅'];
var solarFestivals = {'01-01': '元旦', '02-14': '情人节', '03-08': '妇女节', '03-12': '植树节', '04-01': '愚人节', '05-01': '劳动节', '05-04': '青年节', '06-01': '儿童节', '07-01': '建党节', '08-01': '建军节', '09-10': '教师节', '10-01': '国庆节', '12-25': '圣诞节'};
var lunarFestivals = {'01-01': '春节', '01-15': '元宵节', '05-05': '端午节', '07-07': '七夕节', '08-15': '中秋节', '09-09': '重阳节', '12-08': '腊八节', '12-24': '小年'};

// 判断是否为闰年
function isLeapYear(year) {
    return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
}

// 获取公历某月份的总天数
function getSolarDays(year, month) {
    return month == 1 ? (isLeapYear(year) ? 29 : 28) : solarMonth[month];
}

// 公历转农历
function solarToLunar(date) {
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    
    var i, leap = 0, temp = 0;
    var lunarYear, lunarMonth, lunarDay;
    var isLeap = false;
    
    // 计算到1900年1月31日的总天数
    var days = 0;
    for (i = 1900; i < year; i++) {
        days += 365 + (isLeapYear(i) ? 1 : 0);
    }
    for (i = 0; i < month; i++) {
        days += getSolarDays(year, i);
    }
    days += day - 1;
    
    // 计算农历日期
    var idx = 0;
    for (i = 1900; i < 2101 && days > 0; i++) {
        temp = getLunarYearDays(i);
        days -= temp;
        idx++;
    }
    if (days < 0) {
        days += temp;
        idx--;
        i--;
    }
    
    lunarYear = i;
    leap = getLeapMonth(lunarYear);
    isLeap = false;
    
    for (i = 1; i < 13 && days > 0; i++) {
        // 闰月
        if (leap > 0 && i == (leap + 1) && isLeap == false) {
            --i;
            isLeap = true;
            temp = getLunarMonthDays(lunarYear, i);
        } else {
            temp = getLunarMonthDays(lunarYear, i);
        }
        
        // 解除闰月
        if (isLeap && i == (leap + 1)) {
            isLeap = false;
        }
        
        days -= temp;
        if (isLeap) {
            lunarMonth = '闰' + getChineseMonth(i);
        } else {
            lunarMonth = getChineseMonth(i);
        }
    }
    
    if (days == 0 && leap > 0 && i == leap + 1) {
        if (isLeap) {
            isLeap = false;
        } else {
            isLeap = true;
            --i;
        }
    }
    
    if (days < 0) {
        days += temp;
        --i;
        if (leap > 0 && i == leap) {
            isLeap = true;
            lunarMonth = '闰' + getChineseMonth(i);
        } else {
            isLeap = false;
            lunarMonth = getChineseMonth(i);
        }
    }
    
    lunarDay = days + 1;
    
    // 计算星期几
    var week = date.getDay();
    var weekCn = ['日', '一', '二', '三', '四', '五', '六'][week];
    
    // 计算节气
    var term = getTerm(year, month + 1, day);
    
    // 计算干支
    var gzYear = (lunarYear - 1900 + 36) % 60;
    var ganYear = Gan[gzYear % 10];
    var zhiYear = Zhi[gzYear % 12];
    var animal = Animals[gzYear % 12];
    
    // 格式化农历日
    var lunarDayCn = getChineseDay(lunarDay);
    
    // 检查是否为节日
    var festival = '';
    var solarKey = (month + 1).toString().padStart(2, '0') + '-' + day.toString().padStart(2, '0');
    var lunarKey = (isLeap ? 'r' : '') + (i).toString().padStart(2, '0') + '-' + lunarDay.toString().padStart(2, '0');
    
    if (solarFestivals[solarKey]) {
        festival = solarFestivals[solarKey];
    } else if (lunarFestivals[lunarKey]) {
        festival = lunarFestivals[lunarKey];
    } else if (term) {
        festival = term;
    }
    
    return {
        lunarYear: lunarYear,
        lunarMonth: i,
        lunarDay: lunarDay,
        lunarMonthCn: lunarMonth,
        lunarDayCn: lunarDayCn,
        isLeap: isLeap,
        ganYear: ganYear,
        zhiYear: zhiYear,
        animal: animal,
        week: week,
        weekCn: weekCn,
        term: term,
        festival: festival
    };
}

// 获取农历年的天数
function getLunarYearDays(year) {
    var days = 0;
    for (var i = 0x8000; i > 0x8; i >>= 1) {
        days += (lunarInfo[year - 1900] & i) ? 30 : 29;
    }
    return days + getLunarMonthDays(year, 0);
}

// 获取农历月的天数
function getLunarMonthDays(year, month) {
    if (month > 12) return 0;
    var bit = 1 << (month - 1);
    return (lunarInfo[year - 1900] & bit) ? 30 : 29;
}

// 获取闰月
function getLeapMonth(year) {
    return lunarInfo[year - 1900] & 0xf;
}

// 获取农历月的中文表示
function getChineseMonth(month) {
    return nStr1[month];
}

// 获取农历日的中文表示
function getChineseDay(day) {
    var s = '';
    if (day == 10) {
        s = '初十';
    } else if (day == 20) {
        s = '二十';
    } else if (day == 30) {
        s = '三十';
    } else {
        s = nStr2[Math.floor(day / 10)] + nStr1[day % 10];
    }
    return s;
}

// 获取节气
function getTerm(year, month, day) {
    // 简化版节气计算
    var termInfo = [0, 21208, 42467, 63836, 85337, 107014, 128867, 150921, 173149, 195551, 218072, 240693, 263343, 285989, 308563, 331033, 353350, 375494, 397447, 419210, 440795, 462224, 483532, 504758];
    var seconds = (Date.UTC(year, 0, 6, 2, 5, 0) / 1000) + termInfo[month * 2 - 2] * 60;
    var date = new Date(seconds * 1000);
    if (date.getDate() == day) {
        return lunarTerm[month * 2 - 2];
    }
    
    seconds = (Date.UTC(year, 0, 6, 2, 5, 0) / 1000) + termInfo[month * 2 - 1] * 60;
    date = new Date(seconds * 1000);
    if (date.getDate() == day) {
        return lunarTerm[month * 2 - 1];
    }
    
    return null;
}

// 修改script.js以适应非模块化导入
// 同时需要修改index.html中的script标签顺序