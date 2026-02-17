// ===== قائمة الكلمات =====
const WORDS_DATA = [
    { word: "قهوة", forbidden: ["شرب", "كافيين", "فنجان", "سادة", "نسكافيه"] },
    { word: "تفاح", forbidden: ["فاكهة", "أحمر", "أخضر", "شجرة", "عصير"] },
    { word: "شمس", forbidden: ["سما", "نور", "ضوء", "حر", "نهار"] },
    { word: "قمر", forbidden: ["ليل", "سما", "نور", "هلال", "بدر"] },
    { word: "مطر", forbidden: ["ماء", "سما", "غيمة", "شتاء", "بلل"] },
    { word: "ثلج", forbidden: ["برد", "أبيض", "شتاء", "جليد", "ماء"] },
    { word: "نار", forbidden: ["حر", "لهب", "حريق", "أحمر", "ولاعة"] },
    { word: "ماء", forbidden: ["شرب", "سائل", "نهر", "بحر", "عطش"] },
    { word: "بحر", forbidden: ["ماء", "موج", "سباحة", "شاطئ", "ملح"] },
    { word: "جبل", forbidden: ["عالي", "صخر", "تسلق", "قمة", "طبيعة"] },
    { word: "نهر", forbidden: ["ماء", "جريان", "نيل", "سمك", "جسر"] },
    { word: "سيارة", forbidden: ["عربية", "سواقة", "بنزين", "طريق", "موتور"] },
    { word: "دراجة", forbidden: ["عجلة", "بدال", "ركوب", "عجل", "سباق"] },
    { word: "حذاء", forbidden: ["جزمة", "رجل", "لبس", "مشي", "كعب"] },
    { word: "قبعة", forbidden: ["راس", "لبس", "شمس", "طاقية", "كاب"] },
    { word: "قميص", forbidden: ["لبس", "هدوم", "زرار", "كم", "تيشيرت"] },
    { word: "قلم", forbidden: ["كتابة", "حبر", "ورقة", "رصاص", "مدرسة"] },
    { word: "ورقة", forbidden: ["كتابة", "قلم", "أبيض", "كتاب", "طباعة"] },
    { word: "كتاب", forbidden: ["قراءة", "صفحات", "ورق", "مكتبة", "غلاف"] },
    { word: "حقيبة", forbidden: ["شنطة", "حمل", "سفر", "ظهر", "كتف"] },
    { word: "مفتاح", forbidden: ["باب", "فتح", "قفل", "بيت", "مفاتيح"] },
    { word: "هاتف", forbidden: ["موبايل", "تليفون", "اتصال", "شاشة", "رنة"] },
    { word: "كمبيوتر", forbidden: ["لابتوب", "شاشة", "كيبورد", "ماوس", "إنترنت"] },
    { word: "شاشة", forbidden: ["تلفزيون", "موبايل", "عرض", "صورة", "بث"] },
    { word: "طاولة", forbidden: ["ترابيزة", "خشب", "أكل", "كرسي", "سطح"] },
    { word: "كرسي", forbidden: ["قعاد", "جلوس", "خشب", "طاولة", "أربع"] },
    { word: "سرير", forbidden: ["نوم", "مرتبة", "وسادة", "راحة", "أوضة"] },
    { word: "وسادة", forbidden: ["نوم", "مخدة", "راس", "سرير", "ناعم"] },
    { word: "باب", forbidden: ["فتح", "قفل", "مفتاح", "دخول", "خروج"] },
    { word: "نافذة", forbidden: ["شباك", "زجاج", "هوا", "فتح", "ستارة"] },
    { word: "حديقة", forbidden: ["جنينة", "زهور", "شجر", "عشب", "أخضر"] },
    { word: "زهرة", forbidden: ["وردة", "حديقة", "ريحة", "ألوان", "بتلة"] },
    { word: "شجرة", forbidden: ["خشب", "ورق", "أخضر", "فرع", "جذر"] },
    { word: "رمل", forbidden: ["شاطئ", "صحراء", "أصفر", "بحر", "بناء"] },
    { word: "جزيرة", forbidden: ["بحر", "ماء", "أرض", "سفر", "نخل"] },
    { word: "مدينة", forbidden: ["بلد", "ناس", "شوارع", "عمارات", "كبيرة"] },
    { word: "قطار", forbidden: ["سكة حديد", "محطة", "سفر", "ركاب", "قضبان"] },
    { word: "طائرة", forbidden: ["طيران", "سما", "مطار", "سفر", "جناح"] },
    { word: "مطار", forbidden: ["طائرة", "سفر", "ركاب", "حقائب", "طيران"] },
    { word: "مطعم", forbidden: ["أكل", "طبخ", "جرسون", "مينيو", "فاتورة"] },
    { word: "مطبخ", forbidden: ["طبخ", "أكل", "فرن", "حلل", "بوتاجاز"] },
    { word: "ثلاجة", forbidden: ["برد", "أكل", "حفظ", "تلج", "مطبخ"] },
    { word: "طبق", forbidden: ["أكل", "صحن", "مطبخ", "غسل", "سفرة"] },
    { word: "ملعقة", forbidden: ["أكل", "معلقة", "شوربة", "معدن", "طبخ"] },
    { word: "سكين", forbidden: ["قطع", "سنة", "حاد", "مطبخ", "لحم"] },
    { word: "كوب", forbidden: ["شرب", "ماء", "زجاج", "شاي", "عصير"] },
    { word: "عصير", forbidden: ["شرب", "فواكه", "برتقال", "كوب", "سكر"] },
    { word: "خبز", forbidden: ["عيش", "فرن", "أكل", "قمح", "دقيق"] },
    { word: "جبن", forbidden: ["أبيض", "أكل", "لبن", "جبنة", "فطار"] },
    { word: "سكر", forbidden: ["حلو", "شاي", "أبيض", "قهوة", "مرض"] },
    { word: "ملح", forbidden: ["أكل", "طعم", "بحر", "أبيض", "ملوحة"] },
    { word: "بطاطس", forbidden: ["مقلية", "خضار", "شيبسي", "طبخ", "أكل"] },
    { word: "أرز", forbidden: ["طبخ", "أكل", "أبيض", "حبوب", "رز"] },
    { word: "لحم", forbidden: ["أكل", "حيوان", "شواء", "طبخ", "جزار"] },
    { word: "دجاج", forbidden: ["فراخ", "أكل", "طبخ", "بيض", "فرخة"] },
    { word: "سمك", forbidden: ["بحر", "أكل", "صيد", "قلي", "ماء"] },
    { word: "بيض", forbidden: ["فراخ", "فطار", "أكل", "أومليت", "بياض"] },
    { word: "موز", forbidden: ["فاكهة", "أصفر", "قرد", "قشرة", "حلو"] },
    { word: "برتقال", forbidden: ["فاكهة", "عصير", "لون", "حمضيات", "فيتامين"] },
    { word: "فراولة", forbidden: ["فاكهة", "أحمر", "حلو", "عصير", "توت"] },
    { word: "عنب", forbidden: ["فاكهة", "حبات", "أخضر", "عصير", "كرمة"] },
    { word: "بطيخ", forbidden: ["فاكهة", "أحمر", "أخضر", "صيف", "بزر"] },
    { word: "ليمون", forbidden: ["حامض", "أصفر", "عصير", "حمضيات", "فيتامين"] },
    { word: "طماطم", forbidden: ["أحمر", "صلصة", "خضار", "سلطة", "قوطة"] },
    { word: "خيار", forbidden: ["أخضر", "سلطة", "خضار", "ماء", "طازة"] },
    { word: "جزر", forbidden: ["أحمر", "برتقالي", "خضار", "أرنب", "عصير"] },
    { word: "بصل", forbidden: ["بكاء", "دموع", "طبخ", "حاد", "ريحة"] },
    { word: "ثوم", forbidden: ["ريحة", "طبخ", "توم", "أكل", "بصل"] },
    { word: "كوسة", forbidden: ["خضار", "أخضر", "طبخ", "محشي", "قلي"] },
    { word: "باذنجان", forbidden: ["خضار", "بنفسجي", "قلي", "مسقعة", "طبخ"] },
    { word: "كرة", forbidden: ["لعب", "مستديرة", "قدم", "ملعب", "ماتش"] },
    { word: "سلم", forbidden: ["طلوع", "درج", "نزول", "سلالم", "عمارة"] },
    { word: "تلفاز", forbidden: ["شاشة", "تليفزيون", "مسلسل", "قنوات", "ريموت"] },
    { word: "ريموت", forbidden: ["تلفزيون", "تحكم", "زرار", "قناة", "بطارية"] },
    { word: "ممحاة", forbidden: ["أستيكة", "مسح", "قلم", "رصاص", "غلط"] },
    { word: "مسطرة", forbidden: ["خط", "قياس", "سم", "رسم", "مدرسة"] },
    { word: "دفتر", forbidden: ["كراسة", "كتابة", "ورق", "مدرسة", "قلم"] },
    { word: "ساعة", forbidden: ["وقت", "إيد", "دقائق", "عقارب", "زمن"] },
    { word: "نظارة", forbidden: ["عين", "نظر", "زجاج", "شمس", "إطار"] },
    { word: "معطف", forbidden: ["جاكيت", "برد", "لبس", "شتاء", "هدوم"] },
    { word: "بنطلون", forbidden: ["لبس", "هدوم", "رجل", "جينز", "قماش"] },
    { word: "جورب", forbidden: ["رجل", "لبس", "شراب", "حذاء", "قطن"] },
    { word: "حزام", forbidden: ["وسط", "لبس", "بنطلون", "جلد", "ربط"] },
    { word: "محفظة", forbidden: ["فلوس", "جيب", "بطاقة", "جلد", "نقود"] },
    { word: "أسد", forbidden: ["حيوان", "ملك", "غابة", "زئير", "قوي"] },
    { word: "فيل", forbidden: ["حيوان", "كبير", "خرطوم", "رمادي", "ضخم"] },
    { word: "زرافة", forbidden: ["حيوان", "رقبة", "طويلة", "أفريقيا", "بقع"] },
    { word: "حصان", forbidden: ["حيوان", "ركوب", "سباق", "سريع", "خيل"] },
    { word: "كلب", forbidden: ["حيوان", "نباح", "وفي", "ذيل", "عضة"] },
    { word: "قطة", forbidden: ["حيوان", "مواء", "قط", "أليف", "فأر"] },
    { word: "أرنب", forbidden: ["حيوان", "جزر", "أبيض", "سريع", "ودن"] },
    { word: "تمساح", forbidden: ["حيوان", "نهر", "خطير", "فك", "ماء"] },
    { word: "نسر", forbidden: ["طائر", "سما", "طيران", "مخالب", "قوي"] },
    { word: "حمامة", forbidden: ["طائر", "سلام", "أبيض", "طيران", "سما"] },
    { word: "ببغاء", forbidden: ["طائر", "كلام", "ألوان", "تقليد", "قفص"] },
    { word: "فراشة", forbidden: ["حشرة", "ألوان", "جناح", "زهرة", "جميلة"] },
    { word: "نحلة", forbidden: ["حشرة", "عسل", "لسعة", "زهرة", "خلية"] },
    { word: "نملة", forbidden: ["حشرة", "صغيرة", "طابور", "شغل", "قرصة"] },
    { word: "ثعلب", forbidden: ["حيوان", "مكر", "ذكي", "غابة", "دجاج"] },
    { word: "ذئب", forbidden: ["حيوان", "عواء", "غابة", "خطير", "خروف"] },
    { word: "شوكولاتة", forbidden: ["حلو", "كاكاو", "بني", "أكل", "لذيذ"] },
    { word: "حلوى", forbidden: ["سكر", "حلو", "أكل", "بونبون", "أطفال"] },
    { word: "كعك", forbidden: ["تورتة", "عيد ميلاد", "حلو", "فرن", "أكل"] },
    { word: "بسكويت", forbidden: ["أكل", "شاي", "حلو", "مقرمش", "بسكوت"] },
    { word: "آيس كريم", forbidden: ["جيلاتي", "برد", "حلو", "صيف", "فانيليا"] },
    { word: "شاي", forbidden: ["شرب", "كوباية", "سكر", "حار", "أحمر"] },
    { word: "حليب", forbidden: ["لبن", "أبيض", "بقرة", "شرب", "كالسيوم"] },
    { word: "بيتزا", forbidden: ["أكل", "إيطالي", "جبنة", "فرن", "عجينة"] },
    { word: "شاورما", forbidden: ["أكل", "لحم", "فراخ", "سندوتش", "خبز"] },
    { word: "كباب", forbidden: ["لحم", "شواء", "أكل", "سيخ", "فحم"] },
    { word: "فلافل", forbidden: ["طعمية", "أكل", "فول", "قلي", "سندوتش"] },
    { word: "كشري", forbidden: ["أكل", "مصر", "مكرونة", "عدس", "صلصة"] },
    { word: "ملوخية", forbidden: ["أكل", "خضراء", "طبخ", "فراخ", "أرنب"] },
    { word: "بطانية", forbidden: ["نوم", "دفا", "سرير", "غطاء", "شتاء"] },
    { word: "سجادة", forbidden: ["أرض", "صلاة", "موكيت", "قماش", "فرش"] },
    { word: "ستارة", forbidden: ["شباك", "نافذة", "قماش", "نور", "تعليق"] },
    { word: "مصباح", forbidden: ["نور", "لمبة", "إضاءة", "كهرباء", "ضوء"] },
    { word: "شمعة", forbidden: ["نور", "نار", "شمع", "ضلمة", "فتيل"] },
    { word: "قفل", forbidden: ["مفتاح", "باب", "أمان", "قفل", "فتح"] },
    { word: "مصعد", forbidden: ["أسانسير", "طلوع", "نزول", "عمارة", "زرار"] },
    { word: "نافورة", forbidden: ["ماء", "حديقة", "ميدان", "جميلة", "رشة"] },
    { word: "كرة قدم", forbidden: ["ماتش", "ملعب", "لعب", "جول", "حكم"] },
    { word: "كرة سلة", forbidden: ["ماتش", "ملعب", "NBA", "شبكة", "لعب"] },
    { word: "مضرب", forbidden: ["تنس", "لعب", "كرة", "ضرب", "رياضة"] },
    { word: "لعبة فيديو", forbidden: ["بلاي ستيشن", "لعب", "شاشة", "أونلاين", "يد"] },
    { word: "نقود", forbidden: ["فلوس", "بنك", "مصاري", "شراء", "جنيه"] },
    { word: "خريطة", forbidden: ["بلاد", "طريق", "اتجاه", "سفر", "مكان"] },
    { word: "مرآة", forbidden: ["مراية", "شكل", "انعكاس", "زجاج", "وجه"] },
    { word: "كاميرا", forbidden: ["تصوير", "صورة", "عدسة", "فيديو", "فلاش"] },
    { word: "سماعة", forbidden: ["ودن", "موسيقى", "سمع", "صوت", "أغاني"] },
    { word: "بطارية", forbidden: ["شحن", "كهرباء", "موبايل", "طاقة", "ريموت"] },
    { word: "شاحن", forbidden: ["شحن", "موبايل", "كهرباء", "سلك", "بطارية"] },
    { word: "صحراء", forbidden: ["رمل", "حر", "جافة", "جمل", "واحة"] },
    { word: "غابة", forbidden: ["شجر", "حيوانات", "أخضر", "كبيرة", "طبيعة"] },
    { word: "شلال", forbidden: ["ماء", "عالي", "نزول", "نهر", "صوت"] },
    { word: "بحيرة", forbidden: ["ماء", "هادي", "سمك", "طبيعة", "أخضر"] },
    { word: "إشارة مرور", forbidden: ["أحمر", "أخضر", "أصفر", "شارع", "عربيات"] },
    { word: "جسر", forbidden: ["كوبري", "نهر", "عبور", "طريق", "فوق"] },
    { word: "خروف", forbidden: ["حيوان", "عيد", "لحم", "صوف", "أضحية"] },
    { word: "بطة", forbidden: ["حيوان", "طائر", "ماء", "كواك", "ريش"] },
    { word: "سلحفاة", forbidden: ["حيوان", "بطيء", "صدفة", "ماء", "أرنب"] },
    { word: "ضفدع", forbidden: ["حيوان", "ماء", "قفز", "أخضر", "نقيق"] },
    { word: "طاووس", forbidden: ["طائر", "ريش", "ألوان", "جميل", "ذيل"] },
    { word: "سنجاب", forbidden: ["حيوان", "بندق", "شجرة", "ذيل", "صغير"] },
    { word: "توت", forbidden: ["فاكهة", "أحمر", "حلو", "صغير", "عصير"] },
    { word: "جوز", forbidden: ["مكسرات", "صلب", "قشرة", "أكل", "لوز"] },
    { word: "لوز", forbidden: ["مكسرات", "أكل", "حلو", "جوز", "شجرة"] },
    { word: "فستق", forbidden: ["مكسرات", "أخضر", "أكل", "قشرة", "سوداني"] },
    { word: "معكرونة", forbidden: ["مكرونة", "أكل", "صلصة", "إيطالي", "طبخ"] },
    { word: "همبرجر", forbidden: ["برجر", "أكل", "لحم", "خبز", "ماكدونالدز"] },
    { word: "فطيرة", forbidden: ["أكل", "فرن", "عجين", "حشو", "حلو"] },
    { word: "زبادي", forbidden: ["لبن", "أكل", "أبيض", "بارد", "حلو"] },
    { word: "سوار", forbidden: ["إيد", "لبس", "ذهب", "إكسسوار", "معصم"] },
    { word: "خاتم", forbidden: ["إيد", "صباع", "خطوبة", "ذهب", "لبس"] },
    { word: "عقد", forbidden: ["رقبة", "لبس", "ذهب", "إكسسوار", "سلسلة"] },
    { word: "نظارة شمس", forbidden: ["عين", "شمس", "لبس", "صيف", "نظر"] },
    { word: "حقيبة يد", forbidden: ["شنطة", "لبس", "ستات", "حمل", "فلوس"] },
    { word: "ملعب", forbidden: ["كرة", "لعب", "ماتش", "رياضة", "جمهور"] },
    { word: "صندوق", forbidden: ["علبة", "حاجات", "كرتون", "حفظ", "فتح"] },
    { word: "حقيبة ظهر", forbidden: ["شنطة", "ضهر", "مدرسة", "سفر", "حمل"] },
    { word: "مصباح يدوي", forbidden: ["نور", "كشاف", "ضلمة", "بطارية", "إضاءة"] },
    { word: "خزانة", forbidden: ["دولاب", "هدوم", "لبس", "خشب", "أوضة"] },
    { word: "رف", forbidden: ["كتب", "حائط", "ترتيب", "خشب", "فوق"] },
    { word: "تقويم", forbidden: ["يوم", "شهر", "سنة", "تاريخ", "نتيجة"] },
    { word: "ميكروفون", forbidden: ["صوت", "غنا", "مايك", "كلام", "تسجيل"] },
    { word: "عدسة", forbidden: ["كاميرا", "تصوير", "زجاج", "عين", "تكبير"] },
    { word: "كابل", forbidden: ["سلك", "كهرباء", "توصيل", "شحن", "USB"] },
    { word: "محشي", forbidden: ["أكل", "خضار", "طبخ", "أرز", "كوسة"] },
    { word: "سلطة", forbidden: ["خضار", "أكل", "طماطم", "خيار", "صحي"] },
    { word: "خس", forbidden: ["خضار", "أخضر", "سلطة", "ورق", "أكل"] },
    { word: "فلفل حار", forbidden: ["حراق", "أحمر", "شطة", "أكل", "حر"] },
    { word: "بيتزا صغيرة", forbidden: ["أكل", "جبنة", "فرن", "عجينة", "إيطالي"] },
    { word: "عصير طبيعي", forbidden: ["شرب", "فواكه", "طازة", "كوب", "فريش"] },
    { word: "سكوتر", forbidden: ["ركوب", "عجل", "موتور", "طريق", "سريع"] },
    { word: "نفق", forbidden: ["تحت الأرض", "ظلام", "طريق", "عبور", "مترو"] },
    { word: "زقاق", forbidden: ["حارة", "شارع", "ضيق", "حي", "بيوت"] },
    { word: "شاطئ", forbidden: ["بحر", "رمل", "صيف", "سباحة", "ماء"] },
    { word: "حوت", forbidden: ["بحر", "كبير", "حيوان", "ماء", "ضخم"] },
    { word: "دولفين", forbidden: ["بحر", "ذكي", "حيوان", "ماء", "قفز"] },
    { word: "صقر", forbidden: ["طائر", "صيد", "سريع", "سما", "عين"] },
    { word: "غراب", forbidden: ["طائر", "أسود", "صوت", "سما", "طيران"] },
    { word: "حرباء", forbidden: ["حيوان", "لون", "تغيير", "زواحف", "عين"] },
    { word: "حلزون", forbidden: ["بطيء", "صدفة", "حيوان", "حديقة", "قرون"] },
    { word: "خفاش", forbidden: ["طيران", "ليل", "حيوان", "وطواط", "ظلام"] },
    { word: "كرز", forbidden: ["فاكهة", "أحمر", "حلو", "صغير", "شجرة"] },
    { word: "كاكاو", forbidden: ["شوكولاتة", "شرب", "بني", "حلو", "بودرة"] },
    { word: "بطاقة ائتمان", forbidden: ["فيزا", "فلوس", "شراء", "بنك", "دفع"] },
    { word: "كمبيوتر محمول", forbidden: ["لابتوب", "شاشة", "شغل", "إنترنت", "كيبورد"] },
    { word: "ورق لعب", forbidden: ["كوتشينة", "لعب", "كارت", "بستوني", "كوبة"] },
    { word: "مياه غازية", forbidden: ["شرب", "فوارة", "زجاجة", "بيبسي", "غاز"] },
    { word: "قرش", forbidden: ["سمك", "بحر", "خطير", "سنان", "هجوم"] },
    { word: "عقرب", forbidden: ["لسعة", "سم", "حشرة", "صحراء", "ذيل"] },
    { word: "ضبع", forbidden: ["حيوان", "ضحك", "ليل", "غابة", "بشع"] },
    { word: "ماعز", forbidden: ["حيوان", "لبن", "جبن", "قرن", "معيز"] },
    { word: "ديك", forbidden: ["فراخ", "صبح", "صياح", "ريش", "مزرعة"] },
    { word: "كنغر", forbidden: ["أستراليا", "قفز", "حيوان", "جيب", "صغير"] },
    { word: "نمر", forbidden: ["حيوان", "خطوط", "سريع", "غابة", "قوي"] },
    { word: "فأر", forbidden: ["حيوان", "قطة", "صغير", "جبنة", "خوف"] },
    { word: "حائط", forbidden: ["حيطة", "بيت", "طوب", "بناء", "سور"] },
    { word: "سقف", forbidden: ["فوق", "بيت", "أوضة", "سطح", "تحت"] },
    { word: "أرضية", forbidden: ["تحت", "بلاط", "أرض", "مشي", "بيت"] },
    { word: "كيس", forbidden: ["بلاستيك", "حمل", "حاجات", "شيل", "سوبر"] },
    { word: "زجاجة", forbidden: ["ماء", "شرب", "زجاج", "قزازة", "غطاء"] },
    { word: "مكتب", forbidden: ["شغل", "كرسي", "كتابة", "أوضة", "خشب"] },
    { word: "شارع", forbidden: ["طريق", "عربيات", "مشي", "أسفلت", "ناس"] },
    { word: "حافلة", forbidden: ["أتوبيس", "ركوب", "ناس", "محطة", "طريق"] },
    { word: "كافيه", forbidden: ["قهوة", "شرب", "قعاد", "أصحاب", "مشروبات"] },
    { word: "فرن", forbidden: ["طبخ", "حر", "خبز", "نار", "مطبخ"] },
    { word: "شوكة", forbidden: ["أكل", "معدن", "سنان", "طبق", "سفرة"] },
    { word: "زبدة", forbidden: ["أكل", "أصفر", "لبن", "خبز", "دهن"] },
    { word: "غطاء", forbidden: ["تغطية", "فوق", "سرير", "حماية", "غطا"] },
    { word: "عشب", forbidden: ["أخضر", "حديقة", "أرض", "نجيل", "نبات"] },
    { word: "حجر", forbidden: ["صخر", "صلب", "أرض", "بناء", "رمي"] },
    { word: "صخرة", forbidden: ["حجر", "كبيرة", "جبل", "صلبة", "أرض"] },
    { word: "قرية", forbidden: ["صغيرة", "ريف", "بيوت", "فلاحين", "أرض"] },
    { word: "محطة", forbidden: ["أتوبيس", "قطار", "ركاب", "استنى", "وقوف"] },
    { word: "ميكروويف", forbidden: ["تسخين", "مطبخ", "أكل", "كهرباء", "سريع"] },
    { word: "قنينة", forbidden: ["زجاجة", "ماء", "شرب", "غطاء", "سائل"] },
    { word: "فواكه", forbidden: ["فاكهة", "أكل", "حلو", "شجر", "عصير"] },
    { word: "خضار", forbidden: ["خضروات", "أكل", "طبخ", "أخضر", "صحي"] },
    { word: "كيوي", forbidden: ["فاكهة", "أخضر", "صغير", "حلو", "بني"] },
    { word: "شمام", forbidden: ["فاكهة", "أصفر", "حلو", "صيف", "بطيخ"] },
    { word: "فلفل حلو", forbidden: ["خضار", "ألوان", "طبخ", "سلطة", "حلو"] },
    { word: "عصا", forbidden: ["خشب", "مشي", "ضرب", "طويلة", "إيد"] },
    { word: "حبل", forbidden: ["ربط", "طويل", "قفز", "شد", "نط"] },
    { word: "لعبة", forbidden: ["لعب", "أطفال", "متعة", "عروسة", "هدية"] },
    { word: "تابلت", forbidden: ["شاشة", "موبايل", "إنترنت", "أطفال", "تطبيقات"] },
    { word: "قلم رصاص", forbidden: ["كتابة", "مسح", "رسم", "خشب", "مدرسة"] },
    { word: "قلم حبر", forbidden: ["كتابة", "حبر", "أزرق", "مدرسة", "ورق"] },
    { word: "حقيبة مدرسية", forbidden: ["شنطة", "مدرسة", "كتب", "ضهر", "طالب"] },
    { word: "حذاء رياضي", forbidden: ["جزمة", "رياضة", "جري", "نايك", "لبس"] },
    { word: "جاكيت", forbidden: ["لبس", "برد", "سوستة", "هدوم", "شتاء"] },
    { word: "تنورة", forbidden: ["لبس", "ستات", "هدوم", "قماش", "قصيرة"] },
    { word: "باص", forbidden: ["أتوبيس", "ركوب", "ناس", "محطة", "كبير"] },
    { word: "ممر مشاة", forbidden: ["شارع", "عبور", "خطوط", "مشي", "إشارة"] },
    { word: "حي", forbidden: ["منطقة", "بيوت", "شارع", "سكن", "ناس"] },
    { word: "نبات", forbidden: ["أخضر", "زرع", "ماء", "ورق", "شجرة"] },
    { word: "دودة", forbidden: ["حشرة", "أرض", "صغيرة", "تراب", "صيد"] },
    { word: "سحلية", forbidden: ["زواحف", "حيوان", "ذيل", "صغيرة", "جدار"] },
    { word: "ديك رومي", forbidden: ["طائر", "كبير", "أكل", "ريش", "عيد"] },
    { word: "أرنب بري", forbidden: ["حيوان", "سريع", "برية", "قفز", "ودن"] },
    { word: "سرطان", forbidden: ["بحر", "حيوان", "مشي", "كلابات", "أحمر"] },
    { word: "محار", forbidden: ["بحر", "صدف", "لؤلؤ", "أكل", "قاع"] },
    { word: "تفاح أخضر", forbidden: ["فاكهة", "حامض", "أخضر", "شجرة", "أكل"] },
    { word: "عصير برتقال", forbidden: ["شرب", "برتقال", "فاكهة", "كوب", "فريش"] },
    { word: "عصير تفاح", forbidden: ["شرب", "تفاح", "فاكهة", "كوب", "حلو"] },
    { word: "ماء معدني", forbidden: ["شرب", "زجاجة", "نقي", "معدن", "صحي"] },
    { word: "قهوة سريعة", forbidden: ["نسكافيه", "شرب", "سكر", "لبن", "كوب"] },
    { word: "بيض مسلوق", forbidden: ["فطار", "أكل", "سلق", "ماء", "صفار"] },
    { word: "بطاطس مقلية", forbidden: ["أكل", "زيت", "قلي", "ملح", "شيبسي"] },
    { word: "سلطة خضراء", forbidden: ["أكل", "خضار", "خس", "صحي", "طماطم"] },
    { word: "خبز محمص", forbidden: ["توست", "فطار", "فرن", "أكل", "مقرمش"] },
    { word: "ضوء", forbidden: ["نور", "مصباح", "إضاءة", "لمبة", "كهرباء"] },
    { word: "حديقة عامة", forbidden: ["جنينة", "شجر", "أطفال", "لعب", "مشي"] },
    { word: "موقف سيارات", forbidden: ["عربيات", "ركن", "جراج", "وقوف", "مكان"] },
    { word: "محطة قطار", forbidden: ["سكة حديد", "سفر", "ركاب", "تذاكر", "قطر"] },
    { word: "كرة طائرة", forbidden: ["ملعب", "شبكة", "لعب", "فريق", "ضرب"] },
    { word: "كرة تنس", forbidden: ["مضرب", "ملعب", "لعب", "أصفر", "شبكة"] },
    { word: "لعبة لوحية", forbidden: ["لعب", "زهر", "بيادق", "ورق", "طاولة"] },
    { word: "بطاقة", forbidden: ["كارت", "ورق", "هدية", "معايدة", "اسم"] },
    { word: "زهر", forbidden: ["لعب", "نرد", "أرقام", "رمي", "حظ"] },
    { word: "كنز", forbidden: ["ذهب", "دفين", "قراصنة", "ثروة", "خريطة"] },
    { word: "كرتون", forbidden: ["ورق", "صندوق", "علبة", "نقل", "تغليف"] },
    { word: "سماعة رأس", forbidden: ["ودن", "موسيقى", "سمع", "هيدفون", "صوت"] },
    { word: "صندوق خشبي", forbidden: ["خشب", "حفظ", "علبة", "قديم", "كنز"] },
    { word: "كتاب تعليم", forbidden: ["مدرسة", "دراسة", "قراءة", "منهج", "تعلم"] },
    { word: "دليل", forbidden: ["كتاب", "إرشاد", "خريطة", "معلومات", "مساعدة"] },
];

