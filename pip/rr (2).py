چimport os
import geopandas as gpd
import folium

# مسیر پوشه‌ای که فایل‌های GeoJSON در آن قرار دارند
folder_path = r'C:\Users\Sahand\Desktop\Geo'

# ایجاد یک نقشه پایه
m = folium.Map(location=[36.4635, 52.8578], zoom_start=13)  # موقعیت اولیه نقشه

# تعریف رنگ‌ها و نام‌های قابل نمایش برای هر نوع مکان
colors = {
    'bank': {'color': 'blue', 'label': 'بانک'},
    'gym': {'color': 'green', 'label': 'باشگاه'},
    'hospital': {'color': 'orange', 'label': 'مراکز درمانی'},
    'school': {'color': 'red', 'label': 'مدرسه'},
    'park': {'color': 'purple', 'label': 'پارک'},
    'taxi': {'color': 'black', 'label': 'تاکسی'},
    'police': {'color': 'darkblue', 'label': 'پلیس'},
    'masjed': {'color': 'lightblue', 'label': 'مسجد'},
    'bazar': {'color': 'pink', 'label': 'بازار'},
    'pomp benzin': {'color': 'brown', 'label': 'پمپ بنزین'},
    'atashneshani': {'color': 'darkred', 'label': 'آتش نشانی'},
    'daneshgah': {'color': 'darkgreen', 'label': 'دانشگاه'},
    'edarat': {'color': 'gray', 'label': 'ادارات'},
    'edare ab va fazelab': {'color': 'cadetblue', 'label': 'اداره آب و فاضلاب'},
    'edare manabe tabii': {'color': 'lightgreen', 'label': 'اداره منابع طبیعی'},
    'helale ahmar': {'color': 'indianred', 'label': 'هلال احمر'},
    'ketabkhaneh': {'color': 'beige', 'label': 'کتابخانه'},
    'meydanbar': {'color': 'darkpurple', 'label': 'میدان بار'},
    'mokhaberat': {'color': 'lightgray', 'label': 'مخابرات'},
    'park va fazaye sabz': {'color': 'green', 'label': 'پارک و فضای سبز'},
    'parking': {'color': 'black', 'label': 'پارکینگ'},
    'sinama': {'color': 'darkorange', 'label': 'سینما'},
    'taxi and bus': {'color': 'lightblack', 'label': 'تاکسی و اتوبوس'}
}

