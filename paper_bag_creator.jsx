#target indesign
#targetengine "main"
#include config.jsxinc

var work_key = 0;

var work_bag_width = 0;
var work_bag_heigh = 0;
var work_bag_bag_deep = 0;
var work_bag_bottom = 0;
var work_top_flap = 0;
var work_left_bind = 0;


ui_window();

if (work_key == 1){
    create_template (work_bag_width, work_bag_heigh, work_bag_bag_deep, work_bag_bottom, work_top_flap, work_left_bind, "type1");
    }
if (work_key == 2){
    create_template (work_bag_width, work_bag_heigh, work_bag_bag_deep, work_bag_bottom, work_top_flap, work_left_bind, "type1");
    create_pdf (work_bag_width, work_bag_heigh, work_bag_bag_deep, path_PDF_folder, "type1");

    }
if (work_key == 3){
    create_template (work_bag_width, work_bag_heigh, work_bag_bag_deep, work_bag_bottom, work_top_flap, work_left_bind, "type2");

    }
if (work_key == 4){
    create_template (work_bag_width, work_bag_heigh, work_bag_bag_deep, work_bag_bottom, work_top_flap, work_left_bind, "type2");
    create_pdf (work_bag_width, work_bag_heigh, work_bag_bag_deep, path_PDF_folder, "type2");
    
    }

