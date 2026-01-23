export type Language = 'en' | 'zh' | 'tr';

export const translations = {
  en: {
    nav: { home: 'Home', tours: 'Tours', tickets: 'Tickets', contact: 'Contact', enquire: 'Enquire Now' },
    hero: {
      title: 'Discover the Soul of Turkey',
      subtitle: 'Bespoke journeys through ancient history and vibrant culture with Grace Way — your licensed boutique travel partner in Turkey.',
      cta1: 'Explore Routes',
      cta2: 'Online Support'
    },
    sections: {
      featuredTours: 'Signature Experiences',
      featuredSubtitle: 'Our Most Popular Routes',
      whyUs: 'The Grace Way Standard',
      whyUsSubtitle: 'Why Choose Our Expertise?',
      faq: 'Traveler FAQ',
      viewAll: 'View All Itineraries',
      categories: { 
        all: 'All Categories', 
        classic: 'Classic Heritage', 
        luxury: 'Luxury Collection', 
        family: 'Family Adventure', 
        entry: 'Museum Tickets', 
        activity: 'Local Activities', 
        daytrip: 'Excursions' 
      }
    },
    toursData: [
      { id: '1', title: 'Istanbul Magic: Sultanahmet to Bosphorus', location: 'Istanbul', duration: '3 Days', price: 499, image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&q=80&w=1200', category: 'classic', highlights: ['Blue Mosque Interior', 'Hagia Sophia Grandeur', 'Sunset Bosphorus Cruise'] },
      { id: '2', title: 'Cappadocia Dream: Fairy Chimneys & Balloons', location: 'Cappadocia', duration: '2 Days', price: 350, image: 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1200', category: 'classic', highlights: ['Sunrise Hot Air Balloon', 'Goreme Valleys', 'Kaymakli Underground City'] },
      { id: '3', title: 'Ephesus & Pamukkale Heritage Loop', location: 'Selcuk / Denizli', duration: '4 Days', price: 580, image: 'https://images.unsplash.com/photo-1564507592333-c60657eaa0af?auto=format&fit=crop&q=80&w=1200', category: 'classic', highlights: ['Library of Celsus', 'Cotton Castle Travertines', 'Hierapolis Theater'] },
      { id: '4', title: 'Bespoke Turquoise Coast Gulet Sailing', location: 'Fethiye / Kas', duration: '7 Days', price: 1200, image: 'https://images.unsplash.com/photo-1544633030-3608103551d0?auto=format&fit=crop&q=80&w=1200', category: 'luxury', highlights: ['Traditional Gulet Cruise', 'Butterfly Valley Hike', 'Crystal Clear Blue Lagoon'] },
      { id: '5', title: 'Antalya Family Fun & Ancient Trails', location: 'Antalya', duration: '5 Days', price: 750, image: 'https://images.unsplash.com/photo-1542052125323-e69ad37a47c2?auto=format&fit=crop&q=80&w=1200', category: 'family', highlights: ['Land of Legends Theme Park', 'Hadrian\'s Gate', 'Lower Duden Waterfalls'] },
      { id: '6', title: 'Grand Anatolian Cultural Expedition', location: 'Anatolia Loop', duration: '10 Days', price: 1800, image: 'https://images.unsplash.com/photo-1507530662612-9c3f0f73f15b?auto=format&fit=crop&q=80&w=1200', category: 'classic', highlights: ['Ankara Civilizations', 'Konya Sufi Soul', 'Mt. Nemrut Statues'] },
      { id: '7', title: 'Aegean Boutique: Izmir & Wine Tasting', location: 'Izmir / Urla', duration: '3 Days', price: 420, image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200', category: 'luxury', highlights: ['Urla Vineyard Lunch', 'Alsancak Kordon Walk', 'Cesme Thermal Waters'] },
      { id: '8', title: 'Troy & Gallipoli Historic Remembrance', location: 'Canakkale', duration: '2 Days', price: 290, image: 'https://images.unsplash.com/photo-1590424600104-e09e863118f7?auto=format&fit=crop&q=80&w=1200', category: 'classic', highlights: ['Legendary Wooden Horse', 'Anzac Cove History', 'Hellespont Crossing'] }
    ],
    ticketsData: [
      { id: 't1', title: 'Topkapi Palace Premium Access', price: 45, includes: ['Harem Section Admission', 'Audio Guide Support', 'Fast-Track Entry'], image: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&q=80&w=600', category: 'entry' },
      { id: 't2', title: 'Royal Cappadocia Balloon Flight', price: 220, includes: ['60-Min Flight Time', 'Gourmet Breakfast', 'Champagne Landing'], image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=600', category: 'activity' },
      { id: 't3', title: 'Sema Ceremony: Whirling Dervishes', price: 35, includes: ['Authentic Hodjapasha Venue', 'Live Sufi Music', 'Turkish Tea & Delights'], image: 'https://images.unsplash.com/photo-1543887010-8b9ed937397b?auto=format&fit=crop&q=80&w=600', category: 'activity' },
      { id: 't4', title: 'Bosphorus Luxury Dinner Cruise', price: 65, includes: ['3-Course Gourmet Menu', 'Traditional Folk Show', 'Open Buffet Drinks'], image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&q=80&w=600', category: 'activity' },
      { id: 't5', title: 'Ephesus Private Expert Tour', price: 110, includes: ['Official Guide Service', 'Air-con Private Van', 'Traditional Village Lunch'], image: 'https://images.unsplash.com/photo-1564507592333-c60657eaa0af?auto=format&fit=crop&q=80&w=600', category: 'daytrip' },
      { id: 't6', title: 'Heritage Hammam & Spa Day', price: 55, includes: ['Foam Massage', 'Scrubbing Treatment', 'Historical Dome Setting'], image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&q=80&w=600', category: 'activity' },
      { id: 't7', title: 'Hagia Sophia Guided Entry', price: 30, includes: ['Certified Historian Guide', 'Skip-the-Line Entry', 'Architecture Deep-Dive'], image: 'https://images.unsplash.com/photo-1543949806-2c9935e6838d?auto=format&fit=crop&q=80&w=600', category: 'entry' },
      { id: 't8', title: 'Princes\' Island Luxury Escape', price: 40, includes: ['Fast Ferry Tickets', 'Full Day Bike Access', 'Local Expert Guidance'], image: 'https://images.unsplash.com/photo-1512413316925-fd47914c9c22?auto=format&fit=crop&q=80&w=600', category: 'daytrip' },
      { id: 't9', title: 'Troy Mythology Day Expedition', price: 130, includes: ['Istanbul Pickup/Dropoff', 'Museum Admission', 'Bilingual Narrator'], image: 'https://images.unsplash.com/photo-1590424600104-e09e863118f7?auto=format&fit=crop&q=80&w=600', category: 'daytrip' }
    ],
    faqs: [
      { q: 'How do I book a tour with Grace Way?', a: 'Browse our tours and click "Enquire Now". We tailor every detail with you via WeChat, Email, or WhatsApp to ensure a seamless experience.' },
      { q: 'Is Grace Way a licensed travel agency?', a: 'Yes, Grace Way is a fully licensed A-Class Turkish travel agency (TURSAB Registered).' },
      { q: 'What is your cancellation policy?', a: 'Cancellations up to 7 days before the tour are fully refundable. Custom packages may have specific terms.' },
      { q: 'Do you offer airport transfers?', a: 'Yes, we provide private airport transfers across all major Turkish airports including IST, SAW, and AYT.' }
    ],
    features: {
      f1: { title: 'Fully Licensed Agency', desc: 'A-Class TURSAB member. Operating under strict government regulations for your peace of mind.' },
      f2: { title: 'Boutique & Bespoke', desc: 'Specializing in small groups and private itineraries tailored to your unique rhythm.' },
      f3: { title: 'Certified Expert Guides', desc: 'Our historians are government-certified professionals based in Turkey.' }
    },
    contact: {
      title: "Design Your Perfect Escape",
      subtitle: "Our Turkey-based specialists are ready to craft your story using their local expertise.",
      form: { 
        name: 'Full Name', 
        email: 'Email Address', 
        whatsapp: 'WeChat / Phone Number', 
        message: 'Your Trip Ideas (Dates, Group Size, etc.)', 
        submit: 'Send Inquiry', 
        sending: 'Sending...', 
        success: 'Thank you!', 
        successDesc: 'Your request is received. We will contact you within 24 hours.' 
      }
    },
    footer: {
      statement: 'Grace Way · Your Boutique Travel Expert',
      about: 'Grace Way Travel Agency is a premier boutique operator based in Istanbul, offering professional and high-end services for global travelers.',
      brandEn: 'GRACE WAY TRAVEL AGENCY',
      brandZh: '恩途（国际）旅行社',
      explore: 'Discovery',
      trust: 'Compliance',
      contact: 'Contact Us',
      address: 'MH, Halkçı Sk. MODA PASAJI NO:25 KAT:2 BÜRO/OFiS NO:35, 34145 Bakırköy/İstanbul',
      licenseInfo: 'A-Class License: 1XXXX',
      rights: 'All rights reserved.',
      tursabText: 'TÜRSAB Member',
      tursabBacklink: 'Official Licensed Turkish Travel Agency'
    }
  },
  zh: {
    nav: { home: '首页', tours: '纵享行程', tickets: '门票体验', contact: '联系我们', enquire: '即刻定制' },
    hero: {
      title: '探索土耳其的灵魂',
      subtitle: '与恩途（国际）开启一场穿越古老历史与灿烂文化的私享定制之旅 —— 您在土耳其值得信赖的持牌精品旅行伙伴。',
      cta1: '查看精彩线路',
      cta2: '在线咨询'
    },
    sections: {
      featuredTours: '匠心私藏',
      featuredSubtitle: '热门精品行程',
      whyUs: '恩途服务标准',
      whyUsSubtitle: '为什么选择恩途？',
      faq: '旅行百科',
      viewAll: '探索全部行程',
      categories: { 
        all: '全部类别', 
        classic: '人文经典', 
        luxury: '高端轻奢', 
        family: '亲子探险', 
        entry: '官方门票', 
        activity: '特色体验', 
        daytrip: '私家一日游' 
      }
    },
    toursData: [
      { id: '1', title: '伊斯坦布尔之魅：从苏丹阿赫迈特到博斯普鲁斯', location: '伊斯坦布尔', duration: '3天', price: 499, image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&q=80&w=1200', category: 'classic', highlights: ['蓝色清真寺深度导览', '圣索菲亚大教堂历史回溯', '落日时分博斯普鲁斯巡游'] },
      { id: '2', title: '卡帕多奇亚之梦：精灵烟囱与热气球', location: '卡帕多奇亚', duration: '2天', price: 350, image: 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1200', category: 'classic', highlights: ['浪漫晨曦热气球飞行', '格雷梅峡谷奇观', '开马克勒神秘地下城'] },
      { id: '3', title: '以弗所与棉堡遗迹大环线', location: '塞尔丘克 / 代尼兹利', duration: '4天', price: 580, image: 'https://images.unsplash.com/photo-1564507592333-c60657eaa0af?auto=format&fit=crop&q=80&w=1200', category: 'classic', highlights: ['塞尔苏斯图书馆古迹', '棉堡石灰华阶梯漫步', '希拉波利斯古剧场'] },
      { id: '4', title: '“蓝向”海岸：豪华木制帆船私享巡游', location: '费特希耶 / 卡什', duration: '7天', price: 1200, image: 'https://images.unsplash.com/photo-1544633030-3608103551d0?auto=format&fit=crop&q=80&w=1200', category: 'luxury', highlights: ['传统木船航行', '蝴蝶谷秘境徒步', '死海清澈水域浮潜'] },
      { id: '5', title: '安塔利亚亲子假期与古城探秘', location: '安塔利亚', duration: '5天', price: 750, image: 'https://images.unsplash.com/photo-1542052125323-e69ad37a47c2?auto=format&fit=crop&q=80&w=1200', category: 'family', highlights: ['传奇乐园主题公园', '哈德良门历史漫步', '杜顿瀑布入海奇观'] },
      { id: '6', title: '全境横跨：安纳托利亚文化长征', location: '安纳托利亚大环线', duration: '10天', price: 1800, image: 'https://images.unsplash.com/photo-1507530662612-9c3f0f73f15b?auto=format&fit=crop&q=80&w=1200', category: 'classic', highlights: ['安卡拉文明史博览', '孔亚苏菲派灵魂之舞', '内姆鲁特山人头像奇迹'] },
      { id: '7', title: '精品爱琴海：伊兹密尔与顶级酒庄品鉴', location: '伊兹密尔 / 乌尔拉', duration: '3天', price: 420, image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200', category: 'luxury', highlights: ['乌尔拉精品酒庄午餐', '爱琴海滨长廊漫步', '切什梅温泉疗愈'] },
      { id: '8', title: '特洛伊与加里波利历史怀古之旅', location: '恰纳卡莱', duration: '2天', price: 290, image: 'https://images.unsplash.com/photo-1590424600104-e09e863118f7?auto=format&fit=crop&q=80&w=1200', category: 'classic', highlights: ['特洛伊木马神话重现', '加里波利战争纪念地', '达达尼尔海峡巡航'] }
    ],
    ticketsData: [
      { id: 't1', title: '托普卡帕宫（老皇宫）至尊套票', price: 45, includes: ['包含后宫区域进入', '官方中文语音导览', '免排队快速通道'], image: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&q=80&w=600', category: 'entry' },
      { id: 't2', title: '卡帕多奇亚“皇室之选”热气球飞行', price: 220, includes: ['60分钟标准飞行', '起飞前丰盛早茶', '降落香槟庆祝仪式'], image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=600', category: 'activity' },
      { id: 't3', title: '苏菲派旋转舞：心灵疗愈仪式', price: 35, includes: ['传统霍贾帕夏演出场馆', '现场苏菲派器乐演出', '特色土耳其茶点'], image: 'https://images.unsplash.com/photo-1543887010-8b9ed937397b?auto=format&fit=crop&q=80&w=600', category: 'activity' },
      { id: 't4', title: '博斯普鲁斯海峡豪华晚餐巡游', price: 65, includes: ['精致三道式土耳其餐', '多民族民俗歌舞表演', '酒水软饮无限量'], image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&q=80&w=600', category: 'activity' },
      { id: 't5', title: '以弗所古城私人深度向导游', price: 110, includes: ['持证历史专家向导', '私人商务专车接送', '当地特色村庄午餐'], image: 'https://images.unsplash.com/photo-1564507592333-c60657eaa0af?auto=format&fit=crop&q=80&w=600', category: 'daytrip' },
      { id: 't6', title: '传承土耳其浴：身心洗礼体验', price: 55, includes: ['专业泡沫按摩', '传统磨砂去角质', '历史保护建筑浴场'], image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&q=80&w=600', category: 'activity' },
      { id: 't7', title: '圣索菲亚大教堂专业讲解入场', price: 30, includes: ['官方授权中文导览', '快速进入通道', '建筑与宗教历史解析'], image: 'https://images.unsplash.com/photo-1543949806-2c9935e6838d?auto=format&fit=crop&q=80&w=600', category: 'entry' },
      { id: 't8', title: '王子岛群：逃离城市奢享一日', price: 40, includes: ['快船往返船票', '全天自行车租赁使用', '当地资深向导协助'], image: 'https://images.unsplash.com/photo-1512413316925-fd47914c9c22?auto=format&fit=crop&q=80&w=600', category: 'daytrip' },
      { id: 't9', title: '伊斯坦布尔出发：特洛伊神话远征', price: 130, includes: ['酒店往返专车接送', '全程景点大门票', '中英双语讲解'], image: 'https://images.unsplash.com/photo-1590424600104-e09e863118f7?auto=format&fit=crop&q=80&w=600', category: 'daytrip' }
    ],
    faqs: [
      { q: '如何预订恩途的旅行服务？', a: '您可以浏览线路并点击“立即咨询”。我们将优先通过微信、邮件与您确认细节，确保行程完美衔接。' },
      { q: '恩途是正规持牌旅行社吗？', a: '是的，恩途 (Grace Way) 是经土耳其旅游协会 (TÜRSAB) 认证的 A 类持牌旅行社。' },
      { q: '取消政策是怎样的？', a: '通常在行程开始前 7 天取消可获全额退款。部分定制服务可能有特殊说明。' },
      { q: '你们提供机场接送吗？', a: '提供。我们在伊斯坦布尔 (IST/SAW) 及各大机场均提供 24 小时私人接送服务。' }
    ],
    features: {
      f1: { title: '官方持牌资质', desc: '土耳其旅游协会 (TÜRSAB) A类成员。政府监管，全程保险，保障旅程安全。' },
      f2: { title: '精品私人定制', desc: '专注于私家团和精品小众线路，根据您的喜好灵活规划，拒绝走马观花。' },
      f3: { title: '资深常驻向导', desc: '我们的向导均为常驻土耳其的专业历史学者，获政府官方认证。' }
    },
    contact: {
      title: '开启您的私人定制之旅',
      subtitle: '我们的地接专家均常驻土耳其本地，无论是博斯普鲁斯海峡的私人游艇，还是卡帕多奇亚的热气球，我们随时为您策划。',
      form: { 
        name: '姓名', 
        email: '电子邮箱', 
        whatsapp: '微信 / 手机号', 
        message: '您的旅行计划 (日期、人数、目的地等)', 
        submit: '提交咨询', 
        sending: '发送中...', 
        success: '发送成功！', 
        successDesc: '我们已收到您的咨询，旅行专家将在24小时内联系您。' 
      }
    },
    footer: {
      statement: '恩途（国际） · 您的精品定制旅行专家',
      about: '恩途（国际）旅行社总部位于伊斯坦布尔，致力于为您提供最专业、最高品质的土耳其定制旅行体验。',
      brandEn: 'GRACE WAY TRAVEL AGENCY',
      brandZh: '恩途（国际）旅行社',
      explore: '探索发现',
      trust: '合规认证',
      contact: '联系我们',
      address: 'MH, Halkçı Sk. MODA PASAJI NO:25 KAT:2 BÜRO/OFiS NO:35, 34145 Bakırköy/İstanbul',
      licenseInfo: 'A类许可编号：1XXXX',
      rights: '保留所有权利。',
      tursabText: 'TÜRSAB 认证成员',
      tursabBacklink: '土耳其官方持牌旅行社'
    }
  },
  tr: {
    nav: { home: 'Anasayfa', tours: 'Turlar', tickets: 'Biletler', contact: 'İletişim', enquire: 'Teklif Al' },
    hero: {
      title: 'Türkiye\'nin Ruhunu Keşfedin',
      subtitle: 'Grace Way ile antik tarihten canlı kültüre uzanan kişiye özel yolculuklar — Türkiye\'deki lisanslı butik seyahat ortağınız.',
      cta1: 'Rotaları Keşfet',
      cta2: 'İletişime Geçin'
    },
    sections: {
      featuredTours: 'Özel Deneyimler',
      featuredSubtitle: 'En Popüler Rotalarımız',
      whyUs: 'Grace Way Standartları',
      whyUsSubtitle: 'Neden Biz?',
      faq: 'Sıkça Sorulan Sorular',
      viewAll: 'Tüm Rotaları Gör',
      categories: { 
        all: 'Tüm Kategoriler', 
        classic: 'Klasik Miras', 
        luxury: 'Lüks Koleksiyonu', 
        family: 'Aile Macerası', 
        entry: 'Müze Biletleri', 
        activity: 'Yerel Etkinlikler', 
        daytrip: 'Günübirlik Turlar' 
      }
    },
    toursData: [
      { id: '1', title: 'İstanbul Büyüsü: Sultanahmet\'ten Boğaz\'a', location: 'İstanbul', duration: '3 Gün', price: 499, image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&q=80&w=1200', category: 'classic', highlights: ['Sultanahmet Camii', 'Ayasofya', 'Boğaz Turu'] },
      { id: '2', title: 'Kapadokya Rüyası: Peribacaları ve Balonlar', location: 'Kapadokya', duration: '2 Gün', price: 350, image: 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1200', category: 'classic', highlights: ['Sıcak Hava Balonu', 'Göreme Açık Hava Müzesi', 'Yeraltı Şehri'] },
      { id: '3', title: 'Efes ve Pamukkale Mirası', location: 'Kuşadası / Denizli', duration: '4 Gün', price: 580, image: 'https://images.unsplash.com/photo-1564507592333-c60657eaa0af?auto=format&fit=crop&q=80&w=1200', category: 'classic', highlights: ['Efes Antik Kenti', 'Travertenler', 'Hierapolis'] },
      { id: '4', title: 'Butik Turkuaz Kıyıları Yelkenli Seyahati', location: 'Fethiye / Kaş', duration: '7 Gün', price: 1200, image: 'https://images.unsplash.com/photo-1544633030-3608103551d0?auto=format&fit=crop&q=80&w=1200', category: 'luxury', highlights: ['Geleneksel Gulet Turu', 'Kelebekler Vadisi', 'Ölüdeniz'] },
      { id: '5', title: 'Antalya Aile Macerası ve Antik Yollar', location: 'Antalya', duration: '5 Gün', price: 750, image: 'https://images.unsplash.com/photo-1542052125323-e69ad37a47c2?auto=format&fit=crop&q=80&w=1200', category: 'family', highlights: ['Land of Legends', 'Hadrian Kapısı', 'Düden Şelalesi'] },
      { id: '6', title: 'Büyük Anadolu Kültür Keşfi', location: 'Anadolu Turu', duration: '10 Gün', price: 1800, image: 'https://images.unsplash.com/photo-1507530662612-9c3f0f73f15b?auto=format&fit=crop&q=80&w=1200', category: 'classic', highlights: ['Ankara Uygarlıkları', 'Konya Mevlevi Ruhu', 'Nemrut Dağı'] },
      { id: '7', title: 'Ege Butik: İzmir ve Şarap Tadımı', location: 'İzmir / Urla', duration: '3 Gün', price: 420, image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200', category: 'luxury', highlights: ['Urla Bağ Yolu', 'Kordon Boyu', 'Çeşme Termal'] },
      { id: '8', title: 'Truva ve Gelibolu Tarihi Anma', location: 'Çanakkale', duration: '2 Gün', price: 290, image: 'https://images.unsplash.com/photo-1590424600104-e09e863118f7?auto=format&fit=crop&q=80&w=1200', category: 'classic', highlights: ['Truva Atı', 'Anzak Koyu', 'Savaş Anıtları'] }
    ],
    ticketsData: [
      { id: 't1', title: 'Topkapı Sarayı Hızlı Giriş', price: 45, includes: ['Hızlı giriş', 'Sesli rehber', 'Harem dahil'], image: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&q=80&w=600', category: 'entry' },
      { id: 't2', title: 'Kapadokya Lüks Balon Uçuşu', price: 220, includes: ['60 dk uçuş', 'Kahvaltı dahil', 'İniş kutlaması'], image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=600', category: 'activity' },
      { id: 't3', title: 'Sema Gösterisi: Mevlevi Ayini', price: 35, includes: ['Hodjapasha Kültür Merkezi', 'Canlı Tasavvuf Müziği', 'Çay ikramı'], image: 'https://images.unsplash.com/photo-1543887010-8b9ed937397b?auto=format&fit=crop&q=80&w=600', category: 'activity' },
      { id: 't4', title: 'Boğazda Akşam Yemeği Tekne Turu', price: 65, includes: ['3 çeşit yemek', 'Folklor gösterisi', 'Sınırsız içecek'], image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&q=80&w=600', category: 'activity' },
      { id: 't5', title: 'Efes Antik Kenti Özel Rehberli Tur', price: 110, includes: ['Lisanslı rehber', 'Özel araç', 'Köy yemeği'], image: 'https://images.unsplash.com/photo-1564507592333-c60657eaa0af?auto=format&fit=crop&q=80&w=600', category: 'daytrip' },
      { id: 't6', title: 'Geleneksel Türk Hamamı ve Spa', price: 55, includes: ['Kese ve köpük', 'Yağ masajı', 'Tarihi kubbe'], image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&q=80&w=600', category: 'activity' },
      { id: 't7', title: 'Ayasofya Rehberli Giriş', price: 30, includes: ['Hızlı giriş', 'Tarihçi rehber', 'Mimari anlatım'], image: 'https://images.unsplash.com/photo-1543949806-2c9935e6838d?auto=format&fit=crop&q=80&w=600', category: 'entry' },
      { id: 't8', title: 'Büyükada Fayton ve Bisiklet Turu', price: 40, includes: ['Vapur bileti', 'Bisiklet kiralama', 'Adalar rehberi'], image: 'https://images.unsplash.com/photo-1512413316925-fd47914c9c22?auto=format&fit=crop&q=80&w=600', category: 'daytrip' },
      { id: 't9', title: 'İstanbul Çıkışlı Truva Günübirlik Tur', price: 130, includes: ['Otel transferi', 'Öğle yemeği', 'Giriş ücretleri'], image: 'https://images.unsplash.com/photo-1590424600104-e09e863118f7?auto=format&fit=crop&q=80&w=600', category: 'daytrip' }
    ],
    faqs: [
      { q: 'Nasıl rezervasyon yaparım?', a: 'Tur listemize göz atıp teklif alabilirsiniz. Detayları WeChat, E-posta veya WhatsApp üzerinden sizinle netleştiriyoruz.' },
      { q: 'Grace Way lisanslı bir acente mi?', a: 'Evet, Grace Way TÜRSAB\'a kayıtlı, tam lisanslı A-Grubu seyahat acentasıdır.' },
      { q: 'İptal politikanız nedir?', a: 'Tura 7 gün kalana kadar yapılan iptallerde tam iade yapılır.' },
      { q: 'Havalimanı transferi sunuyor musunuz?', a: 'Evet; İstanbul (IST/SAW) ve tüm ana havalimanlarında 7/24 özel transfer sağlıyoruz.' }
    ],
    features: {
      f1: { title: 'Lisanslı Acente', desc: 'TÜRSAB A-Grubu üyesi. Güvenliğiniz için tüm operasyonlarımız devlet denetimi altındadır.' },
      f2: { title: 'Butik ve Özel', desc: 'Kitle turizminin ötesinde, sizin ritminize uygun özel programlar hazırlıyoruz.' },
      f3: { title: 'Profesyonel Rehberler', desc: 'Bakanlık onaylı profesyonel rehberlerimizle Anadolu\'nun tarihini keşfedin.' }
    },
    contact: {
      title: 'Seyahatinizi Tasarlayalım',
      subtitle: 'Yerel uzmanlarımızla iletişime geçin. Özel Boğaz turlarından Kapadokya balon uçuşlarına kadar her detay Grace Way uzmanlığında.',
      form: { 
        name: 'Ad Soyad', 
        email: 'E-posta Adresi', 
        whatsapp: 'WeChat / Telefon / WhatsApp', 
        message: 'Seyahat Detayları (Tarih, Kişi Sayısı vb.)', 
        submit: 'Teklif Al', 
        sending: 'Gönderiliyor...', 
        success: 'Teşekkürler!', 
        successDesc: 'Mesajınız alındı. En kısa sürede sizinle iletişime geçeceğiz.' 
      }
    },
    footer: {
      statement: 'Grace Way · Butik Seyahat Uzmanınız',
      about: 'Grace Way Travel Agency, İstanbul merkezli, profesyonel ve üst düzey hizmetler sunan butik bir seyahat acentasıdır.',
      brandEn: 'GRACE WAY TRAVEL AGENCY',
      brandZh: '恩途（国际）旅行社',
      explore: 'Keşif',
      trust: 'Yasal Uyum',
      contact: 'İletişim',
      address: 'MH, Halkçı Sk. MODA PASAJI NO:25 KAT:2 BÜRO/OFiS NO:35, 34145 Bakırköy/İstanbul',
      licenseInfo: 'A-Grubu Belge No: 1XXXX',
      rights: 'Tüm hakları saklıdır.',
      tursabText: 'TÜRSAB Üyesi',
      tursabBacklink: 'Lisanslı Türkiye Seyahat Acentesi'
    }
  }
};