# ساخت HTML برای راهنما
legend_html = """
     <div style="position: fixed;
     bottom: 50px; left: 50px; width: 250px; height: 450px;
     border:2px solid grey; z-index:9999; font-size:16px;  /* افزایش اندازه فونت */
     background-color:white; opacity: .8; padding: 10px;">
     <h4 style="text-align: center; font-size: 18px;">خدمات شهری</h4>  <!-- افزایش اندازه فونت -->
     <div style="display: flex; align-items: center; margin-bottom: 5px;">
       <span style="display:inline-block; width: 12px; height: 12px; border-radius: 50%; margin-left: 5px; background-color:blue;"></span>  <!-- افزایش اندازه دایره -->
       <span style="text-align: right; margin-right: 5px;">بانک</span>
     </div>
     <div style="display: flex; align-items: center; margin-bottom: 5px;">
       <span style="display:inline-block; width: 12px; height: 12px; border-radius: 50%; margin-left: 5px; background-color:green;"></span>  <!-- افزایش اندازه دایره -->
       <span style="text-align: right; margin-right: 5px;">باشگاه</span>
     </div>
     <div style="display: flex; align-items: center; margin-bottom: 5px;">
       <span style="display:inline-block; width: 12px; height: 12px; border-radius: 50%; margin-left: 5px; background-color:orange;"></span>  <!-- افزایش اندازه دایره -->
       <span style="text-align: right; margin-right: 5px;">مراکز درمانی</span>
     </div>
     <div style="display: flex; align-items: center; margin-bottom: 5px;">
       <span style="display:inline-block; width: 12px; height: 12px; border-radius: 50%; margin-left: 5px; background-color:red;"></span>  <!-- افزایش اندازه دایره -->
       <span style="text-align: right; margin-right: 5px;">مدرسه</span>
     </div>
     <div style="display: flex; align-items: center; margin-bottom: 5px;">
       <span style="display:inline-block; width: 12px; height: 12px; border-radius: 50%; margin-left: 5px; background-color:purple;"></span>  <!-- افزایش اندازه دایره -->
       <span style="text-align: right; margin-right: 5px;">پارک</span>
     </div>
     <div style="display: flex; align-items: center; margin-bottom: 5px;">
       <span style="display:inline-block; width: 12px; height: 12px; border-radius: 50%; margin-left: 5px; background-color:black;"></span>  <!-- افزایش اندازه دایره -->
       <span style="text-align: right; margin-right: 5px;">تاکسی</span>
     </div>
     <div style="display: flex; align-items: center; margin-bottom: 5px;">
       <span style="display:inline-block; width: 12px; height: 12px; border-radius: 50%; margin-left: 5px; background-color:darkblue;"></span>  <!-- افزایش اندازه دایره -->
       <span style="text-align: right; margin-right: 5px;">پلیس</span>
     </div>
     <div style="display: flex; align-items: center; margin-bottom: 5px;">
       <span style="display:inline-block; width: 12px; height: 12px; border-radius: 50%; margin-left: 5px; background-color:lightblue;"></span>  <!-- افزایش اندازه دایره -->
       <span style="text-align: right; margin-right: 5px;">مسجد</span>
     </div>
     <div style="display: flex; align-items: center; margin-bottom: 5px;">
       <span style="display:inline-block; width: 12px; height: 12px; border-radius: 50%; margin-left: 5px; background-color:pink;"></span>  <!-- افزایش اندازه دایره -->
       <span style="text-align: right; margin-right: 5px;">بازار</span>
     </div>
     <div style="display: flex; align-items: center; margin-bottom: 5px;">
       <span style="display:inline-block; width: 12px; height: 12px; border-radius: 50%; margin-left: 5px; background-color:brown;"></span>  <!-- افزایش اندازه دایره -->
       <span style="text-align: right; margin-right: 5px;">پمپ بنزین</span>
     </div>
     <div style="display: flex; align-items: center; margin-bottom: 5px;">
       <span style="display:inline-block; width: 12px; height: 12px; border-radius: 50%; margin-left: 5px; background-color:darkred;"></span>  <!-- افزایش اندازه دایره -->
       <span style="text-align: right; margin-right: 5px;">آتش نشانی</span>
     </div>
     <div style="display: flex; align-items: center; margin-bottom: 5px;">
       <span style="display:inline-block; width: 12px; height: 12px; border-radius: 50%; margin-left: 5px; background-color:darkgreen;"></span>  <!-- افزایش اندازه دایره -->
       <span style="text-align: right; margin-right: 5px;">دانشگاه</span>
     </div>
     <div style="display: flex; align-items: center; margin-bottom: 5px;">
       <span style="display:inline-block; width: 12px; height: 12px; border-radius: 50%; margin-left: 5px; background-color:gray;"></span>  <!-- افزایش اندازه دایره -->
       <span style="text-align: right; margin-right: 5px;">ادارات</span>
     </div>
      <div style="display: flex; align-items: center; margin-bottom: 5px;">
       <span style="display:inline-block; width: 12px; height: 12px; border-radius: 50%; margin-left: 5px; background-color:cadetblue;"></span>  <!-- افزایش اندازه دایره -->
       <span style="text-align: right; margin-right: 5px;">اداره آب و فاضلاب</span>
     </div>
     <div style="display: flex; align-items: center; margin-bottom: 5px;">
       <span style="display:inline-block; width: 12px; height: 12px; border-radius: 50%; margin-left: 5px; background-color:lightgreen;"></span>  <!-- افزایش اندازه دایره -->
       <span style="text-align: right; margin-right: 5px;">اداره منابع طبیعی</span>
     </div>
          <div style="display: flex; align-items: center; margin-bottom: 5px;">
       <span style="display:inline-block; width: 12px; height: 12px; border-radius: 50%; margin-left: 5px; background-color:indianred;"></span>  <!-- افزایش اندازه دایره -->
       <span style="text-align: right; margin-right: 5px;">هلال احمر</span>
     </div>
          <div style="display: flex; align-items: center; margin-bottom: 5px;">
       <span style="display:inline-block; width: 12px; height: 12px; border-radius: 50%; margin-left: 5px; background-color:beige;"></span>  <!-- افزایش اندازه دایره -->
       <span style="text-align: right; margin-right: 5px;">کتابخانه</span>
     </div>
          <div style="display: flex; align-items: center; margin-bottom: 5px;">
       <span style="display:inline-block; width: 12px; height: 12px; border-radius: 50%; margin-left: 5px; background-color:darkpurple;"></span>  <!-- افزایش اندازه دایره -->
       <span style="text-align: right; margin-right: 5px;">میدان بار</span>
     </div>
          <div style="display: flex; align-items: center; margin-bottom: 5px;">
       <span style="display:inline-block; width: 12px; height: 12px; border-radius: 50%; margin-left: 5px; background-color:lightgray;"></span>  <!-- افزایش اندازه دایره -->
       <span style="text-align: right; margin-right: 5px;">مخابرات</span>
     </div>
          <div style="display: flex; align-items: center; margin-bottom: 5px;">
       <span style="display:inline-block; width: 12px; height: 12px; border-radius: 50%; margin-left: 5px; background-color:lightgreen;"></span>  <!-- افزایش اندازه دایره -->
       <span style="text-align: right; margin-right: 5px;">پارک و فضای سبز</span>
     </div>
          <div style="display: flex; align-items: center; margin-bottom: 5px;">
       <span style="display:inline-block; width: 12px; height: 12px; border-radius: 50%; margin-left: 5px; background-color:black;"></span>  <!-- افزایش اندازه دایره -->
       <span style="text-align: right; margin-right: 5px;">پارکینگ</span>
     </div>
               <div style="display: flex; align-items: center; margin-bottom: 5px;">
       <span style="display:inline-block; width: 12px; height: 12px; border-radius: 50%; margin-left: 5px; background-color:darkorange;"></span>  <!-- افزایش اندازه دایره -->
       <span style="text-align: right; margin-right: 5px;">سینما</span>
     </div>
                    <div style="display: flex; align-items: center; margin-bottom: 5px;">
       <span style="display:inline-block; width: 12px; height: 12px; border-radius: 50%; margin-left: 5px; background-color:gray;"></span>  <!-- افزایش اندازه دایره -->
       <span style="text-align: right; margin-right: 5px;">تاکسی و اتوبوس</span>
     </div>
     </div>
     """