function ui_window(){
// DIALOG UI
// ======
var dialog = new Window("dialog","ID paper bag creator", undefined, {closeButton: false}); 
    dialog.orientation = "row"; 
    dialog.alignChildren = ["left","fill"]; 
    dialog.spacing = 10; 
    dialog.margins = 0; 

// TPANEL1
// =======
var tpanel1 = dialog.add("tabbedpanel", undefined, undefined, {name: "tpanel1"}); 
    tpanel1.alignChildren = "fill"; 
    //tpanel1.preferredSize.width = 382.047; 
    tpanel1.margins = 0; 
    

// TAB1
// ====
var tab1 = tpanel1.add("tab", undefined, undefined, {name: "tab1"}); 
    tab1.text = "Сборка из 2х листов"; 
    tab1.orientation = "column"; 
    tab1.alignChildren = ["fill","center"]; 
    tab1.spacing = 10; 
    tab1.margins = 10; 

// UI_MAIN_PANEL_TYPE1
// ===================
var ui_main_panel_type1 = tab1.add("panel", undefined, undefined, {name: "ui_main_panel_type1"}); 
    ui_main_panel_type1.text = "Размеры пакета:"; 
    ui_main_panel_type1.orientation = "column"; 
    ui_main_panel_type1.alignChildren = ["right","center"]; 
    ui_main_panel_type1.spacing = 10; 
    ui_main_panel_type1.margins = 10; 

// GROUP1
// ======
var group1 = ui_main_panel_type1.add("group", undefined, {name: "group1"}); 
    group1.orientation = "row"; 
    group1.alignChildren = ["left","center"]; 
    group1.spacing = 10; 
    group1.margins = 0; 

var statictext1 = group1.add("statictext", undefined, undefined, {name: "statictext1"}); 
    statictext1.text = "Ширина:"; 

var ui_bag_width_type1 = group1.add('edittext {properties: {name: "ui_bag_width_type1"}}'); 
    ui_bag_width_type1.text = "230"; 
    ui_bag_width_type1.characters= 4;

var statictext2 = group1.add("statictext", undefined, undefined, {name: "statictext2"}); 
    statictext2.text = "мм"; 

// GROUP2
// ======
var group2 = ui_main_panel_type1.add("group", undefined, {name: "group2"}); 
    group2.orientation = "row"; 
    group2.alignChildren = ["left","center"]; 
    group2.spacing = 10; 
    group2.margins = 0; 

var statictext3 = group2.add("statictext", undefined, undefined, {name: "statictext3"}); 
    statictext3.text = "Высота:"; 

var ui_bag_heigh_type1 = group2.add('edittext {properties: {name: "ui_bag_heigh_type1"}}'); 
    ui_bag_heigh_type1.text = "300";
    ui_bag_heigh_type1.characters= 4;

var statictext4 = group2.add("statictext", undefined, undefined, {name: "statictext4"}); 
    statictext4.text = "мм"; 

// GROUP3
// ======
var group3 = ui_main_panel_type1.add("group", undefined, {name: "group3"}); 
    group3.orientation = "row"; 
    group3.alignChildren = ["left","center"]; 
    group3.spacing = 10; 
    group3.margins = 0; 

var statictext5 = group3.add("statictext", undefined, undefined, {name: "statictext5"}); 
    statictext5.text = "Глубина:"; 

var ui_bag_deep_type1 = group3.add('edittext {properties: {name: "ui_bag_deep_type1"}}'); 
    ui_bag_deep_type1.text = "80"; 
    ui_bag_deep_type1.characters= 4;

var statictext6 = group3.add("statictext", undefined, undefined, {name: "statictext6"}); 
    statictext6.text = "мм"; 

// UI_ADDITIONAL_PANEL_TYPE1
// =========================
var ui_additional_panel_type1 = tab1.add("panel", undefined, undefined, {name: "ui_additional_panel_type1"}); 
    ui_additional_panel_type1.text = "Дополнительные параметры:"; 
    ui_additional_panel_type1.orientation = "column"; 
    ui_additional_panel_type1.alignChildren = ["right","center"]; 
    ui_additional_panel_type1.spacing = 10; 
    ui_additional_panel_type1.margins = 10; 
    ui_additional_panel_type1.alignment = ["fill","center"]; 

// GROUP4
// ======
var group4 = ui_additional_panel_type1.add("group", undefined, {name: "group4"}); 
    group4.orientation = "row"; 
    group4.alignChildren = ["left","center"]; 
    group4.spacing = 10; 
    group4.margins = 0; 

var statictext7 = group4.add("statictext", undefined, undefined, {name: "statictext7"}); 
    statictext7.text = "Клапан на склейку:"; 

var ui_bag_side_flap_type1 = group4.add('edittext {properties: {name: "ui_bag_side_flap_type1"}}'); 
    ui_bag_side_flap_type1.text = "12"; 
    ui_bag_side_flap_type1.characters= 4;

var statictext8 = group4.add("statictext", undefined, undefined, {name: "statictext8"}); 
    statictext8.text = "мм"; 

// GROUP5
// ======
var group5 = ui_additional_panel_type1.add("group", undefined, {name: "group5"}); 
    group5.orientation = "row"; 
    group5.alignChildren = ["left","center"]; 
    group5.spacing = 10; 
    group5.margins = 0; 

var statictext9 = group5.add("statictext", undefined, undefined, {name: "statictext9"}); 
    statictext9.text = "Клапан на дно:"; 

var ui_bag_bottom_type1 = group5.add('edittext {properties: {name: "ui_bag_bottom_type1"}}'); 
    ui_bag_bottom_type1.text = "55"; 
    ui_bag_bottom_type1.characters= 4;

var statictext10 = group5.add("statictext", undefined, undefined, {name: "statictext10"}); 
    statictext10.text = "мм"; 

// GROUP6
// ======
var group6 = ui_additional_panel_type1.add("group", undefined, {name: "group6"}); 
    group6.orientation = "row"; 
    group6.alignChildren = ["left","center"]; 
    group6.spacing = 10; 
    group6.margins = 0; 

var statictext11 = group6.add("statictext", undefined, undefined, {name: "statictext11"}); 
    statictext11.text = "Клапан на ручку:"; 

var ui_bag_top_flap_type1 = group6.add('edittext {properties: {name: "ui_bag_top_flap_type1"}}'); 
    ui_bag_top_flap_type1.text = "25"; 
    ui_bag_top_flap_type1.characters= 4;
    

var statictext12 = group6.add("statictext", undefined, undefined, {name: "statictext12"}); 
    statictext12.text = "мм"; 

// GROUP7
// ======
var group7 = ui_additional_panel_type1.add("group", undefined, {name: "group7"}); 
    group7.orientation = "row"; 
    group7.alignChildren = ["left","center"]; 
    group7.spacing = 10; 
    group7.margins = 0; 

var ui_left_bind = group7.add("radiobutton", undefined, undefined, {name: "ui_left_bind"}); 
    ui_left_bind.text = "Сборка слева"; 
    

var ui_right_bind = group7.add("radiobutton", undefined, undefined, {name: "ui_right_bind"}); 
    ui_right_bind.text = "Сборка справа"; 

// TAB1
// ====
var ui_warning_type1 = tab1.add("statictext"); 
    ui_warning_type1.text = "Неверный формат данных."; 
    ui_warning_type1.visible = false;

// UI_SIZES_GROUP_TYPE1
// ====================
var ui_sizes_group_type1 = tab1.add("panel", undefined, undefined, {name: "ui_sizes_group_type1"}); 
    ui_sizes_group_type1.text = "Формат  лайнера"; 
    ui_sizes_group_type1.orientation = "column"; 
    ui_sizes_group_type1.alignChildren = ["right","center"]; 
    ui_sizes_group_type1.spacing = 10; 
    ui_sizes_group_type1.margins = 10; 
    
 var ui_alert_page_width_type1 = (+ui_bag_width_type1.text + +ui_bag_deep_type1.text + +ui_bag_side_flap_type1.text);
 var ui_alert_page_height_type1 = ( +ui_bag_top_flap_type1.text + +ui_bag_heigh_type1.text + +ui_bag_bottom_type1.text);


var ui_cut_size_type1 = ui_sizes_group_type1.add("statictext", undefined, undefined, {name: "ui_cut_size_type1"}); 
    ui_cut_size_type1.text = "Обрезной из 2х листов - "+ ui_alert_page_width_type1 + " х "+ ui_alert_page_height_type1+" мм"; 
    ui_cut_size_type1.justify = "right"; 

var ui_not_cut_size_type1 = ui_sizes_group_type1.add("statictext", undefined, undefined, {name: "ui_not_cut_size_type1"}); 
    ui_not_cut_size_type1.text ="Добрезной из 2х листов - "+(ui_alert_page_width_type1 + +bleed_size*2) +  " х "+(+ui_alert_page_height_type1+ +bleed_size*2) +" мм"; 
    ui_not_cut_size_type1.justify = "right"; 

// UI_BUTTONS_TYPE_1
// =================
var ui_buttons_type_1 = tab1.add("group", undefined, {name: "ui_buttons_type_1"}); 
    ui_buttons_type_1.orientation = "row"; 
    ui_buttons_type_1.alignChildren = ["center","top"]; 
    ui_buttons_type_1.spacing = 10; 
    ui_buttons_type_1.margins = 0; 

var ui_button_cancel_type1 = ui_buttons_type_1.add("button"); 
    ui_button_cancel_type1.text = "Отмена"; 

var ui_button_runID_type1 = ui_buttons_type_1.add("button", undefined, undefined, {name: "ui_button_runID_type1"}); 
    ui_button_runID_type1.text = "Шаблон в InDesing"; 

var ui_button_runPDF_type1 = ui_buttons_type_1.add("button", undefined, undefined, {name: "ui_button_runPDF_type1"}); 
    ui_button_runPDF_type1.text = "Шаблон в PDF"; 

// TAB2
// ====
var tab2 = tpanel1.add("tab", undefined, undefined, {name: "tab2"}); 
    tab2.text = "Сборка из 4х листов"; 
    tab2.orientation = "column"; 
    tab2.alignChildren = ["fill","center"]; 
    tab2.spacing = 10; 
    tab2.margins = 10; 



// UI_MAIN_PANEL_TYPE2
// ===================
var ui_main_panel_type2 = tab2.add("panel", undefined, undefined, {name: "ui_main_panel_type2"}); 
    ui_main_panel_type2.text = "Размеры пакета:"; 
    ui_main_panel_type2.orientation = "column"; 
    ui_main_panel_type2.alignChildren = ["right","center"]; 
    ui_main_panel_type2.spacing = 10; 
    ui_main_panel_type2.margins = 10; 

// GROUP8
// ======
var group8 = ui_main_panel_type2.add("group", undefined, {name: "group8"}); 
    group8.orientation = "row"; 
    group8.alignChildren = ["left","center"]; 
    group8.spacing = 10; 
    group8.margins = 0; 

var statictext13 = group8.add("statictext", undefined, undefined, {name: "statictext13"}); 
    statictext13.text = "Ширина:"; 

var ui_bag_width_type2 = group8.add('edittext {properties: {name: "ui_bag_width_type2"}}'); 
    ui_bag_width_type2.text = "230"; 
    ui_bag_width_type2.characters= 4;
var statictext14 = group8.add("statictext", undefined, undefined, {name: "statictext14"}); 
    statictext14.text = "мм"; 

// GROUP9
// ======
var group9 = ui_main_panel_type2.add("group", undefined, {name: "group9"}); 
    group9.orientation = "row"; 
    group9.alignChildren = ["left","center"]; 
    group9.spacing = 10; 
    group9.margins = 0; 

var statictext15 = group9.add("statictext", undefined, undefined, {name: "statictext15"}); 
    statictext15.text = "Высота:"; 

var ui_bag_heigh_type2 = group9.add('edittext {properties: {name: "ui_bag_heigh_type2"}}'); 
    ui_bag_heigh_type2.text = "300"; 
    ui_bag_heigh_type2.characters= 4;
    

var statictext16 = group9.add("statictext", undefined, undefined, {name: "statictext16"}); 
    statictext16.text = "мм"; 

// GROUP10
// =======
var group10 = ui_main_panel_type2.add("group", undefined, {name: "group10"}); 
    group10.orientation = "row"; 
    group10.alignChildren = ["left","center"]; 
    group10.spacing = 10; 
    group10.margins = 0; 

var statictext17 = group10.add("statictext", undefined, undefined, {name: "statictext17"}); 
    statictext17.text = "Глубина:"; 

var ui_bag_deep_type2 = group10.add('edittext {properties: {name: "ui_bag_deep_type2"}}'); 
    ui_bag_deep_type2.text = "80";
    ui_bag_deep_type2.characters= 4;


var statictext18 = group10.add("statictext", undefined, undefined, {name: "statictext18"}); 
    statictext18.text = "мм"; 

// UI_ADDITIONAL_PANEL_TYPE2
// =========================
var ui_additional_panel_type2 = tab2.add("panel", undefined, undefined, {name: "ui_additional_panel_type2"}); 
    ui_additional_panel_type2.text = "Дополнительные параметры:"; 
    ui_additional_panel_type2.orientation = "column"; 
    ui_additional_panel_type2.alignChildren = ["right","center"]; 
    ui_additional_panel_type2.spacing = 10; 
    ui_additional_panel_type2.margins = 10; 
    ui_additional_panel_type2.alignment = ["fill","center"]; 
    
// GROUP11
// =======
var group11 = ui_additional_panel_type2.add("group", undefined, {name: "group11"}); 
    group11.orientation = "row"; 
    group11.alignChildren = ["left","center"]; 
    group11.spacing = 10; 
    group11.margins = 0; 

var statictext19 = group11.add("statictext", undefined, undefined, {name: "statictext19"}); 
    statictext19.text = "Клапан на склейку:"; 

var ui_bag_side_flap_type2 = group11.add('edittext {properties: {name: "ui_bag_side_flap_type2"}}'); 
    ui_bag_side_flap_type2.text = "12";
    ui_bag_side_flap_type2.characters= 4;


var statictext20 = group11.add("statictext", undefined, undefined, {name: "statictext20"}); 
    statictext20.text = "мм"; 

// GROUP12
// =======
var group12 = ui_additional_panel_type2.add("group", undefined, {name: "group12"}); 
    group12.orientation = "row"; 
    group12.alignChildren = ["left","center"]; 
    group12.spacing = 10; 
    group12.margins = 0; 

var statictext21 = group12.add("statictext", undefined, undefined, {name: "statictext21"}); 
    statictext21.text = "Клапан на дно:"; 

var ui_bag_bottom_type2 = group12.add('edittext {properties: {name: "ui_bag_bottom_type2"}}'); 
    ui_bag_bottom_type2.text = "55";
    ui_bag_bottom_type2.characters= 4;


var statictext22 = group12.add("statictext", undefined, undefined, {name: "statictext22"}); 
    statictext22.text = "мм"; 

// GROUP13
// =======
var group13 = ui_additional_panel_type2.add("group", undefined, {name: "group13"}); 
    group13.orientation = "row"; 
    group13.alignChildren = ["left","center"]; 
    group13.spacing = 10; 
    group13.margins = 0; 

var statictext23 = group13.add("statictext", undefined, undefined, {name: "statictext23"}); 
    statictext23.text = "Клапан на ручку:"; 

var ui_bag_top_flap_type2 = group13.add('edittext {properties: {name: "ui_bag_top_flap_type2"}}'); 
    ui_bag_top_flap_type2.text = "25"; 
    ui_bag_top_flap_type2.characters= 4;


var statictext24 = group13.add("statictext", undefined, undefined, {name: "statictext24"}); 
    statictext24.text = "мм"; 

// GROUP14
// =======
var group14 = ui_additional_panel_type2.add("group", undefined, {name: "group14"}); 
    group14.enabled = false; 
    group14.visible =false;
    group14.orientation = "row"; 
    group14.alignChildren = ["left","center"]; 
    group14.spacing = 10; 
    group14.margins = 0; 

var radiobutton1 = group14.add("radiobutton", undefined, undefined, {name: "radiobutton1"}); 
    radiobutton1.text = "Сборка слева"; 

var radiobutton2 = group14.add("radiobutton", undefined, undefined, {name: "radiobutton2"}); 
    radiobutton2.text = "Сборка справа"; 

// TAB2
// ====
var ui_warning_type2 = tab2.add("statictext", undefined, undefined, {name: "ui_warning_type2"}); 
    ui_warning_type2.visible = false;
    ui_warning_type2.text = "Неверный формат данных."; 

// UI_SIZES_GROUP_TYPE2
// ====================
var ui_sizes_group_type2 = tab2.add("panel", undefined, undefined, {name: "ui_sizes_group_type2"}); 
    ui_sizes_group_type2.text = "Формат лайнера"; 
    ui_sizes_group_type2.orientation = "column"; 
    ui_sizes_group_type2.alignChildren = ["right","center"]; 
    ui_sizes_group_type2.spacing = 10; 
    ui_sizes_group_type2.margins = 10; 

      ui_alert_page_width_type2_main = (+ui_bag_width_type2.text );
      ui_alert_page_height_type2_main = ( +ui_bag_top_flap_type2.text + +ui_bag_heigh_type2.text + +ui_bag_bottom_type2.text);
      ui_alert_page_width_type2_saide = (+ui_bag_deep_type2.text + +ui_bag_side_flap_type2.text+ +ui_bag_side_flap_type2.text);
      ui_alert_page_height_type2_saide = ( +ui_bag_top_flap_type2.text + +ui_bag_heigh_type2.text + +ui_bag_bottom_type2.text);

var ui_cut_size_type2 = ui_sizes_group_type2.add("statictext", undefined, undefined, {name: "ui_cut_size_type2"}); 
    ui_cut_size_type2.text = "Обрезной из 4х листов :  " + ui_alert_page_width_type2_main +" х " + ui_alert_page_height_type2_main +" и "+ui_alert_page_width_type2_saide+" х " +ui_alert_page_height_type2_saide+ " мм"; 
    ui_cut_size_type2.justify = "right"; 

var ui_not_cut_size_type2 = ui_sizes_group_type2.add("statictext", undefined, undefined, {name: "ui_not_cut_size_type2"}); 
    ui_not_cut_size_type2.text = "Дообрезной из 4х листов :  " +(+ ui_alert_page_width_type2_main + +bleed_size*2) +" х " + (+ui_alert_page_height_type2_main + +bleed_size*2) +" и "+ (+ui_alert_page_width_type2_saide + +bleed_size*2)+" х " + (+ui_alert_page_height_type2_saide+ +bleed_size*2)+ " мм"; 
    ui_not_cut_size_type2.justify = "right"; 

// UI_BUTTONS_TYPE2
// ================
var ui_buttons_type2 = tab2.add("group", undefined, {name: "ui_buttons_type2"}); 
    ui_buttons_type2.orientation = "row"; 
    ui_buttons_type2.alignChildren = ["center","center"]; 
    ui_buttons_type2.spacing = 10; 
    ui_buttons_type2.margins = 0; 

var ui_button_cancel_type2 = ui_buttons_type2.add("button"); 
    ui_button_cancel_type2.text = "Отмена"; 

var ui_button_runID_type2 = ui_buttons_type2.add("button", undefined, undefined, {name: "ui_button_runID_type2"}); 
    ui_button_runID_type2.text = "Шаблон в InDesing"; 

var ui_button_runPDF_type2 = ui_buttons_type2.add("button", undefined, undefined, {name: "ui_button_runPDF_type2"}); 
    ui_button_runPDF_type2.text = "Шаблон в PDF"; 
    
// логика UI
// TPANEL1
// =======
tpanel1.selection = tab1; 


// переброс значений между вкладками
ui_bag_width_type1.onChange = function(){
    ui_bag_width_type2.text = ui_bag_width_type1.text;
    }
ui_bag_width_type2.onChange = function(){
    ui_bag_width_type1.text = ui_bag_width_type2.text;
    }


ui_bag_heigh_type1.onChange = function(){
    ui_bag_heigh_type2.text = ui_bag_heigh_type1.text;
    }
ui_bag_heigh_type2.onChange = function(){
    ui_bag_heigh_type1.text = ui_bag_heigh_type2.text;
    }


ui_bag_deep_type1.onChange = function(){
    ui_bag_deep_type2.text = ui_bag_deep_type1.text;
    }
ui_bag_deep_type2.onChange = function(){
    ui_bag_deep_type1.text = ui_bag_deep_type2.text;
    }


ui_bag_side_flap_type1.onChange = function(){
    ui_bag_side_flap_type2.text = ui_bag_side_flap_type1.text;
    }
ui_bag_side_flap_type2.onChange = function(){
    ui_bag_side_flap_type2.text = ui_bag_side_flap_type1.text;
    }


ui_bag_bottom_type1.onChange = function(){
    ui_bag_bottom_type2.text = ui_bag_bottom_type1.text;
    }
ui_bag_bottom_type2.onChange = function(){
    ui_bag_bottom_type1.text = ui_bag_bottom_type2.text;
    }


ui_bag_top_flap_type1.onChange = function(){
    ui_bag_top_flap_type2.text = ui_bag_top_flap_type1.text;
    }
ui_bag_top_flap_type2.onChange = function(){
    ui_bag_top_flap_type1.text = ui_bag_top_flap_type2.text;
    }

//======================
// логика первой вкладки

ui_bag_deep_type1.onChanging = function () {
    ui_bag_bottom_type1.text = Number (ui_bag_deep_type1.text/2 + bottom_flap);
    ui_bag_bottom_type2.text = Number (ui_bag_deep_type1.text/2 + bottom_flap);
    ui_bag_bottom_type2.text = ui_bag_bottom_type1.text;
    }

 if (left_bind == true){
        ui_left_bind.value = true;
        } else {
             ui_left_bind.value = false;
             ui_right_bind.value = true;
            }
        
ui_left_bind.onClick= function(){
    left_bind = true;
            } 
ui_right_bind.onClick= function(){
      left_bind = false;
            }  
 // валидация полей  и размеры
 ui_bag_width_type1.onChanging = ui_bag_heigh_type1.onChanging = ui_bag_deep_type1.onChanging =ui_bag_side_flap_type1.onChanging = ui_bag_bottom_type1.onChanging =ui_bag_top_flap_type1.onChanging  = function () {
    var valid_ui_bag_width = /^[\d]+$/.test (ui_bag_width_type1.text);
    var valid_ui_bag_heigh = /^[\d]+$/.test (ui_bag_heigh_type1.text);
    var valid_ui_bag_deep = /^[\d]+$/.test (ui_bag_deep_type1.text);
    var valid_ui_bag_side_flap = /^[\d]+$/.test (ui_bag_side_flap_type1.text);
    var valid_ui_bag_bottom = /^[\d]+$/.test (ui_bag_bottom_type1.text);
    var valid_ui_bag_top_flap =/^[\d]+$/.test (ui_bag_top_flap_type1.text);
    valid_ui_bag_width && valid_ui_bag_heigh && valid_ui_bag_deep && valid_ui_bag_side_flap && valid_ui_bag_bottom && valid_ui_bag_top_flap ? ui_warning_type1.visible = false :  ui_warning_type1.visible = true;
    ui_warning_type1.visible =ui_buttons_type_1.enabled = valid_ui_bag_width && valid_ui_bag_heigh&& valid_ui_bag_deep && valid_ui_bag_side_flap && valid_ui_bag_bottom && valid_ui_bag_top_flap;
            if (ui_buttons_type_1.enabled == true){
                ui_warning_type1.visible = false;
                ui_sizes_group_type1.visible = true;
                tab2.enabled = true;
                }else{
                    ui_warning_type1.visible = true;
                    ui_sizes_group_type1.visible = false;
                    tab2.enabled = false;
                    }
      ui_alert_page_width_type2_main = (+ui_bag_width_type1.text );
      ui_alert_page_height_type2_main = ( +ui_bag_top_flap_type1.text + +ui_bag_heigh_type1.text + +ui_bag_bottom_type1.text);
      ui_alert_page_width_type2_saide = (+ui_bag_deep_type1.text + +ui_bag_side_flap_type1.text+ +ui_bag_side_flap_type1.text);
      ui_alert_page_height_type2_saide = ( +ui_bag_top_flap_type1.text + +ui_bag_heigh_type1.text + +ui_bag_bottom_type1.text);
      
      ui_cut_size_type2.text = "Обрезной из 4х листов :  " + ui_alert_page_width_type2_main +" х " + ui_alert_page_height_type2_main +" и "+ui_alert_page_width_type2_saide+" х " +ui_alert_page_height_type2_saide+ " мм"; 
      ui_not_cut_size_type2.text = "Дообрезной из 4х листов :  " +(+ ui_alert_page_width_type2_main + +bleed_size*2) +" х " + (+ui_alert_page_height_type2_main + +bleed_size*2) +" и "+ (+ui_alert_page_width_type2_saide + +bleed_size*2)+" х " + (+ui_alert_page_height_type2_saide+ +bleed_size*2)+ " мм"; 
                 
                
      ui_alert_page_width_type1 = (+ui_bag_width_type1.text + +ui_bag_deep_type1.text + +ui_bag_side_flap_type1.text);
      ui_alert_page_height_type1 = ( +ui_bag_top_flap_type1.text + +ui_bag_heigh_type1.text + +ui_bag_bottom_type1.text);
      ui_cut_size_type1.text = "Обрезной из 2х листов - "+ ui_alert_page_width_type1 + " х "+ ui_alert_page_height_type1+" мм"; 
      ui_not_cut_size_type1.text ="Добрезной из 2х листов - "+(ui_alert_page_width_type1 + +bleed_size*2) +  " х "+(+ui_alert_page_height_type1+ +bleed_size*2) +" мм"; 
      
         }    

 
 // логика второй вкладки

ui_bag_deep_type2.onChanging = function () {
    ui_bag_bottom_type2.text = Number (ui_bag_deep_type2.text/2 + bottom_flap);
    ui_bag_bottom_type1.text = Number (ui_bag_deep_type2.text/2 + bottom_flap);
    ui_bag_bottom_type1.text = ui_bag_bottom_type2.text;
    }

 // валидация полей  и размеры
  ui_bag_width_type2.onChanging = ui_bag_heigh_type2.onChanging = ui_bag_deep_type2.onChanging =ui_bag_side_flap_type2.onChanging = ui_bag_bottom_type2.onChanging =ui_bag_top_flap_type2.onChanging  = function () {
    var valid_ui_bag_width = /^[\d]+$/.test (ui_bag_width_type2.text);
    var valid_ui_bag_heigh = /^[\d]+$/.test (ui_bag_heigh_type2.text);
    var valid_ui_bag_deep = /^[\d]+$/.test (ui_bag_deep_type2.text);
    var valid_ui_bag_side_flap = /^[\d]+$/.test (ui_bag_side_flap_type2.text);
    var valid_ui_bag_bottom = /^[\d]+$/.test (ui_bag_bottom_type2.text);
    var valid_ui_bag_top_flap =/^[\d]+$/.test (ui_bag_top_flap_type2.text);
    valid_ui_bag_width && valid_ui_bag_heigh && valid_ui_bag_deep && valid_ui_bag_side_flap && valid_ui_bag_bottom && valid_ui_bag_top_flap ? ui_warning_type2.visible = false :  ui_warning_type2.visible = true;
    ui_warning_type2.visible =ui_buttons_type2.enabled = valid_ui_bag_width && valid_ui_bag_heigh&& valid_ui_bag_deep && valid_ui_bag_side_flap && valid_ui_bag_bottom && valid_ui_bag_top_flap;
            if (ui_buttons_type2.enabled == true){
                ui_warning_type2.visible = false;
                ui_sizes_group_type2.visible = true;
                tab1.enabled = true;
                }else{
                    ui_warning_type2.visible = true;
                    ui_sizes_group_type2.visible = false;
                    tab1.enabled = false;
                    }
                
      ui_alert_page_width_type2_main = (+ui_bag_width_type2.text );
      ui_alert_page_height_type2_main = ( +ui_bag_top_flap_type2.text + +ui_bag_heigh_type2.text + +ui_bag_bottom_type2.text);
      ui_alert_page_width_type2_saide = (+ui_bag_deep_type2.text + +ui_bag_side_flap_type2.text+ +ui_bag_side_flap_type2.text);
      ui_alert_page_height_type2_saide = ( +ui_bag_top_flap_type2.text + +ui_bag_heigh_type2.text + +ui_bag_bottom_type2.text);
      
      ui_cut_size_type2.text = "Обрезной из 4х листов :  " + ui_alert_page_width_type2_main +" х " + ui_alert_page_height_type2_main +" и "+ui_alert_page_width_type2_saide+" х " +ui_alert_page_height_type2_saide+ " мм"; 
      ui_not_cut_size_type2.text = "Дообрезной из 4х листов :  " +(+ ui_alert_page_width_type2_main + +bleed_size*2) +" х " + (+ui_alert_page_height_type2_main + +bleed_size*2) +" и "+ (+ui_alert_page_width_type2_saide + +bleed_size*2)+" х " + (+ui_alert_page_height_type2_saide+ +bleed_size*2)+ " мм"; 
      
      
      ui_alert_page_width_type1 = (+ui_bag_width_type2.text + +ui_bag_deep_type2.text + +ui_bag_side_flap_type2.text);
      ui_alert_page_height_type1 = ( +ui_bag_top_flap_type2.text + +ui_bag_heigh_type2.text + +ui_bag_bottom_type2.text);
      ui_cut_size_type1.text = "Обрезной из 2х листов - "+ ui_alert_page_width_type1 + " х "+ ui_alert_page_height_type1+" мм"; 
      ui_not_cut_size_type1.text ="Добрезной из 2х листов - "+(ui_alert_page_width_type1 + +bleed_size*2) +  " х "+(+ui_alert_page_height_type1+ +bleed_size*2) +" мм"; 
         }  
 
 // кнопки 
 
 ui_button_cancel_type1.onClick =  ui_button_cancel_type2.onClick = function(){
     dialog.close(0);
     
     }
 
 ui_button_runID_type1.onClick = function(){
     work_key = 1;
     
     work_bag_width = ui_bag_width_type1.text;
     work_bag_heigh = ui_bag_heigh_type1.text ;
     work_bag_bag_deep = ui_bag_deep_type1.text;
     work_bag_bottom = ui_bag_bottom_type1.text;
     work_top_flap = ui_bag_top_flap_type1.text;
     work_left_bind = ui_left_bind.value;
     
     dialog.close();
     }
 ui_button_runPDF_type1.onClick = function(){
     work_key = 2;
     
     work_bag_width = ui_bag_width_type1.text;
     work_bag_heigh = ui_bag_heigh_type1.text ;
     work_bag_bag_deep = ui_bag_deep_type1.text;
     work_bag_bottom = ui_bag_bottom_type1.text;
     work_top_flap = ui_bag_top_flap_type1.text;
     work_left_bind = ui_left_bind.value;
     dialog.close();
     }
 
 ui_button_runID_type2.onClick = function(){
     work_key = 3;   
     
     work_bag_width = ui_bag_width_type2.text;
     work_bag_heigh = ui_bag_heigh_type2.text ;
     work_bag_bag_deep = ui_bag_deep_type2.text;
     work_bag_bottom = ui_bag_bottom_type2.text;
     work_top_flap = ui_bag_top_flap_type2.text;
     work_left_bind = ui_left_bind.value;
     
     dialog.close();  
     }
 ui_button_runPDF_type2.onClick = function(){
     work_bag_width = ui_bag_width_type2.text;
     work_bag_heigh = ui_bag_heigh_type2.text ;
     work_bag_bag_deep = ui_bag_deep_type2.text;
     work_bag_bottom = ui_bag_bottom_type2.text;
     work_top_flap = ui_bag_top_flap_type2.text;
     work_left_bind = ui_left_bind.value;
     dialog.close();
     work_key = 4;     
     }

dialog.show();
}