// ===== متغيرات اللعبة =====
let playerCount = 2;
let playerNames = [];
let totalRounds = 5;
let roundTime = 60;
let currentRound = 1;
let currentPlayerIndex = 0;
let scores = {};
let timerInterval = null;
let timeLeft = 0;
let usedWords = [];
let currentWord = null;
let buttonsDisabled = false;

// ===== وظائف الإعداد =====
function changePlayerCount(delta) {
    playerCount = Math.min(10, Math.max(2, playerCount + delta));
    document.getElementById('player-count-display').textContent = playerCount;
    renderNameInputs();
}

function renderNameInputs() {
    const container = document.getElementById('names-inputs');
    container.innerHTML = '';
    for (let i = 0; i < playerCount; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'لاعب ' + (i + 1);
        input.id = 'player-name-' + i;
        input.maxLength = 15;
        if (playerNames[i]) {
            input.value = playerNames[i];
        }
        input.addEventListener('input', function() {
            playerNames[i] = this.value;
        });
        container.appendChild(input);
    }
}

function selectRounds(n) {
    totalRounds = n;
    document.querySelectorAll('[data-rounds]').forEach(btn => {
        btn.classList.toggle('selected', parseInt(btn.dataset.rounds) === n);
    });
}

function selectTime(t) {
    roundTime = t;
    document.querySelectorAll('[data-time]').forEach(btn => {
        btn.classList.toggle('selected', parseInt(btn.dataset.time) === t);
    });
}