# اضافه کردن HTML به نقشه
m.get_root().html.add_child(folium.Element(legend_html))

# ایجاد دیکشنری برای نگهداری FeatureGroup ها
feature_groups = {}

# حلقه بر روی تمام فایل‌های GeoJSON
for filename in os.listdir(folder_path):
    if filename.endswith('.geojson'):
        # بارگذاری فایل GeoJSON
        filepath = os.path.join(folder_path, filename)
        gdf = gpd.read_file(filepath)

        # بررسی اینکه آیا داده‌های geodataframe دارای نقاط (geometry) هستند
        if not gdf.empty:
            # تعیین نام لایه بر اساس نام فایل
            layer_name = filename.replace('.geojson', '')

            # تعیین رنگ نقاط بر اساس نام فایل
            color = 'gray'  # پیش‌فرض رنگ
            label = layer_name  # پیش‌فرض نام

            for key, value in colors.items():
                if key in filename.lower():  # بررسی نام فایل
                    color = value['color']
                    label = value['label']
                    break

            # اگر FeatureGroup برای این نوع مکان وجود ندارد، ایجاد شود
            if label not in feature_groups:
                feature_groups[label] = folium.FeatureGroup(name=label)
                m.add_child(feature_groups[label])

            # اضافه کردن نقاط به FeatureGroup مربوطه
            for _, row in gdf.iterrows():
                # دریافت نام از ویژگی‌های GeoJSON (فرض بر این است که یک فیلد به نام 'name' وجود دارد)
                point_name = row.get('name', 'N/A')  # اگر فیلد 'name' وجود نداشت، 'N/A' نمایش داده شود
                folium.CircleMarker(
                    location=[row.geometry.y, row.geometry.x],  # عرض و طول جغرافیایی
                    radius=5,  # اندازه دایره
                    color=color,  # رنگ دایره
                    fill=True,
                    fill_opacity=0.6,
                    tooltip=f"<div style='font-size: 14px;'>{point_name}</div>"  # نمایش نام نقطه در تولتیپ با فونت بزرگتر
                ).add_to(feature_groups[label])  # اضافه کردن به FeatureGroup مربوطه

# اضافه کردن LayerControl به نقشه
folium.LayerControl().add_to(m)

# ذخیره نقشه
m.save(r'C:\Users\Sahand\Desktop\pip\khadamat.ghaemshahr.html')