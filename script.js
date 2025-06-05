// Enhanced places database with comprehensive data
const placesData = {
    "عمان": {
        "مطاعم": [
            {name: "فكرة مطعم", location: "شارع الرينبو", rating: 4.5, description: "أكل شعبي أردني أصيل وطعم لا ينسى", price: "$$", phone: "065551234", openHours: "8:00 - 23:00", specialties: ["منسف", "مقلوبة", "محاشي"]},
            {name: "جفرا كافيه", location: "جبل اللويبدة", rating: 4.3, description: "مطعم مع إطلالة حلوة على عمان", price: "$$$", phone: "065551235", openHours: "9:00 - 24:00", specialties: ["إفطار شامي", "معجنات", "قهوة"]},
            {name: "كان زمان", location: "جبل عمان", rating: 4.7, description: "تراث أردني في قلب عمان بأجواء أصيلة", price: "$$$", phone: "065551236", openHours: "12:00 - 23:00", specialties: ["منسف ملكي", "كبة", "شاورما"]},
            {name: "سفرة", location: "دوار الداخلية", rating: 4.4, description: "أكل بيتي طعمه أصيل ونكهة الماضي", price: "$$", phone: "065551237", openHours: "11:00 - 22:00", specialties: ["ملوخية", "فتة", "كوسا باللبن"]},
            {name: "مشاوي الريف", location: "جبل الحسين", rating: 4.2, description: "مشاوي طازة وطعم رهيب على الفحم", price: "$$", phone: "065551238", openHours: "16:00 - 02:00", specialties: ["شيش طاووق", "كباب", "فراخ مشوية"]},
            {name: "دار الكباب", location: "شارع المدينة المنورة", rating: 4.6, description: "كباب عربي أصيل بنكهة استثنائية", price: "$$$", phone: "065551239", openHours: "17:00 - 01:00", specialties: ["كباب حلبي", "عرق الكباب", "فتوش"]},
            {name: "بيت الحارة", location: "الشميساني", rating: 4.3, description: "أجواء شعبية أردنية وضيافة أصيلة", price: "$$", phone: "065551240", openHours: "10:00 - 23:00", specialties: ["فتة حمص", "مسخن", "أرز برياني"]},
            {name: "مطعم هاشم", location: "وسط البلد", rating: 4.8, description: "فلافل وحمص من زمان - تراث وسط البلد", price: "$", phone: "065551241", openHours: "6:00 - 22:00", specialties: ["فلافل", "حمص", "فول"]},
            {name: "فردوس الأكلات الشعبية", location: "جبل التاج", rating: 4.5, description: "مقلوبة ومنسف أصيل بطعم البيت", price: "$$", phone: "065551242", openHours: "12:00 - 22:00", specialties: ["مقلوبة دجاج", "منسف لحم", "كوارع"]},
            {name: "بستان الأردن", location: "صويلح", rating: 4.4, description: "أكل طبيعي وصحي من المزرعة للطاولة", price: "$$$", phone: "065551243", openHours: "11:00 - 21:00", specialties: ["سلطات طبيعية", "عضوي", "عصائر طازة"]},
            {name: "مطعم الصياد", location: "عبدون", rating: 4.6, description: "أطباق السمك الطازج والمأكولات البحرية", price: "$$$", phone: "065551244", openHours: "12:00 - 23:00", specialties: ["سمك مشوي", "جمبري", "سلطة سيزر"]},
            {name: "بيت الشاورما", location: "طبربور", rating: 4.1, description: "شاورما طازة ولذيذة بأسعار معقولة", price: "$", phone: "065551245", openHours: "10:00 - 02:00", specialties: ["شاورما لحم", "شاورما دجاج", "فتة شاورما"]},
            {name: "مطعم النخيل", location: "تلاع العلي", rating: 4.7, description: "مطعم عائلي فاخر بإطلالة رائعة", price: "$$$", phone: "065551246", openHours: "12:00 - 24:00", specialties: ["مندي", "كبسة", "برياني لحم"]},
            {name: "كشك أبو أحمد", location: "جبل النظيف", rating: 4.0, description: "وجبات سريعة وشهية بأسعار الطلاب", price: "$", phone: "065551247", openHours: "24/7", specialties: ["فلافل", "شاورما", "عصائر"]},
            {name: "مطعم الأندلس", location: "الشميساني", rating: 4.8, description: "أكل لبناني أصيل بجودة عالية", price: "$$$", phone: "065551248", openHours: "13:00 - 01:00", specialties: ["حمص لبناني", "تبولة", "شيش برك"]}
        ],
        "كافيهات": [
            {name: "كافيه لا كاسا", location: "جبل اللويبدة", rating: 4.5, description: "قهوة مختصة وأجواء هادية للعمل والدراسة", price: "$$$", phone: "065552234", openHours: "7:00 - 24:00", specialties: ["لاتيه", "كابتشينو", "قهوة مختصة"]},
            {name: "كتابا كافيه", location: "جبل عمان", rating: 4.6, description: "كافيه ومكتبة في نفس الوقت - مكان مثالي للقراءة", price: "$$", phone: "065552235", openHours: "8:00 - 23:00", specialties: ["قهوة عربية", "شاي", "كتب"]},
            {name: "قهوة ومحبة", location: "الشميساني", rating: 4.3, description: "قهوة عربية تراثية بنكهة أصيلة", price: "$$", phone: "065552236", openHours: "14:00 - 02:00", specialties: ["قهوة عربية", "شيشة", "حلويات"]},
            {name: "مقهى جرانكافيه", location: "دوار الواحة", rating: 4.4, description: "كافيه عصري وحلو للشباب", price: "$$$", phone: "065552237", openHours: "9:00 - 01:00", specialties: ["أمريكانو", "فرابتشينو", "حلى"]},
            {name: "كوستا كافيه", location: "العبدلي", rating: 4.2, description: "سلاسل قهوة عالمية بجودة مضمونة", price: "$$$", phone: "065552238", openHours: "6:00 - 24:00", specialties: ["لاتيه فانيلا", "موكا", "كوكيز"]},
            {name: "ستاربكس", location: "مول عمان", rating: 4.1, description: "قهوة أمريكية مشهورة عالمياً", price: "$$$", phone: "065552239", openHours: "6:00 - 24:00", specialties: ["فرابوتشينو", "ماكياتو", "سكونز"]},
            {name: "كافيه الجسر", location: "جسر الملكة زين", rating: 4.7, description: "إطلالة مميزة على عمان وأجواء رومانسية", price: "$$$", phone: "065552240", openHours: "16:00 - 02:00", specialties: ["قهوة تركية", "شاي بالنعناع", "حلويات"]},
            {name: "مقهى النواعير", location: "تلاع العلي", rating: 4.5, description: "أجواء شعبية أردنية وضيافة تقليدية", price: "$$", phone: "065552241", openHours: "15:00 - 01:00", specialties: ["شاي أحمر", "قهوة مرة", "معسل"]},
            {name: "سيتي كافيه", location: "العبدلي", rating: 4.3, description: "كافيه في قلب المدينة للأعمال", price: "$$$", phone: "065552242", openHours: "6:00 - 22:00", specialties: ["إسبريسو", "كرواسان", "سلطات"]},
            {name: "بيان كافيه", location: "دير غبار", rating: 4.4, description: "هدوء وراحة نفسية بعيداً عن الضوضاء", price: "$$", phone: "065552243", openHours: "9:00 - 23:00", specialties: ["شاي أخضر", "قهوة باردة", "تشيز كيك"]}
        ],
        "ألعاب": [
            {name: "كيدزانيا", location: "سيتي مول", rating: 4.8, description: "مدينة ألعاب تعليمية للأطفال - تجربة فريدة", price: "$$$", phone: "065553234", openHours: "10:00 - 22:00", specialties: ["ألعاب تعليمية", "مهن", "ورش"]},
            {name: "فان سيتي", location: "مكة مول", rating: 4.5, description: "ألعاب كهربائية وترفيه عائلي ممتع", price: "$$", phone: "065553235", openHours: "10:00 - 23:00", specialties: ["ألعاب كهربائية", "بولينغ", "بلياردو"]},
            {name: "مركز حياة الترفيهي", location: "جاليريا مول", rating: 4.3, description: "بولينغ وألعاب متنوعة للعائلة", price: "$$$", phone: "065553236", openHours: "12:00 - 24:00", specialties: ["بولينغ", "ألعاب فيديو", "سينما"]},
            {name: "أدرينالين", location: "الشميساني", rating: 4.6, description: "ألعاب مغامرات وتسلق للشجعان", price: "$$$", phone: "065553237", openHours: "14:00 - 22:00", specialties: ["تسلق", "حبال", "تحديات"]},
            {name: "جيم بوكس", location: "العقبة الرياضية", rating: 4.4, description: "ملاكمة وألعاب قتالية للرياضيين", price: "$$", phone: "065553238", openHours: "15:00 - 23:00", specialties: ["ملاكمة", "فنون قتال", "فتنس"]},
            {name: "ليزر تاغ", location: "عبدون", rating: 4.7, description: "حروب الليزر المثيرة والممتعة", price: "$$$", phone: "065553239", openHours: "16:00 - 24:00", specialties: ["ليزر تاغ", "ألعاب جماعية", "حفلات"]},
            {name: "سكاي زون", location: "العبدلي", rating: 4.5, description: "ترامبولين وقفزات عالية آمنة", price: "$$$", phone: "065553240", openHours: "10:00 - 22:00", specialties: ["ترامبولين", "قفز", "أكروبات"]},
            {name: "إسكيب روم", location: "جبل الحسين", rating: 4.6, description: "ألغاز وتحديات ذهنية مثيرة", price: "$$", phone: "065553241", openHours: "15:00 - 24:00", specialties: ["ألغاز", "هروب", "تفكير"]},
            {name: "كارتينغ عمان", location: "الدوار السابع", rating: 4.8, description: "سباقات سيارات مصغرة وإثارة", price: "$$$", phone: "065553242", openHours: "14:00 - 23:00", specialties: ["سباق", "كارتينغ", "سرعة"]},
            {name: "بلايلاند", location: "الشميساني", rating: 4.2, description: "منطقة ألعاب آمنة للأطفال الصغار", price: "$$", phone: "065553243", openHours: "9:00 - 21:00", specialties: ["ألعاب أطفال", "أمان", "مرح"]}
        ],
        "مغامرات": [
            {name: "تسلق الجبال - جبل القلعة", location: "وسط البلد", rating: 4.5, description: "تسلق وإطلالة تاريخية رائعة على عمان", price: "$$", phone: "065554234", openHours: "8:00 - 18:00", specialties: ["تسلق", "تاريخ", "إطلالة"]},
            {name: "مغامرات وادي السير", location: "وادي السير", rating: 4.7, description: "تسلق ومشي جبلي في الطبيعة الخلابة", price: "$$$", phone: "065554235", openHours: "6:00 - 17:00", specialties: ["مشي جبلي", "طبيعة", "تصوير"]},
            {name: "بالون الهواء الساخن", location: "شرق عمان", rating: 4.9, description: "رحلة فوق عمان بالمنطاد - تجربة لا تنسى", price: "$$$$", phone: "065554236", openHours: "5:00 - 8:00", specialties: ["طيران", "مناظر", "رومانسية"]},
            {name: "رحلات الدراجات الجبلية", location: "فحيص", rating: 4.4, description: "مسارات جبلية ممتعة ومليئة بالتحديات", price: "$$", phone: "065554237", openHours: "7:00 - 16:00", specialties: ["دراجات", "مسارات", "لياقة"]},
            {name: "تسلق الصخور", location: "مأدبا", rating: 4.6, description: "تحديات صخرية مثيرة للمتقدمين", price: "$$$", phone: "065554238", openHours: "8:00 - 17:00", specialties: ["صخور", "تحدي", "قوة"]},
            {name: "رحلة صحراوية", location: "الأزرق", rating: 4.3, description: "مغامرة في الصحراء الشرقية الساحرة", price: "$$$", phone: "065554239", openHours: "15:00 - 22:00", specialties: ["صحراء", "جمال", "نجوم"]},
            {name: "باراشوت", location: "مطار ماركا", rating: 4.8, description: "قفزات بالمظلات للمغامرين الشجعان", price: "$$$$", phone: "065554240", openHours: "7:00 - 15:00", specialties: ["مظلات", "قفز", "إثارة"]},
            {name: "رحلة الكهوف", location: "فحيص", rating: 4.5, description: "استكشاف الكهوف الطبيعية الخفية", price: "$$", phone: "065554241", openHours: "9:00 - 16:00", specialties: ["كهوف", "استكشاف", "جيولوجيا"]},
            {name: "تسلق الحبال", location: "سحاب", rating: 4.4, description: "تحديات الحبال العالية والمثيرة", price: "$$$", phone: "065554242", openHours: "10:00 - 18:00", specialties: ["حبال", "توازن", "شجاعة"]},
            {name: "سفاري الصحراء", location: "الكرك", rating: 4.6, description: "جولة صحراوية مثيرة بالسيارات", price: "$$$", phone: "065554243", openHours: "14:00 - 20:00", specialties: ["سيارات", "رمال", "مغامرة"]}
        ],
        "تسوق": [
            {name: "سيتي مول", location: "طبربور", rating: 4.4, description: "أكبر مول في الأردن - تسوق لا محدود", price: "$$$", phone: "065555234", openHours: "10:00 - 24:00", specialties: ["ماركات عالمية", "طعام", "سينما"]},
            {name: "مكة مول", location: "مكة", rating: 4.3, description: "تسوق وترفيه عائلي في مكان واحد", price: "$$$", phone: "065555235", openHours: "10:00 - 23:00", specialties: ["عائلي", "ألعاب", "مطاعم"]},
            {name: "جاليريا مول", location: "طبربور", rating: 4.2, description: "مول متوسط الحجم بخيارات متنوعة", price: "$$", phone: "065555236", openHours: "10:00 - 22:00", specialties: ["ملابس", "إلكترونيات", "كافيهات"]},
            {name: "تاج مول", location: "طبربور", rating: 4.1, description: "تسوق عائلي مريح وأسعار معقولة", price: "$$", phone: "065555237", openHours: "10:00 - 22:00", specialties: ["أسعار جيدة", "محلي", "عائلي"]},
            {name: "العبدلي مول", location: "العبدلي", rating: 4.5, description: "مول حديث وراقي في قلب العاصمة", price: "$$$", phone: "065555238", openHours: "10:00 - 23:00", specialties: ["فاخر", "حديث", "أعمال"]},
            {name: "سوق جارا", location: "جبل اللويبدة", rating: 4.6, description: "سوق للحرف اليدوية والتحف الأصيلة", price: "$$", phone: "065555239", openHours: "10:00 - 20:00", specialties: ["حرف", "تحف", "هدايا"]},
            {name: "وسط البلد", location: "وسط عمان", rating: 4.0, description: "تسوق تراثي شعبي بأسعار مناسبة", price: "$", phone: "065555240", openHours: "8:00 - 20:00", specialties: ["شعبي", "رخيص", "تقليدي"]},
            {name: "شارع الرينبو", location: "جبل عمان", rating: 4.3, description: "شارع تجاري مميز وعصري", price: "$$", phone: "065555241", openHours: "9:00 - 21:00", specialties: ["عصري", "كافيهات", "بوتيكات"]},
            {name: "أفنيو مول", location: "عبدون", rating: 4.4, description: "مول صغير وأنيق للتسوق الراقي", price: "$$$", phone: "065555242", openHours: "10:00 - 22:00", specialties: ["راقي", "بوتيك", "كافيهات"]},
            {name: "بازار خان", location: "وسط البلد", rating: 4.1, description: "سوق تراثي للتحف والهدايا", price: "$$", phone: "065555243", openHours: "9:00 - 19:00", specialties: ["تحف", "تراث", "هدايا"]}
        ],
        "ثقافية": [
            {name: "قلعة عمان", location: "جبل القلعة", rating: 4.7, description: "آثار رومانية وإسلامية تحكي تاريخ عمان", price: "$", phone: "065556234", openHours: "8:00 - 17:00", specialties: ["تاريخ", "آثار", "إطلالة"]},
            {name: "المسرح الروماني", location: "وسط البلد", rating: 4.6, description: "مسرح أثري روماني يعود للقرن الثاني", price: "$", phone: "065556235", openHours: "8:00 - 17:00", specialties: ["روماني", "مسرح", "فعاليات"]},
            {name: "متحف الأردن", location: "راس العين", rating: 4.5, description: "تاريخ الأردن وحضارته عبر العصور", price: "$$", phone: "065556236", openHours: "9:00 - 17:00", specialties: ["تاريخ", "حضارة", "تعليم"]},
            {name: "دار الأوبرا", location: "جبل الحسين", rating: 4.8, description: "عروض موسيقية وثقافية عالمية", price: "$$$", phone: "065556237", openHours: "19:00 - 23:00", specialties: ["موسيقى", "أوبرا", "ثقافة"]},
            {name: "المتحف الشعبي", location: "جبل القلعة", rating: 4.3, description: "تراث شعبي أردني أصيل ومعروضات تقليدية", price: "$", phone: "065556238", openHours: "8:00 - 17:00", specialties: ["تراث", "شعبي", "أزياء"]},
            {name: "بيت العقاد الثقافي", location: "جبل اللويبدة", rating: 4.4, description: "مركز ثقافي وفني للمثقفين", price: "$$", phone: "065556239", openHours: "9:00 - 20:00", specialties: ["ثقافة", "فن", "ندوات"]},
            {name: "الأكاديمية الملكية للفنون", location: "مؤتة", rating: 4.5, description: "فنون معاصرة وورش تدريبية", price: "$$", phone: "065556240", openHours: "9:00 - 18:00", specialties: ["فنون", "ورش", "تدريب"]},
            {name: "مركز هيا الثقافي", location: "جبل عمان", rating: 4.2, description: "فعاليات ثقافية متنوعة للجميع", price: "$$", phone: "065556241", openHours: "10:00 - 22:00", specialties: ["فعاليات", "ثقافة", "أطفال"]},
            {name: "مكتبة عبد الحميد شومان", location: "الشميساني", rating: 4.6, description: "مكتبة ومركز ثقافي حديث", price: "$", phone: "065556242", openHours: "8:00 - 20:00", specialties: ["كتب", "مكتبة", "بحث"]},
            {name: "نقابة الفنانين", location: "جبل اللويبدة", rating: 4.3, description: "معارض فنية ومسرحيات محلية", price: "$$", phone: "065556243", openHours: "10:00 - 20:00", specialties: ["فن", "معارض", "مسرح"]}
        ]
    },
    "إربد": {
        "مطاعم": [
            {name: "مطعم أم كلثوم", location: "وسط إربد", rating: 4.6, description: "مطعم شعبي مشهور بأكله الأصيل", price: "$$", phone: "027221234", openHours: "11:00 - 23:00", specialties: ["منسف", "مقلوبة", "كبة"]},
            {name: "كشرى الست", location: "الحي الشرقي", rating: 4.3, description: "كشري مصري لذيذ بوصفة أصيلة", price: "$", phone: "027221235", openHours: "12:00 - 22:00", specialties: ["كشري", "ملوخية", "محشي"]},
            {name: "مشاوي أبو محمد", location: "شارع الجامعة", rating: 4.5, description: "مشاوي طازة وشهية على الفحم", price: "$$", phone: "027221236", openHours: "16:00 - 01:00", specialties: ["شيش طاووق", "كباب", "فراخ"]},
            {name: "فول وفلافل حمودة", location: "المدينة القديمة", rating: 4.4, description: "فطار شعبي أصيل منذ 40 سنة", price: "$", phone: "027221237", openHours: "6:00 - 14:00", specialties: ["فلافل", "فول", "حمص"]},
            {name: "مطعم الياسمين", location: "حي الأمير حسن", rating: 4.7, description: "أكل لبناني وسوري راقي", price: "$$$", phone: "027221238", openHours: "13:00 - 24:00", specialties: ["حمص لبناني", "تبولة", "فتوش"]}
        ],
        "كافيهات": [
            {name: "كافيه الجامعة", location: "الجامعة الأردنية", rating: 4.4, description: "مكان الطلبة المفضل للدراسة", price: "$$", phone: "027222234", openHours: "7:00 - 24:00", specialties: ["قهوة", "وايفاي", "هدوء"]},
            {name: "قهوة عربية", location: "وسط إربد", rating: 4.5, description: "قهوة تقليدية وشيشة أصيلة", price: "$", phone: "027222235", openHours: "14:00 - 02:00", specialties: ["قهوة عربية", "شيشة", "جلسات"]}
        ],
        "ألعاب": [
            {name: "مركز ترفيه إربد", location: "مول إربد", rating: 4.5, description: "ألعاب كهربائية وبولينغ شامل", price: "$$", phone: "027223234", openHours: "10:00 - 23:00", specialties: ["بولينغ", "ألعاب كهربائية", "عائلي"]},
            {name: "لونا بارك", location: "حديقة الملك عبدالله", rating: 4.3, description: "ألعاب خارجية ومرح للأطفال", price: "$", phone: "027223235", openHours: "15:00 - 21:00", specialties: ["ألعاب خارجية", "مراجيح", "طبيعة"]}
        ],
        "مغامرات": [
            {name: "غابات عجلون", location: "عجلون", rating: 4.8, description: "تنزه ومشي في أجمل غابات الأردن", price: "$$", phone: "027224234", openHours: "6:00 - 18:00", specialties: ["غابات", "مشي", "هواء نقي"]},
            {name: "قلعة عجلون", location: "عجلون", rating: 4.7, description: "تسلق وإطلالة تاريخية مذهلة", price: "$", phone: "027224235", openHours: "8:00 - 17:00", specialties: ["تاريخ", "تسلق", "إطلالة"]}
        ],
        "تسوق": [
            {name: "مول إربد", location: "إربد", rating: 4.3, description: "المول الرئيسي في الشمال", price: "$$$", phone: "027225234", openHours: "10:00 - 23:00", specialties: ["ماركات", "مطاعم", "سينما"]},
            {name: "سوق إربد الشعبي", location: "وسط إربد", rating: 4.1, description: "سوق تقليدي متنوع وأسعار جيدة", price: "$", phone: "027225235", openHours: "8:00 - 20:00", specialties: ["شعبي", "رخيص", "متنوع"]}
        ],
        "ثقافية": [
            {name: "قلعة عجلون الأثرية", location: "عجلون", rating: 4.8, description: "قلعة أيوبية تاريخية مهمة", price: "$", phone: "027226234", openHours: "8:00 - 17:00", specialties: ["أيوبي", "تاريخ", "عمارة"]},
            {name: "مدينة جرش الأثرية", location: "جرش", rating: 4.9, description: "مدينة رومانية كاملة ومحفوظة", price: "$$", phone: "027226235", openHours: "8:00 - 17:00", specialties: ["روماني", "آثار", "مهرجان"]}
        ]
    },
    "الزرقاء": {
        "مطاعم": [
            {name: "مطعم أبو العبد", location: "وسط الزرقاء", rating: 4.5, description: "منسف ومقلوبة بطعم البيت الأصيل", price: "$$", phone: "053331234", openHours: "11:00 - 23:00", specialties: ["منسف", "مقلوبة", "فتة"]},
            {name: "كشك الحاج أبو أحمد", location: "الزرقاء الجديدة", rating: 4.2, description: "فطار شعبي بأسعار الطلاب", price: "$", phone: "053331235", openHours: "6:00 - 15:00", specialties: ["فلافل", "فول", "عدس"]},
            {name: "مطعم الكرم", location: "جبل طارق", rating: 4.4, description: "أكلات شامية وأردنية لذيذة", price: "$$", phone: "053331236", openHours: "12:00 - 22:00", specialties: ["شاورما", "كبة", "فتوش"]},
            {name: "بيت المنسف", location: "الرصيفة", rating: 4.6, description: "منسف أصيل بلحمة طرية وأرز مفلفل", price: "$$$", phone: "053331237", openHours: "12:00 - 21:00", specialties: ["منسف ملكي", "لحم مشوي", "أرز برياني"]},
            {name: "مطعم الضيافة", location: "حي الأمير حمزة", rating: 4.3, description: "ضيافة أردنية أصيلة وطعم ما ينتسى", price: "$$", phone: "053331238", openHours: "11:00 - 23:00", specialties: ["محاشي", "ملوخية", "كوارع"]},
            {name: "شاورما الشام", location: "الزرقاء الأولى", rating: 4.1, description: "شاورما طازة ولذيذة على مدار اليوم", price: "$", phone: "053331239", openHours: "24/7", specialties: ["شاورما لحم", "شاورما دجاج", "فتة"]},
            {name: "مطعم النخيل", location: "ماركا", rating: 4.5, description: "أجواء عائلية ومأكولات بحرية طازة", price: "$$$", phone: "053331240", openHours: "16:00 - 24:00", specialties: ["سمك مشوي", "مندي سمك", "روبيان"]},
            {name: "كنافة نابلسي", location: "وسط الزرقاء", rating: 4.7, description: "كنافة نابلسية أصيلة وحلويات شرقية", price: "$$", phone: "053331241", openHours: "8:00 - 22:00", specialties: ["كنافة نابلسية", "معمول", "قطايف"]}
        ],
        "كافيهات": [
            {name: "كافيه الأصدقاء", location: "وسط الزرقاء", rating: 4.3, description: "مكان هادي للأصدقاء والعائلة", price: "$$", phone: "053332234", openHours: "8:00 - 24:00", specialties: ["قهوة عربية", "شاي", "حلويات"]},
            {name: "مقهى الشباب", location: "الزرقاء الجديدة", rating: 4.2, description: "أجواء شبابية وألعاب ترفيهية", price: "$", phone: "053332235", openHours: "14:00 - 02:00", specialties: ["شيشة", "بلياردو", "طاولة"]},
            {name: "كافيه روز", location: "الرصيفة", rating: 4.4, description: "كافيه نسائي أنيق وهادي", price: "$$", phone: "053332236", openHours: "9:00 - 23:00", specialties: ["لاتيه", "كابتشينو", "تشيز كيك"]},
            {name: "قهوة الحارة", location: "جبل طارق", rating: 4.1, description: "قهوة شعبية تراثية بطعم الماضي", price: "$", phone: "053332237", openHours: "15:00 - 01:00", specialties: ["قهوة مرة", "شاي أحمر", "معسل"]},
            {name: "ستاربكس الزرقاء", location: "مول الزرقاء", rating: 4.0, description: "قهوة عالمية وأجواء عصرية", price: "$$$", phone: "053332238", openHours: "6:00 - 24:00", specialties: ["فرابوتشينو", "ماكياتو", "مافين"]}
        ],
        "ألعاب": [
            {name: "فان سيتي الزرقاء", location: "مول الزرقاء", rating: 4.4, description: "مدينة ألعاب كاملة للعائلة", price: "$$", phone: "053333234", openHours: "10:00 - 23:00", specialties: ["ألعاب كهربائية", "بولينغ", "أطفال"]},
            {name: "بلايلاند كيدز", location: "الرصيفة", rating: 4.2, description: "منطقة ألعاب آمنة للأطفال الصغار", price: "$", phone: "053333235", openHours: "9:00 - 21:00", specialties: ["ترامبولين", "مسابح كرات", "زحاليق"]},
            {name: "جيم الزرقاء", location: "الزرقاء الجديدة", rating: 4.3, description: "صالة رياضية ونادي لياقة", price: "$$", phone: "053333236", openHours: "6:00 - 23:00", specialties: ["أوزان", "كارديو", "مدربين"]},
            {name: "بيلياردو الشباب", location: "وسط الزرقاء", rating: 4.1, description: "بيلياردو وألعاب طاولة متنوعة", price: "$", phone: "053333237", openHours: "14:00 - 02:00", specialties: ["بيلياردو", "طاولة", "شطرنج"]},
            {name: "مركز الألعاب الإلكترونية", location: "ماركا", rating: 4.5, description: "أحدث الألعاب الإلكترونية والكمبيوتر", price: "$$", phone: "053333238", openHours: "12:00 - 24:00", specialties: ["بلايستيشن", "كمبيوتر", "VR"]}
        ],
        "مغامرات": [
            {name: "مخيم الصحراء الشرقية", location: "الأزرق", rating: 4.6, description: "تخييم في قلب الصحراء الأردنية", price: "$$$", phone: "053334234", openHours: "15:00 - 8:00", specialties: ["تخييم", "نجوم", "سفاري"]},
            {name: "رحلة الوادي", location: "وادي الزرقاء", rating: 4.4, description: "مشي ومغامرات في وادي الزرقاء", price: "$$", phone: "053334235", openHours: "7:00 - 17:00", specialties: ["مشي", "طبيعة", "تصوير"]},
            {name: "تسلق الجبال", location: "جبال الزرقاء", rating: 4.3, description: "تسلق آمن ومثير للمغامرين", price: "$$", phone: "053334236", openHours: "8:00 - 16:00", specialties: ["تسلق", "حبال", "إطلالة"]},
            {name: "رحلة الدراجات", location: "مسارات الزرقاء", rating: 4.2, description: "جولات بالدراجات الجبلية", price: "$$", phone: "053334237", openHours: "6:00 - 18:00", specialties: ["دراجات", "مسارات", "طبيعة"]},
            {name: "باراموتور", location: "مطار الزرقاء", rating: 4.8, description: "طيران شراعي وإطلالة رائعة", price: "$$$$", phone: "053334238", openHours: "6:00 - 10:00", specialties: ["طيران", "مناظر", "أدرينالين"]}
        ],
        "تسوق": [
            {name: "مول الزرقاء", location: "الزرقاء الجديدة", rating: 4.2, description: "مول حديث بخيارات تسوق متنوعة", price: "$$$", phone: "053335234", openHours: "10:00 - 23:00", specialties: ["ماركات", "مطاعم", "سينما"]},
            {name: "سوق الزرقاء المركزي", location: "وسط الزرقاء", rating: 4.0, description: "سوق شعبي بأسعار مناسبة للجميع", price: "$", phone: "053335235", openHours: "8:00 - 20:00", specialties: ["خضار", "ملابس", "أدوات"]},
            {name: "مجمع الرصيفة التجاري", location: "الرصيفة", rating: 4.1, description: "مجمع تجاري محلي ومتنوع", price: "$$", phone: "053335236", openHours: "9:00 - 22:00", specialties: ["محلي", "متنوع", "عائلي"]},
            {name: "سوق الجمعة", location: "ماركا", rating: 3.9, description: "سوق أسبوعي بأسعار مخفضة", price: "$", phone: "053335237", openHours: "الجمعة 7:00 - 15:00", specialties: ["مستعمل", "رخيص", "متنوع"]},
            {name: "مركز الذهب", location: "وسط الزرقاء", rating: 4.3, description: "محلات الذهب والمجوهرات", price: "$$$", phone: "053335238", openHours: "9:00 - 21:00", specialties: ["ذهب", "فضة", "مجوهرات"]}
        ],
        "ثقافية": [
            {name: "قصر الحلابات", location: "الأزرق", rating: 4.5, description: "قصر صحراوي أثري تاريخي", price: "$", phone: "053336234", openHours: "8:00 - 17:00", specialties: ["أموي", "صحراء", "تاريخ"]},
            {name: "متحف الزرقاء", location: "وسط الزرقاء", rating: 4.2, description: "تاريخ وتراث محافظة الزرقاء", price: "$", phone: "053336235", openHours: "9:00 - 16:00", specialties: ["تراث", "تاريخ", "تعليم"]},
            {name: "مركز الملكة رانيا الثقافي", location: "الزرقاء الجديدة", rating: 4.4, description: "فعاليات ثقافية ومكتبة عامة", price: "$", phone: "053336236", openHours: "8:00 - 20:00", specialties: ["مكتبة", "ثقافة", "ورش"]},
            {name: "المسجد الكبير", location: "وسط الزرقاء", rating: 4.6, description: "مسجد تراثي وعمارة إسلامية جميلة", price: "مجاني", phone: "053336237", openHours: "24/7", specialties: ["عمارة", "تراث", "دين"]},
            {name: "مركز شباب الزرقاء", location: "حي النزهة", rating: 4.1, description: "أنشطة شبابية وثقافية متنوعة", price: "$", phone: "053336238", openHours: "9:00 - 21:00", specialties: ["شباب", "رياضة", "ثقافة"]}
        ]
    }
};