function  create_template (width, height, deep, bottom, top_flap, left_bind, type){
if (type== "type1"){
var page_width =  (+ width + +deep + +side_flap);
var page_height = (+top_flap + +height + +bottom); 
    
var point_a_x = 0;
var point_a_y = 0;
var point_b_x = +side_flap;
var point_b_y = 0;
var point_c_x = +side_flap + +deep;
var point_c_y = 0;
var point_d_x = +side_flap + +deep + +width;
var point_d_y = 0;
var point_e_x = 0;
var point_e_y = +top_flap;
var point_f_x = +side_flap;
var point_f_y =  +top_flap;
var point_g_x = +side_flap + +deep;
var point_g_y = +top_flap;
var point_h_x = +side_flap + +deep + +width;
var point_h_y = +top_flap;
var point_i_x = 0;
var point_i_y = +height  + +top_flap;
var point_j_x = +side_flap;
var point_j_y = +height + +top_flap;
var point_k_x = +side_flap + +deep;
var point_k_y = +height  + +top_flap;
var point_l_x = +side_flap + +deep + +width;
var point_l_y = +height + +top_flap;
var point_m_x = +side_flap;
var point_m_y = +page_height;
var point_n_x = 0;
var point_n_y = +page_height;
var point_o_x = +side_flap + +deep;
var point_o_y = +page_height;
var point_p_x = +side_flap + +deep + +width;
var point_p_y = +page_height;

var myDoc = app.documents.add();
with (myDoc.viewPreferences){
    horizontalMeasurementUnits = MeasurementUnits.millimeters;
    verticalMeasurementUnits = MeasurementUnits.millimeters;
    strokeMeasurementUnits = MeasurementUnits.points;
    }
with(myDoc.documentPreferences){
    masterTextFrame = false; // - не создаем. Если masterTextFrame = true, то он будет создаваться
    facingPages = false; // при true документ будет создан разворотами, при false - из отдельных страниц
    pageWidth =  page_width + "mm";
    pageHeight = page_height + "mm";

    //pageOrientation = PageOrientation.portrait; // или pageOrientation = PageOrientation.portrait;
    pagesPerDocument = 1;
    startPageNumber = 1; // Этот параметр лежит в пределах 1-999999.
    intent = DocumentIntentOptions.PRINT_INTENT; 
    } 
myDoc.colors.add({name : "Marks", colorValue : mark_color , model : ColorModel.PROCESS ,space : ColorSpace.CMYK });
myDoc.layers.add({name: "Marks"});
myDoc.pages.item(0).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point_a_y, point_a_x, point_a_y, point_a_x + mark_whidth]});
myDoc.pages.item(0).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point_a_y, point_a_x, point_a_y + mark_whidth, point_a_x ]});
myDoc.pages.item(0).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point_b_y, point_b_x - mark_whidth, point_b_y, point_b_x + mark_whidth]});
myDoc.pages.item(0).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point_b_y, point_b_x , point_b_y + mark_whidth, point_b_x ]});
myDoc.pages.item(0).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point_c_y, point_c_x - mark_whidth, point_c_y, point_c_x + mark_whidth ]});
myDoc.pages.item(0).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point_c_y, point_c_x , point_c_y + mark_whidth, point_c_x ]});
myDoc.pages.item(0).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point_d_y, point_d_x - mark_whidth , point_d_y, point_d_x ]});
myDoc.pages.item(0).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point_d_y, point_d_x , point_d_y + mark_whidth, point_d_x ]});
myDoc.pages.item(0).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point_e_y  -  mark_whidth,  point_e_x , point_e_y + mark_whidth, point_e_x ]});
myDoc.pages.item(0).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point_e_y, point_e_x , point_e_y , point_e_x + mark_whidth]});
myDoc.pages.item(0).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point_f_y - mark_whidth, point_f_x , point_f_y + mark_whidth , point_f_x]});
myDoc.pages.item(0).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point_f_y, point_f_x - mark_whidth , point_f_y , point_f_x + mark_whidth]});
myDoc.pages.item(0).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point_g_y - mark_whidth, point_g_x , point_g_y + mark_whidth , point_g_x]});
myDoc.pages.item(0).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point_g_y, point_g_x - mark_whidth , point_g_y , point_g_x + mark_whidth]});
myDoc.pages.item(0).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point_h_y  - mark_whidth, point_h_x , point_h_y + mark_whidth , point_h_x]});
myDoc.pages.item(0).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point_h_y, point_h_x - mark_whidth , point_h_y , point_h_x ]});



