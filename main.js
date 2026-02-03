const modulesData = [
    {
        id: 0,
        title: "User Permissions",
        icon: "lock",
        desc: "Phân bổ vai trò và quản lý quyền truy cập hệ thống chi tiết.",
        features: ["Cơ chế 2FA", "Audit trail", "IP Whitelist"]
    },
    {
        id: 1,
        title: "Product Catalog",
        icon: "package",
        desc: "Quản lý danh mục, biến thể, Combo và định mức nguyên liệu BOM.",
        features: ["Quản lý Variant", "Topping/Modifier", "Pricing strategies"]
    },
    {
        id: 2,
        title: "Smart POS",
        icon: "shopping-cart",
        desc: "Giao diện bán hàng trực quan với sơ đồ bàn 3D và thanh toán đa phương thức.",
        features: ["Offline mode", "Tách/Gộp bàn", "QR động & SoftPOS"]
    },
    {
        id: 3,
        title: "Inventory & Purchasing",
        icon: "truck",
        desc: "Tối ưu hóa chuỗi cung ứng, quản lý nhà cung cấp và dự báo tồn kho.",
        features: ["PO Workflow", "Chuyển kho nội bộ", "Barcode scanning"]
    },
    {
        id: 4,
        title: "Customer & CRM",
        icon: "users",
        desc: "Xây dựng lòng trung thành với Customer 360 và Marketing Automation.",
        features: ["Phân hạng thành viên", "Tích điểm", "AI Insights"]
    },
    {
        id: 5,
        title: "Staff & HR",
        icon: "briefcase",
        desc: "Quản lý nhân sự, chấm công và tính lương tự động.",
        features: ["KPI Tracking", "Leave Management", "Performance AI"]
    },
    {
        id: 6,
        title: "Promotions",
        icon: "ticket",
        desc: "Thiết kế chiến dịch khuyến mãi đa dạng và tối ưu hóa doanh thu.",
        features: ["Voucher management", "Promotion stacking", "A/B Testing"]
    },
    {
        id: 7,
        title: "Finance & Cashbook",
        icon: "wallet",
        desc: "Quản lý dòng tiền, công nợ và báo cáo tài chính thời gian thực.",
        features: ["Bank Reconciliation", "Cash Flow Forecast", "Multi-currency"]
    },
    {
        id: 8,
        title: "Reporting & AI",
        icon: "pie-chart",
        desc: "Phân tích dữ liệu chuyên sâu với dashboard trực quan và AI gợi ý.",
        features: ["Predictive analytics", "Custom Report Builder", "Interactive Charts"]
    }
];

function renderModules() {
    const container = document.getElementById('modules-list');
    if (!container) return;

    container.innerHTML = modulesData.map(mod => `
        <div class="module-card">
            <div class="mod-icon">
                <i data-lucide="${mod.icon}"></i>
            </div>
            <h3>${mod.title}</h3>
            <p>${mod.desc}</p>
            <ul class="mod-features">
                ${mod.features.map(f => `<li><i data-lucide="check"></i> ${f}</li>`).join('')}
            </ul>
        </div>
    `).join('');

    // Re-initialize lucide icons for injected HTML
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

// Simple Intersection Observer for scroll animations
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.module-card, .stat-card, .ai-box, .arch-container').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderModules();
    initScrollAnimations();
});