let selectedActivities = [];
let selectedPrice = 'all';
let favorites = [];
let currentLanguage = 'ar';
let currentPlaces = [];

// Load saved data
try {
    favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    currentLanguage = localStorage.getItem('language') || 'ar';
} catch (e) {
    favorites = [];
    currentLanguage = 'ar';
}

// Language translations
const translations = {
    ar: {
        mainTitle: "🇯🇴 دليل الرحلات الأردني",
        mainSubtitle: "اكتشف أحلى الأماكن في كل محافظات الأردن!",
        langText: "English",
        stat1: "+1000 مكان",
        stat2: "12 محافظة", 
        stat3: "6 فعاليات",
        planTitle: "🗺️ خطط رحلتك المثالية",
        whereLabel: "📍 وين بدك تروح؟",
        budgetLabel: "💰 الميزانية",
        sortLabel: "🔄 ترتيب حسب",
        activitiesLabel: "🎯 ايش الفعاليات اللي بدكم إياها؟",
        generateBtn: "🚀 يلا نستكشف الأردن!",
        economical: "اقتصادي",
        medium: "متوسط",
        high: "مرتفع",
        all: "الكل",
        highestRating: "التقييم الأعلى",
        lowestPrice: "السعر الأقل",
        highestPrice: "السعر الأعلى",
        name: "الاسم",
        random: "عشوائي",
        restaurants: "مطاعم",
        cafes: "كافيهات",
        games: "ألعاب",
        adventures: "مغامرات",
        shopping: "تسوق",
        cultural: "ثقافية",
        showAll: "عرض الكل",
        favoritesOnly: "المفضلة فقط",
        share: "📤 مشاركة",
        reset: "🔄 إعادة تعيين",
        totalPlacesLabel: "إجمالي الأماكن",
        avgRatingLabel: "متوسط التقييم",
        estimatedCostLabel: "التكلفة المتوقعة",
        favoritesLabel: "المفضلة",
        call: "📞 اتصال",
        sharePlace: "📤 مشاركة",
        specialties: "🍽️ المميزات:",
        selectGovernorate: "لازم تختار المحافظة الأول! 🏙️",
        selectActivity: "اختار على الأقل فعالية وحدة! 🎯",
        noPlaces: "ما لقينا أماكن تناسب المعايير اللي حددتها. جرب تغير الفعاليات أو الميزانية. 😕",
        linkCopied: "تم نسخ الرابط! 📋",
        placeCopied: "تم نسخ معلومات المكان! 📋",
        tipsTitle: "💡 نصائح للرحلة المثالية",
        tip1: "• تأكد من حالة الطقس قبل الخروج",
        tip2: "• احجز مسبقاً في المطاعم المشهورة", 
        tip3: "• خذ معك كمية كافية من الماء",
        tip4: "• لا تنسى شاحن الهاتف",
        selectGov: "اختار المحافظة"
    },
    en: {
        mainTitle: "🇯🇴 Jordan Travel Guide",
        mainSubtitle: "Discover the best places in all Jordan governorates!",
        langText: "العربية",
        stat1: "+1000 places",
        stat2: "12 governorates",
        stat3: "6 activities",
        planTitle: "🗺️ Plan Your Perfect Trip",
        whereLabel: "📍 Where do you want to go?",
        budgetLabel: "💰 Budget",
        sortLabel: "🔄 Sort by",
        activitiesLabel: "🎯 What activities do you want?",
        generateBtn: "🚀 Let's Explore Jordan!",
        economical: "Budget",
        medium: "Medium",
        high: "High",
        all: "All",
        highestRating: "Highest Rating",
        lowestPrice: "Lowest Price",
        highestPrice: "Highest Price",
        name: "Name",
        random: "Random",
        restaurants: "Restaurants",
        cafes: "Cafes",
        games: "Games",
        adventures: "Adventures",
        shopping: "Shopping",
        cultural: "Cultural",
        showAll: "Show All",
        favoritesOnly: "Favorites Only",
        share: "📤 Share",
        reset: "🔄 Reset",
        totalPlacesLabel: "Total Places",
        avgRatingLabel: "Average Rating",
        estimatedCostLabel: "Estimated Cost",
        favoritesLabel: "Favorites",
        call: "📞 Call",
        sharePlace: "📤 Share",
        specialties: "🍽️ Specialties:",
        selectGovernorate: "Please select a governorate first! 🏙️",
        selectActivity: "Select at least one activity! 🎯",
        noPlaces: "No places found matching your criteria. Try changing activities or budget. 😕",
        linkCopied: "Link copied! 📋",
        placeCopied: "Place information copied! 📋",
        tipsTitle: "💡 Perfect Trip Tips",
        tip1: "• Check weather conditions before leaving",
        tip2: "• Book in advance at popular restaurants",
        tip3: "• Bring enough water with you",
        tip4: "• Don't forget your phone charger",
        selectGov: "Select Governorate"
    }
};

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded, initializing...');
    setLanguage(currentLanguage);
    updateFavoritesCount();
    setupScrollButton();
});