// ===== بدء اللعبة =====
function startGame() {
    playerNames = [];
    for (let i = 0; i < playerCount; i++) {
        const input = document.getElementById('player-name-' + i);
        const name = input && input.value.trim() ? input.value.trim() : 'لاعب ' + (i + 1);
        playerNames.push(name);
    }

    const uniqueNames = new Set(playerNames);
    if (uniqueNames.size < playerNames.length) {
        showToast('⚠️ في أسماء متكررة، غيّر الأسماء!', 'error');
        return;
    }

    scores = {};
    playerNames.forEach(name => {
        scores[name] = 0;
    });

    currentRound = 1;
    currentPlayerIndex = 0;
    usedWords = [];

    showHandoff();
}

// ===== التنقل بين الشاشات =====
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const screen = document.getElementById(screenId);
    screen.classList.add('active');
    screen.style.animation = 'none';
    screen.offsetHeight;
    screen.style.animation = 'fadeIn 0.4s ease';
}

function showHandoff() {
    showScreen('screen-handoff');
    const playerName = playerNames[currentPlayerIndex];
    document.getElementById('current-player-name').textContent = playerName;
    document.getElementById('handoff-round').textContent = currentRound + ' / ' + totalRounds;
    document.getElementById('handoff-score').textContent = scores[playerName];
}

