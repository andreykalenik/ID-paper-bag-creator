#target indesign
#targetengine "main"
#include config.jsxinc

var  key_create_PDF = false;
ui_window ();

function ui_window(ui_name){
var w = new Window ("dialog", 'ID paper bag creator', undefined, {closeButton: false});
    w.alignChildren = ['fill','fill']; 
//  ui  основные параметры
        var ui_main_group1 = w.add ("panel", undefined, "Размеры пакета:");
            ui_main_group1.alignChildren = 'right'; 
            var ui_group1 = ui_main_group1.add ("group");
                 ui_group1.alignChildren = ['fill','fill']; 
                 ui_group1.add('statictext {text: "Ширина: "} ');
                 ui_bag_width = ui_group1.add  ('edittext {characters: 4}' );   
                        ui_bag_width.text = width ;
                 ui_group1.add('statictext {text: "мм", characters: 3} ');
            var ui_group2 = ui_main_group1.add ("group");
                ui_group2.alignChildren = ['fill','fill']; 
                ui_group2.add('statictext {text: "Высота: "} ');
            var  ui_bag_height = ui_group2.add  ('edittext {characters: 4}', undefined,  );   
                        ui_bag_height.text = height;
                ui_group2.add('statictext {text: "мм ", characters: 3} ');   
            var ui_group3 = ui_main_group1.add ("group");
                ui_group3.alignChildren = ['fill','fill']; 
                ui_group3.add('statictext {text: "Глубина: "} ');
                var  ui_bag_deep= ui_group3.add  ('edittext {characters: 4}' ,undefined,  ); 
                        ui_bag_deep.text = deep;
                ui_group3.add('statictext {text: "мм", characters: 3} '); 
 // ui дополнительные параметрв 
        var ui_main_group2 = w.add ("panel", undefined, "Дополнительные параметры:");
            ui_main_group2.alignChildren = 'right'; 
              var ui_group4 = ui_main_group2.add ("group");
                ui_group4.alignChildren = ['fill','fill']; 
              ui_group4.add('statictext {text: "Клапан на склейку: "} ');
               var  ui_bag_side_flap= ui_group4.add  ('edittext {characters: 4}' ,undefined,  ); 
               ui_bag_side_flap.text = side_flap;
              ui_group4.add('statictext {text: "мм", characters: 3} '); 
              var ui_group5 = ui_main_group2.add ("group");
                ui_group5.alignChildren = ['fill','fill']; 
              ui_group5.add('statictext {text: "Клапан на дно: "} ');
               var  ui_bag_bottom= ui_group5.add  ('edittext {characters: 4}' ,undefined,  ); 
               ui_bag_bottom.text= ui_bag_deep.text/2 + bottom_flap;
              ui_group5.add('statictext {text: "мм", characters: 3} '); 
                var ui_group6 = ui_main_group2.add ("group");
                ui_group6.alignChildren = ['fill','fill']; 
              ui_group6.add('statictext {text: "Клапан на ручку: "} ');
               var ui_bag_top_flap= ui_group6.add  ('edittext {characters: 4}' ,undefined,  ); 
              ui_bag_top_flap.text= top_flap;
              ui_group6.add('statictext {text: "мм", characters: 3} ');  
              var ui_group7 = ui_main_group2.add ("group");
               ui_group7.alignment = "left"; 
               var ui_left_bind = ui_group7.add ("radiobutton", undefined, "Сборка слева");
               var ui_right_bind = ui_group7.add ("radiobutton", undefined, "Сборка справа");       
              var ui_group8 = ui_main_group2.add ("group");
                ui_group8.alignment = "left"; 
// ui  проверка на коректность    
var ui_alert_button = w.add ("group");
    ui_alert_button.alignChildren = ['fill','fill'];
    var statictext_ui_alert_button  = ui_alert_button.add ("button", undefined, "Формат лайнера"); 
var ui_text_area = w.add ("group");
    ui_text_area.alignChildren = ['fill','fill'];
    ui_text_area.visible = false;
    ui_text_area.visible = false;
    var ui_statictext_text_area = ui_text_area.add('statictext');
     ui_statictext_text_area.text = "Неверных формат данных." ;
// ui  кнопки     
var ui_buttons = w.add ("group");
    ui_buttons.alignChildren = ['fill','fill']; 
     var ui_button_close = ui_buttons.add ("button", undefined, "Отмена", {name: "cancel"});  
     var ui_button_run= ui_buttons.add ("button", undefined, "Шаблон в InDesign", {name: "ok"});
        ui_button_run.enabled=true;
var ui_buttons2 = w.add ("group");
    ui_buttons2.alignChildren = ['fill','fill'];         
             var ui_button_PDF= ui_buttons2.add ("button", undefined, "Шаблон в PDF");
 // logic, обработчики кнопок и полей ввода
statictext_ui_alert_button.onClick = function () {
    var ui_alert_page_width = (+ui_bag_width.text + +ui_bag_deep.text + +ui_bag_side_flap.text);
    var ui_alert_page_height = ( +ui_bag_top_flap.text + +ui_bag_height.text + +ui_bag_bottom.text);
    alert ("Обрезной - " + ui_alert_page_width + " x " + ui_alert_page_height + " мм \nДообрезной - " +  (ui_alert_page_width + bleed_size*2) + " x " + (ui_alert_page_height + bleed_size*2) + " мм", "Формат лайнера",undefined);
    }

ui_bag_width.onChanging = ui_bag_height.onChanging = ui_bag_deep.onChanging =ui_bag_side_flap.onChanging = ui_bag_bottom.onChanging =ui_bag_top_flap.onChanging  = function () {
    ui_bag_bottom.text = Math.ceil (Number (ui_bag_deep.text/2 + bottom_flap));
    var valid_ui_bag_width = /^[\d]+$/.test (ui_bag_width.text);
    var valid_ui_bag_height = /^[\d]+$/.test (ui_bag_height.text);
    var valid_ui_bag_deep = /^[\d]+$/.test (ui_bag_deep.text);
    var valid_ui_bag_side_flap = /^[\d]+$/.test (ui_bag_side_flap.text);
    var valid_ui_bag_bottom = /^[\d]+$/.test (ui_bag_bottom.text);
    var valid_ui_bag_top_flap =/^[\d]+$/.test (ui_bag_top_flap.text);
    
    valid_ui_bag_width && valid_ui_bag_height && valid_ui_bag_deep && valid_ui_bag_side_flap && valid_ui_bag_bottom && valid_ui_bag_top_flap ? ui_text_area.visible = false :  ui_text_area.visible = true;
    statictext_ui_alert_button.enabled =ui_button_run.enabled=ui_button_PDF.enabled = valid_ui_bag_width && valid_ui_bag_height&& valid_ui_bag_deep && valid_ui_bag_side_flap && valid_ui_bag_bottom && valid_ui_bag_top_flap;
            if (ui_button_run.enabled == true){
                ui_text_area.visible = false;
                }else{
                    ui_text_area.visible = true;
                    }
                
               
         }                   
 /*         
ui_bag_deep.onChanging = function () {
    ui_bag_bottom.text = Math.ceil (Number (ui_bag_deep.text/2 + bottom_flap));
    }
*/
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
  
  
ui_button_close.onClick = function () {
                w.close (0);
}  
ui_button_run.onClick = function () {                    
                w.close (1);           
}     
 ui_button_PDF.onClick = function () {
     key_create_PDF= true;
     name_PDF = "paper bag template " + ui_bag_width.text + "x" + ui_bag_height.text + "x" + ui_bag_deep.text;
                w.close ();
}  
                                    // create_template (width, height, deep, side_flap, bottom, top_flap, left_bind)
   if ( w.show ()==1 ) create_template (ui_bag_width.text, ui_bag_height.text, ui_bag_deep.text, ui_bag_bottom.text, ui_bag_top_flap.text, ui_left_bind.value);
   if (key_create_PDF==true) {create_template (ui_bag_width.text, ui_bag_height.text, ui_bag_deep.text, ui_bag_bottom.text, ui_bag_top_flap.text, ui_left_bind.value); create_pdf (width, height, deep, path_PDF_folder, name_PDF);}
       

}

function  create_template ( width, height, deep, bottom, top_flap, left_bind){

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

function create_pdf (width, height, deep, path_PDF_folder, name_PDF){

     var saveFile =  new File(path_PDF_folder +"/"+name_PDF+".pdf");
     var myDocument = app.activeDocument;
       with(app.pdfExportPreferences){
           useDocumentBleedWithPDF = true;
           }
     myDocument.exportFile(ExportFormat.pdfType, saveFile, false);
     myDocument.close(SaveOptions.NO);    
}