myDoc.pages.item(0).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point_i_y  -  mark_whidth,  point_i_x , point_i_y + mark_whidth, point_i_x ]});
myDoc.pages.item(0).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point_i_y, point_i_x , point_i_y , point_i_x + mark_whidth]});
myDoc.pages.item(0).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point_j_y - mark_whidth, point_j_x , point_j_y + mark_whidth , point_j_x]});
myDoc.pages.item(0).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point_j_y, point_j_x - mark_whidth , point_j_y , point_j_x + mark_whidth]});
myDoc.pages.item(0).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point_k_y - mark_whidth, point_k_x , point_k_y + mark_whidth , point_k_x]});
myDoc.pages.item(0).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point_k_y, point_k_x - mark_whidth , point_k_y , point_k_x + mark_whidth]});
myDoc.pages.item(0).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point_l_y  - mark_whidth, point_l_x , point_l_y + mark_whidth , point_l_x]});
myDoc.pages.item(0).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point_l_y, point_l_x - mark_whidth , point_l_y , point_l_x]});
myDoc.pages.item(0).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point_m_y - mark_whidth, point_m_x , point_m_y, point_m_x]});
myDoc.pages.item(0).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point_m_y, point_m_x - mark_whidth,  point_m_y,  point_m_x + mark_whidth]})
myDoc.pages.item(0).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point_n_y - mark_whidth, point_n_x , point_n_y, point_n_x]});
myDoc.pages.item(0).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point_n_y, point_n_x,  point_n_y,  point_n_x + mark_whidth]});
myDoc.pages.item(0).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point_o_y - mark_whidth, point_o_x , point_o_y, point_o_x]});
myDoc.pages.item(0).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point_o_y, point_o_x - mark_whidth,  point_o_y,  point_o_x + mark_whidth]})
myDoc.pages.item(0).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point_p_y - mark_whidth,  point_p_x,  point_p_y, point_p_x]});
myDoc.pages.item(0).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point_p_y,  point_p_x  - mark_whidth,  point_p_y , point_p_x]});

