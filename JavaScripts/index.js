// =====================
// POPUPS: REGISTER OPTIONS + COMPANY
// =====================

// فتح popup تبع اختيار نوع الحساب
function openRegisterPopup() {
  const popup = document.getElementById("registerPopup");
  if (popup) popup.style.display = "flex";
}

// إغلاق popup تبع اختيار نوع الحساب
function closeRegisterPopup() {
  const popup = document.getElementById("registerPopup");
  if (popup) popup.style.display = "none";
}

// فتح popup تبع الشركة
function openCompanyPopup() {
  const popup = document.getElementById("companyPopup");
  if (popup) popup.style.display = "flex";
}

// إغلاق popup تبع الشركة
function closeCompanyPopup() {
  const popup = document.getElementById("companyPopup");
  if (popup) popup.style.display = "none";
}

// =====================
// TOAST MESSAGE
// =====================
function showCompanyToast() {
  const toast = document.getElementById("companyToast");
  if (!toast) return;

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

// =====================
// HANDLE COMPANY SUBMIT
// =====================
document.addEventListener("DOMContentLoaded", () => {
  const companyForm = document.getElementById("companyForm"); // لو عندك form
  const companySubmitBtn = document.querySelector(".submit-company-btn");

  if (companySubmitBtn) {
    companySubmitBtn.addEventListener("click", (e) => {
      e.preventDefault(); // ما يبعث فورم حقيقي الآن

      // تنظيف الحقول (اختياري لو عندك form)
      if (companyForm) companyForm.reset();

      // سكّر popup الشركة
      closeCompanyPopup();

      // سكّر popup تبع اختيار نوع التسجيل
      closeRegisterPopup();

      // إظهار رسالة النجاح
      showCompanyToast();
    });
  }

  // إغلاق أي popup لما نكبس برا الصندوق
  document.querySelectorAll(".popup-overlay").forEach((overlay) => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.style.display = "none";
      }
    });
  });
});
