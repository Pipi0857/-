import { ChoiceStep } from './types';

export const STEPS: ChoiceStep[] = [
  {
    title: '目的地選擇',
    subtitle: '想去哪裡創造我們的回憶？',
    options: [
      { 
        id: 'tpe', name: '台北市', 
        subOptions: [
          { id: 'tpe_main', name: '台北市區', description: '感受核心都會魅力', activityHighlights: { 'spots_creative': '誠品生活松菸店漫遊', 'food_michelin': '欣葉鐘菜 (米其林一星)', 'shop_mall': '台北 101/信義商圈', 'art_gallery': '台北市立美術館' } },
          { id: 'tpe_xin', name: '信義區', description: '繁華都會與時尚', activityHighlights: { 'spots_nature': '爬上象山觀賞 101 夕陽', 'spots_history': '漫步四四南村眷村市集', 'spots_creative': '松菸文創園區看設計展', 'spots_ig': '101 觀景台俯瞰北市美景', 'food_michelin': '教父牛排 (Danny\'s Steakhouse)', 'food_night': '臨江街(通化)夜市尋覓美食', 'food_cafe': '興波咖啡 (Simple Kaffa) 極致體驗', 'shop_mall': '信義新光三越 A8 到 A11 逛個夠', 'indoor_movie': '微風南山 4D 影院', 'indoor_spa': '信義區頂級芳療 SPA' } },
          { id: 'tpe_dad', name: '大稻埕', description: '古色古香的歷史感', activityHighlights: { 'spots_history': '迪化街百年老店巡禮', 'spots_creative': '小藝埕文創基地', 'spots_ig': '大稻埕碼頭貨櫃市集夕照', 'food_local': '永樂市場老竹米苔目', 'food_cafe': '幻猻家珈琲的老派浪漫', 'shop_market': '永樂布市挑選布料', 'nature_sunset': '大稻埕碼頭河岸夕陽', 'art_gallery': '迪化街私人畫廊展覽' } },
          { id: 'tpe_yang', name: '陽明山', description: '登高望遠的清新', activityHighlights: { 'spots_nature': '擎天崗草原看牛吃草', 'nature_forest': '竹子湖黑森林秘境探險', 'nature_sunset': '大屯山助航站無敵晚霞', 'food_cafe': '草山夜未眠景觀餐廳', 'indoor_spa': '陽明山白磺泉溫泉', 'outdoor_hike': '七星山主峰健行' } },
          { id: 'tpe_dan', name: '大安區', description: '優雅且豐富的巷弄', activityHighlights: { 'spots_creative': '建國手工藝假日市集', 'food_michelin': '鼎泰豐信義店小籠包', 'food_cafe': '路易莎手沖概念店 (大安)', 'shop_local': '東區後巷獨特服飾小店', 'art_book': '誠品敦南(概念店)翻閱書香', 'indoor_museum': '國立台北教育大學美術館' } },
        ]
      },
      { 
        id: 'ntp', name: '新北市', 
        subOptions: [
          { id: 'ntp_main', name: '新北捷運沿線', description: '便利的都會日常', activityHighlights: { 'spots_creative': '板橋 435 藝文特區', 'food_local': '永和豆漿大王總店', 'shop_mall': '中和環球購物中心' } },
          { id: 'ntp_dan', name: '淡水', description: '落暉與河岸浪漫', activityHighlights: { 'spots_nature': '淡水河濱漫步', 'spots_history': '淡水紅毛城古蹟尋幽', 'nature_sunset': '漁人碼頭情人橋夕陽', 'food_local': '正宗淡水阿給與魚酥', 'food_night': '淡水老街美食邊走邊吃', 'outdoor_bike': '淡水金色水岸單車行' } },
          { id: 'ntp_jiu', name: '九份', description: '山城朦朧美', activityHighlights: { 'spots_history': '阿妹茶樓品茶俯瞰山城', 'spots_ig': '昇平戲院懷舊攝影', 'food_local': '賴阿婆芋圓與草仔粿', 'nature_sunset': '基隆山觀賞山海晚霞' } },
          { id: 'ntp_pan', name: '板橋', description: '都會休閒感', activityHighlights: { 'spots_history': '林本源園邸(板橋林家花園)', 'food_night': '湳雅夜市尋訪小吃', 'shop_mall': '板橋大遠百購物看電影', 'indoor_spa': '板橋連鎖舒壓按摩', 'outdoor_camp': '新北市民廣場慢活' } },
          { id: 'ntp_pin', name: '平溪', description: '祈換天燈願望', activityHighlights: { 'spots_nature': '十分瀑布感受水氣律動', 'spots_history': '菁桐老車站懷舊探險', 'food_local': '平溪高粱酒香腸', 'outdoor_hike': '平溪慈母峰步道' } },
        ]
      },
      { 
        id: 'tcn', name: '台中市',
        subOptions: [
          { id: 'tcn_main', name: '台中市中心', description: '時尚與生活的平衡' },
          { id: 'tcn_nan', name: '南屯區', description: '現代美學與公園', activityHighlights: { 'spots_nature': '望高寮看台中夜景', 'spots_history': '彩虹眷村攝影紀錄', 'food_michelin': '與玥樓精品粵菜', 'food_cafe': '卡啡那惠來店', 'indoor_spa': '南屯區連鎖按摩芳療' } },
          { id: 'tcn_xi', name: '西區', description: '文青氛圍勤美綠園道', activityHighlights: { 'spots_creative': '審計新村文創市集', 'spots_ig': '綠光計畫范特喜文創聚落', 'food_cafe': '昭和浪漫冰室', 'food_night': '勤美誠品周邊美食', 'art_gallery': '國立台灣美術館' } },
          { id: 'tcn_feng', name: '逢甲/西屯', description: '熱鬧美食聚集地', activityHighlights: { 'food_night': '逢甲夜市必吃小吃', 'shop_mall': '新光三越台中中港店', 'indoor_movie': '老虎城威秀影城', 'food_cafe': '西屯區質感選物咖啡' } },
          { id: 'tcn_wuf', name: '霧峰區', description: '霧峰林家歷史人文', activityHighlights: { 'spots_history': '霧峰林家宮保第園區', 'spots_creative': '光復新村文青聚集地', 'outdoor_hike': '霧峰阿罩霧山步道' } },
        ]
      },
      { 
        id: 'tnn', name: '台南市',
        subOptions: [
          { id: 'tnn_main', name: '台南舊城區', description: '步行在歷史之中' },
          { id: 'tnn_anp', name: '安平區', description: '古堡與老街夕照', activityHighlights: { 'spots_history': '安平古堡建築尋幽', 'spots_ig': '安平樹屋奇幻攝影', 'food_local': '文章牛肉湯(安平總店)', 'nature_sunset': '安平觀夕平台看夕陽', 'shop_local': '安平老街童玩小店' } },
          { id: 'tnn_mid', name: '中西區', description: '巷弄美食之魂', activityHighlights: { 'spots_history': '赤崁樓古蹟探訪', 'spots_creative': '藍晒圖文創園區', 'food_local': '阿霞飯店正宗台南味', 'food_night': '週六大東夜市吃飽飽', 'art_gallery': '台南市美術館 2 館' } },
          { id: 'tnn_ren', name: '仁德區', description: '奇美博物館藝術感', activityHighlights: { 'spots_history': '十鼓仁糖文創園區', 'art_gallery': '奇美博物館西洋藝術', 'outdoor_bike': '仁德區單車環繞步道' } },
          { id: 'tnn_bai', name: '白河區', description: '關子嶺泥漿溫泉', activityHighlights: { 'nature_forest': '水火同源奇景探險', 'indoor_spa': '關子嶺泥漿溫泉飯店 SPA', 'food_local': '白河甕仔雞' } },
        ]
      },
      { 
        id: 'khh', name: '高雄市',
        subOptions: [
          { id: 'khh_main', name: '高雄港灣區', description: '璀璨的港都夜色' },
          { id: 'khh_yan', name: '鹽埕區', description: '駁二藝術特區', activityHighlights: { 'spots_creative': '駁二藝術特區漫步', 'art_gallery': '高美館駁二分館', 'food_local': '郭家肉粽(鹽埕老店)', 'nature_sunset': '西子灣落日餘暉', 'shop_market': '駁二手作市集' } },
          { id: 'khh_zuo', name: '左營區', description: '龍虎塔與蓮池潭', activityHighlights: { 'spots_history': '蓮池潭龍虎塔祈福', 'nature_sunset': '蓮池潭單車環潭夕照', 'food_local': '左營汾陽餛飩', 'indoor_movie': '左營環球影城' } },
          { id: 'khh_qi', name: '旗津區', description: '渡輪與海鮮情調', activityHighlights: { 'spots_nature': '旗津彩虹教堂浪漫攝影', 'nature_ocean': '旗津海水浴場踏浪', 'food_local': '旗津老街海鮮百匯', 'nature_sunset': '旗津燈塔看夕陽' } },
          { id: 'khh_gu', name: '鼓山區', description: '西子灣夕陽', activityHighlights: { 'nature_sunset': '西子灣夕陽觀景台', 'spots_history': '打狗英國領事館下午茶', 'outdoor_hike': '壽山(柴山)步道探險', 'art_gallery': '高雄市立美術館' } },
        ]
      },
      { 
        id: 'thb', name: '桃園市',
        subOptions: [
          { id: 'thb_main', name: '桃園都會區', description: '熱鬧的商圈生活' },
          { id: 'thb_dau', name: '大溪區', description: '老街情懷' },
          { id: 'thb_fux', name: '復興區', description: '角板山森林靈氣' },
          { id: 'thb_zin', name: '青埔區', description: 'Xpark 水族館' },
          { id: 'thb_tao', name: '桃園區', description: '虎頭山看夜景' },
        ]
      },
      { 
        id: 'hcz', name: '新竹', 
        subOptions: [
          { id: 'hcz_1', name: '尖石鄉', description: '山林秘境與溫泉', activityHighlights: { 'nature_forest': '尖石森林步道探險', 'indoor_spa': '尖石溫泉泡湯體驗', 'food_local': '原住民風味餐', 'nature_stars': '尖石山區觀星' } },
          { id: 'hcz_2', name: '新竹市區', description: '科技與古蹟交織', activityHighlights: { 'spots_history': '新竹城隍廟巡禮', 'spots_creative': '新竹市文化局演藝廳周邊', 'food_local': '城隍廟百年潤餅', 'shop_market': '新竹花市逛街' } },
          { id: 'hcz_3', name: '北埔', description: '客家風情老街', activityHighlights: { 'spots_history': '北埔老街古厝走訪', 'food_local': '北埔擂茶 DIY 體驗', 'art_book': '北埔山城特色書店', 'nature_forest': '北埔冷泉消暑' } },
          { id: 'hcz_4', name: '關西', description: '仙草家鄉與樂園', activityHighlights: { 'food_local': '關西仙草風味餐', 'outdoor_hike': '關西東安古橋漫步', 'spots_ig': '六福村主題遊樂園', 'nature_forest': '馬武督探索森林' } }
        ] 
      },
      { 
        id: 'yla', name: '宜蘭縣', 
        subOptions: [
          { id: 'yla_1', name: '礁溪鄉', description: '溫泉之鄉的撫慰', activityHighlights: { 'indoor_spa': '礁溪碳酸氫鈉泉泡湯', 'spots_nature': '五峰旗瀑布感受芬多精', 'food_local': '礁溪蔥油餅必吃', 'nature_sunset': '空軍堤防看飛機夕陽' } },
          { id: 'yla_2', name: '羅東鎮', description: '公園與熱鬧夜市', activityHighlights: { 'spots_nature': '羅東運動公園漫步', 'food_night': '羅東夜市小吃百匯', 'spots_creative': '羅東林業文化園區', 'shop_market': '羅東農會選物' } },
          { id: 'yla_3', name: '冬山鄉', description: '河畔與生態小旅行', activityHighlights: { 'outdoor_bike': '冬山河自行車道追風', 'spots_nature': '冬山河親水公園', 'nature_forest': '新寮瀑布步道', 'spots_creative': '生態綠舟園區之旅' } },
          { id: 'yla_4', name: '宜蘭市', description: '文化巡禮與美食', activityHighlights: { 'spots_history': '宜蘭設治紀念館', 'spots_creative': '幾米公園攝影紀錄', 'food_local': '宜蘭排骨酥麵', 'art_gallery': '宜蘭美術館' } }
        ] 
      },
      { 
        id: 'hun', name: '花蓮縣', 
        subOptions: [
          { id: 'hun_1', name: '壽豐鄉', description: '依山傍海的寧靜', activityHighlights: { 'nature_ocean': '東海岸踏浪聽海', 'spots_nature': '雲山水夢幻湖', 'food_local': '立川漁場摸蜆體驗', 'nature_stars': '壽豐海畔星空' } },
          { id: 'hun_2', name: '太魯閣', description: '鬼斧神工的山河', activityHighlights: { 'nature_forest': '燕子口步道看奇岩', 'outdoor_hike': '長春祠步道健行', 'nature_stars': '太魯閣深山觀星', 'spots_history': '天祥歷史探訪' } },
          { id: 'hun_3', name: '花蓮市', description: '美食與文創聚落', activityHighlights: { 'spots_creative': '花蓮文創園區展覽', 'food_night': '東大門夜市美食祭', 'nature_ocean': '七星潭看日出看海', 'shop_local': '花蓮老街伴手禮' } },
          { id: 'hun_4', name: '吉安鄉', description: '田園生活與慶修院', activityHighlights: { 'spots_history': '吉安慶修院日式風情', 'spots_nature': '楓林步道俯瞰全景', 'food_local': '吉安特色芋頭餐', 'outdoor_bike': '吉安田園單車道' } }
        ] 
      },
      { 
        id: 'ttn', name: '台東縣', 
        subOptions: [
          { id: 'ttn_1', name: '池上鄉', description: '稻香與伯朗大道', activityHighlights: { 'outdoor_bike': '伯朗大道單車行', 'spots_nature': '大坡池湖光山色', 'food_local': '池上便當與豆皮', 'nature_stars': '池上稻田滿天星' } },
          { id: 'ttn_2', name: '台東市區', description: '悠閒生活提案', activityHighlights: { 'spots_creative': '鐵花村音樂聚落', 'spots_nature': '加路蘭海岸漂流木藝術', 'food_local': '卑南豬血湯與米苔目', 'art_gallery': '台東美術館' } },
          { id: 'ttn_3', name: '鹿野鄉', description: '熱氣球與茶香', activityHighlights: { 'spots_ig': '鹿野高台看熱氣球', 'food_cafe': '鹿野特色茶坊品茗', 'outdoor_hike': '鹿野龍田步道', 'nature_sunset': '高台俯瞰台東景點' } },
          { id: 'ttn_4', name: '成功鎮', description: '漁港風情與三仙台', activityHighlights: { 'nature_ocean': '三仙台奇岩跨海大橋', 'food_local': '成功漁港現撈海鮮', 'spots_history': '成功鎮漁村生活體驗', 'spots_nature': '石雨傘特殊地貌' } }
        ] 
      },
      { 
        id: 'mla', name: '苗栗縣', 
        subOptions: [
          { id: 'mla_1', name: '三義鄉', description: '木雕與勝興車站', activityHighlights: { 'spots_history': '龍騰斷橋歷史探訪', 'outdoor_bike': '舊山線鐵道自行車', 'food_local': '三義客家粄條', 'art_gallery': '三義木雕博物館' } },
          { id: 'mla_2', name: '南庄鄉', description: '老街風情與秘境', activityHighlights: { 'spots_history': '南庄老街桂花巷', 'food_local': '南庄手工麵與桂花釀', 'nature_forest': '向天湖神秘美景', 'spots_creative': '南庄文創市集' } },
          { id: 'mla_3', name: '大湖鄉', description: '草莓之鄉與山城', activityHighlights: { 'food_local': '大湖採草莓體驗', 'spots_ig': '大湖酒莊攝影紀錄', 'nature_forest': '雪霸國家公園入口景點', 'indoor_spa': '大湖溫泉舒壓' } },
          { id: 'mla_4', name: '苑裡鎮', description: '藺草編織與古厝', activityHighlights: { 'spots_history': '苑裡蔡家古厝', 'spots_creative': '藺草文化館手作', 'food_local': '苑裡魚丸與麵食', 'nature_sunset': '苑裡漁港夕陽' } }
        ] 
      },
      { 
        id: 'cha', name: '彰化縣', 
        subOptions: [
          { id: 'cha_1', name: '鹿港鎮', description: '古蹟與傳統美味', activityHighlights: { 'spots_history': '鹿港天后宮祈福', 'food_local': '鹿港麵線糊與牛舌餅', 'spots_ig': '鹿港老街紅磚牆攝影', 'art_book': '鹿港書院氣息' } },
          { id: 'cha_2', name: '彰化市區', description: '大佛與肉圓之都', activityHighlights: { 'spots_nature': '八卦山大佛風景區', 'food_local': '彰化肉圓與爌肉飯', 'spots_creative': '彰化扇形車庫', 'art_gallery': '彰化市立圖書館展覽' } },
          { id: 'cha_3', name: '田尾鄉', description: '公路花園之美', activityHighlights: { 'outdoor_bike': '田尾公路花園單車行', 'spots_nature': '花卉專業區參觀', 'food_cafe': '精緻園藝咖啡廳', 'spots_ig': '仙人掌多肉植物園' } },
          { id: 'cha_4', name: '芳苑鄉', description: '海牛體驗與王功', activityHighlights: { 'nature_ocean': '王功漁港潮間帶步道', 'food_local': '王功蚵嗲現炸美味', 'spots_history': '芳苑海牛採蚵體驗', 'nature_sunset': '王功燈塔看夕照' } }
        ] 
      },
      { 
        id: 'nto', name: '南投縣', 
        subOptions: [
          { id: 'nto_1', name: '魚池鄉', description: '日月潭湖光山色', activityHighlights: { 'outdoor_water': '日月潭獨木舟體驗', 'nature_sunset': '日月潭慈恩塔看景', 'food_local': '阿婆茶葉蛋與邵族餐', 'outdoor_bike': '日月潭環湖單車' } },
          { id: 'nto_2', name: '清境農場', description: '高山草原與綿羊', activityHighlights: { 'spots_nature': '清境青青草原看羊', 'nature_stars': '合歡山武嶺觀星', 'food_local': '雲南擺夷料理', 'nature_forest': '清境高空觀景步道' } },
          { id: 'nto_3', name: '埔里鎮', description: '手工紙與紹興酒', activityHighlights: { 'indoor_diy': '廣興紙寮手作體驗', 'spots_creative': '埔里酒廠參觀', 'food_local': '埔里特色米粉', 'outdoor_hike': '埔里虎頭山看飛行傘' } },
          { id: 'nto_4', name: '集集/水里', description: '鐵道感與木業', activityHighlights: { 'spots_history': '集集老車站懷舊之旅', 'spots_creative': '車埕木業展示館', 'outdoor_bike': '集集綠色隧道單車', 'food_local': '水里在地香腸與麵' } }
        ] 
      },
      { 
        id: 'yln', name: '雲林縣', 
        subOptions: [
          { id: 'yln_1', name: '古坑鄉', description: '咖啡香與森林', activityHighlights: { 'food_cafe': '古坑精品咖啡下午茶', 'nature_forest': '華山森林步道漫步', 'spots_ig': '古坑綠色隧道', 'nature_sunset': '慈光寺看雲嘉夜景' } },
          { id: 'yln_2', name: '雲林市區', description: '布袋戲與文創', activityHighlights: { 'spots_history': '雲林布袋戲館歷史', 'spots_creative': '斗六太平老街巡禮', 'food_local': '斗六西市場美食', 'art_concert': '雲林表演廳演藝' } },
          { id: 'yln_3', name: '虎尾鎮', description: '糖廠懷舊時光', activityHighlights: { 'spots_history': '虎尾鐵橋散步', 'spots_creative': '合同廳舍誠品書局', 'food_local': '虎尾糖廠冰棒', 'spots_ig': '虎尾驛歷史景點' } },
          { id: 'yln_4', name: '北港鎮', description: '媽祖信仰之魂', activityHighlights: { 'spots_history': '北港朝天宮參拜', 'food_local': '北港鴨肉飯與麻油', 'spots_creative': '北港女兒橋漫步', 'shop_local': '北港老街傳統糕點' } }
        ] 
      },
      { 
        id: 'cyi', name: '嘉義', 
        subOptions: [
          { id: 'cyi_1', name: '阿里山', description: '雲海、森林與小火車', activityHighlights: { 'nature_forest': '阿里山巨木群步道', 'nature_sunset': '雲海夕陽絕景', 'nature_stars': '高山繁星觀測', 'spots_history': '阿里山森林鐵路巡禮' } },
          { id: 'cyi_2', name: '嘉義市區', description: '火雞肉飯之都', activityHighlights: { 'food_local': '林聰明沙鍋魚頭', 'spots_creative': '檜意森活村日式群', 'art_gallery': '嘉義市立美術館', 'food_night': '文化路夜市美食' } },
          { id: 'cyi_3', name: '民雄鄉', description: '鵝肉與古宅驚喜', activityHighlights: { 'food_local': '民雄特產鵝肉美食', 'spots_history': '劉家古厝(民雄鬼屋)', 'art_concert': '中正大學校園散步', 'shop_local': '旺萊山鳳梨酥體驗' } },
          { id: 'cyi_4', name: '番路鄉', description: '半天岩與柿子山', activityHighlights: { 'spots_history': '半天岩紫雲寺巡禮', 'nature_forest': '番路鄉森林秘境', 'food_local': '番路柿餅特色餐', 'outdoor_hike': '二延平步道雲海' } }
        ] 
      },
      { 
        id: 'ptn', name: '屏東縣', 
        subOptions: [
          { id: 'ptn_1', name: '墾丁', description: '陽光、沙灘與比基尼', activityHighlights: { 'nature_ocean': '南灣水上活動踏浪', 'nature_sunset': '關山夕照絕美夜色', 'food_night': '墾丁大街熱鬧夜生活', 'nature_stars': '龍磐公園璀璨星空' } },
          { id: 'ptn_2', name: '東港鎮', description: '黑鮪魚與跨海大橋', activityHighlights: { 'food_local': '華僑市場現點海鮮', 'spots_nature': '大鵬灣跨海大橋夜景', 'spots_history': '東港東隆宮黃金牌樓', 'nature_ocean': '小琉球渡輪體驗' } },
          { id: 'ptn_3', name: '車城鄉', description: '福安宮與海生館', activityHighlights: { 'spots_ig': '海生館海底隧道', 'spots_history': '車城福安宮全台之最', 'food_local': '車城綠豆蒜古早味', 'indoor_spa': '四重溪碳酸溫泉' } },
          { id: 'ptn_4', name: '恆春鎮', description: '老城牆與文青風', activityHighlights: { 'spots_history': '恆春古城西門步巡', 'spots_creative': '鈕扣倉庫文創基地', 'food_cafe': '恆春巷弄質感咖啡', 'outdoor_hike': '阿朗壹古道挑戰' } }
        ] 
      },
      { 
        id: 'phu', name: '澎湖', 
        subOptions: [
          { id: 'phu_1', name: '馬公市', description: '花火節與老街', activityHighlights: { 'spots_history': '中央老街四眼井', 'nature_sunset': '觀音亭親水區夕陽', 'food_local': '澎湖仙草冰與黑糖糕', 'spots_ig': '媽宮城隍廟巡禮' } },
          { id: 'phu_2', name: '西嶼鄉', description: '玄武岩與古堡', activityHighlights: { 'nature_ocean': '大菓葉玄武岩美景', 'spots_history': '西嶼西臺砲台尋幽', 'nature_sunset': '二崁聚落古厝夕照', 'food_local': '跨海大橋仙人掌冰' } },
          { id: 'phu_3', name: '白沙鄉', description: '通梁古榕與水族館', activityHighlights: { 'spots_nature': '通梁古榕神木壯觀', 'nature_ocean': '澎湖水族館觀賞魚群', 'outdoor_water': '北海目斗嶼燈塔行', 'food_local': '白沙鄉知名海鮮餐' } },
          { id: 'phu_4', name: '望安/七美', description: '雙心石滬與島嶼情', activityHighlights: { 'spots_ig': '七美雙心石滬必拍', 'nature_ocean': '望安綠蠵龜保育館', 'nature_sunset': '七美小台灣美照', 'nature_stars': '離島純淨燦爛星空' } }
        ] 
      },
      { 
        id: 'kmn', name: '金門', 
        subOptions: [
          { id: 'kmn_1', name: '金城鎮', description: '模範街與老街', activityHighlights: { 'spots_history': '翟山坑道雄偉工事', 'food_local': '金門廣東粥與燒餅', 'spots_creative': '後浦十六藝文特區', 'shop_market': '模範街土產選購' } },
          { id: 'kmn_2', name: '金湖鎮', description: '山外與湖畔', activityHighlights: { 'spots_nature': '太武山毋忘在莒登山', 'spots_ig': '陳景蘭洋樓浪漫攝影', 'food_local': '談天樓酒釀湯圓', 'nature_sunset': '復國墩漁港夕照' } },
          { id: 'kmn_3', name: '金沙鎮', description: '風獅爺家鄉', activityHighlights: { 'spots_history': '沙美摩洛哥土堡建築', 'spots_nature': '金門民俗文化村', 'food_local': '金沙傳統閩式點心', 'spots_ig': '后宅村風獅爺祈福回憶' } },
          { id: 'kmn_4', name: '烈嶼鄉(小金門)', description: '坑道與風雞', activityHighlights: { 'spots_history': '勇士堡鐵漢堡探險', 'food_local': '烈嶼芋頭餐經典美味', 'nature_ocean': '小金門岸邊看廈門夜景', 'outdoor_bike': '烈嶼環島單車追風' } }
        ] 
      },
      { 
        id: 'mzu', name: '馬祖', 
        subOptions: [
          { id: 'mzu_1', name: '南竿鄉', description: '北海坑道與媽祖巨像', activityHighlights: { 'spots_history': '北海坑道搖櫓藍眼淚', 'spots_ig': '媽祖巨神像壯麗合照', 'food_local': '繼光餅與老酒麵線', 'nature_sunset': '津沙聚落古厝夕陽' } },
          { id: 'mzu_2', name: '北竿鄉', description: '芹壁村地中海情調', activityHighlights: { 'spots_history': '芹壁聚落石頭屋慢活', 'spots_nature': '螺山自然步道探險', 'food_local': '北竿特色魚麵料理', 'nature_stars': '北竿壁山看夜景星空' } },
          { id: 'mzu_3', name: '莒光鄉', description: '燈塔與藍眼淚', activityHighlights: { 'spots_history': '東莒燈塔古蹟絕景', 'nature_ocean': '福正聚落沙灘踏步', 'food_local': '莒光特產國軍罐頭料理', 'nature_stars': '莒光清澈午夜星河' } },
          { id: 'mzu_4', name: '東引鄉', description: '國之北疆與峭壁', activityHighlights: { 'spots_nature': '中柱島跨海大橋', 'spots_history': '東引燈塔矗立斷崖', 'nature_ocean': '國之北疆石碑打卡', 'food_local': '東引酒廠老酒美味' } }
        ] 
      },
      { 
        id: 'klu', name: '基隆市', 
        subOptions: [
          { id: 'klu_1', name: '中正區', description: '正濱漁港與和平島', activityHighlights: { 'spots_ig': '正濱漁港彩色屋', 'nature_ocean': '和平島地質公園踏浪', 'food_local': '手工碳烤竹輪', 'nature_sunset': '潮境公園看海夕照' } },
          { id: 'klu_2', name: '仁愛區', description: '廟口美食核心', activityHighlights: { 'food_night': '基隆廟口鼎邊趖', 'shop_market': '仁愛市場隱藏美食', 'spots_history': '虎仔山看基隆港夜景', 'art_book': '基隆特色獨立書局' } },
          { id: 'klu_3', name: '信義區', description: '山海交會景觀', activityHighlights: { 'spots_nature': '槓子寮砲台俯瞰海景', 'food_local': '信義區老店牛排', 'outdoor_hike': '紅淡山步道小爬山', 'art_gallery': '基隆文化中心展覽' } },
          { id: 'klu_4', name: '七堵/暖暖', description: '溪畔與舊車站', activityHighlights: { 'spots_history': '七堵鐵道公園古車站', 'nature_forest': '暖東峽谷避暑健行', 'food_local': '七堵營養三明治', 'spots_nature': '暖暖親水公園綠意' } }
        ] 
      },
    ],
  },
  {
    title: '交通方式',
    subtitle: '沿途的風景，我們該如何穿梭？',
    options: [
      { id: 'scooter', name: '機車', description: '隨心所欲地停靠' },
      { id: 'car', name: '汽車', description: '專屬於兩人的隱私空間' },
      { id: 'bus', name: '公車', description: '像在地人一樣穿梭城市' },
      { id: 'train', name: '火車', description: '慢活鐵道之美' },
    ],
  },
  {
    title: '去哪裡玩',
    subtitle: '選出兩個最想一起做的事？',
    options: [
      { 
        id: 'spots', 
        name: '景點漫步', 
        description: '記錄下最美的瞬間',
        subOptions: [
          { id: 'spots_nature', name: '大自然風景', description: '療癒身心的綠意', recommendations: ['淡水漁人碼頭', '高美濕地', '七星潭', '伯朗大道'] },
          { id: 'spots_history', name: '歷史古蹟', description: '走進時光的隧道', recommendations: ['大溪老街', '鹿港小鎮', '安平老街', '迪化街'] },
          { id: 'spots_creative', name: '文創園區', description: '感受藝術的氣息', recommendations: ['華山文創園區', '駁二藝術特區', '審計新村', '台南美術館'] },
          { id: 'spots_ig', name: '網美打卡點', description: '留下最美的回憶', recommendations: ['台北 101', '日月潭向山', '高雄流行音樂中心', '奇美博物館'] },
        ]
      },
      { 
        id: 'food', 
        name: '在地美食', 
        description: '一起探索味蕾的驚喜',
        subOptions: [
          { id: 'food_michelin', name: '米其林推薦', description: '品嚐認證的美味', recommendations: ['鼎泰豐', '點水樓', '金蓬萊', '膳馨'] },
          { id: 'food_local', name: '在地老字號', description: '傳承多年的經典', recommendations: ['阿霞飯店', '金峰魯肉飯', '林聰明沙鍋魚頭', '文章牛肉湯'] },
          { id: 'food_night', name: '夜市小吃', description: '最道地的煙火氣', recommendations: ['饒河街胡椒餅', '逢甲大腸包小腸', '寧夏路芋餅', '六合夜市木瓜牛奶'] },
          { id: 'food_cafe', name: '風格咖啡廳', description: '愜意漫時光', recommendations: ['興波咖啡', '幻猻家珈琲', '昭和浪漫冰室', '路易莎手沖概念店'] },
        ]
      },
      { 
        id: 'nature', 
        name: '特色秘境', 
        description: '逃離城市的喧囂',
        subOptions: [
          { id: 'nature_forest', name: '山林芬多精', description: '深呼吸，感受山林', recommendations: ['阿里山森林遊樂區', '太平山', '溪頭'] },
          { id: 'nature_ocean', name: '蔚藍海岸', description: '聽海聲，踏浪花', recommendations: ['墾丁白沙灣', '花蓮七星潭', '澎湖吉貝島'] },
          { id: 'nature_sunset', name: '浪漫夕陽', description: '看晚霞映照彼此', recommendations: ['淡水漁人碼頭', '高美濕地', '西子灣夕陽'] },
          { id: 'nature_stars', name: '觀星秘境', description: '細數繁星點點', recommendations: ['合歡山武嶺', '台東太麻里', '墾丁龍磐公園'] },
        ]
      },
      { 
        id: 'outdoor', 
        name: '戶外探險', 
        description: '親近自然，擁抱陽光',
        subOptions: [
          { id: 'outdoor_hike', name: '森林步道', description: '簡單易走的健行', recommendations: ['象山步道', '虎山溪步道', '草嶺古道'] },
          { id: 'outdoor_bike', name: '單車追風', description: '河畔或森林小徑', recommendations: ['后豐鐵馬道', '關山自行車道', '冬山河自行車道'] },
          { id: 'outdoor_camp', name: '野餐聚會', description: '草地上的閒暇時光', recommendations: ['大安森林公園', '台中國家歌劇院綠地', '高雄美術館園區'] },
          { id: 'outdoor_water', name: '水上活動', description: '清涼消暑的體驗', recommendations: ['萬里風箏公園', '日月潭獨木舟', '小琉球浮潛'] },
        ]
      },
      { 
        id: 'indoor', 
        name: '室內約會', 
        description: '優雅且放鬆的氛圍',
        subOptions: [
          { id: 'indoor_movie', name: '私人影院', description: '專屬兩人的觀影', recommendations: ['微風影城', '威秀 Gold Class', '誠品電影院'] },
          { id: 'indoor_diy', name: '工藝手作', description: '親手製作紀念品', recommendations: ['草山金工', '爆炸毛頭', '木匠兄妹'] },
          { id: 'indoor_spa', name: '舒壓按摩', description: '徹底釋放疲累', recommendations: ['不老松', '六星集', '泰晶殿'] },
          { id: 'indoor_museum', name: '展覽參觀', description: '靜謐的知性時光', recommendations: ['故宮博物院', '奇美博物館', '北美館'] },
        ]
      },
      { 
        id: 'art', 
        name: '藝文巡礼', 
        description: '感受心靈的共鳴',
        subOptions: [
          { id: 'art_gallery', name: '畫廊看展', description: '沉浸在藝術色彩中', recommendations: ['白石畫廊', '亞紀畫廊', '尊彩藝術中心'] },
          { id: 'art_concert', name: '音樂現場', description: '共賞美妙旋律', recommendations: ['Legacy Taipei', '衛武營音樂廳', '國家音樂廳'] },
          { id: 'art_theater', name: '劇場表演', description: '感染力的舞台張力', recommendations: ['兩廳院', '台中國家歌劇院', '高雄衛武營'] },
          { id: 'art_book', name: '特色書店', description: '書香氣息的約會', recommendations: ['誠品南西店', '蔦屋書店', '茉莉二手書店'] },
        ]
      },
      { 
        id: 'shopping', 
        name: '購物逛街', 
        description: '挑選送給彼此的驚喜',
        subOptions: [
          { id: 'shop_mall', name: '精品百貨', description: '享受時尚的氛圍', recommendations: ['台北 101', '微風廣場', '漢神巨蛋'] },
          { id: 'shop_market', name: '文創市集', description: '尋找獨特的小玩意', recommendations: ['西門紅樓市集', '邊緣人市集', '松菸文創市集'] },
          { id: 'shop_outlet', name: '複合商場', description: '豐富的品牌選擇', recommendations: ['三井 Outlet', '華泰名品城', '麗寶 Outlet'] },
          { id: 'shop_local', name: '在地商店街', description: '探索街頭小驚喜', recommendations: ['大溪老街', '鹿港老街', '安平老街'] },
        ]
      },
      { 
        id: 'nightlife', 
        name: '夜生活體驗', 
        description: '微醺中的浪漫氣息',
        subOptions: [
          { id: 'night_bar', name: '風格酒吧', description: '私密且有質感的調酒', recommendations: ['台北 Indulge', '台中 Vender', '台南 TCRC'] },
          { id: 'night_view', name: '城市夜景', description: '看著燈火輝煌談心', recommendations: ['文化大學後山', '秋紅谷公園', '壽山情人觀景台'] },
          { id: 'night_market', name: '宵夜漫步', description: '入夜後的在地靈魂', recommendations: ['廟口老攤', '文化路老街', '府中後站美食'] },
        ]
      },
      { 
        id: 'healing', 
        name: '深度療癒', 
        description: '徹底釋放壓力，找回平靜',
        subOptions: [
          { id: 'heal_spring', name: '溫泉湯屋', description: '暖和身心的泡湯時刻', recommendations: ['烏來溫泉', '谷關溫泉', '知本溫泉'] },
          { id: 'heal_spa', name: '芳療 SPA', description: '極致的感官放鬆', recommendations: ['AVEDA', '施舒雅', '隱舍'] },
          { id: 'heal_tea', name: '茶室品茗', description: '靜謐中的文化體驗', recommendations: ['九份阿妹茶樓', '春水堂原始店', '台東龍田茶園'] },
        ]
      },
      { 
        id: 'theme_park', 
        name: '主題樂園', 
        description: '找回純真的快樂時光',
        subOptions: [
          { id: 'park_thrill', name: '刺激尖叫', description: '釋放體力的冒險', recommendations: ['六福村', '劍湖山世界', '義大遊樂世界'] },
          { id: 'park_fantasy', name: '夢幻童話', description: '童心未泯的浪漫', recommendations: ['遠雄海洋公園', '小人國', '九族文化村'] },
          { id: 'park_water', name: '水上樂園', description: '清涼一夏的狂歡', recommendations: ['馬拉灣', '六福村水樂園', '布魯樂谷'] },
        ]
      },
    ],
  },
];