// ===== عرض الكلمة =====
function showWord() {
    showScreen('screen-play');
    buttonsDisabled = false;

    const playerName = playerNames[currentPlayerIndex];
    document.getElementById('play-player-name').textContent = playerName;
    document.getElementById('play-score').textContent = '⭐ ' + scores[playerName];

    // تفعيل الأزرار
    enableActionButtons();

    loadNewWord();
    startTimer();
}

function loadNewWord() {
    let available = WORDS_DATA.filter(w => !usedWords.includes(w.word));
    if (available.length === 0) {
        usedWords = [];
        available = WORDS_DATA;
    }

    const randomIndex = Math.floor(Math.random() * available.length);
    currentWord = available[randomIndex];
    usedWords.push(currentWord.word);

    document.getElementById('main-word').textContent = currentWord.word;

    const forbiddenContainer = document.getElementById('forbidden-words');
    forbiddenContainer.innerHTML = '';
    currentWord.forbidden.forEach(fw => {
        const span = document.createElement('span');
        span.className = 'forbidden-word';
        span.textContent = fw;
        forbiddenContainer.appendChild(span);
    });

    const card = document.querySelector('.word-card');
    card.style.animation = 'none';
    card.offsetHeight;
    card.style.animation = 'popIn 0.4s ease';
}