myDoc.layers.item(0).locked = true;
myDoc.activeLayer = myDoc.layers.item(1);
myDoc.layers.item(1).name = "Print";

myDoc.documentPreferences.documentBleedBottomOffset = bleed_size + " mm";
myDoc.documentPreferences.documentBleedTopOffset = bleed_size + " mm";
myDoc.documentPreferences.documentBleedInsideOrLeftOffset = bleed_size + " mm";
myDoc.documentPreferences.documentBleedOutsideOrRightOffset = bleed_size + " mm";

        if (left_bind == false){
            app.activeDocument.layoutWindows[0].transformReferencePoint = AnchorPoint.CENTER_ANCHOR;
            var myPage =  app.activeDocument.pages.item(0);
            var myArray = new Array;
            app.activeDocument.layers.item(0).locked = false;

            for ( j = 0; j <myPage.graphicLines.length; j++){
            myArray.push(myPage.graphicLines.item(j));
            }
                var  mygroup =myPage.groups.add(myArray);
                app.selection = mygroup;
                mygroup.flip = 1752134266;
                app.activeDocument.layers.item(0).locked = true;
        }  
}
if (type== "type2"){
var page_width_1 =  +(+ width);
var page_height_1= +(+top_flap + +height + +bottom); 
var page_width_2 =  +(+side_flap + +deep + +side_flap);
var page_height_2= +(+top_flap + +height + +bottom); 

var point_a_x = 0;
var point_a_y = 0;
var point_n_x = 0;
var point_n_y = +page_height_1;
var point_d_x = +page_width_1;
var point_d_y = 0;
var point_e_x = 0;
var point_e_y = +top_flap;
var point_p_x = +page_width_1;
var point_p_y = +page_height_1;
var point_h_x = +page_width_1;
var point_h_y = +top_flap;
var point_l_x = page_width_1;
var point_l_y = +height + +top_flap;
var point_i_x = 0;
var point_i_y = +height  + +top_flap;

var point2_a_x = 0;
var point2_a_y = 0;
var point2_b_x = +side_flap;
var point2_b_y = 0;
var point2_c_x = +side_flap + +deep;
var point2_c_y = 0;
var point2_n_x = 0;
var point2_n_y = +page_height_2;

var point2_d_x = +page_width_2;
var point2_d_y = 0;
var point2_e_x = 0;
var point2_e_y = +top_flap;
var point2_f_x = +side_flap;
var point2_f_y =  +top_flap;
var point2_g_x = +side_flap + +deep;
var point2_g_y = +top_flap;

var point2_p_x = +page_width_2;
var point2_p_y = +page_height_2;
var point2_h_x = +page_width_2;
var point2_h_y = +top_flap;
var point2_l_x = page_width_2;
var point2_l_y = +height + +top_flap;
var point2_i_x = 0;
var point2_i_y = +height  + +top_flap;
var point2_j_x = +side_flap;
var point2_j_y = +height + +top_flap;
var point2_k_x = +side_flap + +deep;
var point2_k_y = +height  + +top_flap;
var point2_m_x = +side_flap;
var point2_m_y = +page_height_2;
var point2_o_x = +side_flap + +deep;
var point2_o_y = +page_height_2;

    
    var myDoc = app.documents.add();
with (myDoc.viewPreferences){
    horizontalMeasurementUnits = MeasurementUnits.millimeters;
    verticalMeasurementUnits = MeasurementUnits.millimeters;
    strokeMeasurementUnits = MeasurementUnits.points;
    }
with(myDoc.documentPreferences){
    masterTextFrame = false; // - не создаем. Если masterTextFrame = true, то он будет создаваться
    facingPages = false; // при true документ будет создан разворотами, при false - из отдельных страниц
    pageWidth =  page_width_1 + "mm";
    pageHeight = page_height_1 + "mm";

    //pageOrientation = PageOrientation.portrait; // или pageOrientation = PageOrientation.portrait;
    pagesPerDocument = 2;
    startPageNumber = 1; // Этот параметр лежит в пределах 1-999999.
    
    intent = DocumentIntentOptions.PRINT_INTENT; 
    } 

// измить фомат 2ой страницы
var matrix = app.transformationMatrices.add({
  horizontalScaleFactor: +((page_width_2*100/page_width_1)/100),
  verticalScaleFactor: 1,
});


	myDoc.pages.item(1).transform(
                                          CoordinateSpaces.INNER_COORDINATES,
                                          AnchorPoint.TOP_LEFT_ANCHOR,
                                          matrix,
                                          undefined,
                                          true
                                        );
                                        
//нариосать метки

    

myDoc.colors.add({name : "Marks", colorValue : mark_color , model : ColorModel.PROCESS ,space : ColorSpace.CMYK });
myDoc.layers.add({name: "Marks"});

myDoc.pages.item(0).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point_a_y, point_a_x, point_a_y, point_a_x + mark_whidth]});
myDoc.pages.item(0).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point_a_y, point_a_x, point_a_y + mark_whidth, point_a_x ]});
myDoc.pages.item(0).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point_n_y - mark_whidth, point_n_x , point_n_y, point_n_x]});
myDoc.pages.item(0).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point_n_y, point_n_x,  point_n_y,  point_n_x + mark_whidth]});
myDoc.pages.item(0).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point_p_y - mark_whidth,  point_p_x,  point_p_y, point_p_x]});
myDoc.pages.item(0).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point_p_y,  point_p_x  - mark_whidth,  point_p_y , point_p_x]});
myDoc.pages.item(0).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point_d_y, point_d_x - mark_whidth , point_d_y, point_d_x ]});
myDoc.pages.item(0).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point_d_y, point_d_x , point_d_y + mark_whidth, point_d_x ]});
myDoc.pages.item(0).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point_e_y  -  mark_whidth,  point_e_x , point_e_y + mark_whidth, point_e_x ]});
myDoc.pages.item(0).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point_e_y, point_e_x , point_e_y , point_e_x + mark_whidth]});
myDoc.pages.item(0).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point_h_y  - mark_whidth, point_h_x , point_h_y + mark_whidth , point_h_x]});
myDoc.pages.item(0).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point_h_y, point_h_x - mark_whidth , point_h_y , point_h_x ]});
myDoc.pages.item(0).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point_l_y  - mark_whidth, point_l_x , point_l_y + mark_whidth , point_l_x]});
myDoc.pages.item(0).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point_l_y, point_l_x - mark_whidth , point_l_y , point_l_x]});
myDoc.pages.item(0).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point_i_y  -  mark_whidth,  point_i_x , point_i_y + mark_whidth, point_i_x ]});
myDoc.pages.item(0).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point_i_y, point_i_x , point_i_y , point_i_x + mark_whidth]});


