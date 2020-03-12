# ID-paper-bag-creator
Скрипт для раскроя лайнера под бумажный пакет для  Adobe InDesign. <br> Скрипт расставляет метки реза и фальцовки на лайнере, пользавателю остаётся создать дизайн.

# Установка

1. Скачать [архив с GitHub-a](images/get-zip-1.png).<br>
      <br>
2. Содержимое архива поместить по адресу: <br> C:\Users\user_name\AppData\Roaming\Adobe\InDesign\Version 15.0\ru_RU\Scripts\Scripts Panel
     > **user_name** — имя пользователя в ОС Windows.<br> 
      **Version 15.0**  — версия InDesign CC2020 — 15, CC2019-14, CC2018-13 и тд.<br>
      **[ru_RU](images/install_ru.png)** - если InDesign на русском языке, **[en_US](images/install_en.png)** - англиском.<br>
3. Перезапустить  InDesign.

# Использование


![screenshot of sample](images/01.PNG)

# Настройка

config.jsxinc - файл надстроек, открывается в любом текстовом редакторе. 


var width   -                             
var height = 300;                            // мм
var deep = 80;                                // мм
var bottom_flap = 15;                      //  мм, от 10 до 15 мм
var top_flap = 25;                           //  мм, от 20 до 25 мм
var side_flap = 12;                          // мм , на 2 мм шире скотча
var left_bind = true;                       // true - сбоорка по левому края, false - сборка по правому краю
var square_bottom = false;              // true - отрисовка клапанов для квадратного дна, false - без отрисовки

// дополнительные параметры, их нет в UI
var bleed_size = 2;                         // мм
var mark_color = [0,100,100,0];     //  CMYK  цвет меток 
var mark_thickness = 1;                 // points
var mark_whidth = 2;                     // мм