// ===== المؤقت =====
function startTimer() {
    timeLeft = roundTime;
    updateTimerDisplay();

    const circumference = 2 * Math.PI * 54;
    const circle = document.getElementById('timer-circle');
    const timerText = document.getElementById('timer-text');
    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = 0;
    circle.classList.remove('warning');
    timerText.classList.remove('warning');

    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();

        const progress = (roundTime - timeLeft) / roundTime;
        circle.style.strokeDashoffset = circumference * progress;

        if (timeLeft <= 10) {
            circle.classList.add('warning');
            timerText.classList.add('warning');
        } else {
            circle.classList.remove('warning');
            timerText.classList.remove('warning');
        }

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timeUpForPlayer();
        }
    }, 1000);
}

function updateTimerDisplay() {
    document.getElementById('timer-text').textContent = timeLeft;
}

// ===== تفعيل / تعطيل الأزرار =====
function enableActionButtons() {
    buttonsDisabled = false;
    document.querySelector('.btn-correct').disabled = false;
    document.querySelector('.btn-wrong').disabled = false;
    document.querySelector('.btn-correct').style.opacity = '1';
    document.querySelector('.btn-wrong').style.opacity = '1';
}

function disableActionButtons() {
    buttonsDisabled = true;
    document.querySelector('.btn-correct').disabled = true;
    document.querySelector('.btn-wrong').disabled = true;
    document.querySelector('.btn-correct').style.opacity = '0.5';
    document.querySelector('.btn-wrong').style.opacity = '0.5';
}