myDoc.pages.item(1).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point2_a_y, point2_a_x, point2_a_y, point2_a_x + mark_whidth]});
myDoc.pages.item(1).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point2_a_y, point2_a_x, point2_a_y + mark_whidth, point2_a_x ]});
myDoc.pages.item(1).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point2_b_y, point2_b_x - mark_whidth, point2_b_y, point2_b_x + mark_whidth]});
myDoc.pages.item(1).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point2_b_y, point2_b_x , point2_b_y + mark_whidth, point2_b_x ]});
myDoc.pages.item(1).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point2_c_y, point2_c_x - mark_whidth, point2_c_y, point2_c_x + mark_whidth ]});
myDoc.pages.item(1).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point2_c_y, point2_c_x , point2_c_y + mark_whidth, point2_c_x ]});
myDoc.pages.item(1).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point2_n_y - mark_whidth, point2_n_x , point2_n_y, point2_n_x]});
myDoc.pages.item(1).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point2_n_y, point2_n_x,  point2_n_y,  point2_n_x + mark_whidth]});
myDoc.pages.item(1).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point2_p_y - mark_whidth,  point2_p_x,  point2_p_y, point2_p_x]});
myDoc.pages.item(1).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point2_p_y,  point2_p_x  - mark_whidth,  point2_p_y , point2_p_x]});
myDoc.pages.item(1).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point2_d_y, point2_d_x - mark_whidth , point2_d_y, point2_d_x ]});
myDoc.pages.item(1).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point2_d_y, point2_d_x , point2_d_y + mark_whidth, point2_d_x ]});
myDoc.pages.item(1).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point2_e_y  -  mark_whidth,  point2_e_x , point2_e_y + mark_whidth, point2_e_x ]});
myDoc.pages.item(1).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point2_e_y, point2_e_x , point2_e_y , point2_e_x + mark_whidth]});
myDoc.pages.item(1).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point2_h_y  - mark_whidth, point2_h_x , point2_h_y + mark_whidth , point2_h_x]});
myDoc.pages.item(1).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point2_h_y, point2_h_x - mark_whidth , point2_h_y , point2_h_x ]});
myDoc.pages.item(1).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point2_l_y  - mark_whidth, point2_l_x , point2_l_y + mark_whidth , point2_l_x]});
myDoc.pages.item(1).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point2_l_y, point2_l_x - mark_whidth , point2_l_y , point2_l_x]});
myDoc.pages.item(1).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point2_i_y  -  mark_whidth,  point2_i_x , point2_i_y + mark_whidth, point2_i_x ]});
myDoc.pages.item(1).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point2_i_y, point2_i_x , point2_i_y , point2_i_x + mark_whidth]});
myDoc.pages.item(1).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point2_f_y - mark_whidth, point2_f_x , point2_f_y + mark_whidth , point2_f_x]});
myDoc.pages.item(1).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point2_f_y, point2_f_x - mark_whidth , point2_f_y , point2_f_x + mark_whidth]});
myDoc.pages.item(1).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point2_g_y - mark_whidth, point2_g_x , point2_g_y + mark_whidth , point2_g_x]});
myDoc.pages.item(1).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point2_g_y, point2_g_x - mark_whidth , point2_g_y , point2_g_x + mark_whidth]});
myDoc.pages.item(1).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point2_j_y - mark_whidth, point2_j_x , point2_j_y + mark_whidth , point2_j_x]});
myDoc.pages.item(1).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point2_j_y, point2_j_x - mark_whidth , point2_j_y , point2_j_x + mark_whidth]});
myDoc.pages.item(1).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point2_k_y - mark_whidth, point2_k_x , point2_k_y + mark_whidth , point2_k_x]});
myDoc.pages.item(1).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point2_k_y, point2_k_x - mark_whidth , point2_k_y , point2_k_x + mark_whidth]});
myDoc.pages.item(1).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point2_m_y - mark_whidth, point2_m_x , point2_m_y, point2_m_x]});
myDoc.pages.item(1).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point2_m_y, point2_m_x - mark_whidth,  point2_m_y,  point2_m_x + mark_whidth]});
myDoc.pages.item(1).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point2_o_y - mark_whidth, point2_o_x , point2_o_y, point2_o_x]});
myDoc.pages.item(1).graphicLines.add({strokeColor:"Marks", strokeWeight: mark_thickness, geometricBounds:[point2_o_y, point2_o_x - mark_whidth,  point2_o_y,  point2_o_x + mark_whidth]});