// Toggle language
function toggleLanguage() {
    console.log('Toggling language from', currentLanguage);
    currentLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
    setLanguage(currentLanguage);
    localStorage.setItem('language', currentLanguage);
}

// Set language
function setLanguage(lang) {
    console.log('Setting language to', lang);
    const t = translations[lang];
    const html = document.documentElement;
    
    // Update HTML attributes
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    
    // Update header content
    document.getElementById('mainTitle').textContent = t.mainTitle;
    document.getElementById('mainSubtitle').textContent = t.mainSubtitle;
    document.getElementById('langText').textContent = t.langText;
    document.getElementById('stat1').textContent = t.stat1;
    document.getElementById('stat2').textContent = t.stat2;
    document.getElementById('stat3').textContent = t.stat3;
    
    // Update form content
    document.getElementById('planTitle').textContent = t.planTitle;
    document.getElementById('whereLabel').textContent = t.whereLabel;
    document.getElementById('budgetLabel').textContent = t.budgetLabel;
    document.getElementById('sortLabel').textContent = t.sortLabel;
    document.getElementById('activitiesLabel').textContent = t.activitiesLabel;
    
    // Update governorate options
    const governorateSelect = document.getElementById('governorate');
    const currentValue = governorateSelect.value;
    governorateSelect.innerHTML = `
        <option value="">${t.selectGov}</option>
        <option value="عمان">${lang === 'ar' ? 'عمان - العاصمة' : 'Amman - Capital'}</option>
        <option value="إربد">${lang === 'ar' ? 'إربد - لؤلؤة الشمال' : 'Irbid - Pearl of North'}</option>
        <option value="الزرقاء">${lang === 'ar' ? 'الزرقاء - الزرقاء الحلوة' : 'Zarqa - Sweet Zarqa'}</option>
        <option value="البلقاء">${lang === 'ar' ? 'البلقاء - أرض الملح' : 'Balqa - Land of Salt'}</option>
        <option value="عجلون">${lang === 'ar' ? 'عجلون - غابات الشمال' : 'Ajloun - Northern Forests'}</option>
        <option value="جرش">${lang === 'ar' ? 'جرش - مدينة الآثار' : 'Jerash - City of Ruins'}</option>
        <option value="المفرق">${lang === 'ar' ? 'المفرق - بوابة الصحراء' : 'Mafraq - Desert Gate'}</option>
        <option value="الكرك">${lang === 'ar' ? 'الكرك - قلعة الصحراء' : 'Karak - Desert Castle'}</option>
        <option value="الطفيلة">${lang === 'ar' ? 'الطفيلة - جبال الجنوب' : 'Tafilah - Southern Mountains'}</option>
        <option value="معان">${lang === 'ar' ? 'معان - طريق القوافل' : 'Ma\'an - Caravan Route'}</option>
        <option value="العقبة">${lang === 'ar' ? 'العقبة - عروس البحر الأحمر' : 'Aqaba - Red Sea Bride'}</option>
        <option value="مادبا">${lang === 'ar' ? 'مادبا - مدينة الفسيفساء' : 'Madaba - Mosaic City'}</option>
    `;
    governorateSelect.value = currentValue;
    
    // Update budget filter labels
    const budgetLabels = document.querySelectorAll('.price-filter');
    budgetLabels[0].textContent = t.economical;
    budgetLabels[1].textContent = t.medium;
    budgetLabels[2].textContent = t.high;
    budgetLabels[3].textContent = t.all;
    
    // Update sort options
    const sortSelect = document.getElementById('sortBy');
    const currentSortValue = sortSelect.value;
    sortSelect.innerHTML = `
        <option value="rating">${t.highestRating}</option>
        <option value="price-low">${t.lowestPrice}</option>
        <option value="price-high">${t.highestPrice}</option>
        <option value="name">${t.name}</option>
        <option value="random">${t.random}</option>
    `;
    sortSelect.value = currentSortValue;
    
    // Update activity cards
    const activityCards = document.querySelectorAll('.activity-card');
    const activityNames = [t.restaurants, t.cafes, t.games, t.adventures, t.shopping, t.cultural];
    const activityCounts = ['+200', '+150', '+100', '+80', '+120', '+90'];
    
    activityCards.forEach((card, index) => {
        const nameElement = card.querySelector('.text-sm.font-medium');
        const countElement = card.querySelector('.text-xs');
        if (nameElement) nameElement.textContent = activityNames[index];
        if (countElement) countElement.textContent = activityCounts[index] + (lang === 'ar' ? ' مكان' : ' places');
    });
    
    // Update button
    document.getElementById('generatePlan').textContent = t.generateBtn;
    
    // Update stats labels if visible
    if (!document.getElementById('quickStats').classList.contains('hidden')) {
        document.getElementById('totalPlacesLabel').textContent = t.totalPlacesLabel;
        document.getElementById('avgRatingLabel').textContent = t.avgRatingLabel;
        document.getElementById('estimatedCostLabel').textContent = t.estimatedCostLabel;
        document.getElementById('favoritesLabel').textContent = t.favoritesLabel;
    }
    
    // Update filter buttons if visible
    if (!document.getElementById('results').classList.contains('hidden')) {
        document.getElementById('showAllBtn').textContent = t.showAll;
        document.getElementById('showFavoritesBtn').textContent = t.favoritesOnly;
        document.getElementById('shareBtn').textContent = t.share;
        document.getElementById('resetBtn').textContent = t.reset;
    }
    
    // Update tips section
    document.getElementById('tipsTitle').textContent = t.tipsTitle;
    document.getElementById('tip1').textContent = t.tip1;
    document.getElementById('tip2').textContent = t.tip2;
    document.getElementById('tip3').textContent = t.tip3;
    document.getElementById('tip4').textContent = t.tip4;
}