// ===== أفعال اللعب - كلمة واحدة لكل لاعب =====
function correctAnswer() {
    if (buttonsDisabled) return;
    
    clearInterval(timerInterval);
    disableActionButtons();
    
    const playerName = playerNames[currentPlayerIndex];
    scores[playerName]++;
    document.getElementById('play-score').textContent = '⭐ ' + scores[playerName];
    showToast('✅ برافو يا ' + playerName + '! +1 نقطة', 'success');

    // الانتقال للاعب التالي بعد ثانية
    setTimeout(() => {
        moveToNextPlayer();
    }, 1200);
}

function wrongAnswer() {
    if (buttonsDisabled) return;
    
    clearInterval(timerInterval);
    disableActionButtons();
    
    const playerName = playerNames[currentPlayerIndex];
    scores[playerName]--;
    document.getElementById('play-score').textContent = '⭐ ' + scores[playerName];
    showToast('❌ غلط يا ' + playerName + '! -1 نقطة', 'error');

    // اهتزاز الكارت
    const card = document.querySelector('.word-card');
    card.style.animation = 'shake 0.5s ease';
    setTimeout(() => {
        card.style.animation = '';
    }, 500);

    // الانتقال للاعب التالي بعد ثانية
    setTimeout(() => {
        moveToNextPlayer();
    }, 1200);
}