myDoc.layers.item(0).locked = true;
myDoc.activeLayer = myDoc.layers.item(1);
myDoc.layers.item(1).name = "Print";

myDoc.documentPreferences.documentBleedBottomOffset = bleed_size + " mm";
myDoc.documentPreferences.documentBleedTopOffset = bleed_size + " mm";
myDoc.documentPreferences.documentBleedInsideOrLeftOffset = bleed_size + " mm";
myDoc.documentPreferences.documentBleedOutsideOrRightOffset = bleed_size + " mm";
}
}
function create_pdf (width, height, deep, path_PDF_folder, type){
    
    
var name_PDF_type1 = "paper bag template " + width + "x" + height + "x" + deep;
var name_PDF_type2 = "paper bag template front " + width + "x" + height + "x" + deep;
var name_PDF_type3 = "paper bag template side " + width + "x" + height + "x" + deep;
    if (type == "type1"){
     var saveFile =  new File(path_PDF_folder +"/"+name_PDF_type1+".pdf");
     var myDocument = app.activeDocument;
       with(app.pdfExportPreferences){
           useDocumentBleedWithPDF = true;
           pageRange = "1";
           }
     myDocument.exportFile(ExportFormat.pdfType, saveFile, false);
     myDocument.close(SaveOptions.NO);
     }    
     if (type == "type2"){
     var saveFile =  new File(path_PDF_folder +"/"+name_PDF_type2+".pdf");
     var myDocument = app.activeDocument;
       with(app.pdfExportPreferences){
           useDocumentBleedWithPDF = true;
           pageRange ="1";
           }
     myDocument.exportFile(ExportFormat.pdfType, saveFile, false);
     var saveFile =  new File(path_PDF_folder +"/"+name_PDF_type3+".pdf");

          var myDocument = app.activeDocument;
       with(app.pdfExportPreferences){
           useDocumentBleedWithPDF = true;
           pageRange ="2";
           }
     myDocument.exportFile(ExportFormat.pdfType, saveFile, false);
     
     myDocument.close(SaveOptions.NO);
     }    
 
}