// ملف قاعدة بيانات الأدوية المحلية - medications.js
const allMeds = [
  {
    "Medication_Name": "أدول شراب (Adol Syrup)",
    "Type": "Syrup",
    "Std_Dose_mg_kg": 15,
    "Min_Dose_mg_kg": 10,
    "Max_Dose_mg_kg": 15,
    "Strength_mg": 120,
    "Per_ml": 5,
    "Frequency_en": "كل 6 ساعات عند الحاجة",
    "Stability_en": "7 أيام بعد الفتح في درجة حرارة الغرفة",
    "Note_en": "لا تتجاوز 4 جرعات خلال 24 ساعة."
  },
  {
    "Medication_Name": "بروفين شراب (Brufen Syrup)",
    "Type": "Syrup",
    "Std_Dose_mg_kg": 10,
    "Min_Dose_mg_kg": 5,
    "Max_Dose_mg_kg": 10,
    "Strength_mg": 100,
    "Per_ml": 5,
    "Frequency_en": "كل 8 ساعات بعد الطعام",
    "Stability_en": "صالح حتى تاريخ الانتهاء المكتوب على العلبة",
    "Note_en": "لا يعطى للأطفال دون عمر 6 أشهر أو بوزن أقل من 5 كجم."
  },
  {
    "Medication_Name": "أموكسيسيلين حقن (Amoxicillin Vial)",
    "Type": "Vial",
    "Std_Dose_mg_kg": 30,
    "Min_Dose_mg_kg": 20,
    "Max_Dose_mg_kg": 40,
    "Strength_mg": 500,
    "Per_ml": 5,
    "Frequency_en": "كل 8 ساعات حقن وريدي أو عضلي",
    "Stability_en": "يستخدم فوراً بعد الحل، أو يحفظ 24 ساعة في الثلاجة",
    "Note_en": "يجب إجراء اختبار الحساسية قبل الحقن."
  },
  {
    "Medication_Name": "أوتريفين قطرة (Otrivin Drops)",
    "Type": "Drop",
    "Std_Dose_mg_kg": 0.1,
    "Min_Dose_mg_kg": 0.05,
    "Max_Dose_mg_kg": 0.1,
    "Strength_mg": 0.5,
    "Per_ml": 10,
    "Frequency_en": "قطرة واحدة في كل فتحة أنف 2-3 مرات يومياً",
    "Stability_en": "28 يوماً بعد الفتح",
    "Note_en": "لا تستخدم لأكثر من 5 أيام متتالية تجنباً للاستسقاء الارتدادي."
  }
];