function timeUpForPlayer() {
    disableActionButtons();
    
    const playerName = playerNames[currentPlayerIndex];
    showToast('⏰ خلص الوقت يا ' + playerName + '! مفيش نقطة', 'info');

    setTimeout(() => {
        moveToNextPlayer();
    }, 1200);
}

// ===== الانتقال للاعب التالي =====
function moveToNextPlayer() {
    currentPlayerIndex++;

    if (currentPlayerIndex >= playerNames.length) {
        // كل اللاعبين خلصوا - نعرض نتيجة الجولة
        showRoundResult();
    } else {
        // فيه لاعبين تانيين - نعرض شاشة تسليم الدور
        showHandoff();
    }
}

// ===== نتائج الجولة =====
function showRoundResult() {
    showScreen('screen-round-result');

    const isLastRound = currentRound >= totalRounds;

    if (isLastRound) {
        document.getElementById('round-result-title').textContent = '📊 نتيجة الجولة الأخيرة';
        document.getElementById('btn-next').textContent = '🏆 النتيجة النهائية!';
        document.getElementById('btn-next').onclick = showFinalResult;
    } else {
        document.getElementById('round-result-title').textContent = '📊 نتيجة الجولة ' + currentRound;
        document.getElementById('btn-next').textContent = '🔄 الجولة الجاية!';
        document.getElementById('btn-next').onclick = nextRound;
    }

    renderScoreboard('round-scoreboard');
}