// Toggle activity selection
function toggleActivity(activity) {
    console.log('Toggling activity:', activity);
    const card = document.querySelector(`[data-activity="${activity}"]`);
    
    if (selectedActivities.includes(activity)) {
        selectedActivities = selectedActivities.filter(a => a !== activity);
        card.classList.remove('selected');
    } else {
        selectedActivities.push(activity);
        card.classList.add('selected');
    }
    
    console.log('Selected activities:', selectedActivities);
}

// Select price filter
function selectPrice(price) {
    console.log('Selecting price:', price);
    selectedPrice = price;
    
    // Update button styles
    document.querySelectorAll('.price-filter').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-price="${price}"]`).classList.add('active');
}

// Generate plan
function generatePlan() {
    console.log('Generating plan...');
    const governorate = document.getElementById('governorate').value;
    const sortBy = document.getElementById('sortBy').value;
    const t = translations[currentLanguage];

    console.log('Governorate:', governorate);
    console.log('Selected activities:', selectedActivities);
    console.log('Selected price:', selectedPrice);

    if (!governorate) {
        alert(t.selectGovernorate);
        return;
    }

    if (selectedActivities.length === 0) {
        alert(t.selectActivity);
        return;
    }

    const filteredPlaces = getFilteredPlaces(governorate, selectedActivities, selectedPrice);
    console.log('Filtered places:', filteredPlaces);
    
    const sortedPlaces = sortPlaces(filteredPlaces, sortBy);
    console.log('Sorted places:', sortedPlaces);
    
    if (sortedPlaces.length === 0) {
        alert(t.noPlaces);
        return;
    }

    currentPlaces = sortedPlaces;
    displayResults(sortedPlaces);
    updateQuickStats(sortedPlaces);
    
    // Smooth scroll to results
    document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
}

// Get filtered places
function getFilteredPlaces(governorate, activities, priceFilter) {
    let allPlaces = [];
    
    if (placesData[governorate]) {
        activities.forEach(activity => {
            if (placesData[governorate][activity]) {
                const places = placesData[governorate][activity].filter(place => {
                    if (priceFilter === 'all') return true;
                    return place.price === priceFilter;
                });
                allPlaces = allPlaces.concat(places.map(place => ({...place, category: activity})));
            }
        });
    }

    return allPlaces;
}

// Sort places
function sortPlaces(places, sortBy) {
    const sorted = [...places];
    
    switch(sortBy) {
        case 'rating':
            return sorted.sort((a, b) => b.rating - a.rating);
        case 'price-low':
            return sorted.sort((a, b) => getPriceValue(a.price) - getPriceValue(b.price));
        case 'price-high':
            return sorted.sort((a, b) => getPriceValue(b.price) - getPriceValue(a.price));
        case 'name':
            return sorted.sort((a, b) => a.name.localeCompare(b.name, 'ar'));
        case 'random':
            return sorted.sort(() => Math.random() - 0.5);
        default:
            return sorted;
    }
}

// Get price value for sorting
function getPriceValue(price) {
    const priceMap = { '$': 1, '$$': 2, '$$$': 3, '$$$$': 4, 'مجاني': 0 };
    return priceMap[price] || 0;
}

// Display results
function displayResults(places) {
    console.log('Displaying results:', places.length, 'places');
    const resultsDiv = document.getElementById('results');
    const placesGridDiv = document.getElementById('placesGrid');

    placesGridDiv.innerHTML = places.map(place => createPlaceCard(place)).join('');
    
    resultsDiv.classList.remove('hidden');
    resultsDiv.classList.add('slide-in');
}

// Create place card
function createPlaceCard(place) {
    const isFavorite = favorites.includes(place.name);
    const stars = '⭐'.repeat(Math.floor(place.rating));
    const t = translations[currentLanguage];
    
    return `
        <div class="place-card rounded-2xl p-6 card-hover shadow-lg">
            <div class="flex justify-between items-start mb-4">
                <div class="flex-1">
                    <h4 class="text-xl font-bold text-gray-800 dark:text-white mb-1">${place.name}</h4>
                    <div class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span>📍</span>
                        <span>${place.location}</span>
                    </div>
                </div>
                <div class="flex items-center gap-2">
                    <span class="text-3xl">${getCategoryIcon(place.category)}</span>
                    <button class="favorite-btn text-2xl ${isFavorite ? 'favorited' : ''}" onclick="toggleFavorite('${place.name.replace(/'/g, "\\'")}')">
                        ${isFavorite ? '❤️' : '🤍'}
                    </button>
                </div>
            </div>
            
            <div class="space-y-3 mb-4">
                <div class="flex items-center justify-between">
                    <div class="star-rating text-lg">${stars}</div>
                    <div class="text-lg font-bold text-primary">${place.rating}/5</div>
                </div>
                
                <p class="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">${place.description}</p>
                
                <div class="grid grid-cols-2 gap-3 text-sm">
                    <div class="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <span>💰</span>
                        <span>${place.price}</span>
                    </div>
                    <div class="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <span>📞</span>
                        <span>${place.phone}</span>
                    </div>
                    <div class="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <span>🕒</span>
                        <span>${place.openHours}</span>
                    </div>
                    <div class="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <span>⭐</span>
                        <span>${place.category}</span>
                    </div>
                </div>
                
                ${place.specialties ? `
                    <div class="mt-3">
                        <div class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">${t.specialties}</div>
                        <div class="flex flex-wrap gap-1">
                            ${place.specialties.map(spec => 
                                `<span class="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">${spec}</span>`
                            ).join('')}
                        </div>
                    </div>
                ` : ''}
            </div>
            
            <div class="flex gap-2 mt-4">
                <button class="flex-1 bg-primary text-white py-2 px-4 rounded-lg text-sm hover:bg-purple-700 transition-colors" onclick="callPlace('${place.phone}')">
                    ${t.call}
                </button>
                <button class="flex-1 bg-green-500 text-white py-2 px-4 rounded-lg text-sm hover:bg-green-600 transition-colors" onclick="sharePlace('${place.name.replace(/'/g, "\\'")}', '${place.location.replace(/'/g, "\\'")}')">
                    ${t.sharePlace}
                </button>
            </div>
        </div>
    `;
}

// Update quick stats
function updateQuickStats(places) {
    const statsDiv = document.getElementById('quickStats');
    const avgRating = places.reduce((sum, place) => sum + place.rating, 0) / places.length;
    const estimatedCost = calculateEstimatedCost(places);
    
    document.getElementById('totalPlaces').textContent = places.length;
    document.getElementById('avgRating').textContent = avgRating.toFixed(1);
    document.getElementById('estimatedCost').textContent = estimatedCost + (currentLanguage === 'ar' ? ' دينار' : ' JD');
    
    statsDiv.classList.remove('hidden');
}

// Calculate estimated cost
function calculateEstimatedCost(places) {
    const costMap = { '$': 15, '$$': 30, '$$$': 60, '$$$$': 120, 'مجاني': 0 };
    const totalCost = places.reduce((sum, place) => sum + (costMap[place.price] || 0), 0);
    return Math.round(totalCost / places.length * 2); // Estimate for 2 people
}

// Update favorites count
function updateFavoritesCount() {
    document.getElementById('favoritesCount').textContent = favorites.length;
}

// Toggle favorite
function toggleFavorite(placeName) {
    console.log('Toggling favorite:', placeName);
    
    if (favorites.includes(placeName)) {
        favorites = favorites.filter(fav => fav !== placeName);
    } else {
        favorites.push(placeName);
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoritesCount();
    
    // Refresh current view if results are shown
    if (!document.getElementById('results').classList.contains('hidden') && currentPlaces.length > 0) {
        displayResults(currentPlaces);
    }
}

// Show all places
function showAll() {
    if (currentPlaces.length > 0) {
        displayResults(currentPlaces);
        
        // Update button states
        document.getElementById('showAllBtn').className = 'px-4 py-2 bg-primary text-white rounded-lg text-sm';
        document.getElementById('showFavoritesBtn').className = 'px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm';
    }
}

// Show favorites only
function showFavorites() {
    if (currentPlaces.length > 0) {
        const favoritePlaces = currentPlaces.filter(place => favorites.includes(place.name));
        displayResults(favoritePlaces);
        
        // Update button states
        document.getElementById('showFavoritesBtn').className = 'px-4 py-2 bg-primary text-white rounded-lg text-sm';
        document.getElementById('showAllBtn').className = 'px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm';
    }
}

// Share results
function shareResults() {
    const governorate = document.getElementById('governorate').value;
    const activities = selectedActivities.join(', ');
    const t = translations[currentLanguage];
    
    const text = currentLanguage === 'ar' 
        ? `🇯🇴 شوف خطة الرحلة الرهيبة هاي في ${governorate}!\n\nالفعاليات: ${activities}\n\nمن دليل الرحلات الأردني المطور`
        : `🇯🇴 Check out this amazing trip plan in ${governorate}!\n\nActivities: ${activities}\n\nFrom Jordan Travel Guide`;
    
    if (navigator.share) {
        navigator.share({
            title: currentLanguage === 'ar' ? 'دليل الرحلات الأردني' : 'Jordan Travel Guide',
            text: text,
            url: window.location.href
        });
    } else {
        navigator.clipboard.writeText(text + '\n\n' + window.location.href);
        alert(t.linkCopied);
    }
}

// Share place
function sharePlace(name, location) {
    const t = translations[currentLanguage];
    const text = currentLanguage === 'ar' 
        ? `🇯🇴 شوف المكان الرهيب هاذا: ${name}\n📍 ${location}\n\nمن دليل الرحلات الأردني`
        : `🇯🇴 Check out this amazing place: ${name}\n📍 ${location}\n\nFrom Jordan Travel Guide`;
    
    if (navigator.share) {
        navigator.share({
            title: name,
            text: text
        });
    } else {
        navigator.clipboard.writeText(text);
        alert(t.placeCopied);
    }
}

// Call place
function callPlace(phone) {
    window.open(`tel:${phone}`);
}

// Reset form
function resetForm() {
    console.log('Resetting form...');
    
    document.getElementById('governorate').value = '';
    document.getElementById('sortBy').value = 'rating';
    selectedActivities = [];
    selectedPrice = 'all';
    currentPlaces = [];
    
    // Reset activity cards
    document.querySelectorAll('.activity-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    // Reset price filters
    document.querySelectorAll('.price-filter').forEach(filter => {
        filter.classList.remove('active');
    });
    document.querySelector('.price-filter[data-price="all"]').classList.add('active');
    
    // Hide results
    document.getElementById('results').classList.add('hidden');
    document.getElementById('quickStats').classList.add('hidden');
}

// Scroll to top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Setup scroll button
function setupScrollButton() {
    window.addEventListener('scroll', () => {
        const scrollBtn = document.getElementById('scrollTopBtn');
        if (window.pageYOffset > 300) {
            scrollBtn.classList.remove('hidden');
        } else {
            scrollBtn.classList.add('hidden');
        }
    });
}

// Get category icon
function getCategoryIcon(category) {
    const icons = {
        'مطاعم': '🍽️',
        'كافيهات': '☕',
        'ألعاب': '🎮',
        'مغامرات': '🏔️',
        'تسوق': '🛍️',
        'ثقافية': '🏛️'
    };
    return icons[category] || '📍';
}