function renderScoreboard(containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    const sorted = [...playerNames].sort((a, b) => scores[b] - scores[a]);
    const rankEmojis = ['🥇', '🥈', '🥉'];

    sorted.forEach((name, index) => {
        const row = document.createElement('div');
        row.className = 'score-row';
        if (index < 3) row.classList.add('rank-' + (index + 1));
        row.style.animationDelay = (index * 0.1) + 's';

        const rankSpan = document.createElement('span');
        rankSpan.className = 'score-rank';
        rankSpan.textContent = index < 3 ? rankEmojis[index] : (index + 1);

        const nameSpan = document.createElement('span');
        nameSpan.className = 'score-name';
        nameSpan.textContent = name;

        const pointsSpan = document.createElement('span');
        pointsSpan.className = 'score-points';
        pointsSpan.textContent = scores[name] + ' نقطة';

        row.appendChild(rankSpan);
        row.appendChild(nameSpan);
        row.appendChild(pointsSpan);

        container.appendChild(row);
    });
}

function nextRound() {
    currentRound++;
    currentPlayerIndex = 0;
    showHandoff();
}

// ===== النتيجة النهائية =====
function showFinalResult() {
    showScreen('screen-final');

    const sorted = [...playerNames].sort((a, b) => scores[b] - scores[a]);
    const winner = sorted[0];
    const winnerScore = scores[winner];

    const winners = sorted.filter(name => scores[name] === winnerScore);

    let winnerText = '';
    if (winners.length > 1) {
        winnerText = '🎉 تعادل بين: ' + winners.join(' و ') + '!';
    } else {
        winnerText = '🎉 مبروك يا ' + winner + '! أنت البطل! 🏆';
    }

    document.getElementById('winner-announce').textContent = winnerText;
    renderScoreboard('final-scoreboard');

    launchConfetti();
}

// ===== كونفيتي =====
function launchConfetti() {
    const area = document.getElementById('confetti-area');
    area.innerHTML = '';

    const colors = ['#ffd600', '#8b5cf6', '#22c55e', '#ef4444', '#3b82f6', '#f97316', '#ec4899'];

    for (let i = 0; i < 80; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.style.left = Math.random() * 100 + '%';
        piece.style.animationDelay = Math.random() * 2 + 's';
        piece.style.animationDuration = (2 + Math.random() * 3) + 's';
        piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
        piece.style.width = (8 + Math.random() * 10) + 'px';
        piece.style.height = (8 + Math.random() * 10) + 'px';
        area.appendChild(piece);
    }

    setTimeout(() => {
        area.innerHTML = '';
    }, 5000);
}

// ===== إعادة اللعبة =====
function resetGame() {
    playerCount = 2;
    playerNames = [];
    totalRounds = 5;
    roundTime = 60;
    currentRound = 1;
    currentPlayerIndex = 0;
    scores = {};
    usedWords = [];
    currentWord = null;
    buttonsDisabled = false;
    clearInterval(timerInterval);

    document.getElementById('player-count-display').textContent = '2';

    document.querySelectorAll('[data-rounds]').forEach(btn => {
        btn.classList.toggle('selected', parseInt(btn.dataset.rounds) === 5);
    });
    document.querySelectorAll('[data-time]').forEach(btn => {
        btn.classList.toggle('selected', parseInt(btn.dataset.time) === 60);
    });

    renderNameInputs();
    showScreen('screen-start');
}

// ===== Toast (تنبيه) =====
function showToast(message, type) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = 'toast ' + type + ' show';

    setTimeout(() => {
        toast.classList.remove('show');
    }, 1800);
}

// ===== تهيئة أولية =====
document.addEventListener('DOMContentLoaded', function() {
    renderNameInputs();
});
